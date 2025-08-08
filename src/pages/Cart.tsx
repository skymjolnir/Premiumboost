import { Link } from 'react-router-dom'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/format'

export default function Cart() {
  const items = useCartStore(s => s.items)
  const remove = useCartStore(s => s.remove)
  const clear = useCartStore(s => s.clear)
  const total = useCartStore(s => s.totalPrice)

  if (!items.length) {
    return (
      <div className="center">
        <div className="card">
          <div className="muted">Корзина пуста</div>
          <div className="row mt-3">
            <Link className="btn" to="/catalog">В каталог</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid cols-2">
      <div className="card">
        <h2>Корзина</h2>
        <div className="mt-3">
          {items.map((it, i) => (
            <div key={i} style={{display:'grid', gridTemplateColumns:'1fr auto auto', gap:12, alignItems:'center', borderBottom:'1px solid var(--border)', padding:'12px 0'}}>
              <div>
                <div style={{fontWeight:600}}>{it.title}</div>
                {it.options && <div className="muted" style={{fontSize:12}}>
                  {Object.entries(it.options).map(([k,v]) => <span key={k} style={{marginRight:8}}>{k}: {v}</span>)}
                </div>}
              </div>
              <div className="muted">x{it.qty}</div>
              <div className="row">
                <div className="price">{formatPrice(it.finalPrice * it.qty)}</div>
                <button className="btn" onClick={()=> remove(i)}>Удалить</button>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-3">
          <button className="btn" onClick={clear}>Очистить</button>
          <div className="space" />
          <Link className="btn primary" to="/checkout">Перейти к оформлению</Link>
        </div>
      </div>
      <div className="card">
        <h3>Итого</h3>
        <div className="row" style={{fontSize:20, marginTop:8}}>
          <div className="space" />
          <div className="price">{formatPrice(total)}</div>
        </div>
        <Link to="/checkout" className="btn primary mt-3">Оформить заказ</Link>
      </div>
    </div>
  )
}
