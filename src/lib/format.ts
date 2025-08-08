export function formatPrice(n: number, currency = 'EUR') {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency }).format(n)
}
