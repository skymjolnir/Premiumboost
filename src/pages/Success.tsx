import { useSearchParams, Link } from 'react-router-dom'

export default function Success() {
  const [params] = useSearchParams()
  const id = params.get('id')
  return (
    <div className="center">
      <div className="card">
        <h2>Заказ принят!</h2>
        <p className="muted">Номер заказа: {id}</p>
        <div className="row mt-3">
          <Link className="btn" to="/catalog">В каталог</Link>
          <Link className="btn primary" to="/">На главную</Link>
        </div>
      </div>
    </div>
  )
}
