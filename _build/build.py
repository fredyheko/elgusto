#!/usr/bin/env python3
"""Собирает SEO-версию сайта L'Gusto: / (RO) и /ru/ (RU) с готовым HTML,
robots.txt и sitemap.xml. Запуск: python3 build.py <папка_сайта> [SITE_URL]"""
import sys, json, subprocess, html, os, re, threading, http.server, functools, socketserver
OUT = sys.argv[1]
SITE = (sys.argv[2] if len(sys.argv) > 2 else "https://elgusto.onrender.com").rstrip("/")
TPL = open(os.path.join(os.path.dirname(__file__), "template.html"), encoding="utf-8").read()

cfg = subprocess.run(["node", "-e", "global.window={};require(process.argv[1]);console.log(JSON.stringify({R:window.RESTAURANT,C:window.CATEGORIES,M:window.MENU}))",
                      os.path.abspath(os.path.join(OUT, "js/config.js"))], capture_output=True, text=True, check=True).stdout
CFG = json.loads(cfg); R, CATS, MENU = CFG["R"], CFG["C"], CFG["M"]
tel = "+373" + re.sub(r"\D", "", R["phone"]).lstrip("0")
h0, h1 = R["hours"][0]
prices = [m["price"] for m in MENU if m["cat"] != "sosuri"]

PAGES = {
 "ro": dict(path="", B="", url=SITE + "/", locale="ro_MD",
   title="L'Gusto Edineț — burgeri, kebab, sushi, wok, livrare",
   desc=f"Burgeri, kebab, sushi și bucătărie asiatică în Edineț. Comandă online: livrare gratuită de la {R['delivery']['city']['freeFrom']} lei, zilnic {h0}–{h1}. Ridicare personală. Tel. {R['phone']}.",
   call="Sună la L'Gusto", nos=f"Pentru comandă online activați JavaScript sau sunați: <a href=\"tel:{tel}\">{R['phone']}</a>"),
 "ru": dict(path="ru/", B="../", url=SITE + "/ru/", locale="ru_MD",
   title="L'Gusto Единцы — бургеры, кебаб, суши, вок, доставка",
   desc=f"Бургеры, кебабы, суши и азиатская кухня в Единцах. Заказ онлайн: бесплатная доставка от {R['delivery']['city']['freeFrom']} лей, ежедневно {h0}–{h1}, есть самовывоз. Тел. {R['phone']}.",
   call="Позвонить в L'Gusto", nos=f"Для онлайн-заказа включите JavaScript или позвоните: <a href=\"tel:{tel}\">{R['phone']}</a>"),
}

def ld(lang):
    p = PAGES[lang]
    menu = {"@type": "Menu", "name": "Meniu L'Gusto" if lang == "ro" else "Меню L'Gusto", "inLanguage": lang,
            "hasMenuSection": [{"@type": "MenuSection", "name": c[lang],
                "hasMenuItem": [dict({"@type": "MenuItem", "name": m["name"],
                    "offers": {"@type": "Offer", "price": m["price"], "priceCurrency": "MDL"}},
                    **({"description": m[lang]} if m[lang] else {}),
                    **({"image": SITE + "/" + m["img"]} if m.get("img") else {}))
                  for m in MENU if m["cat"] == c["id"]]} for c in CATS]}
    return {"@context": "https://schema.org", "@type": ["Restaurant", "FastFoodRestaurant"], "@id": SITE + "/#restaurant",
        "name": "L'Gusto", "alternateName": "L'Gusto express food", "url": p["url"], "inLanguage": lang,
        "image": SITE + "/img/og.jpg", "logo": SITE + "/icons/icon-512.png", "telephone": tel,
        "priceRange": f"{min(prices)}–{max(prices)} MDL", "currenciesAccepted": "MDL",
        "servesCuisine": ["Burgers", "Kebab", "Sushi", "Asian", "Fast food"], "acceptsReservations": False,
        "address": {"@type": "PostalAddress", "streetAddress": "str. Gagarin 39", "addressLocality": "Edineț", "addressRegion": "Edineț", "addressCountry": "MD"},
        "areaServed": {"@type": "City", "name": "Edineț"},
        "openingHoursSpecification": [{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": h0, "closes": h1}],
        "hasMenu": menu,
        "potentialAction": {"@type": "OrderAction", "target": {"@type": "EntryPoint", "urlTemplate": p["url"] + "#menu",
            "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]},
            "deliveryMethod": ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet", "http://purl.org/goodrelations/v1#DeliveryModePickUp"]}}

def head(lang):
    p = PAGES[lang]; o = "ru" if lang == "ro" else "ro"; e = html.escape
    B = p["B"]
    return "\n".join([
     '<meta charset="UTF-8">',
     '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
     '<meta name="theme-color" content="#1F1E1D">',
     f'<title>{e(p["title"])}</title>',
     f'<meta name="description" content="{e(p["desc"])}">',
     '<meta name="robots" content="index, follow, max-image-preview:large">',
     f'<link rel="canonical" href="{p["url"]}">',
     f'<link rel="alternate" hreflang="ro" href="{PAGES["ro"]["url"]}">',
     f'<link rel="alternate" hreflang="ru" href="{PAGES["ru"]["url"]}">',
     f'<link rel="alternate" hreflang="x-default" href="{PAGES["ro"]["url"]}">',
     '<meta property="og:type" content="restaurant">',
     '<meta property="og:site_name" content="L\'Gusto express food">',
     f'<meta property="og:title" content="{e(p["title"])}">',
     f'<meta property="og:description" content="{e(p["desc"])}">',
     f'<meta property="og:url" content="{p["url"]}">',
     f'<meta property="og:image" content="{SITE}/img/og.jpg">',
     '<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">',
     '<meta property="og:image:alt" content="L\'Gusto express food">',
     f'<meta property="og:locale" content="{p["locale"]}"><meta property="og:locale:alternate" content="{PAGES[o]["locale"]}">',
     '<meta name="twitter:card" content="summary_large_image">',
     f'<meta name="twitter:title" content="{e(p["title"])}">',
     f'<meta name="twitter:description" content="{e(p["desc"])}">',
     f'<meta name="twitter:image" content="{SITE}/img/og.jpg">',
     f'<link rel="manifest" href="{B}manifest.json">',
     f'<link rel="icon" href="{B}icons/icon-192.png">',
     f'<link rel="apple-touch-icon" href="{B}icons/apple-touch-icon.png">',
     f'<link rel="preload" href="{B}img/logo-new.webp" as="image" type="image/webp">',
     '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
     '<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&family=Unbounded:wght@700;800;900&display=swap">',
     '<link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&family=Unbounded:wght@700;800;900&display=swap" rel="stylesheet">',
     f'<link rel="stylesheet" href="{B}css/site.css">',
     '<script type="application/ld+json">' + json.dumps(ld(lang), ensure_ascii=False).replace("</", "<\\/") + '</script>'])

def fill(lang):
    p = PAGES[lang]
    s = TPL.replace("{{HEAD}}", head(lang)).replace("{{LANG}}", lang).replace("{{B}}", p["B"]).replace("{{BSTORE}}", p["B"] or "./")
    s = s.replace("{{HOME}}", "./" if lang == "ro" else "./").replace("{{RO_HREF}}", "./" if lang == "ro" else "../").replace("{{RU_HREF}}", "ru/" if lang == "ro" else "./")
    s = s.replace("{{CALL_LABEL}}", p["call"])
    return s

# 1) черновые страницы
for lang, p in PAGES.items():
    os.makedirs(os.path.join(OUT, p["path"]), exist_ok=True)
    open(os.path.join(OUT, p["path"], "index.html"), "w", encoding="utf-8").write(fill(lang))

# 2) пререндер в браузере: забираем готовый DOM
Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=OUT)
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
Handler = functools.partial(Q, directory=OUT)
srv = socketserver.TCPServer(("127.0.0.1", 0), Handler); port = srv.server_address[1]
threading.Thread(target=srv.serve_forever, daemon=True).start()
from playwright.sync_api import sync_playwright
CLEAN = """() => {
  const cb = document.getElementById('closedBar'); cb.className = 'closed'; cb.innerHTML = '';
  document.getElementById('cartbtn').removeAttribute('style');
  document.getElementById('lastord').className = 'lastord';
  const ad = document.getElementById('addon'); if (ad) { ad.className = 'addon'; ad.innerHTML = ''; }
  document.getElementById('ov').className = 'ov'; document.getElementById('sheet').innerHTML = '';
  document.body.classList.remove('lock');
  document.getElementById('tabs').removeAttribute('style');
  document.querySelectorAll('.flyer').forEach(e => e.remove());
  return '<!DOCTYPE html>\\n' + document.documentElement.outerHTML;
}"""
with sync_playwright() as pw:
    b = pw.chromium.launch()
    for lang, p in PAGES.items():
        pg = b.new_page(viewport={"width": 390, "height": 844})
        pg.goto(f"http://127.0.0.1:{port}/{p['path']}"); pg.wait_for_timeout(1500)
        out = pg.evaluate(CLEAN).replace("<!--NOSCRIPT-->", f'<noscript><div class="closed show">{p["nos"]}</div></noscript>')
        open(os.path.join(OUT, p["path"], "index.html"), "w", encoding="utf-8").write(out)
        pg.close()
    b.close()
srv.shutdown()

# 3) robots.txt и sitemap.xml
open(os.path.join(OUT, "robots.txt"), "w").write(f"User-agent: *\nAllow: /\nDisallow: /operator/\nDisallow: /_build/\n\nSitemap: {SITE}/sitemap.xml\n")
alts = "".join(f'\n    <xhtml:link rel="alternate" hreflang="{l}" href="{PAGES[l]["url"]}"/>' for l in PAGES) + f'\n    <xhtml:link rel="alternate" hreflang="x-default" href="{PAGES["ro"]["url"]}"/>'
urls = "".join(f'\n  <url>\n    <loc>{p["url"]}</loc>{alts}\n    <changefreq>weekly</changefreq>\n    <priority>{"1.0" if l == "ro" else "0.9"}</priority>\n  </url>' for l, p in PAGES.items())
open(os.path.join(OUT, "sitemap.xml"), "w").write(f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">{urls}\n</urlset>\n')
print("OK", SITE)
