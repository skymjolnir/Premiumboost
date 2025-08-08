import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { services } from '@/data/services'
import ServiceCard from '@/components/ServiceCard'

export default function Catalog() {
  const [params, setParams] = useSearchParams()
  const qParam = params.get('q') || ''
  const gameParam = params.get('game') || 'all'
  const categoryParam = params.get('cat') || 'all'

  const [q, setQ] = useState(qParam)

  const filtered = useMemo(() => {
    return services.filter(s => {
      const matchQ = qParam ? (s.title.toLowerCase().includes(qParam.toLowerCase()) || s.short.toLowerCase().includes(qParam.toLowerCase())) : true
      const matchGame = gameParam === 'all' ? true : s.game === gameParam
      const matchCat = categoryParam === 'all' ? true : s.category === categoryParam
      return matchQ && matchGame && matchCat
    })
  }, [qParam, gameParam, categoryParam])

  function updateParam(key: string, value: string) {
    const next = new URLSearchParams(params)
    if (value === 'all' || value === '') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  const games = Array.from(new Set(services.map(s => s.game)))
  const cats = Array.from(new Set(services.map(s => s.category)))

  return (
    <div>
      <div className="card">
        <div className="grid cols-4">
          <input className="input" placeholder="Поиск..." value={q} onChange={(e)=> setQ(e.target.value)} onKeyDown={e => e.key==='Enter' && updateParam('q', q)} />
          <select className="select" value={gameParam} onChange={(e)=> updateParam('game', e.target.value)}>
            <option value="all">Все игры</option>
            {games.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
          <select className="select" value={categoryParam} onChange={(e)=> updateParam('cat', e.target.value)}>
            <option value="all">Все категории</option>
            {cats.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button className="btn" onClick={()=> { setQ(''); setParams({}, { replace:true })}}>Сбросить</button>
        </div>
      </div>

      <div className="grid cols-4 mt-4">
        {filtered.length ? filtered.map(s => <ServiceCard key={s.id} s={s} />)
          : <div className="center muted" style={{gridColumn:'1/-1'}}>Ничего не найдено</div>}
      </div>
    </div>
  )
}
