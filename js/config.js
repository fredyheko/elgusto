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
    city:  { freeFrom: 400, feeBelow: null },
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
  "img": "img/kebab-pui.webp"
 },
 {
  "id": "kebab-lgusto",
  "cat": "kebab",
  "name": "Kebab „L'Gusto”",
  "ro": "lavaș, pârjoală din carne de vită/porc, cartofi pai, roșii, castraveți murați, sos de usturoi, ceapă roșie, sos tzatziki, sos B.B.Q.",
  "ru": "лаваш, котлета из говядины/свинины, картофель пай, помидоры, маринованные огурцы, чесночный соус, красный лук, соус цацики, соус барбекю",
  "g": "460",
  "price": 85,
  "img": "img/kebab-lgusto.webp"
 },
 {
  "id": "lavas-cascaval",
  "cat": "kebab",
  "name": "Lavaș cu cașcaval",
  "ro": "cașcaval mozzarella, sos cu usturoi, verdeață, lavaș, roșii",
  "ru": "сыр моцарелла, чесночный соус, зелень, лаваш, помидоры",
  "g": "160",
  "price": 55,
  "img": "img/lavas-cascaval.webp"
 },
 {
  "id": "aripi-crispy",
  "cat": "aripi",
  "name": "Aripi de pui crispy 🌶️",
  "ro": "aripi de pui, sos cu usturoi, pesmeți, clear",
  "ru": "куриные крылышки, чесночный соус, панировка, кляр",
  "g": "250/50",
  "price": 79,
  "img": "img/aripi-crispy.webp"
 },
 {
  "id": "aripi-fries",
  "cat": "aripi",
  "name": "Aripi fries",
  "ro": "aripi de pui, sos cu usturoi, ulei, sare",
  "ru": "куриные крылышки, чесночный соус, масло, соль",
  "g": "200/50",
  "price": 79,
  "img": "img/aripi-fries.webp"
 },
 {
  "id": "aripi-asiatic",
  "cat": "aripi",
  "name": "Aripi asiatic 🌶️🌶️",
  "ro": "aripi de pui, sos asiatic, sos picant, susan, ulei",
  "ru": "куриные крылышки, азиатский соус, острый соус, кунжут, масло",
  "g": "250",
  "price": 79,
  "img": "img/aripi-asiatic.webp"
 },
 {
  "id": "aripi-bbq",
  "cat": "aripi",
  "name": "Aripi B.B.Q.",
  "ro": "aripi de pui, sos B.B.Q., ulei",
  "ru": "куриные крылышки, соус барбекю, масло",
  "g": "250",
  "price": 79,
  "img": "img/aripi-bbq.webp"
 },
 {
  "id": "cheeseburger-classic",
  "cat": "burger",
  "name": "Cheeseburger classic",
  "ro": "pârjoală vită/porc, cașcaval cheddar, castraveți murați, chiflă, salată iceberg, sos cheddar, ceapă roșie, sos burger, roșii",
  "ru": "котлета говядина/свинина, сыр чеддер, маринованные огурцы, булочка, салат айсберг, соус чеддер, красный лук, бургерный соус, помидоры",
  "g": "300",
  "price": 75,
  "img": "img/cheeseburger-classic.webp"
 },
 {
  "id": "chicken-cheeseburger",
  "cat": "burger",
  "name": "Chicken cheeseburger",
  "ro": "pârjoală de pui, sos burger, cașcaval cheddar, chiflă, castraveți murați, salată iceberg, sos cheddar, ceapă roșie, roșii",
  "ru": "куриная котлета, бургерный соус, сыр чеддер, булочка, маринованные огурцы, салат айсберг, соус чеддер, красный лук, помидоры",
  "g": "300",
  "price": 70,
  "img": "img/chicken-cheeseburger.webp"
 },
 {
  "id": "big-double-cheeseburger",
  "cat": "burger",
  "name": "Big double cheeseburger",
  "ro": "ceapă caramelizată, pârjoale porc/vită, cașcaval cheddar, salată iceberg, bacon, chiflă, castraveți murați, sos cheddar, sos burger, ceapă roșie, roșii",
  "ru": "карамелизированный лук, котлеты свинина/говядина, сыр чеддер, салат айсберг, бекон, булочка, маринованные огурцы, соус чеддер, бургерный соус, красный лук, помидоры",
  "g": "450",
  "price": 100,
  "img": "img/big-double-cheeseburger.webp"
 },
 {
  "id": "double-cheeseburger-lgusto",
  "cat": "burger",
  "name": "Double cheeseburger L'Gusto",
  "ro": "cașcaval cheddar, pârjoală de vită, pârjoală de pui, ceapă roșie, castraveți murați, chiflă, ou de prepeliță, salată iceberg, sos cheddar, sos burger, roșii",
  "ru": "сыр чеддер, говяжья котлета, куриная котлета, красный лук, маринованные огурцы, булочка, перепелиное яйцо, салат айсберг, соус чеддер, бургерный соус, помидоры",
  "g": "460",
  "price": 115,
  "img": "img/double-cheeseburger-lgusto.webp"
 },
 {
  "id": "burger-classic",
  "cat": "burger",
  "name": "Burger classic",
  "ro": "pârjoală de vită/porc, castraveți murați, chiflă, salată iceberg, ceapă roșie, sos burger, roșii",
  "ru": "котлета говядина/свинина, маринованные огурцы, булочка, салат айсберг, красный лук, бургерный соус, помидоры",
  "g": "280",
  "price": 70,
  "img": "img/burger-classic.webp"
 },
 {
  "id": "crispy-burger",
  "cat": "burger",
  "name": "Crispy burger",
  "ro": "pârjoală de pui, sos burger, pesmeți, chiflă, clear, castraveți murați, salată iceberg, lola verde, roșii",
  "ru": "куриная котлета, бургерный соус, панировка, булочка, кляр, маринованные огурцы, салат айсберг, лолло верде, помидоры",
  "g": "300",
  "price": 75,
  "img": "img/crispy-burger.webp"
 },
 {
  "id": "creveti-tempura",
  "cat": "gustari",
  "name": "Creveți tempura",
  "ro": "creveți, pesmeți, clear, sos cu usturoi",
  "ru": "креветки, панировка, кляр, чесночный соус",
  "g": "150/50",
  "price": 100,
  "img": "img/creveti-tempura.webp"
 },
 {
  "id": "chicken-nuggets",
  "cat": "gustari",
  "name": "Chicken nuggets",
  "ro": "file de pui, pesmeți, clear, sos de usturoi",
  "ru": "куриное филе, панировка, кляр, чесночный соус",
  "g": "200/50",
  "price": 60,
  "img": "img/chicken-nuggets.webp"
 },
 {
  "id": "inele-calamar",
  "cat": "gustari",
  "name": "Inele de calamar",
  "ro": "inele de calamari, pesmeți, clear, sos de usturoi",
  "ru": "кольца кальмара, панировка, кляр, чесночный соус",
  "g": "150/50",
  "price": 75,
  "img": "img/inele-calamar.webp"
 },
 {
  "id": "cartofi-wedges",
  "cat": "gustari",
  "name": "Cartofi wedges",
  "ro": "cartofi de casă, sare, ulei, sos de usturoi",
  "ru": "картофель по-домашнему, соль, масло, чесночный соус",
  "g": "150/50",
  "price": 40,
  "img": "img/cartofi-wedges.webp"
 },
 {
  "id": "fries",
  "cat": "gustari",
  "name": "Fries",
  "ro": "cartofi 8 mm, sare, ulei, sos de usturoi",
  "ru": "картофель фри 8 мм, соль, масло, чесночный соус",
  "g": "150/50",
  "price": 40,
  "img": "img/fries.webp"
 },
 {
  "id": "potato-balls",
  "cat": "gustari",
  "name": "Potato balls",
  "ro": "cartofi bile, sare, ulei, sos de usturoi",
  "ru": "картофельные шарики, соль, масло, чесночный соус",
  "g": "150/50",
  "price": 40,
  "img": "img/potato-balls.webp"
 },
 {
  "id": "salata-creveti",
  "cat": "salate",
  "name": "Salată cu creveți",
  "ro": "creveți, salată iceberg, lola, roșii cherry, parmezan, sos caesar",
  "ru": "креветки, салат айсберг, лолло, помидоры черри, пармезан, соус цезарь",
  "g": "250",
  "price": 120,
  "img": "img/salata-creveti.webp"
 },
 {
  "id": "salata-pui",
  "cat": "salate",
  "name": "Salată cu pui",
  "ro": "file de pui copt, salată iceberg, lola, roșii cherry, ou de prepeliță, parmezan, sos caesar",
  "ru": "запечённое куриное филе, салат айсберг, лолло, помидоры черри, перепелиное яйцо, пармезан, соус цезарь",
  "g": "250",
  "price": 100,
  "img": "img/salata-pui.webp"
 },
 {
  "id": "salata-greceasca",
  "cat": "salate",
  "name": "Salată grecească",
  "ro": "roșii cherry, ceapă roșie, ardei dulce, castraveți, măsline, brânză feta, ulei de măsline, suc de lămâie, oregano, sare",
  "ru": "помидоры черри, красный лук, сладкий перец, огурцы, маслины, сыр фета, оливковое масло, лимонный сок, орегано, соль",
  "g": "250",
  "price": 65,
  "img": "img/salata-greceasca.webp"
 },
 {
  "id": "salata-somon",
  "cat": "salate",
  "name": "Salată cu somon",
  "ro": "somon afumat, ouă de prepeliță, roșii cherry, mix de salată, salată iceberg, avocado, parmezan, sos caesar",
  "ru": "копчёный лосось, перепелиные яйца, помидоры черри, микс салата, салат айсберг, авокадо, пармезан, соус цезарь",
  "g": "250",
  "price": 120,
  "img": "img/salata-somon.webp"
 },
 {
  "id": "salata-avocado",
  "cat": "salate",
  "name": "Salată cu avocado",
  "ro": "avocado, ou de prepeliță, mix de salată, roșii cherry, parmezan, muștar, lămâie, ulei",
  "ru": "авокадо, перепелиное яйцо, микс салата, помидоры черри, пармезан, горчица, лимон, масло",
  "g": "250",
  "price": 75,
  "img": "img/salata-avocado.webp"
 },
 {
  "id": "salata-creveti-tempura",
  "cat": "salate",
  "name": "Salată cu creveți tempura",
  "ro": "creveți tempura, avocado, icre tobiko roșii, roșii cherry, lola verde, iceberg, susan, sos spicy, sos unagi, lămâie",
  "ru": "креветки темпура, авокадо, красная икра тобико, помидоры черри, лолло верде, айсберг, кунжут, острый соус, соус унаги, лимон",
  "g": "250",
  "price": 125,
  "img": "img/salata-creveti-tempura.webp"
 },
 {
  "id": "sos-usturoi",
  "cat": "sosuri",
  "name": "Sos de usturoi",
  "ro": "",
  "ru": "чесночный соус",
  "g": "",
  "price": 8,
  "img": "img/sos-usturoi.webp"
 },
 {
  "id": "ketchup",
  "cat": "sosuri",
  "name": "Ketchup",
  "ro": "",
  "ru": "кетчуп",
  "g": "",
  "price": 8,
  "img": "img/ketchup.webp"
 },
 {
  "id": "sos-lgusto",
  "cat": "sosuri",
  "name": "Sos L'Gusto",
  "ro": "",
  "ru": "фирменный соус L'Gusto",
  "g": "",
  "price": 12,
  "img": "img/sos-lgusto.webp"
 },
 {
  "id": "sos-asiatic",
  "cat": "sosuri",
  "name": "Sos asiatic",
  "ro": "",
  "ru": "азиатский соус",
  "g": "",
  "price": 12,
  "img": "img/sos-asiatic.webp"
 },
 {
  "id": "sos-bbq",
  "cat": "sosuri",
  "name": "Sos B.B.Q.",
  "ro": "",
  "ru": "соус барбекю",
  "g": "",
  "price": 12,
  "img": "img/sos-bbq.webp"
 },
 {
  "id": "sos-cheddar",
  "cat": "sosuri",
  "name": "Sos cheddar",
  "ro": "",
  "ru": "соус чеддер",
  "g": "",
  "price": 12,
  "img": "img/sos-cheddar.webp"
 },
 {
  "id": "sos-sweet-chili",
  "cat": "sosuri",
  "name": "Sos sweet chili",
  "ro": "",
  "ru": "соус сладкий чили",
  "g": "",
  "price": 12,
  "img": "img/sos-sweet-chili.webp"
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
