import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="center">
      <div className="card">
        <div className="muted">Страница не найдена</div>
        <div className="row mt-3"><Link to="/" className="btn">На главную</Link></div>
      </div>
    </div>
  )
}
