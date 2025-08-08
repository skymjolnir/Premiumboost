import { Link } from 'react-router-dom'
import { formatPrice } from '@/lib/format'
import type { Service } from '@/types'
import GameTag from './tags/GameTag'

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <div className="card">
      <div className="row">
        <GameTag game={s.game} />
        <span className="badge">{s.category}</span>
      </div>
      <h3 style={{margin:'8px 0'}}>{s.title}</h3>
      <p className="muted" style={{minHeight:40}}>{s.short}</p>
      <div className="row mt-3">
        <div className="price">{formatPrice(s.basePrice)}</div>
        <div className="space" />
        <Link to={`/service/${s.id}`} className="btn primary">Подробнее</Link>
      </div>
    </div>
  )
}
