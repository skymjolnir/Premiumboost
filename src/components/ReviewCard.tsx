import type { Review } from '@/types'
import GameTag from './tags/GameTag'

export default function ReviewCard({ r }: { r: Review }) {
  const stars = '★'.repeat(Math.max(0, Math.min(5, r.rating))) + '☆'.repeat(Math.max(0, 5 - r.rating))
  const dateLabel = new Date(r.date).toLocaleDateString('ru-RU')

  return (
    <div className="card">
      <div className="row">
        <GameTag game={r.game} />
        <span className="badge" aria-label={`Рейтинг ${r.rating} из 5`}>{stars}</span>
      </div>
      <p className="muted" style={{ minHeight: 60, marginTop: 8 }}>“{r.text}”</p>
      <div className="row mt-3">
        <span style={{ fontWeight: 600 }}>{r.author}</span>
        <div className="space" />
        <span className="muted" style={{ fontSize: 12 }}>{dateLabel}</span>
      </div>
    </div>
  )
}