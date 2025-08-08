export type Service = {
  id: string
  title: string
  short: string
  description: string
  game: string
  category: string
  basePrice: number
  options?: {
    platform?: string[]
    region?: string[]
  }
  priceModifiers?: {
    platform?: Record<string, number>
    region?: Record<string, number>
  }
}

export type CartItem = {
  id: string
  title: string
  basePrice: number
  finalPrice: number
  qty: number
  options?: Record<string, string>
}

export type Order = {
  id: string
  items: CartItem[]
  total: number
  createdAt: string
  contact: {
    email: string
    discord?: string
    nickname?: string
    comment?: string
  }
}

export type Review = {
  id: string
  author: string
  game: string
  rating: number // 1..5
  text: string
  date: string // ISO date
}
