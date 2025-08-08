import type { Order } from '@/types'

const KEY = 'novaboost_orders'

function getAll(): Order[] {
  const raw = localStorage.getItem(KEY)
  return raw ? JSON.parse(raw) as Order[] : []
}

function persist(list: Order[]) {
  localStorage.setItem(KEY, JSON.stringify(list))
}

export function saveOrder(order: Omit<Order, 'id'>): string {
  const list = getAll()
  const id = 'NB-' + Math.random().toString(36).slice(2, 8).toUpperCase()
  const next: Order = { ...order, id }
  list.unshift(next)
  persist(list)
  return id
}

export function listOrders() { return getAll() }
