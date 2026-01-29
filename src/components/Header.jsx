import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <svg className="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="12" fill="#1e3a5f"/>
            <rect x="20" y="25" width="60" height="50" rx="4" fill="#2d5a87"/>
            <rect x="25" y="32" width="50" height="8" rx="2" fill="#4a90c2"/>
            <circle cx="70" cy="36" r="2" fill="#22c55e"/>
            <rect x="25" y="46" width="50" height="8" rx="2" fill="#4a90c2"/>
            <circle cx="70" cy="50" r="2" fill="#22c55e"/>
            <rect x="25" y="60" width="50" height="8" rx="2" fill="#4a90c2"/>
            <circle cx="70" cy="64" r="2" fill="#22c55e"/>
          </svg>
          <span>Sauvegarde Cabinet Comptable</span>
        </Link>
        <nav className="nav">
          <Link to="/diagnostic">Diagnostic gratuit</Link>
          <Link to="/configuration-4-10-personnes">Configuration</Link>
          <Link to="/materiel-recommande">Matériel</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
