import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-text">
          <p>Site indépendant d'aide à la décision pour cabinets d'expertise-comptable</p>
          <p className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
            © {new Date().getFullYear()} — Ce site utilise des liens affiliés. 
            En achetant via nos liens, vous nous soutenez sans surcoût.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/diagnostic">Diagnostic</Link>
          <Link to="/configuration-4-10-personnes">Configuration recommandée</Link>
          <Link to="/materiel-recommande">Matériel</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
