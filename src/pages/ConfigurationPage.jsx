import { Link } from 'react-router-dom'

function ConfigurationPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <h1>Sauvegarde des données pour cabinet comptable de 4 à 10 personnes</h1>
          <p>La configuration recommandée : fiable, évolutive, sans surdimensionnement.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '1.1rem' }}>
            Lorsqu'un cabinet d'expertise-comptable atteint 4 à 10 collaborateurs, 
            la gestion et la sécurisation des données deviennent un <strong>enjeu critique</strong>.
          </p>
          <p>
            Dossiers clients, paie, archives légales, logiciels métier : une perte de données 
            ou une indisponibilité prolongée peut avoir des <strong>conséquences graves</strong>, 
            tant sur le plan opérationnel que juridique.
          </p>
          <p>
            Cette page présente <strong>la configuration de sauvegarde la plus adaptée</strong> à 
            ce type de cabinet : fiable, évolutive, sans surdimensionnement inutile.
          </p>
          
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/diagnostic" className="btn btn-accent">
              Faire le diagnostic gratuit de mon cabinet →
            </Link>
          </div>
        </div>
      </section>

      {/* À qui s'adresse */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginTop: 0 }}>À qui s'adresse cette configuration ?</h2>
          <p>Cette configuration est adaptée si votre cabinet :</p>
          <ul className="check-list">
            <li>compte <strong>entre 4 et 10 personnes</strong></li>
            <li>travaille quotidiennement sur des dossiers clients partagés</li>
            <li>utilise des logiciels comptables et de paie</li>
            <li>conserve des données sensibles sur plusieurs années</li>
            <li>ne peut pas se permettre une interruption prolongée</li>
          </ul>
          
          <div className="info-box info-box-info">
            <p style={{ marginBottom: 0 }}>
              <strong>Note :</strong> Si vous êtes moins de 4 ou plus de 10 personnes, 
              une configuration différente est recommandée. 
              <Link to="/diagnostic"> Faites le diagnostic</Link> pour obtenir une recommandation personnalisée.
            </p>
          </div>
        </div>
      </section>

      {/* Risques */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginTop: 0 }}>Les risques à partir de 4-5 collaborateurs</h2>
          <p>À ce stade, les erreurs les plus fréquentes sont :</p>
          
          <div className="info-box info-box-danger">
            <ul style={{ marginBottom: 0 }}>
              <li>Stocker les données sur <strong>un simple poste</strong> de travail</li>
              <li>Utiliser <strong>un NAS trop petit (2 baies)</strong> sans marge d'évolution</li>
              <li>Confondre <strong>stockage</strong> et <strong>sauvegarde</strong></li>
              <li>Se reposer uniquement sur un cloud non maîtrisé</li>
            </ul>
          </div>
          
          <p>
            Ces solutions peuvent fonctionner un temps, mais deviennent rapidement 
            des <strong>points de fragilité</strong> pour le cabinet.
          </p>
        </div>
      </section>

      {/* Configuration recommandée */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginTop: 0 }}>Configuration recommandée</h2>
          
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
            color: 'white',
            marginBottom: '2rem'
          }}>
            <h3 style={{ color: 'white', marginTop: 0 }}>
              ✓ La solution la plus équilibrée pour un cabinet de 4 à 10 personnes
            </h3>
            <p>Nous recommandons :</p>
            <ul className="check-list" style={{ paddingLeft: '1.5rem' }}>
              <li style={{ color: 'white' }}>Un <strong>NAS professionnel 4 baies</strong></li>
              <li style={{ color: 'white' }}>Une configuration <strong>RAID 5</strong></li>
              <li style={{ color: 'white' }}>Des <strong>disques durs professionnels</strong></li>
              <li style={{ color: 'white' }}>Une <strong>sauvegarde externe indépendante</strong></li>
            </ul>
            <p style={{ marginBottom: 0 }}>
              Cette architecture offre le <strong>meilleur compromis</strong> entre 
              sécurité, capacité, performance et durabilité.
            </p>
          </div>

          <h3>Pourquoi un NAS 4 baies ?</h3>
          <p>Un NAS 4 baies permet :</p>
          <ul>
            <li>d'absorber la croissance des données sans tout remplacer</li>
            <li>de répartir les risques matériels</li>
            <li>de maintenir de bonnes performances même avec plusieurs utilisateurs</li>
            <li>de conserver une marge de manœuvre sur 5 à 7 ans</li>
          </ul>
          
          <div className="info-box info-box-warning">
            <p style={{ marginBottom: 0 }}>
              <strong>À partir de 4 utilisateurs</strong>, un NAS 2 baies devient une limitation inutile : 
              capacité limitée, maintenance plus risquée, évolutivité quasi nulle.
            </p>
          </div>

          <h3>Pourquoi le RAID 5 ?</h3>
          <p>Le RAID 5 permet :</p>
          <ul>
            <li>de continuer à travailler même en cas de panne d'un disque</li>
            <li>de limiter les interruptions de service</li>
            <li>d'optimiser l'espace disponible sans sacrifier la sécurité</li>
          </ul>
          <p>
            C'est aujourd'hui <strong>le standard raisonnable</strong> pour ce type de cabinet.
          </p>
        </div>
      </section>

      {/* Budget */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginTop: 0 }}>Capacité et budget réalistes</h2>
          
          <h3>Exemple de configuration type</h3>
          <ul>
            <li>NAS 4 baies professionnel</li>
            <li>4 disques durs professionnels de 6 To</li>
            <li>Capacité utile : ~18 To (RAID 5)</li>
            <li>Sauvegarde externe (cloud ou disque déporté)</li>
          </ul>

          <h3>Budget indicatif</h3>
          <div className="card" style={{ background: 'var(--gray-100)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--gray-200)' }}>
              <span>NAS 4 baies (Synology DS923+ ou équivalent)</span>
              <span><strong>650-750 €</strong></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--gray-200)' }}>
              <span>4 × disques durs professionnels 6 To</span>
              <span><strong>~1 200 €</strong></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--gray-200)' }}>
              <span>Sauvegarde externe</span>
              <span><strong>~250 €</strong></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', marginTop: '0.5rem', borderTop: '2px solid var(--gray-300)' }}>
              <span><strong>Total estimé</strong></span>
              <span style={{ fontSize: '1.25rem', color: 'var(--primary)' }}><strong>2 100-2 300 €</strong></span>
            </div>
          </div>
          
          <p className="text-muted" style={{ marginTop: '1rem' }}>
            Investissement amortissable sur plusieurs années, sans abonnement obligatoire.
          </p>
          
          <div className="info-box info-box-success">
            <p style={{ marginBottom: 0 }}>
              <strong>À mettre en perspective :</strong> Ce budget représente une fraction du coût 
              réel d'une perte de données ou d'une activité à l'arrêt pendant plusieurs jours.
            </p>
          </div>
        </div>
      </section>

      {/* Sauvegarde externe */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginTop: 0 }}>Et la sauvegarde externe ?</h2>
          <p>
            Un NAS, même bien configuré, <strong>ne suffit pas seul</strong>.
          </p>
          <p>Une sauvegarde externe est indispensable pour se protéger contre :</p>
          <ul>
            <li>les erreurs humaines (suppression accidentelle)</li>
            <li>les vols ou sinistres (incendie, dégât des eaux)</li>
            <li>les ransomwares (cryptolockers)</li>
          </ul>
          
          <p>La configuration recommandée inclut toujours :</p>
          <ul className="check-list">
            <li>soit un <strong>backup cloud chiffré</strong></li>
            <li>soit une <strong>sauvegarde physique déportée</strong> (autre lieu)</li>
          </ul>
        </div>
      </section>

      {/* CTA Matériel */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginTop: 0 }}>Matériel recommandé</h2>
          <p>
            Nous privilégions des solutions reconnues pour leur fiabilité, leur simplicité 
            d'administration et leur longévité, particulièrement adaptées aux cabinets comptables.
          </p>
          
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/materiel-recommande" className="btn btn-primary btn-lg">
              Voir le matériel recommandé pour cette configuration
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Diagnostic */}
      <section className="section section-alt">
        <div className="container text-center" style={{ maxWidth: '600px' }}>
          <h2 style={{ marginTop: 0 }}>Pas sûr que cette configuration vous corresponde ?</h2>
          <p>
            Chaque cabinet est différent. En 5 minutes, obtenez une recommandation 
            personnalisée basée sur votre situation réelle.
          </p>
          <Link to="/diagnostic" className="btn btn-accent btn-lg">
            Faire le diagnostic gratuit
          </Link>
        </div>
      </section>

      {/* Conclusion */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <h2 style={{ marginTop: 0 }}>En résumé</h2>
            <p style={{ fontSize: '1.1rem' }}>
              Pour un cabinet comptable de 4 à 10 personnes, une solution de sauvegarde 
              fiable n'est pas un luxe : c'est une <strong>assurance de continuité</strong>.
            </p>
            <p style={{ marginBottom: 0 }}>
              Une configuration bien pensée permet de travailler sereinement, 
              aujourd'hui comme demain.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ConfigurationPage
