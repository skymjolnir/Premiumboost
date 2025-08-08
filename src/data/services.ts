import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'val-rank-boost',
    title: 'Valorant — Повышение ранга',
    short: 'Boost ранга с гарантией и безопасностью',
    description: 'Наши бустеры поднимут ваш ранг в Valorant быстро и аккуратно. Играем на основном или твинк-аккаунте. Возможны стримы процесса.',
    game: 'Valorant',
    category: 'Буст',
    basePrice: 25,
    options: { platform: ['PC'], region: ['EU', 'NA'] },
    priceModifiers: { region: { 'NA': 3 } }
  },
  {
    id: 'cs2-premier-mm',
    title: 'CS2 — Премьер ММ поднятие рейтинга',
    short: 'Контроль, отработка линеек, стат-трекинг',
    description: 'Поможем поднять ваш Premier рейтинг в CS2. Используем тренированные стратегии и совместные сессии.',
    game: 'CS2',
    category: 'Буст',
    basePrice: 20,
    options: { platform: ['PC'], region: ['EU'] }
  },
  {
    id: 'dota2-coaching',
    title: 'Dota 2 — Коучинг 1 час',
    short: 'Личный анализ игр и план развития',
    description: 'Проведём разбор ваших реплеев, дадим чёткий план тренировок и пул героев.',
    game: 'Dota 2',
    category: 'Коучинг',
    basePrice: 15,
    options: { platform: ['PC'], region: ['EU', 'CIS'] },
    priceModifiers: { region: { 'CIS': -2 } }
  },
  {
    id: 'wow-mythic-plus',
    title: 'WoW — Mythic+ ключи',
    short: 'Прокачка ключей любой сложности',
    description: 'Закрываем ключи любой сложности в составе проверенной пати. Лут и время согласуем заранее.',
    game: 'World of Warcraft',
    category: 'Пве услуги',
    basePrice: 30,
    options: { platform: ['PC'], region: ['EU', 'NA'] },
    priceModifiers: { region: { 'NA': 5 } }
  },
  {
    id: 'lol-elo-boost',
    title: 'LoL — ELO Boost',
    short: 'Повышение лиги быстро и без бана',
    description: 'Профессиональные бустеры поднимут вашу лигу, сохраняя высокий винрейт. Возможен дуо-буст.',
    game: 'League of Legends',
    category: 'Буст',
    basePrice: 22,
    options: { platform: ['PC'], region: ['EUW', 'EUNE', 'RU'] },
    priceModifiers: { region: { 'EUW': 3 } }
  },
  {
    id: 'apex-badge-farm',
    title: 'Apex Legends — Фарм значков',
    short: '20 киллов / 4к урона / другие ачивки',
    description: 'Получим любые популярные баджи на вашем аккаунте в безопасном режиме.',
    game: 'Apex Legends',
    category: 'Ачивки',
    basePrice: 18,
    options: { platform: ['PC', 'PS', 'Xbox'], region: ['EU', 'NA'] },
    priceModifiers: { platform: { 'PS': 2, 'Xbox': 2 } }
  },
  {
    id: 'fortnite-wins',
    title: 'Fortnite — Победы в матчах',
    short: 'Накрутим винстрик аккуратно',
    description: 'Соберём победные матчи без риска для аккаунта.',
    game: 'Fortnite',
    category: 'Матчи',
    basePrice: 12,
    options: { platform: ['PC', 'PS', 'Xbox', 'Switch'], region: ['EU', 'NA'] }
  },
  {
    id: 'minecraft-build',
    title: 'Minecraft — Постройка на заказ',
    short: 'Построим базу, фермы или спавн',
    description: 'Команда билдеров создаст объект любой сложности на вашем сервере или карте.',
    game: 'Minecraft',
    category: 'Кастом',
    basePrice: 10,
    options: { platform: ['PC'], region: ['EU'] }
  }
]
