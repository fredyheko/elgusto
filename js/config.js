// ============================================================
//  L'Gusto — настройки сайта. Всё, что меняется, — здесь.
// ============================================================

// 1) Firebase (база заказов). Вставь сюда данные из консоли Firebase:
//    Project settings → Your apps → Web app → firebaseConfig.
//    Пока apiKey пустой, сайт работает в ТЕСТОВОМ режиме:
//    заказы хранятся только в этом браузере.
window.FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// 2) Данные ресторана (RO / RU)
window.RESTAURANT = {
  name: "L'Gusto",
  phone: "060 46 50 59",     // предзаказ и доставка
  address: { ro: "mun. Edineț, str. Gagarin 39", ru: "мун. Единцы, ул. Гагарина 39" },
  city: { ro: "Edineț", ru: "Единцы" },
  // Часы работы: [открытие, закрытие] для Пн..Вс (0 = Пн). null = выходной.
  hours: [["08:00","21:00"],["08:00","21:00"],["08:00","21:00"],["08:00","21:00"],["08:00","21:00"],["08:00","21:00"],["08:00","21:00"]],
  delivery: {
    // По городу Единцы: бесплатно при заказе от 400 лей.
    // Заказ меньше 400 лей тоже доставляем, но платно:
    // feeBelow = цена доставки в лей, или null — точную цену подтверждает оператор.
    city:  { freeFrom: 400, feeBelow: 50 },
    // Другие сёла: доставка от 50 лей, точную цену оператор подтверждает по телефону.
    other: { minOrder: 0, feeFrom: 50 },
    time: { ro: "", ru: "" }  // например "45–60 min" / "45–60 мин" (пусто = не показывать)
  },
  instagram: "", facebook: "", tiktok: ""
};

// 3) Меню. price — лей, g — граммы (текст, например "250/50"; пусто — не показывать), img — фото в папке img/
window.CATEGORIES = [
 {
  "id": "kebab",
  "icon": "🌯",
  "ro": "Kebab și lavaș",
  "ru": "Кебаб и лаваш"
 },
 {
  "id": "aripi",
  "icon": "🍗",
  "ro": "Aripioare",
  "ru": "Крылышки"
 },
 {
  "id": "burger",
  "icon": "🍔",
  "ro": "Burgeri",
  "ru": "Бургеры"
 },
 {
  "id": "gustari",
  "icon": "🍟",
  "ro": "Gustări",
  "ru": "Закуски"
 },
 {
  "id": "salate",
  "icon": "🥗",
  "ro": "Salate",
  "ru": "Салаты"
 },
 {
  "id": "rulouri",
  "icon": "🍣",
  "ro": "Rulouri sushi",
  "ru": "Суши-роллы"
 },
 {
  "id": "maki",
  "icon": "🍙",
  "ro": "Maki",
  "ru": "Маки"
 },
 {
  "id": "seturi",
  "icon": "🍱",
  "ro": "Seturi sushi",
  "ru": "Сеты суши"
 },
 {
  "id": "wok",
  "icon": "🥢",
  "ro": "Wok",
  "ru": "Вок"
 },
 {
  "id": "supe",
  "icon": "🍜",
  "ro": "Supe asiatice",
  "ru": "Азиатские супы"
 },
 {
  "id": "poke",
  "icon": "🥗",
  "ro": "Poke",
  "ru": "Поке"
 },
 {
  "id": "bauturi",
  "icon": "🍹",
  "ro": "Băuturi",
  "ru": "Напитки"
 },
 {
  "id": "sosuri",
  "hidden": true,
  "icon": "🥫",
  "ro": "Sosuri și adaosuri",
  "ru": "Соусы и добавки"
 }
];

window.MENU = [
 {
  "id": "kebab-pui",
  "cat": "kebab",
  "name": "Kebab pui",
  "ro": "carne de pui, cartofi pai, salată, lavaș, roșii, sos de usturoi, castraveți murați, sos tzatziki",
  "ru": "курица, картофель пай, салат, лаваш, помидоры, чесночный соус, маринованные огурцы, соус цацики",
  "g": "400",
  "price": 75,
  "img": "img/kebab-pui.webp?v=3"
 },
 {
  "id": "kebab-lgusto",
  "cat": "kebab",
  "name": "Kebab „L'Gusto”",
  "ro": "lavaș, pârjoală din carne de vită/porc, cartofi pai, roșii, castraveți murați, sos de usturoi, ceapă roșie, sos tzatziki, sos B.B.Q.",
  "ru": "лаваш, котлета из говядины/свинины, картофель пай, помидоры, маринованные огурцы, чесночный соус, красный лук, соус цацики, соус барбекю",
  "g": "460",
  "price": 85,
  "img": "img/kebab-lgusto.webp?v=3"
 },
 {
  "id": "lavas-cascaval",
  "cat": "kebab",
  "name": "Lavaș cu cașcaval",
  "ro": "cașcaval mozzarella, sos cu usturoi, verdeață, lavaș, roșii",
  "ru": "сыр моцарелла, чесночный соус, зелень, лаваш, помидоры",
  "g": "160",
  "price": 55,
  "img": "img/lavas-cascaval.webp?v=3"
 },
 {
  "id": "aripi-crispy",
  "cat": "aripi",
  "name": "Aripi de pui crispy 🌶️",
  "ro": "aripi de pui, sos cu usturoi, pesmeți, clear",
  "ru": "куриные крылышки, чесночный соус, панировка, кляр",
  "g": "250/50",
  "price": 79,
  "img": "img/aripi-crispy.webp?v=3"
 },
 {
  "id": "aripi-fries",
  "cat": "aripi",
  "name": "Aripi fries",
  "ro": "aripi de pui, sos cu usturoi, ulei, sare",
  "ru": "куриные крылышки, чесночный соус, масло, соль",
  "g": "200/50",
  "price": 79,
  "img": "img/aripi-fries.webp?v=3"
 },
 {
  "id": "aripi-asiatic",
  "cat": "aripi",
  "name": "Aripi asiatic 🌶️🌶️",
  "ro": "aripi de pui, sos asiatic, sos picant, susan, ulei",
  "ru": "куриные крылышки, азиатский соус, острый соус, кунжут, масло",
  "g": "250",
  "price": 79,
  "img": "img/aripi-asiatic.webp?v=3"
 },
 {
  "id": "aripi-bbq",
  "cat": "aripi",
  "name": "Aripi B.B.Q.",
  "ro": "aripi de pui, sos B.B.Q., ulei",
  "ru": "куриные крылышки, соус барбекю, масло",
  "g": "250",
  "price": 79,
  "img": "img/aripi-bbq.webp?v=3"
 },
 {
  "id": "cheeseburger-classic",
  "cat": "burger",
  "name": "Cheeseburger classic",
  "ro": "pârjoală vită/porc, cașcaval cheddar, castraveți murați, chiflă, salată iceberg, sos cheddar, ceapă roșie, sos burger, roșii",
  "ru": "котлета говядина/свинина, сыр чеддер, маринованные огурцы, булочка, салат айсберг, соус чеддер, красный лук, бургерный соус, помидоры",
  "g": "300",
  "price": 75,
  "img": "img/cheeseburger-classic.webp?v=3"
 },
 {
  "id": "chicken-cheeseburger",
  "cat": "burger",
  "name": "Chicken cheeseburger",
  "ro": "pârjoală de pui, sos burger, cașcaval cheddar, chiflă, castraveți murați, salată iceberg, sos cheddar, ceapă roșie, roșii",
  "ru": "куриная котлета, бургерный соус, сыр чеддер, булочка, маринованные огурцы, салат айсберг, соус чеддер, красный лук, помидоры",
  "g": "300",
  "price": 70,
  "img": "img/chicken-cheeseburger.webp?v=3"
 },
 {
  "id": "big-double-cheeseburger",
  "cat": "burger",
  "name": "Big double cheeseburger",
  "ro": "ceapă caramelizată, pârjoale porc/vită, cașcaval cheddar, salată iceberg, bacon, chiflă, castraveți murați, sos cheddar, sos burger, ceapă roșie, roșii",
  "ru": "карамелизированный лук, котлеты свинина/говядина, сыр чеддер, салат айсберг, бекон, булочка, маринованные огурцы, соус чеддер, бургерный соус, красный лук, помидоры",
  "g": "450",
  "price": 100,
  "img": "img/big-double-cheeseburger.webp?v=3"
 },
 {
  "id": "double-cheeseburger-lgusto",
  "cat": "burger",
  "name": "Double cheeseburger L'Gusto",
  "ro": "cașcaval cheddar, pârjoală de vită, pârjoală de pui, ceapă roșie, castraveți murați, chiflă, ou de prepeliță, salată iceberg, sos cheddar, sos burger, roșii",
  "ru": "сыр чеддер, говяжья котлета, куриная котлета, красный лук, маринованные огурцы, булочка, перепелиное яйцо, салат айсберг, соус чеддер, бургерный соус, помидоры",
  "g": "460",
  "price": 115,
  "img": "img/double-cheeseburger-lgusto.webp?v=3"
 },
 {
  "id": "burger-classic",
  "cat": "burger",
  "name": "Burger classic",
  "ro": "pârjoală de vită/porc, castraveți murați, chiflă, salată iceberg, ceapă roșie, sos burger, roșii",
  "ru": "котлета говядина/свинина, маринованные огурцы, булочка, салат айсберг, красный лук, бургерный соус, помидоры",
  "g": "280",
  "price": 70,
  "img": "img/burger-classic.webp?v=3"
 },
 {
  "id": "crispy-burger",
  "cat": "burger",
  "name": "Crispy burger",
  "ro": "pârjoală de pui, sos burger, pesmeți, chiflă, clear, castraveți murați, salată iceberg, lola verde, roșii",
  "ru": "куриная котлета, бургерный соус, панировка, булочка, кляр, маринованные огурцы, салат айсберг, лолло верде, помидоры",
  "g": "300",
  "price": 75,
  "img": "img/crispy-burger.webp?v=3"
 },
 {
  "id": "creveti-tempura",
  "cat": "gustari",
  "name": "Creveți tempura",
  "ro": "creveți, pesmeți, clear, sos cu usturoi",
  "ru": "креветки, панировка, кляр, чесночный соус",
  "g": "150/50",
  "price": 100,
  "img": "img/creveti-tempura.webp?v=3"
 },
 {
  "id": "chicken-nuggets",
  "cat": "gustari",
  "name": "Chicken nuggets",
  "ro": "file de pui, pesmeți, clear, sos de usturoi",
  "ru": "куриное филе, панировка, кляр, чесночный соус",
  "g": "200/50",
  "price": 60,
  "img": "img/chicken-nuggets.webp?v=3"
 },
 {
  "id": "inele-calamar",
  "cat": "gustari",
  "name": "Inele de calamar",
  "ro": "inele de calamari, pesmeți, clear, sos de usturoi",
  "ru": "кольца кальмара, панировка, кляр, чесночный соус",
  "g": "150/50",
  "price": 75,
  "img": "img/inele-calamar.webp?v=3"
 },
 {
  "id": "cartofi-wedges",
  "cat": "gustari",
  "name": "Cartofi wedges",
  "ro": "cartofi de casă, sare, ulei, sos de usturoi",
  "ru": "картофель по-домашнему, соль, масло, чесночный соус",
  "g": "150/50",
  "price": 40,
  "img": "img/cartofi-wedges.webp?v=3"
 },
 {
  "id": "fries",
  "cat": "gustari",
  "name": "Fries",
  "ro": "cartofi 8 mm, sare, ulei, sos de usturoi",
  "ru": "картофель фри 8 мм, соль, масло, чесночный соус",
  "g": "150/50",
  "price": 40,
  "img": "img/fries.webp?v=3"
 },
 {
  "id": "potato-balls",
  "cat": "gustari",
  "name": "Potato balls",
  "ro": "cartofi bile, sare, ulei, sos de usturoi",
  "ru": "картофельные шарики, соль, масло, чесночный соус",
  "g": "150/50",
  "price": 40,
  "img": "img/potato-balls.webp?v=3"
 },
 {
  "id": "salata-creveti",
  "cat": "salate",
  "name": "Salată cu creveți",
  "ro": "creveți, salată iceberg, lola, roșii cherry, parmezan, sos caesar",
  "ru": "креветки, салат айсберг, лолло, помидоры черри, пармезан, соус цезарь",
  "g": "250",
  "price": 120,
  "img": "img/salata-creveti.webp?v=7"
 },
 {
  "id": "salata-pui",
  "cat": "salate",
  "name": "Salată cu pui",
  "ro": "file de pui copt, salată iceberg, lola, roșii cherry, ou de prepeliță, parmezan, sos caesar",
  "ru": "запечённое куриное филе, салат айсберг, лолло, помидоры черри, перепелиное яйцо, пармезан, соус цезарь",
  "g": "250",
  "price": 100,
  "img": "img/salata-pui.webp?v=7"
 },
 {
  "id": "salata-greceasca",
  "cat": "salate",
  "name": "Salată grecească",
  "ro": "roșii cherry, ceapă roșie, ardei dulce, castraveți, măsline, brânză feta, ulei de măsline, suc de lămâie, oregano, sare",
  "ru": "помидоры черри, красный лук, сладкий перец, огурцы, маслины, сыр фета, оливковое масло, лимонный сок, орегано, соль",
  "g": "250",
  "price": 65,
  "img": "img/salata-greceasca.webp?v=7"
 },
 {
  "id": "salata-somon",
  "cat": "salate",
  "name": "Salată cu somon",
  "ro": "somon afumat, ouă de prepeliță, roșii cherry, mix de salată, salată iceberg, avocado, parmezan, sos caesar",
  "ru": "копчёный лосось, перепелиные яйца, помидоры черри, микс салата, салат айсберг, авокадо, пармезан, соус цезарь",
  "g": "250",
  "price": 120,
  "img": "img/salata-somon.webp?v=7"
 },
 {
  "id": "salata-avocado",
  "cat": "salate",
  "name": "Salată cu avocado",
  "ro": "avocado, ou de prepeliță, mix de salată, roșii cherry, parmezan, muștar, lămâie, ulei",
  "ru": "авокадо, перепелиное яйцо, микс салата, помидоры черри, пармезан, горчица, лимон, масло",
  "g": "250",
  "price": 75,
  "img": "img/salata-avocado.webp?v=7"
 },
 {
  "id": "salata-creveti-tempura",
  "cat": "salate",
  "name": "Salată cu creveți tempura",
  "ro": "creveți tempura, avocado, icre tobiko roșii, roșii cherry, lola verde, iceberg, susan, sos spicy, sos unagi, lămâie",
  "ru": "креветки темпура, авокадо, красная икра тобико, помидоры черри, лолло верде, айсберг, кунжут, острый соус, соус унаги, лимон",
  "g": "250",
  "price": 125,
  "img": "img/salata-creveti-tempura.webp?v=7"
 },
 {
  "id": "soba-pui",
  "cat": "wok",
  "name": "Soba cu pui",
  "nameRu": "Соба с курицей",
  "grp": "soba",
  "gname": {
   "ro": "Soba",
   "ru": "Соба"
  },
  "v": {
   "ro": "Pui",
   "ru": "Курица"
  },
  "ro": "tăiței soba",
  "ru": "лапша соба",
  "g": "370",
  "price": 100,
  "img": "img/soba.webp?v=4"
 },
 {
  "id": "soba-vita",
  "cat": "wok",
  "name": "Soba cu vită",
  "nameRu": "Соба с говядиной",
  "grp": "soba",
  "gname": {
   "ro": "Soba",
   "ru": "Соба"
  },
  "v": {
   "ro": "Vită",
   "ru": "Говядина"
  },
  "ro": "tăiței soba",
  "ru": "лапша соба",
  "g": "370",
  "price": 130,
  "img": "img/soba.webp?v=4"
 },
 {
  "id": "soba-fructe-de-mare",
  "cat": "wok",
  "name": "Soba cu fructe de mare",
  "nameRu": "Соба с морепродуктами",
  "grp": "soba",
  "gname": {
   "ro": "Soba",
   "ru": "Соба"
  },
  "v": {
   "ro": "Fructe de mare",
   "ru": "Морепродукты"
  },
  "ro": "tăiței soba",
  "ru": "лапша соба",
  "g": "370",
  "price": 140,
  "img": "img/soba.webp?v=4"
 },
 {
  "id": "soba-creveti",
  "cat": "wok",
  "name": "Soba cu creveți",
  "nameRu": "Соба с креветками",
  "grp": "soba",
  "gname": {
   "ro": "Soba",
   "ru": "Соба"
  },
  "v": {
   "ro": "Creveți",
   "ru": "Креветки"
  },
  "ro": "tăiței soba",
  "ru": "лапша соба",
  "g": "370",
  "price": 120,
  "img": "img/soba.webp?v=4"
 },
 {
  "id": "udon-pui",
  "cat": "wok",
  "name": "Udon cu pui",
  "nameRu": "Удон с курицей",
  "grp": "udon",
  "gname": {
   "ro": "Udon",
   "ru": "Удон"
  },
  "v": {
   "ro": "Pui",
   "ru": "Курица"
  },
  "ro": "tăiței udon",
  "ru": "лапша удон",
  "g": "370",
  "price": 100,
  "img": "img/udon.webp?v=4"
 },
 {
  "id": "udon-vita",
  "cat": "wok",
  "name": "Udon cu vită",
  "nameRu": "Удон с говядиной",
  "grp": "udon",
  "gname": {
   "ro": "Udon",
   "ru": "Удон"
  },
  "v": {
   "ro": "Vită",
   "ru": "Говядина"
  },
  "ro": "tăiței udon",
  "ru": "лапша удон",
  "g": "370",
  "price": 130,
  "img": "img/udon.webp?v=4"
 },
 {
  "id": "udon-fructe-de-mare",
  "cat": "wok",
  "name": "Udon cu fructe de mare",
  "nameRu": "Удон с морепродуктами",
  "grp": "udon",
  "gname": {
   "ro": "Udon",
   "ru": "Удон"
  },
  "v": {
   "ro": "Fructe de mare",
   "ru": "Морепродукты"
  },
  "ro": "tăiței udon",
  "ru": "лапша удон",
  "g": "370",
  "price": 140,
  "img": "img/udon.webp?v=4"
 },
 {
  "id": "udon-creveti",
  "cat": "wok",
  "name": "Udon cu creveți",
  "nameRu": "Удон с креветками",
  "grp": "udon",
  "gname": {
   "ro": "Udon",
   "ru": "Удон"
  },
  "v": {
   "ro": "Creveți",
   "ru": "Креветки"
  },
  "ro": "tăiței udon",
  "ru": "лапша удон",
  "g": "370",
  "price": 120,
  "img": "img/udon.webp?v=4"
 },
 {
  "id": "funceoza-pui",
  "cat": "wok",
  "name": "Funceoza cu pui",
  "nameRu": "Фунчоза с курицей",
  "grp": "funceoza",
  "gname": {
   "ro": "Funceoza",
   "ru": "Фунчоза"
  },
  "v": {
   "ro": "Pui",
   "ru": "Курица"
  },
  "ro": "tăiței funceoza",
  "ru": "лапша фунчоза",
  "g": "370",
  "price": 100,
  "img": "img/funceoza.webp?v=4"
 },
 {
  "id": "funceoza-vita",
  "cat": "wok",
  "name": "Funceoza cu vită",
  "nameRu": "Фунчоза с говядиной",
  "grp": "funceoza",
  "gname": {
   "ro": "Funceoza",
   "ru": "Фунчоза"
  },
  "v": {
   "ro": "Vită",
   "ru": "Говядина"
  },
  "ro": "tăiței funceoza",
  "ru": "лапша фунчоза",
  "g": "370",
  "price": 130,
  "img": "img/funceoza.webp?v=4"
 },
 {
  "id": "funceoza-fructe-de-mare",
  "cat": "wok",
  "name": "Funceoza cu fructe de mare",
  "nameRu": "Фунчоза с морепродуктами",
  "grp": "funceoza",
  "gname": {
   "ro": "Funceoza",
   "ru": "Фунчоза"
  },
  "v": {
   "ro": "Fructe de mare",
   "ru": "Морепродукты"
  },
  "ro": "tăiței funceoza",
  "ru": "лапша фунчоза",
  "g": "370",
  "price": 140,
  "img": "img/funceoza.webp?v=4"
 },
 {
  "id": "funceoza-creveti",
  "cat": "wok",
  "name": "Funceoza cu creveți",
  "nameRu": "Фунчоза с креветками",
  "grp": "funceoza",
  "gname": {
   "ro": "Funceoza",
   "ru": "Фунчоза"
  },
  "v": {
   "ro": "Creveți",
   "ru": "Креветки"
  },
  "ro": "tăiței funceoza",
  "ru": "лапша фунчоза",
  "g": "370",
  "price": 120,
  "img": "img/funceoza.webp?v=4"
 },
 {
  "id": "fried-rice-pui",
  "cat": "wok",
  "name": "Fried rice cu pui",
  "nameRu": "Жареный рис с курицей",
  "grp": "fried-rice",
  "gname": {
   "ro": "Fried rice",
   "ru": "Жареный рис"
  },
  "v": {
   "ro": "Pui",
   "ru": "Курица"
  },
  "ro": "orez prăjit",
  "ru": "жареный рис",
  "g": "370",
  "price": 95,
  "img": "img/fried-rice.webp?v=4"
 },
 {
  "id": "fried-rice-vita",
  "cat": "wok",
  "name": "Fried rice cu vită",
  "nameRu": "Жареный рис с говядиной",
  "grp": "fried-rice",
  "gname": {
   "ro": "Fried rice",
   "ru": "Жареный рис"
  },
  "v": {
   "ro": "Vită",
   "ru": "Говядина"
  },
  "ro": "orez prăjit",
  "ru": "жареный рис",
  "g": "370",
  "price": 129,
  "img": "img/fried-rice.webp?v=4"
 },
 {
  "id": "fried-rice-fructe-de-mare",
  "cat": "wok",
  "name": "Fried rice cu fructe de mare",
  "nameRu": "Жареный рис с морепродуктами",
  "grp": "fried-rice",
  "gname": {
   "ro": "Fried rice",
   "ru": "Жареный рис"
  },
  "v": {
   "ro": "Fructe de mare",
   "ru": "Морепродукты"
  },
  "ro": "orez prăjit",
  "ru": "жареный рис",
  "g": "370",
  "price": 135,
  "img": "img/fried-rice.webp?v=4"
 },
 {
  "id": "fried-rice-creveti",
  "cat": "wok",
  "name": "Fried rice cu creveți",
  "nameRu": "Жареный рис с креветками",
  "grp": "fried-rice",
  "gname": {
   "ro": "Fried rice",
   "ru": "Жареный рис"
  },
  "v": {
   "ro": "Creveți",
   "ru": "Креветки"
  },
  "ro": "orez prăjit",
  "ru": "жареный рис",
  "g": "370",
  "price": 115,
  "img": "img/fried-rice.webp?v=4"
 },
 {
  "id": "ramen-pui",
  "cat": "supe",
  "name": "Ramen cu pui",
  "nameRu": "Рамен с курицей",
  "grp": "ramen",
  "gname": {
   "ro": "Ramen",
   "ru": "Рамен"
  },
  "v": {
   "ro": "Pui",
   "ru": "Курица"
  },
  "ro": "bulion, tăiței ramen, ouă de găină, carne fiartă, nori",
  "ru": "бульон, лапша рамен, куриные яйца, отварное мясо, нори",
  "g": "400",
  "price": 120,
  "img": "img/ramen.webp?v=4"
 },
 {
  "id": "ramen-vita",
  "cat": "supe",
  "name": "Ramen cu vită",
  "nameRu": "Рамен с говядиной",
  "grp": "ramen",
  "gname": {
   "ro": "Ramen",
   "ru": "Рамен"
  },
  "v": {
   "ro": "Vită",
   "ru": "Говядина"
  },
  "ro": "bulion, tăiței ramen, ouă de găină, carne fiartă, nori",
  "ru": "бульон, лапша рамен, куриные яйца, отварное мясо, нори",
  "g": "400",
  "price": 140,
  "img": "img/ramen.webp?v=4"
 },
 {
  "id": "tom-yum-ebi",
  "cat": "supe",
  "name": "Tom Yum Ebi",
  "nameRu": "Том Ям с креветками",
  "ro": "tom yum, ciuperci, creveți, bulion, roșii cherry, susan, verdeață",
  "ru": "том ям, грибы, креветки, бульон, помидоры черри, кунжут, зелень",
  "g": "400",
  "price": 145,
  "img": "img/tom-yum-ebi.webp?v=4"
 },
 {
  "id": "tom-yum-fish",
  "cat": "supe",
  "name": "Tom Yum Fish",
  "nameRu": "Том Ям с рыбой",
  "ro": "bulion, tom yum, somon, biban, ciuperci, roșii cherry, verdeață",
  "ru": "бульон, том ям, лосось, окунь, грибы, помидоры черри, зелень",
  "g": "400",
  "price": 140,
  "img": "img/tom-yum-fish.webp?v=4"
 },
 {
  "id": "miso-vegan",
  "cat": "supe",
  "name": "Miso Vegan",
  "nameRu": "Мисо веган",
  "ro": "bulion miso, wakame, shiitake, susan, tofu",
  "ru": "бульон мисо, вакаме, шиитаке, кунжут, тофу",
  "g": "400",
  "price": 100,
  "img": "img/miso-vegan.webp?v=4"
 },
 {
  "id": "miso-fructe-de-mare",
  "cat": "supe",
  "name": "Miso cu fructe de mare",
  "nameRu": "Мисо с морепродуктами",
  "ro": "bulion miso, cocktail de fructe de mare, wakame, shiitake, susan",
  "ru": "бульон мисо, коктейль из морепродуктов, вакаме, шиитаке, кунжут",
  "g": "400",
  "price": 145,
  "img": "img/miso-fructe-de-mare.webp?v=4"
 },
 {
  "id": "poke-vegan",
  "cat": "poke",
  "name": "Poke Vegan",
  "nameRu": "Поке веган",
  "ro": "mango copt, edamame, roșii cherry, orez fiert, tofu, germeni de mazăre, susan alb/negru, sos ponzu, avocado",
  "ru": "спелое манго, эдамаме, помидоры черри, отварной рис, тофу, ростки гороха, кунжут белый/чёрный, соус понзу, авокадо",
  "g": "100",
  "price": 95,
  "img": "img/poke-vegan.webp?v=4"
 },
 {
  "id": "poke-maguro",
  "cat": "poke",
  "name": "Poke Maguro",
  "nameRu": "Поке магуро",
  "ro": "ton, edamame, avocado, mango, nori, susan, orez fiert, verdeață, sos ponzu",
  "ru": "тунец, эдамаме, авокадо, манго, нори, кунжут, отварной рис, зелень, соус понзу",
  "g": "400",
  "price": 145,
  "img": "img/poke-maguro.webp?v=4"
 },
 {
  "id": "poke-sake",
  "cat": "poke",
  "name": "Poke Sake",
  "nameRu": "Поке сяке",
  "ro": "somon, avocado, chuka, mango, castraveți, roșii cherry, sos de nuci, sos ponzu, orez fiert, susan",
  "ru": "лосось, авокадо, чука, манго, огурцы, помидоры черри, ореховый соус, соус понзу, отварной рис, кунжут",
  "g": "400",
  "price": 135,
  "img": "img/poke-sake.webp?v=4"
 },
 {
  "id": "poke-ebi",
  "cat": "poke",
  "name": "Poke Ebi",
  "nameRu": "Поке эби",
  "ro": "creveți fierți, edamame, icre tobiko, roșii cherry, avocado, orez fiert, sos ponzu, sos spicy, mango, verdeață",
  "ru": "отварные креветки, эдамаме, икра тобико, помидоры черри, авокадо, отварной рис, соус понзу, соус спайси, манго, зелень",
  "g": "400",
  "price": 125,
  "img": "img/poke-ebi.webp?v=4"
 },
 {
  "id": "poke-unagi",
  "cat": "poke",
  "name": "Poke Unagi",
  "nameRu": "Поке унаги",
  "ro": "nori, anghilă afumată, orez fiert, mango, castraveți, avocado, verdeață, ghimbir marinat, sos unagi, susan, sos ponzu",
  "ru": "нори, копчёный угорь, отварной рис, манго, огурцы, авокадо, зелень, маринованный имбирь, соус унаги, кунжут, соус понзу",
  "g": "400",
  "price": 150,
  "img": "img/poke-unagi.webp?v=4"
 },
 {
  "id": "limonada",
  "cat": "bauturi",
  "name": "Limonadă",
  "nameRu": "Лимонад",
  "ro": "limonadă răcoritoare cu lămâie și mentă",
  "ru": "освежающий лимонад с лимоном и мятой",
  "g": "350",
  "unit": "ml",
  "price": 40,
  "img": "img/limonada.webp"
 },
 {
  "id": "fresh-grepfrut",
  "cat": "bauturi",
  "name": "Fresh de grapefruit",
  "nameRu": "Фреш из грейпфрута",
  "ro": "suc proaspăt stors de grapefruit",
  "ru": "свежевыжатый сок грейпфрута",
  "g": "360",
  "unit": "ml",
  "price": 65,
  "img": "img/fresh-grepfrut.webp?v=8"
 },
 {
  "id": "fresh-portocale",
  "cat": "bauturi",
  "name": "Fresh de portocale",
  "nameRu": "Апельсиновый фреш",
  "ro": "suc proaspăt stors de portocale",
  "ru": "свежевыжатый апельсиновый сок",
  "g": "360",
  "unit": "ml",
  "price": 65,
  "img": "img/fresh-portocale.webp"
 },
 {
  "id": "fresh-grepfrut-portocale",
  "cat": "bauturi",
  "name": "Fresh grapefruit–portocale",
  "nameRu": "Фреш грейпфрут–апельсин",
  "ro": "suc proaspăt stors din grapefruit și portocale",
  "ru": "свежевыжатый сок грейпфрута и апельсина",
  "g": "360",
  "unit": "ml",
  "price": 65,
  "img": "img/fresh-grepfrut-portocale.webp?v=8"
 },
 {
  "id": "coca-cola",
  "cat": "bauturi",
  "name": "Coca-Cola",
  "nameRu": "Coca-Cola",
  "ro": "băutură carbogazoasă",
  "ru": "газированный напиток",
  "g": "500",
  "unit": "ml",
  "price": 20,
  "img": "img/coca-cola.webp?v=2"
 },
 {
  "id": "coca-cola-zero",
  "cat": "bauturi",
  "name": "Coca-Cola Zero",
  "nameRu": "Coca-Cola Zero",
  "ro": "fără zahăr",
  "ru": "без сахара",
  "g": "500",
  "unit": "ml",
  "price": 20,
  "img": "img/coca-cola-zero.webp?v=2"
 },
 {
  "id": "fanta",
  "cat": "bauturi",
  "name": "Fanta",
  "nameRu": "Fanta",
  "ro": "băutură carbogazoasă cu portocale",
  "ru": "газированный напиток с апельсином",
  "g": "500",
  "unit": "ml",
  "price": 20,
  "img": "img/fanta.webp?v=2"
 },
 {
  "id": "sprite",
  "cat": "bauturi",
  "name": "Sprite",
  "nameRu": "Sprite",
  "ro": "băutură carbogazoasă cu lămâie și lime",
  "ru": "газированный напиток с лимоном и лаймом",
  "g": "500",
  "unit": "ml",
  "price": 20,
  "img": "img/sprite.webp?v=2"
 },
 {
  "id": "schweppes",
  "cat": "bauturi",
  "name": "Schweppes",
  "nameRu": "Schweppes",
  "ro": "băutură carbogazoasă",
  "ru": "газированный напиток",
  "g": "330",
  "unit": "ml",
  "price": 20,
  "img": "img/schweppes.webp?v=2"
 },
 {
  "id": "fuzetea",
  "cat": "bauturi",
  "name": "Fuzetea",
  "nameRu": "Fuzetea",
  "ro": "ceai rece",
  "ru": "холодный чай",
  "g": "500",
  "unit": "ml",
  "price": 22,
  "img": "img/fuzetea.webp?v=2"
 },
 {
  "id": "cappy",
  "cat": "bauturi",
  "name": "Cappy",
  "nameRu": "Cappy",
  "ro": "suc",
  "ru": "сок",
  "g": "330",
  "unit": "ml",
  "price": 22,
  "img": "img/cappy.webp?v=2"
 },
 {
  "id": "cappy-mini",
  "cat": "bauturi",
  "name": "Cappy mini",
  "nameRu": "Cappy мини",
  "ro": "suc",
  "ru": "сок",
  "g": "200",
  "unit": "ml",
  "price": 15,
  "img": "img/cappy-mini.webp?v=2"
 },
 {
  "id": "dorna-minerala",
  "cat": "bauturi",
  "name": "Dorna minerală",
  "nameRu": "Dorna минеральная",
  "ro": "apă minerală carbogazoasă",
  "ru": "газированная минеральная вода",
  "g": "500",
  "unit": "ml",
  "price": 15,
  "img": "img/dorna-minerala.webp?v=2"
 },
 {
  "id": "dorna-plata",
  "cat": "bauturi",
  "name": "Dorna plată",
  "nameRu": "Dorna негазированная",
  "ro": "apă plată",
  "ru": "негазированная вода",
  "g": "500",
  "unit": "ml",
  "price": 15,
  "img": "img/dorna-plata.webp?v=2"
 },
 {
  "id": "dorna-copii",
  "cat": "bauturi",
  "name": "Dorna pentru copii",
  "nameRu": "Dorna детская",
  "ro": "apă plată pentru copii",
  "ru": "детская негазированная вода",
  "g": "330",
  "unit": "ml",
  "price": 15,
  "img": "img/dorna-copii.webp?v=2"
 },
 {
  "id": "burn",
  "cat": "bauturi",
  "name": "Burn",
  "nameRu": "Burn",
  "ro": "băutură energizantă",
  "ru": "энергетический напиток",
  "g": "250",
  "unit": "ml",
  "price": 28,
  "img": "img/burn.webp?v=4"
 },
 {
  "id": "monster",
  "cat": "bauturi",
  "name": "Monster",
  "nameRu": "Monster",
  "ro": "băutură energizantă",
  "ru": "энергетический напиток",
  "unit": "ml",
  "price": 35,
  "img": "img/monster.webp?v=1"
 },
 {
  "id": "jack-daniels-cola",
  "cat": "bauturi",
  "name": "Jack Daniel's & Cola",
  "nameRu": "Jack Daniel's & Cola",
  "ro": "băutură alcoolică, 18+",
  "ru": "алкогольный напиток, 18+",
  "unit": "ml",
  "price": 65,
  "img": "img/jack-daniels-cola.webp?v=2",
  "g": "330"
 },
 {
  "id": "sos-usturoi",
  "cat": "sosuri",
  "name": "Sos de usturoi",
  "ro": "",
  "ru": "чесночный соус",
  "g": "",
  "price": 8,
  "img": "img/sos-usturoi.webp?v=5"
 },
 {
  "id": "ketchup",
  "cat": "sosuri",
  "name": "Ketchup",
  "ro": "",
  "ru": "кетчуп",
  "g": "",
  "price": 8,
  "img": "img/ketchup.webp?v=5"
 },
 {
  "id": "sos-lgusto",
  "cat": "sosuri",
  "name": "Sos L'Gusto",
  "ro": "",
  "ru": "фирменный соус L'Gusto",
  "g": "",
  "price": 12,
  "img": "img/sos-lgusto.webp?v=5"
 },
 {
  "id": "sos-asiatic",
  "cat": "sosuri",
  "name": "Sos asiatic",
  "ro": "",
  "ru": "азиатский соус",
  "g": "",
  "price": 12,
  "img": "img/sos-asiatic.webp?v=5"
 },
 {
  "id": "sos-bbq",
  "cat": "sosuri",
  "name": "Sos B.B.Q.",
  "ro": "",
  "ru": "соус барбекю",
  "g": "",
  "price": 12,
  "img": "img/sos-bbq.webp?v=5"
 },
 {
  "id": "sos-cheddar",
  "cat": "sosuri",
  "name": "Sos cheddar",
  "ro": "",
  "ru": "соус чеддер",
  "g": "",
  "price": 12,
  "img": "img/sos-cheddar.webp?v=5"
 },
 {
  "id": "sos-sweet-chili",
  "cat": "sosuri",
  "name": "Sos sweet chili",
  "ro": "",
  "ru": "соус сладкий чили",
  "g": "",
  "price": 12,
  "img": "img/sos-sweet-chili.webp?v=5"
 },
 {
  "id": "adaos-pui",
  "cat": "sosuri",
  "name": "Adaos kebab: carne de pui",
  "ro": "",
  "ru": "Добавка в кебаб: курица",
  "g": "",
  "price": 20,
  "img": ""
 },
 {
  "id": "adaos-porc-vita",
  "cat": "sosuri",
  "name": "Adaos kebab: carne porc/vită",
  "ro": "",
  "ru": "Добавка в кебаб: свинина/говядина",
  "g": "",
  "price": 20,
  "img": ""
 },
 {
  "id": "adaos-sos",
  "cat": "sosuri",
  "name": "Adaos kebab: sos",
  "ro": "",
  "ru": "Добавка в кебаб: соус",
  "g": "",
  "price": 10,
  "img": ""
 },
 {
  "id": "adaos-cascaval",
  "cat": "sosuri",
  "name": "Adaos kebab: cașcaval",
  "ro": "",
  "ru": "Добавка в кебаб: сыр",
  "g": "",
  "price": 12,
  "img": ""
 },
 {
  "id": "sushi-sake-maki",
  "cat": "maki",
  "name": "Sake maki",
  "ro": "somon fresh, orez fiert, susan, nori",
  "ru": "свежий лосось, рис, кунжут, нори",
  "g": "140",
  "price": 50,
  "img": "img/sushi-sake-maki.webp?v=3"
 },
 {
  "id": "sushi-unagi-maki",
  "cat": "maki",
  "name": "Unagi maki",
  "ro": "anghilă afumată, orez fiert, susan, nori",
  "ru": "копчёный угорь, рис, кунжут, нори",
  "g": "140",
  "price": 50,
  "img": "img/sushi-unagi-maki.webp?v=3"
 },
 {
  "id": "sushi-ebi-maki",
  "cat": "maki",
  "name": "Ebi maki",
  "ro": "creveți fierți, susan, orez fiert, nori",
  "ru": "варёные креветки, кунжут, рис, нори",
  "g": "140",
  "price": 50,
  "img": "img/sushi-ebi-maki.webp?v=3"
 },
 {
  "id": "sushi-maguro-maki",
  "cat": "maki",
  "name": "Maguro maki",
  "ro": "ton, susan, nori, orez fiert",
  "ru": "тунец, кунжут, нори, рис",
  "g": "140",
  "price": 50,
  "img": "img/sushi-maguro-maki.webp?v=3"
 },
 {
  "id": "sushi-avocado-maki",
  "cat": "maki",
  "name": "Avocado maki",
  "ro": "avocado, orez fiert, nori, susan",
  "ru": "авокадо, рис, нори, кунжут",
  "g": "140",
  "price": 50,
  "img": "img/sushi-avocado-maki.webp?v=3"
 },
 {
  "id": "sushi-kappa-maki",
  "cat": "maki",
  "name": "Kappa maki",
  "ro": "castraveți, orez fiert, susan, nori",
  "ru": "огурец, рис, кунжут, нори",
  "g": "140",
  "price": 50,
  "img": "img/sushi-kappa-maki.webp?v=3"
 },
 {
  "id": "sushi-philadelphia",
  "cat": "rulouri",
  "name": "Philadelphia",
  "ro": "somon fresh, avocado, castravete, philadelphia cream, orez fiert, nori",
  "ru": "свежий лосось, авокадо, огурец, сливочный сыр, рис, нори",
  "g": "280",
  "price": 160,
  "img": "img/sushi-philadelphia.webp?v=3"
 },
 {
  "id": "sushi-philadelphia-ebi",
  "cat": "rulouri",
  "name": "Philadelphia Ebi",
  "ro": "somon fresh, creveți fierți, avocado, castraveți, philadelphia cream, orez fiert, nori",
  "ru": "свежий лосось, варёные креветки, авокадо, огурец, сливочный сыр, рис, нори",
  "g": "280",
  "price": 170,
  "img": "img/sushi-philadelphia-ebi.webp?v=3"
 },
 {
  "id": "sushi-philadelphia-lux",
  "cat": "rulouri",
  "name": "Philadelphia Lux",
  "ro": "somon fresh, avocado, philadelphia cream, castraveți, caviar de somon, orez fiert, nori",
  "ru": "свежий лосось, авокадо, сливочный сыр, огурец, икра лосося, рис, нори",
  "g": "290",
  "price": 180,
  "img": "img/sushi-philadelphia-lux.webp?v=3"
 },
 {
  "id": "sushi-california",
  "cat": "rulouri",
  "name": "California",
  "ro": "icre tobiko, creveți fierți, avocado, castraveți, maioneză japoneză, orez fiert, nori",
  "ru": "икра тобико, варёные креветки, авокадо, огурец, японский майонез, рис, нори",
  "g": "260",
  "price": 160,
  "img": "img/sushi-california.webp?v=3"
 },
 {
  "id": "sushi-california-orange",
  "cat": "rulouri",
  "name": "California Orange",
  "ro": "icre tobiko, somon fresh, castraveți, cheese cream, orez fiert, nori",
  "ru": "икра тобико, свежий лосось, огурец, сливочный сыр, рис, нори",
  "g": "260",
  "price": 165,
  "img": "img/sushi-california-orange.webp?v=3"
 },
 {
  "id": "sushi-california-whites",
  "cat": "rulouri",
  "name": "California White's",
  "ro": "snow crab, susan alb, castraveți, avocado, maioneză japoneză, orez fiert, nori",
  "ru": "снежный краб, белый кунжут, огурец, авокадо, японский майонез, рис, нори",
  "g": "260",
  "price": 95,
  "img": "img/sushi-california-whites.webp?v=3"
 },
 {
  "id": "sushi-philadelphia-double-cheese",
  "cat": "rulouri",
  "name": "Philadelphia Double Cheese",
  "ro": "somon fresh, philadelphia cream, castraveți, avocado, orez fiert, nori",
  "ru": "свежий лосось, сливочный сыр, огурец, авокадо, рис, нори",
  "g": "280",
  "price": 175,
  "img": "img/sushi-philadelphia-double-cheese.webp?v=3"
 },
 {
  "id": "sushi-canada",
  "cat": "rulouri",
  "name": "Canada",
  "ro": "anghilă afumată, avocado, castraveți, somon fresh, philadelphia cream, susan, sos unagi, orez fiert, nori",
  "ru": "копчёный угорь, авокадо, огурец, свежий лосось, сливочный сыр, кунжут, соус унаги, рис, нори",
  "g": "280",
  "price": 180,
  "img": "img/sushi-canada.webp?v=3"
 },
 {
  "id": "sushi-imperator",
  "cat": "rulouri",
  "name": "Imperator",
  "ro": "creveți fierți, somon fresh, avocado, castraveți, philadelphia cream, orez fiert, nori",
  "ru": "варёные креветки, свежий лосось, авокадо, огурец, сливочный сыр, рис, нори",
  "g": "290",
  "price": 155,
  "img": "img/sushi-imperator.webp?v=3"
 },
 {
  "id": "sushi-red-dragon",
  "cat": "rulouri",
  "name": "Red Dragon",
  "ro": "ton fresh, caviar de somon, germeni de ceapă, avocado, philadelphia cream, orez fiert, nori",
  "ru": "свежий тунец, икра лосося, ростки лука, авокадо, сливочный сыр, рис, нори",
  "g": "290",
  "price": 190,
  "img": "img/sushi-red-dragon.webp?v=3"
 },
 {
  "id": "sushi-orange-dragon",
  "cat": "rulouri",
  "name": "Orange Dragon",
  "ro": "somon fresh, icre tobiko negre, germeni de floarea soarelui, avocado, castraveți, philadelphia cream, anghilă afumată, orez fiert, nori",
  "ru": "свежий лосось, чёрная икра тобико, ростки подсолнечника, авокадо, огурец, сливочный сыр, копчёный угорь, рис, нори",
  "g": "290",
  "price": 185,
  "img": "img/sushi-orange-dragon.webp?v=3"
 },
 {
  "id": "sushi-golden-dragon",
  "cat": "rulouri",
  "name": "Golden Dragon",
  "ro": "anghilă afumată, icre tobiko, creveți fierți, avocado, philadelphia cream, germeni, castraveți, sos unagi, orez fiert, nori",
  "ru": "копчёный угорь, икра тобико, варёные креветки, авокадо, сливочный сыр, ростки, огурец, соус унаги, рис, нори",
  "g": "280",
  "price": 210,
  "img": "img/sushi-golden-dragon.webp?v=3"
 },
 {
  "id": "sushi-green-dragon",
  "cat": "rulouri",
  "name": "Green Dragon",
  "ro": "avocado, philadelphia cream, icre tobiko, somon fresh, castraveți, sos unagi, susan, orez fiert, nori",
  "ru": "авокадо, сливочный сыр, икра тобико, свежий лосось, огурец, соус унаги, кунжут, рис, нори",
  "g": "280",
  "price": 175,
  "img": "img/sushi-green-dragon.webp?v=3"
 },
 {
  "id": "sushi-alaska",
  "cat": "rulouri",
  "name": "Alaska",
  "ro": "somon afumat, caviar de somon, cremă philadelphia, avocado, susan amestec, orez fiert, nori",
  "ru": "копчёный лосось, икра лосося, сливочный сыр, авокадо, микс кунжута, рис, нори",
  "g": "270",
  "price": 145,
  "img": "img/sushi-alaska.webp?v=3"
 },
 {
  "id": "sushi-burnt",
  "cat": "rulouri",
  "name": "Burnt",
  "ro": "somon grill, creveți tempura, castraveți, sos spicy, germeni de ceapă, orez fiert, nori",
  "ru": "лосось гриль, креветки темпура, огурец, острый соус, ростки лука, рис, нори",
  "g": "390",
  "price": 175,
  "img": "img/sushi-burnt.webp?v=3"
 },
 {
  "id": "sushi-chuka-wakame",
  "cat": "rulouri",
  "name": "Chuka Wakame",
  "ro": "chuka wakame, ton fresh, mango, susan, sos de nuci, orez fiert, nori",
  "ru": "водоросли чука, свежий тунец, манго, кунжут, ореховый соус, рис, нори",
  "g": "360",
  "price": 150,
  "img": "img/sushi-chuka-wakame.webp?v=3"
 },
 {
  "id": "sushi-kani-tempura",
  "cat": "rulouri",
  "name": "Kani Tempura",
  "ro": "snow crab, castravete, avocado, icre tobiko, sos unagi, philadelphia cream, susan, tempura, panko, orez fiert, nori",
  "ru": "снежный краб, огурец, авокадо, икра тобико, соус унаги, сливочный сыр, кунжут, темпура, панко, рис, нори",
  "g": "280",
  "price": 140,
  "img": "img/sushi-kani-tempura.webp?v=3"
 },
 {
  "id": "sushi-unagi-tempura",
  "cat": "rulouri",
  "name": "Unagi Tempura",
  "ro": "anghilă afumată, sos unagi, icre tobiko, avocado, castraveți, susan, philadelphia cream, tempura, panko, orez fiert, nori",
  "ru": "копчёный угорь, соус унаги, икра тобико, авокадо, огурец, кунжут, сливочный сыр, темпура, панко, рис, нори",
  "g": "280",
  "price": 160,
  "img": "img/sushi-unagi-tempura.webp?v=3"
 },
 {
  "id": "sushi-sake-tempura",
  "cat": "rulouri",
  "name": "Sake Tempura",
  "ro": "somon prăjit, sos unagi, avocado, castraveți, icre tobiko, susan, philadelphia cream, tempura, panko, orez fiert, nori",
  "ru": "жареный лосось, соус унаги, авокадо, огурец, икра тобико, кунжут, сливочный сыр, темпура, панко, рис, нори",
  "g": "280",
  "price": 160,
  "img": "img/sushi-sake-tempura.webp?v=3"
 },
 {
  "id": "sushi-ebi-tempura",
  "cat": "rulouri",
  "name": "Ebi Tempura",
  "ro": "creveți fierți, sos unagi, castraveți, avocado, icre tobiko, susan, philadelphia cream, tempura, panko, orez fiert, nori",
  "ru": "варёные креветки, соус унаги, огурец, авокадо, икра тобико, кунжут, сливочный сыр, темпура, панко, рис, нори",
  "g": "280",
  "price": 160,
  "img": "img/sushi-ebi-tempura.webp?v=3"
 },
 {
  "id": "sushi-set-tempura",
  "cat": "seturi",
  "name": "Set Sushi Tempura (24 buc.)",
  "ro": "Kani Tempura, Sake Tempura, Unagi Tempura, sos unagi, susan",
  "ru": "Kani Tempura, Sake Tempura, Unagi Tempura, соус унаги, кунжут",
  "g": "840/100/50/30",
  "price": 414,
  "img": "img/sushi-set-tempura.webp?v=3"
 },
 {
  "id": "sushi-set-sake",
  "cat": "seturi",
  "name": "Set Sushi Sake (24 buc.)",
  "ro": "Sake Tempura, Sake Hot Vulcan, Sake maki, sos unagi, susan",
  "ru": "Sake Tempura, Sake Hot Vulcan, Sake maki, соус унаги, кунжут",
  "g": "700/100/50/30",
  "price": 355,
  "img": "img/sushi-set-sake.webp?v=3"
 },
 {
  "id": "sushi-set-asia",
  "cat": "seturi",
  "name": "Set Sushi Asia (24 buc.)",
  "ro": "Canada, California Orange, Unagi maki, sos unagi, susan",
  "ru": "Canada, California Orange, Unagi maki, соус унаги, кунжут",
  "g": "700/80/30/30",
  "price": 355,
  "img": "img/sushi-set-asia.webp?v=3"
 },
 {
  "id": "sushi-set-classic",
  "cat": "seturi",
  "name": "Set Sushi Classic (32 buc.)",
  "ro": "Philadelphia, California White's, Philadelphia Ebi, California Black, sos spicy",
  "ru": "Philadelphia, California White's, Philadelphia Ebi, California Black, острый соус",
  "g": "1080/120/40/30",
  "price": 515,
  "img": "img/sushi-set-classic.webp?v=3"
 },
 {
  "id": "sushi-set-lgusto",
  "cat": "seturi",
  "name": "Set Sushi L'Gusto (40 buc.)",
  "ro": "Philadelphia, California, California White's, California Black, Ebi Tempura, Unagi maki, sos unagi, sos spicy, susan",
  "ru": "Philadelphia, California, California White's, California Black, Ebi Tempura, Unagi maki, соус унаги, острый соус, кунжут",
  "g": "1220/120/80/30",
  "price": 585,
  "img": "img/sushi-set-lgusto.webp?v=3"
 }
];

// 4) Соусы и добавки: не показываются в общем меню, а предлагаются
//    после добавления в корзину блюд из указанных разделов.
window.ADDONS = {
  sauces: ["sos-usturoi", "sos-lgusto", "sos-cheddar", "sos-bbq", "sos-asiatic", "sos-sweet-chili", "ketchup"],
  kebabExtras: ["adaos-pui", "adaos-porc-vita", "adaos-cascaval", "adaos-sos"],
  // какой раздел меню → что предлагать
  offer: { kebab: ["sauces", "kebabExtras"], aripi: ["sauces"], burger: ["sauces"], gustari: ["sauces"] }
};

// 5) «Рекомендуем» по умолчанию. Оператор может поменять список в своём приложении (вкладка «Рекомендуем»).
window.RECOMMENDED_DEFAULT = ["double-cheeseburger-lgusto", "kebab-lgusto", "big-double-cheeseburger", "aripi-crispy", "creveti-tempura", "salata-creveti-tempura"];
