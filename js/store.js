// ============================================================
//  Хранилище заказов: Firebase (боевой режим) или localStorage (тест).
//  Одинаковый API для сайта и для приложения оператора.
// ============================================================
const FB_VER = "10.12.2";
const cfg = window.FIREBASE_CONFIG || {};
export const LIVE = !!cfg.apiKey;

export const STATUSES = ["new", "accepted", "cooking", "delivery", "done", "cancelled"];

let fb = null; // {db, auth, m: firestore module, a: auth module}

async function loadFirebase() {
  if (fb) return fb;
  const base = `https://www.gstatic.com/firebasejs/${FB_VER}/`;
  const [app, m, a] = await Promise.all([
    import(base + "firebase-app.js"),
    import(base + "firebase-firestore.js"),
    import(base + "firebase-auth.js"),
  ]);
  const inst = app.initializeApp(cfg);
  fb = { db: m.getFirestore(inst), auth: a.getAuth(inst), m, a };
  return fb;
}

// ---------- тестовый режим (localStorage) ----------
const LS = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} emit(k); },
};
const listeners = {};
function emit(k) { (listeners[k] || []).forEach((f) => f()); }
function on(k, f) {
  (listeners[k] = listeners[k] || []).push(f);
  const h = (e) => { if (e.key === k) f(); };
  addEventListener("storage", h);
  return () => { listeners[k] = listeners[k].filter((x) => x !== f); removeEventListener("storage", h); };
}
const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

// ---------- заказы ----------
export async function createOrder(o) {
  const order = {
    items: o.items, subtotal: o.subtotal, deliveryFee: o.deliveryFee, total: o.total,
    mode: o.mode, zone: o.zone || "", name: o.name, phone: o.phone, addr: o.addr || "", comment: o.comment || "",
    lang: o.lang, status: "new",
  };
  if (!LIVE) {
    const n = LS.get("lg_counter", 0) + 1; LS.set("lg_counter", n);
    const id = uid(), now = Date.now();
    const all = LS.get("lg_orders", {});
    all[id] = { ...order, id, num: n, createdAt: now, updatedAt: now };
    LS.set("lg_orders", all);
    return { id, num: n };
  }
  const { db, m } = await loadFirebase();
  const counter = m.doc(db, "meta", "counter");
  const ref = m.doc(m.collection(db, "orders"));
  const num = await m.runTransaction(db, async (tx) => {
    const snap = await tx.get(counter);
    const n = (snap.exists() ? snap.data().n : 0) + 1;
    tx.set(counter, { n });
    tx.set(ref, { ...order, num: n, createdAt: m.serverTimestamp(), updatedAt: m.serverTimestamp() });
    return n;
  });
  return { id: ref.id, num };
}

const tsToMs = (t) => (t && t.toMillis ? t.toMillis() : t || Date.now());
const norm = (id, d) => ({ ...d, id, createdAt: tsToMs(d.createdAt), updatedAt: tsToMs(d.updatedAt) });

// Клиент следит за своим заказом
export function watchOrder(id, cb) {
  if (!LIVE) {
    const f = () => { const o = LS.get("lg_orders", {})[id]; cb(o || null); };
    f(); return on("lg_orders", f);
  }
  let off = () => {};
  loadFirebase().then(({ db, m }) => {
    off = m.onSnapshot(m.doc(db, "orders", id), (s) => cb(s.exists() ? norm(s.id, s.data()) : null), () => cb(null));
  });
  return () => off();
}

// Оператор: все заказы с указанного момента, новые сверху
export function watchOrders(sinceMs, cb, onErr) {
  if (!LIVE) {
    const f = () => cb(Object.values(LS.get("lg_orders", {})).filter((o) => o.createdAt >= sinceMs).sort((a, b) => b.createdAt - a.createdAt));
    f(); return on("lg_orders", f);
  }
  let off = () => {};
  loadFirebase().then(({ db, m }) => {
    const q = m.query(m.collection(db, "orders"), m.where("createdAt", ">=", m.Timestamp.fromMillis(sinceMs)), m.orderBy("createdAt", "desc"));
    off = m.onSnapshot(q, (s) => cb(s.docs.map((d) => norm(d.id, d.data()))), (e) => onErr && onErr(e));
  });
  return () => off();
}

export async function setStatus(id, status) {
  if (!LIVE) {
    const all = LS.get("lg_orders", {});
    if (all[id]) { all[id].status = status; all[id].updatedAt = Date.now(); LS.set("lg_orders", all); }
    return;
  }
  const { db, m } = await loadFirebase();
  await m.updateDoc(m.doc(db, "orders", id), { status, updatedAt: m.serverTimestamp() });
}

// ---------- настройки (приём заказов, стоп-лист) ----------
const DEF = { open: true, stop: [] };
export function watchSettings(cb) {
  if (!LIVE) { const f = () => cb({ ...DEF, ...LS.get("lg_settings", {}) }); f(); return on("lg_settings", f); }
  let off = () => {};
  loadFirebase().then(({ db, m }) => {
    off = m.onSnapshot(m.doc(db, "meta", "settings"), (s) => cb({ ...DEF, ...(s.exists() ? s.data() : {}) }), () => cb(DEF));
  });
  return () => off();
}
export async function setSettings(patch) {
  if (!LIVE) { LS.set("lg_settings", { ...DEF, ...LS.get("lg_settings", {}), ...patch }); return; }
  const { db, m } = await loadFirebase();
  await m.setDoc(m.doc(db, "meta", "settings"), patch, { merge: true });
}

// ---------- вход оператора ----------
export function onAuth(cb) {
  if (!LIVE) { const f = () => cb(LS.get("lg_auth", null)); f(); return on("lg_auth", f); }
  let off = () => {};
  loadFirebase().then(({ auth, a }) => { off = a.onAuthStateChanged(auth, (u) => cb(u ? { email: u.email } : null)); });
  return () => off();
}
export async function login(email, pass) {
  if (!LIVE) { if (!email || !pass) throw new Error("empty"); LS.set("lg_auth", { email }); return; }
  const { auth, a } = await loadFirebase();
  await a.setPersistence(auth, a.browserLocalPersistence);
  await a.signInWithEmailAndPassword(auth, email, pass);
}
export async function logout() {
  if (!LIVE) { LS.set("lg_auth", null); return; }
  const { auth, a } = await loadFirebase();
  await a.signOut(auth);
}
