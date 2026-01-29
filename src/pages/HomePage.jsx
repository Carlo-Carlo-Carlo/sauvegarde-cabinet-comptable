import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Sécurisez les données de votre cabinet comptable</h1>
          <p>
            Choisissez une solution de sauvegarde fiable, adaptée à votre taille, 
            sans jargon technique ni surdimensionnement.
          </p>
          <Link to="/diagnostic" className="btn btn-accent btn-lg">
            Faire le diagnostic gratuit
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            5 minutes • Aucune inscription • Recommandation personnalisée
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section className="section section-alt">
        <div className="container">
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--gray-600)', marginBottom: 0 }}>
              "Site indépendant d'aide à la décision, spécialisé dans les solutions 
              de sauvegarde et de continuité des données pour cabinets d'expertise-comptable."
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginTop: 0 }}>Pourquoi cette page existe</h2>
          
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p>
              Chaque année, des cabinets comptables perdent des données critiques : 
              dossiers clients, paie, archives légales. Les causes sont souvent les mêmes :
            </p>
            
            <div className="info-box info-box-danger">
              <ul style={{ marginBottom: 0 }}>
                <li>Données stockées sur un simple poste de travail</li>
                <li>Confusion entre stockage et sauvegarde</li>
                <li>Solution cloud non maîtrisée</li>
                <li>NAS sous-dimensionné ou mal configuré</li>
              </ul>
            </div>
            
            <p>
              Une perte de données, c'est potentiellement des semaines de travail perdues, 
              des obligations légales non respectées, et une relation client fragilisée.
            </p>
            
            <p>
              <strong>Notre objectif</strong> : vous aider à faire le bon choix, 
              simplement, sans jargon technique.
            </p>
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginTop: 0 }}>Pour qui ?</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
            <div className="card">
              <h3 style={{ color: 'var(--accent)', marginTop: 0 }}>✓ Ce site est fait pour vous si</h3>
              <ul className="check-list">
                <li>Vous dirigez un cabinet de 1 à 20 personnes</li>
                <li>Vous gérez des données clients sensibles</li>
                <li>Vous cherchez une solution pérenne (5-7 ans)</li>
                <li>Vous voulez comprendre sans devenir expert IT</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 style={{ color: 'var(--risk-high)', marginTop: 0 }}>✗ Ce site n'est pas pour vous si</h3>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--risk-high)' }}>✗</span>
                  Vous avez une équipe IT dédiée
                </li>
                <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--risk-high)' }}>✗</span>
                  Vous cherchez la solution la moins chère
                </li>
                <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--risk-high)' }}>✗</span>
                  Vous êtes déjà équipé et satisfait
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginTop: 0 }}>Comment ça marche</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'var(--primary)', 
                color: 'white', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>1</div>
              <h3 style={{ marginTop: 0 }}>Diagnostic</h3>
              <p className="text-muted">
                Répondez à 10 questions simples sur votre cabinet et vos pratiques actuelles.
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'var(--primary)', 
                color: 'white', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>2</div>
              <h3 style={{ marginTop: 0 }}>Analyse</h3>
              <p className="text-muted">
                Nous évaluons votre niveau de risque et vos besoins réels en capacité.
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'var(--primary)', 
                color: 'white', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>3</div>
              <h3 style={{ marginTop: 0 }}>Recommandation</h3>
              <p className="text-muted">
                Vous recevez une configuration claire, avec budget et matériel adaptés.
              </p>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/diagnostic" className="btn btn-primary btn-lg">
              Commencer le diagnostic
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginTop: 0 }}>Notre approche</h2>
            <div className="info-box info-box-info" style={{ textAlign: 'left' }}>
              <p style={{ marginBottom: '0.5rem' }}><strong>Indépendance</strong> — Nous ne sommes liés à aucune marque.</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Spécialisation</strong> — Focus exclusif sur les cabinets comptables.</p>
              <p style={{ marginBottom: 0 }}><strong>Transparence</strong> — Liens affiliés clairement identifiés.</p>
            </div>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>
              En passant par nos liens, vous nous soutenez sans payer plus cher.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 style={{ marginTop: 0 }}>Prêt à sécuriser votre cabinet ?</h2>
          <p style={{ maxWidth: '500px', margin: '0 auto 1.5rem' }}>
            En 5 minutes, obtenez une recommandation personnalisée adaptée 
            à la taille et aux besoins de votre cabinet.
          </p>
          <Link to="/diagnostic" className="btn btn-accent btn-lg">
            Faire le diagnostic gratuit
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
