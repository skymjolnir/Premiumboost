import { Link } from 'react-router-dom'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/data/services'

export default function Home() {
  const featured = services.slice(0, 8)
  return (
    <div>
      <section className="card" style={{padding:24, marginBottom:16}}>
        <h1 style={{fontSize:28, margin:0}}>Играй на уровне — остальное мы сделаем</h1>
        <p className="muted" style={{maxWidth:640}}>
          Услуги буста, коучинга и аккаунтов для популярных игр. Быстро, надёжно, с поддержкой 24/7.
        </p>
        <div className="row mt-3">
          <Link to="/catalog" className="btn primary">Перейти в каталог</Link>
          <Link to="/checkout" className="btn">Оформить заказ</Link>
        </div>
      </section>

      <h2 style={{margin:'12px 0'}}>Популярное</h2>
      <div className="grid cols-4">
        {featured.map(s => <ServiceCard key={s.id} s={s} />)}
      </div>
    </div>
  )
}
