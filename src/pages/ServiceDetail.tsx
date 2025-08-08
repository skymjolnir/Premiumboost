import { useParams, Link } from 'react-router-dom'
import { services } from '@/data/services'
import { formatPrice } from '@/lib/format'
import { useMemo, useState } from 'react'
import { useCartStore } from '@/store/cart'
import QuantityInput from '@/components/QuantityInput'

export default function ServiceDetail() {
  const { id } = useParams()
  const service = services.find(s => s.id === id)
  const add = useCartStore(s => s.add)

  const [platform, setPlatform] = useState(service?.options?.platform?.[0] || 'PC')
  const [region, setRegion] = useState(service?.options?.region?.[0] || 'EU')
  const [qty, setQty] = useState(1)

  const price = useMemo(() => {
    if (!service) return 0
    let p = service.basePrice
    if (service.priceModifiers?.platform && platform in service.priceModifiers.platform) {
      p += service.priceModifiers.platform[platform]
    }
    if (service.priceModifiers?.region && region in service.priceModifiers.region) {
      p += service.priceModifiers.region[region]
    }
    return p
  }, [service, platform, region])

  if (!service) return <div className="center"><div className="card">Услуга не найдена</div></div>

  const svc = service

  function handleAdd() {
    add({
      id: svc.id,
      title: svc.title,
      basePrice: svc.basePrice,
      finalPrice: price,
      qty,
      options: { platform, region }
    })
  }

  return (
    <div className="grid cols-2">
      <div className="card">
        <span className="badge">{service.game}</span>
        <h1 style={{margin:'8px 0'}}>{service.title}</h1>
        <p className="muted">{service.description}</p>
        <div className="row mt-3">
          {service.options?.platform && (
            <select className="select" value={platform} onChange={e=> setPlatform(e.target.value)}>
              {service.options.platform.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          )}
          {service.options?.region && (
            <select className="select" value={region} onChange={e=> setRegion(e.target.value)}>
              {service.options.region.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          )}
        </div>
        <div className="row mt-3">
          <QuantityInput value={qty} onChange={setQty} />
          <div className="space" />
          <div className="price" style={{fontSize:24}}>{formatPrice(price)}</div>
          <button className="btn primary" onClick={handleAdd}>В корзину</button>
        </div>
      </div>
      <div className="card">
        <h3>Как это работает</h3>
        <ol className="muted" style={{lineHeight:1.6}}>
          <li>Выберите параметры услуги и добавьте в корзину.</li>
          <li>Оформите заказ и оплатите удобным способом.</li>
          <li>Наш менеджер свяжется с вами в течение 10 минут.</li>
        </ol>
        <Link className="btn mt-3" to="/catalog">← Вернуться в каталог</Link>
      </div>
    </div>
  )
}
