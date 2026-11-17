# L'Gusto — сайт с заказами и приложение оператора

## Что в папке
- `index.html` — сайт для клиентов (RO/RU, меню, корзина, статус заказа).
- `operator/` — приложение оператора: https://ВАШ-САЙТ/operator/
- `js/config.js` — **все настройки**: подключение Firebase, телефон, адрес, часы, доставка, меню и цены.
- `img/` — фото блюд и логотип. `icons/` — иконки приложения.
- `firestore.rules` — правила безопасности базы.

Пока в `config.js` не вставлены данные Firebase, сайт работает в **тестовом режиме**:
заказы видны только в том же браузере. Для настоящих заказов настройте Firebase (ниже).

## 1. Firebase (один раз, ~15 минут, бесплатно)
1. Откройте https://console.firebase.google.com → **Create a project** → название `lgusto` → Google Analytics можно выключить.
2. **Build → Firestore Database → Create database** → регион `eur3 (europe-west)` → режим **production**.
3. Вкладка **Rules** → удалите всё, вставьте содержимое `firestore.rules`.
   В строке `['operator@example.com']` впишите email оператора (можно несколько через запятую) → **Publish**.
4. **Build → Authentication → Get started → Email/Password → Enable**.
   Вкладка **Users → Add user**: email и пароль оператора (тот же email, что в правилах).
5. Значок шестерёнки → **Project settings → Your apps → </> (Web)** → название `lgusto-site` → **Register**.
   Скопируйте значения из `firebaseConfig` в `js/config.js` (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId).
6. **Authentication → Settings → Authorized domains → Add domain**: `elgusto.onrender.com` (и свой домен, если будет).

## 2. Загрузка на Render (через GitHub)
1. В репозитории `elgusto` удалите старый `index.html` и загрузите **всё содержимое этой папки** (Add file → Upload files, перетащить все файлы и папки).
2. Render обновит сайт сам. Настройки Render: Build Command — пусто, Publish Directory — `.`

## 3. Проверка после запуска
1. Откройте `/operator/` на телефоне или планшете оператора, войдите, нажмите «Включить звук».
2. С другого телефона сделайте тестовый заказ на сайте → у оператора должен появиться заказ со звуком.
3. Нажимайте «Принять → Готовится → Отправить → Доставлен» — у клиента меняется статус.
4. Тестовый заказ потом можно отменить.

## Установка приложения оператора
Android (Chrome): открыть `/operator/` → меню ⋮ → «Добавить на главный экран».
iPhone (Safari): «Поделиться» → «На экран Домой».
Важно: звук работает, пока приложение открыто. Держите телефон/планшет оператора на зарядке
с открытым приложением и отключите автоблокировку экрана на время работы.

## Как менять меню
В `js/config.js`, раздел `window.MENU`: name — название, ro/ru — состав, g — граммы, price — цена, img — фото в `img/`.
Временно убрать блюдо (закончилось) — без правки файлов: приложение оператора → «Стоп-лист».

## SEO (поиск Google)
- Сайт на двух адресах: `/` — румынский, `/ru/` — русский. У каждой версии свой заголовок, описание и готовый HTML, чтобы Google видел меню без JavaScript.
- `robots.txt` и `sitemap.xml` уже в корне. Приложение оператора закрыто от поиска.
- **Когда будет свой домен** (например lgusto.md): попросите пересобрать сайт с новым адресом
  (`python3 _build/build.py . https://lgusto.md`) — обновятся canonical, hreflang, sitemap и превью для соцсетей.
- **После изменения меню в `js/config.js`** сайт для посетителей обновится сразу, но для Google стоит пересобрать страницы той же командой.
- **Обязательно после запуска:**
  1. Google Search Console (search.google.com/search-console) → добавить сайт → отправить `sitemap.xml`.
  2. Google Business Profile (business.google.com) для L'Gusto: адрес, часы, фото, ссылка на сайт. Это главный источник посетителей из местного поиска и Google Карт.
