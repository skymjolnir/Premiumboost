# NovaBoost — магазин игровых услуг (Vite + React + TypeScript)

Демо‑проектик в стиле overger: каталог услуг, карточки, корзина, оформление заказа и страница успеха. Без бэкенда — данные и заказы хранятся в `localStorage`.

## Запуск
```bash
npm install
npm run dev
# затем откройте http://localhost:5173
```

## Скрипты
- `npm run dev` — локальная разработка
- `npm run build` — сборка продакшн
- `npm run preview` — предпросмотр сборки

## Что внутри
- Vite + React + TS + React Router
- Zustand c persist для корзины
- Минималистичная стилизация на CSS без UI-библиотек
- Мок‑данные в `src/data/services.ts`
- Простые фильтры каталога через query‑параметры

## Дальше можно добавить
- Настоящую оплату (Stripe/ЮKassa/CloudPayments) и сервер (Node/Express)
- Авторизацию и личный кабинет
- Фильтры/сортировку по цене и рейтингам
- i18n (ru/en), SEO-мета и микроразметку
- Админку для управления услугами


## Tailwind + shadcn/ui
Подключены TailwindCSS и базовые компоненты в стиле shadcn/ui:

- `src/components/ui/button.tsx` — `<Button variant="default|secondary|outline|ghost|destructive|link" size="sm|default|lg|icon" />`
- `src/components/ui/card.tsx` — `<Card>`, `<CardHeader>`, `<CardTitle>`, `<CardDescription>`, `<CardContent>`, `<CardFooter>`
- `src/components/ui/input.tsx` — `<Input />`
- `src/components/ui/label.tsx` — `<Label />`
- `src/components/ui/textarea.tsx` — `<Textarea />`
- `src/components/ui/badge.tsx` — `<Badge />`

Настройки — `tailwind.config.ts`, `postcss.config.js`, переменные темы в `src/index.css`.

Добавить больше компонентов можно CLI:
```bash
npx shadcn@latest add checkbox dialog dropdown-menu select sheet toast tooltip
```
