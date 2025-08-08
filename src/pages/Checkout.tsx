import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/format'
import { saveOrder } from '@/lib/storage'

export default function Checkout() {
  const items = useCartStore(s => s.items)
  const total = useCartStore(s => s.totalPrice)
  const clear = useCartStore(s => s.clear)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '', discord: '', nickname: '', comment: ''
  })
  function submit(e: FormEvent) {
    e.preventDefault()
    if (!items.length) return
    const orderId = saveOrder({ items, total, contact: form, createdAt: new Date().toISOString() })
    clear()
    navigate('/success?id=' + orderId)
  }

  return (
    <div className="grid cols-2">
      <form className="card" onSubmit={submit}>
        <h2>Оформление</h2>
        <label className="mt-3">Email<input required className="input mt-2" value={form.email} onChange={e=> setForm({...form, email: e.target.value})} /></label>
        <label className="mt-3">Discord<input className="input mt-2" placeholder="username#0000" value={form.discord} onChange={e=> setForm({...form, discord: e.target.value})} /></label>
        <label className="mt-3">Ник в игре<input className="input mt-2" value={form.nickname} onChange={e=> setForm({...form, nickname: e.target.value})} /></label>
        <label className="mt-3">Комментарий<textarea className="input mt-2" rows={4} value={form.comment} onChange={e=> setForm({...form, comment: e.target.value})} /></label>
        <button className="btn primary mt-3" type="submit" disabled={!items.length}>Подтвердить заказ</button>
      </form>
      <div className="card">
        <h3>Ваш заказ</h3>
        {!items.length && <div className="muted">Корзина пуста</div>}
        {items.map((it, i) => (
          <div key={i} style={{display:'grid', gridTemplateColumns:'1fr auto', gap:12, alignItems:'center', borderBottom:'1px solid var(--border)', padding:'12px 0'}}>
            <div>
              <div style={{fontWeight:600}}>{it.title}</div>
              {it.options && <div className="muted" style={{fontSize:12}}>
                {Object.entries(it.options).map(([k,v]) => <span key={k} style={{marginRight:8}}>{k}: {v}</span>)}
              </div>}
            </div>
            <div className="price">x{it.qty} — {formatPrice(it.finalPrice * it.qty)}</div>
          </div>
        ))}
        <div className="row mt-3">
          <div className="space" />
          <div className="price" style={{fontSize:22}}>Итого: {formatPrice(total)}</div>
        </div>
        <div className="muted mt-3">Оплата на демо-сайте не взимается. Данные сохраняются локально.</div>
      </div>
    </div>
  )
}
