import { Link } from 'react-router-dom'

function MaterielPage() {
  // TODO: Remplacer ces URLs par vos vrais liens d'affiliation (Amazon, LDLC, Materiel.net, etc.)
  const affiliateLinks = {
    nas_synology: '#', // Remplacer par votre lien affilié
    nas_synology_alt: '#', // Remplacer par votre lien affilié
    disque_wd_red: '#', // Remplacer par votre lien affilié
    disque_seagate: '#', // Remplacer par votre lien affilié
    backup_wd: '#', // Remplacer par votre lien affilié
  }

  return (
    <>
      <section className="hero" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <h1>Matériel recommandé pour cabinet comptable</h1>
          <p>Sélection de produits fiables et éprouvés pour sécuriser vos données.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="info-box info-box-info">
            <p style={{ marginBottom: 0 }}>
              <strong>Transparence :</strong> Ce site utilise des liens affiliés. 
              En achetant via ces liens, vous nous soutenez sans payer plus cher. 
              Nous recommandons uniquement des produits adaptés aux cabinets comptables.
            </p>
          </div>

          <p style={{ marginTop: '1.5rem' }}>
            Cette sélection correspond à la <Link to="/configuration-4-10-personnes">configuration recommandée pour 4 à 10 personnes</Link>.
            Pour une recommandation personnalisée, <Link to="/diagnostic">faites le diagnostic</Link>.
          </p>
        </div>
      </section>

      {/* NAS */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginTop: 0 }}>1. Boîtier NAS 4 baies</h2>
          <p>
            Le NAS est le cœur de votre système. Nous recommandons <strong>Synology</strong> pour 
            sa fiabilité et son interface simple, idéale pour les non-techniciens.
          </p>

          <div className="card" style={{ marginBottom: '1.5rem', border: '2px solid var(--accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="risk-badge risk-low">★ Recommandé</span>
            </div>
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Synology DS923+</h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
              NAS 4 baies professionnel — Le choix de référence pour les cabinets comptables.
            </p>
            <ul style={{ marginBottom: '1rem' }}>
              <li>4 baies pour disques 3.5" ou 2.5"</li>
              <li>Processeur AMD Ryzen (performances élevées)</li>
              <li>4 Go RAM extensible à 32 Go</li>
              <li>2 ports Ethernet Gigabit</li>
              <li>Interface DSM simple et complète</li>
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>~650-750 €</span>
              <a href={affiliateLinks.nas_synology} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                Voir le produit →
              </a>
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="risk-badge risk-medium">Alternative économique</span>
            </div>
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Synology DS423+</h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
              Option plus économique, performances correctes pour la plupart des usages.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--gray-600)' }}>~550-650 €</span>
              <a href={affiliateLinks.nas_synology_alt} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Voir le produit →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Disques */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginTop: 0 }}>2. Disques durs professionnels (×4)</h2>
          <p>
            <strong>Ne lésinez pas sur les disques.</strong> Les disques grand public ne sont pas 
            conçus pour un fonctionnement 24h/24 dans un NAS. Choisissez des modèles "NAS" ou "Pro".
          </p>

          <div className="card" style={{ marginBottom: '1.5rem', border: '2px solid var(--accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="risk-badge risk-low">★ Recommandé</span>
            </div>
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>WD Red Plus 6 To (×4)</h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
              Disques conçus spécifiquement pour NAS. Fiabilité reconnue, garantie 3 ans.
            </p>
            <ul style={{ marginBottom: '1rem' }}>
              <li>6 To de capacité par disque</li>
              <li>Technologie CMR (plus fiable que SMR)</li>
              <li>Optimisé pour RAID et usage 24/7</li>
              <li>Garantie constructeur 3 ans</li>
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>~180 € / disque</span>
              <span style={{ color: 'var(--gray-500)' }}>(~720 € pour 4)</span>
              <a href={affiliateLinks.disque_wd_red} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                Voir le produit →
              </a>
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="risk-badge risk-medium">Alternative</span>
            </div>
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Seagate IronWolf 6 To (×4)</h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
              Excellente alternative, performances similaires. Garantie 3 ans également.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--gray-600)' }}>~170 € / disque</span>
              <a href={affiliateLinks.disque_seagate} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Voir le produit →
              </a>
            </div>
          </div>

          <div className="info-box info-box-warning" style={{ marginTop: '1.5rem' }}>
            <p style={{ marginBottom: 0 }}>
              <strong>Conseil :</strong> Évitez d'acheter les 4 disques du même lot. 
              Si possible, achetez-les à des dates différentes ou chez différents vendeurs 
              pour réduire le risque de défaillance simultanée.
            </p>
          </div>
        </div>
      </section>

      {/* Backup */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginTop: 0 }}>3. Sauvegarde externe</h2>
          <p>
            <strong>Un NAS seul ne suffit pas.</strong> Une sauvegarde externe vous protège 
            contre le vol, l'incendie, les ransomwares et les erreurs humaines.
          </p>

          <div className="card" style={{ marginBottom: '1.5rem', border: '2px solid var(--accent)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span className="risk-badge risk-low">★ Recommandé</span>
            </div>
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Disque externe WD Elements 8 To</h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
              Pour une sauvegarde physique déportée (à stocker hors du cabinet).
            </p>
            <ul style={{ marginBottom: '1rem' }}>
              <li>8 To de capacité</li>
              <li>USB 3.0 (compatible avec le NAS)</li>
              <li>Compact et transportable</li>
              <li>À conserver dans un autre lieu (domicile, coffre...)</li>
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>~150-200 €</span>
              <a href={affiliateLinks.backup_wd} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                Voir le produit →
              </a>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Alternative : Backup cloud</h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>
              Synology propose <strong>Hyper Backup</strong> avec plusieurs options cloud :
            </p>
            <ul style={{ marginBottom: '1rem' }}>
              <li><strong>Synology C2</strong> — Solution intégrée, simple à configurer</li>
              <li><strong>Backblaze B2</strong> — Économique (~5€/To/mois)</li>
              <li><strong>AWS S3</strong> — Pour les plus techniques</li>
            </ul>
            <p className="text-muted" style={{ marginBottom: 0 }}>
              Le cloud est complémentaire au disque externe, pas un remplacement.
            </p>
          </div>
        </div>
      </section>

      {/* Récap */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginTop: 0 }}>Récapitulatif du budget</h2>
          
          <div className="card" style={{ background: 'var(--gray-100)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--gray-300)' }}>
              <span>NAS Synology DS923+</span>
              <span><strong>650-750 €</strong></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--gray-300)' }}>
              <span>4 × WD Red Plus 6 To</span>
              <span><strong>~720 €</strong></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--gray-300)' }}>
              <span>Disque externe 8 To</span>
              <span><strong>~180 €</strong></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', marginTop: '0.5rem', borderTop: '2px solid var(--primary)' }}>
              <span style={{ fontSize: '1.1rem' }}><strong>Total estimé</strong></span>
              <span style={{ fontSize: '1.5rem', color: 'var(--primary)' }}><strong>1 550 - 1 650 €</strong></span>
            </div>
          </div>

          <div className="info-box info-box-success" style={{ marginTop: '1.5rem' }}>
            <p style={{ marginBottom: 0 }}>
              <strong>Note :</strong> Les prix varient selon les revendeurs. 
              Comparez les offres et guettez les promotions pour faire des économies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section section-alt">
        <div className="container text-center" style={{ maxWidth: '600px' }}>
          <h2 style={{ marginTop: 0 }}>Besoin d'une recommandation personnalisée ?</h2>
          <p>
            Cette sélection correspond à un cabinet de 4 à 10 personnes. 
            Votre situation est peut-être différente.
          </p>
          <Link to="/diagnostic" className="btn btn-accent btn-lg">
            Faire le diagnostic gratuit
          </Link>
        </div>
      </section>
    </>
  )
}

export default MaterielPage
