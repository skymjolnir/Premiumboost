import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import ServiceDetail from './pages/ServiceDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Success from './pages/Success'
import NotFound from './pages/NotFound'
import { useCartStore } from '@/store/cart'
import Logo from './components/Logo'

export default function App() {
  const count = useCartStore(s => s.totalItems)
  const navigate = useNavigate()
  return (
    <div>
      <header className="header">
        <div className="container" style={{display:'flex', alignItems:'center', gap:12, height:64}}>
          <NavLink to="/" className="brand" style={{marginRight:12}}>
            <Logo size={24}/>
            NovaBoost
          </NavLink>
          <nav className="nav">
            <NavLink to="/catalog" className="btn">Каталог</NavLink>
            <button className="btn" onClick={() => navigate('/checkout')}>Оформить</button>
          </nav>
          <div className="space" />
          <NavLink to="/cart" className="btn accent">Корзина ({count})</NavLink>
        </div>
      </header>
      <main className="container pt-4 pb-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/service/:id" element={<ServiceDetail/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <footer style={{borderTop:'1px solid var(--border)'}} className="pb-4">
        <div className="container" style={{display:'flex', gap:12, paddingTop:16, alignItems:'center'}}>
          <span className="muted">© {new Date().getFullYear()} NovaBoost</span>
          <div className="space" />
          <a href="mailto:support@example.com" className="muted">support@example.com</a>
        </div>
      </footer>
    </div>
  )
}
