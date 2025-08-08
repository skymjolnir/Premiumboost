import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem } from '@/types'

type State = { items: CartItem[] }
type Actions = {
  add: (item: CartItem) => void
  remove: (index: number) => void
  clear: () => void
}
type Derived = { totalPrice: number; totalItems: number }

export const useCartStore = create<State & Actions & Derived>()(persist((set, get) => ({
  items: [],
  add: (item) => set({ items: [...get().items, item] }),
  remove: (index) => set({ items: get().items.filter((_, i) => i !== index) }),
  clear: () => set({ items: [] }),
  get totalPrice() {
    return get().items.reduce((sum, it) => sum + it.finalPrice * it.qty, 0)
  },
  get totalItems() {
    return get().items.reduce((sum, it) => sum + it.qty, 0)
  }
}), { name: 'novaboost_cart' }))
