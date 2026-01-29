import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/diagnostic.css'

const questions = [
  {
    id: 'taille',
    title: 'Combien de personnes travaillent régulièrement sur les dossiers clients ?',
    type: 'single',
    options: [
      { value: '1-2', label: '1 à 2 personnes', score: { capacity: 1 } },
      { value: '3-5', label: '3 à 5 personnes', score: { capacity: 2 } },
      { value: '6-10', label: '6 à 10 personnes', score: { capacity: 3 } },
      { value: '11-20', label: '11 à 20 personnes', score: { capacity: 4 } },
    ]
  },
  {
    id: 'volume',
    title: 'Environ combien de données clients stockez-vous aujourd\'hui ?',
    hint: 'En cas de doute, choisissez "Je ne sais pas" — nous adapterons la recommandation.',
    type: 'single',
    options: [
      { value: '<500go', label: 'Moins de 500 Go', score: { capacity: 1 } },
      { value: '500go-2to', label: '500 Go à 2 To', score: { capacity: 2 } },
      { value: '2to-5to', label: '2 To à 5 To', score: { capacity: 3 } },
      { value: '>5to', label: 'Plus de 5 To', score: { capacity: 4 } },
      { value: 'unknown', label: 'Je ne sais pas', score: { capacity: 2 } },
    ]
  },
  {
    id: 'donnees_critiques',
    title: 'Quelles données sont essentielles à votre activité ?',
    hint: 'Plusieurs réponses possibles.',
    type: 'multiple',
    options: [
      { value: 'compta', label: 'Comptabilité / Dossiers clients', score: { risk: 2 } },
      { value: 'paie', label: 'Paie / Social', score: { risk: 2 } },
      { value: 'archives', label: 'Archives légales', score: { risk: 1 } },
      { value: 'emails', label: 'Emails / GED', score: { risk: 1 } },
      { value: 'logiciels', label: 'Logiciels métier', score: { risk: 1 } },
    ]
  },
  {
    id: 'logiciels',
    title: 'Quels logiciels utilisez-vous principalement ?',
    type: 'single',
    options: [
      { value: 'sage-cegid', label: 'Sage / Cegid / ACD', score: { performance: 2 } },
      { value: 'paie', label: 'Logiciel paie dédié', score: { performance: 1 } },
      { value: 'ged', label: 'GED / Portail client', score: { performance: 2 } },
      { value: 'autre', label: 'Autres / Je ne sais pas', score: { performance: 1 } },
    ]
  },
  {
    id: 'consequence_perte',
    title: 'Si vous perdiez vos données aujourd\'hui, quelle serait la conséquence ?',
    type: 'single',
    options: [
      { value: 'genant', label: 'Gênant mais gérable', score: { risk: 1 } },
      { value: 'problematique', label: 'Très problématique', score: { risk: 3 } },
      { value: 'catastrophique', label: 'Catastrophique (activité bloquée)', score: { risk: 5 } },
    ]
  },
  {
    id: 'tolerance_arret',
    title: 'Combien de temps pourriez-vous fonctionner sans accès à vos données ?',
    type: 'single',
    options: [
      { value: 'heures', label: 'Quelques heures maximum', score: { risk: 3, raid: 2 } },
      { value: 'jour', label: '1 journée', score: { risk: 2, raid: 1 } },
      { value: 'jours', label: 'Plusieurs jours', score: { risk: 1, raid: 0 } },
      { value: 'unknown', label: 'Impossible à dire', score: { risk: 2, raid: 1 } },
    ]
  },
  {
    id: 'situation_actuelle',
    title: 'Comment vos données sont-elles sauvegardées aujourd\'hui ?',
    type: 'single',
    options: [
      { value: 'rien', label: 'Pas vraiment de sauvegarde', score: { risk: 5 } },
      { value: 'disque_externe', label: 'Disque dur externe', score: { risk: 3 } },
      { value: 'nas', label: 'NAS existant', score: { risk: 1 } },
      { value: 'cloud', label: 'Cloud uniquement', score: { risk: 2 } },
      { value: 'unknown', label: 'Je ne sais pas', score: { risk: 4 } },
    ]
  },
  {
    id: 'localisation',
    title: 'Où sont stockées vos données principales ?',
    type: 'single',
    options: [
      { value: 'poste', label: 'Sur un poste de travail', score: { risk: 4 } },
      { value: 'serveur', label: 'Sur un serveur / NAS', score: { risk: 1 } },
      { value: 'cloud', label: 'Sur le cloud', score: { risk: 2 } },
      { value: 'partout', label: 'Un peu partout', score: { risk: 5 } },
    ]
  },
  {
    id: 'budget',
    title: 'Quel budget êtes-vous prêt à consacrer pour sécuriser vos données ?',
    type: 'single',
    options: [
      { value: '<500', label: 'Moins de 500 €', score: { budget: 1 } },
      { value: '500-1000', label: '500 € à 1 000 €', score: { budget: 2 } },
      { value: '1000-2000', label: '1 000 € à 2 000 €', score: { budget: 3 } },
      { value: '>2000', label: 'Plus de 2 000 €', score: { budget: 4 } },
    ]
  },
  {
    id: 'accompagnement',
    title: 'Souhaitez-vous être accompagné par un prestataire si nécessaire ?',
    type: 'single',
    options: [
      { value: 'oui', label: 'Oui', score: { accompagnement: 1 } },
      { value: 'non', label: 'Non', score: { accompagnement: 0 } },
      { value: 'peut-etre', label: 'Je ne sais pas encore', score: { accompagnement: 0.5 } },
    ]
  },
]

function DiagnosticPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleSelect = (value) => {
    if (question.type === 'multiple') {
      const current = answers[question.id] || []
      if (current.includes(value)) {
        setAnswers({ ...answers, [question.id]: current.filter(v => v !== value) })
      } else {
        setAnswers({ ...answers, [question.id]: [...current, value] })
      }
    } else {
      setAnswers({ ...answers, [question.id]: value })
    }
  }

  const isSelected = (value) => {
    if (question.type === 'multiple') {
      return (answers[question.id] || []).includes(value)
    }
    return answers[question.id] === value
  }

  const canContinue = () => {
    if (question.type === 'multiple') {
      return (answers[question.id] || []).length > 0
    }
    return answers[question.id] !== undefined
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateResults = () => {
    let riskScore = 0
    let capacityScore = 0
    let budgetLevel = 2
    
    questions.forEach(q => {
      const answer = answers[q.id]
      if (!answer) return
      
      if (q.type === 'multiple') {
        answer.forEach(val => {
          const opt = q.options.find(o => o.value === val)
          if (opt?.score?.risk) riskScore += opt.score.risk
          if (opt?.score?.capacity) capacityScore += opt.score.capacity
        })
      } else {
        const opt = q.options.find(o => o.value === answer)
        if (opt?.score?.risk) riskScore += opt.score.risk
        if (opt?.score?.capacity) capacityScore += opt.score.capacity
        if (opt?.score?.budget) budgetLevel = opt.score.budget
      }
    })

    // Determine risk level
    let riskLevel = 'low'
    let riskLabel = 'Faible'
    if (riskScore >= 15) {
      riskLevel = 'high'
      riskLabel = 'Élevé'
    } else if (riskScore >= 8) {
      riskLevel = 'medium'
      riskLabel = 'Modéré'
    }

    // Determine configuration based on taille
    const taille = answers.taille
    let config = {
      baies: 2,
      disques: '4 To',
      capaciteUtile: '4 To',
      budgetNas: '300-400',
      budgetDisques: '200',
      budgetBackup: '100',
      budgetTotal: '600-700',
      model: 'NAS 2 baies entrée de gamme'
    }

    if (taille === '3-5' || taille === '6-10') {
      config = {
        baies: 4,
        disques: '6 To',
        capaciteUtile: '~18 To',
        budgetNas: '650-750',
        budgetDisques: '1 200',
        budgetBackup: '250',
        budgetTotal: '2 100-2 300',
        model: 'NAS 4 baies professionnel (Synology DS923+ ou équivalent)'
      }
    } else if (taille === '11-20') {
      config = {
        baies: 4,
        disques: '8 To',
        capaciteUtile: '~24 To',
        budgetNas: '800-1000',
        budgetDisques: '1 600',
        budgetBackup: '300',
        budgetTotal: '2 700-3 000',
        model: 'NAS 4 baies haute performance (Synology DS923+ ou supérieur)'
      }
    }

    return { riskLevel, riskLabel, riskScore, config, budgetLevel, taille }
  }

  const restartDiagnostic = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    const results = calculateResults()
    
    return (
      <section className="section">
        <div className="container">
          <div className="diagnostic">
            <div className="results-card">
              <div className="results-header">
                <h2>Résultats de votre diagnostic</h2>
                <p>Votre niveau de risque actuel :</p>
                <div className={`risk-indicator ${results.riskLevel}`}>
                  {results.riskLevel === 'high' && '⚠️'}
                  {results.riskLevel === 'medium' && '⚡'}
                  {results.riskLevel === 'low' && '✓'}
                  {' '}{results.riskLabel}
                </div>
              </div>

              <div className="results-section">
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  Ce que cela signifie
                </h3>
                {results.riskLevel === 'high' && (
                  <div className="info-box info-box-danger">
                    <p style={{ marginBottom: 0 }}>
                      <strong>Attention :</strong> Votre cabinet présente plusieurs facteurs de risque importants. 
                      Une perte de données pourrait avoir des conséquences graves sur votre activité. 
                      Nous vous recommandons d'agir rapidement.
                    </p>
                  </div>
                )}
                {results.riskLevel === 'medium' && (
                  <div className="info-box info-box-warning">
                    <p style={{ marginBottom: 0 }}>
                      Votre situation présente des points d'amélioration. Une solution de sauvegarde 
                      adaptée vous permettrait de travailler plus sereinement et de mieux protéger vos clients.
                    </p>
                  </div>
                )}
                {results.riskLevel === 'low' && (
                  <div className="info-box info-box-success">
                    <p style={{ marginBottom: 0 }}>
                      Votre cabinet semble déjà bien organisé. Vérifiez tout de même que votre solution 
                      actuelle est bien dimensionnée pour les années à venir.
                    </p>
                  </div>
                )}
              </div>

              <div className="recommendation-box">
                <h3>Configuration recommandée pour votre cabinet</h3>
                <ul className="recommendation-list">
                  <li><strong>NAS {results.config.baies} baies</strong> professionnel</li>
                  <li>Configuration <strong>RAID 5</strong> (tolérance à la panne)</li>
                  <li>{results.config.baies} × disques durs professionnels de {results.config.disques}</li>
                  <li>Capacité utile : {results.config.capaciteUtile}</li>
                  <li>Sauvegarde externe indépendante</li>
                </ul>
              </div>

              <div className="results-section">
                <h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  Budget indicatif
                </h3>
                <div className="budget-box">
                  <div className="budget-row">
                    <span>NAS {results.config.baies} baies</span>
                    <span>{results.config.budgetNas} €</span>
                  </div>
                  <div className="budget-row">
                    <span>Disques durs ({results.config.baies} × {results.config.disques})</span>
                    <span>~{results.config.budgetDisques} €</span>
                  </div>
                  <div className="budget-row">
                    <span>Sauvegarde externe</span>
                    <span>~{results.config.budgetBackup} €</span>
                  </div>
                  <div className="budget-row">
                    <span>Total estimé</span>
                    <span>{results.config.budgetTotal} €</span>
                  </div>
                </div>
                <p className="text-muted" style={{ fontSize: '0.875rem' }}>
                  Investissement amortissable sur 5 à 7 ans, sans abonnement obligatoire.
                </p>
              </div>

              <div className="results-cta">
                <p>Découvrez le matériel que nous recommandons pour cette configuration :</p>
                <div className="cta-buttons">
                  <Link to="/materiel-recommande" className="btn btn-accent btn-lg">
                    Voir le matériel recommandé
                  </Link>
                  <Link to="/configuration-4-10-personnes" className="btn btn-secondary">
                    En savoir plus sur cette configuration
                  </Link>
                  <button onClick={restartDiagnostic} className="btn btn-back" style={{ border: 'none' }}>
                    Refaire le diagnostic
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">
        <div className="diagnostic">
          {currentQuestion === 0 && (
            <div className="diagnostic-intro">
              <h2>Diagnostic de sauvegarde pour votre cabinet</h2>
              <p>
                En quelques questions, découvrez votre niveau de risque 
                et la solution adaptée à votre cabinet.
              </p>
              <div className="diagnostic-features">
                <div className="diagnostic-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>5 minutes</span>
                </div>
                <div className="diagnostic-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span>Aucune inscription</span>
                </div>
                <div className="diagnostic-feature">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Recommandation personnalisée</span>
                </div>
              </div>
            </div>
          )}

          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="progress-text">
              <span>Question {currentQuestion + 1} sur {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          <div className="question-card">
            <div className="question-number">{currentQuestion + 1}</div>
            <h3 className="question-title">{question.title}</h3>
            {question.hint && <p className="question-hint">{question.hint}</p>}

            <div className="options">
              {question.options.map((option) => (
                <label 
                  key={option.value} 
                  className={`option ${isSelected(option.value) ? 'selected' : ''}`}
                  onClick={() => handleSelect(option.value)}
                >
                  <input 
                    type={question.type === 'multiple' ? 'checkbox' : 'radio'} 
                    name={question.id}
                    value={option.value}
                    checked={isSelected(option.value)}
                    onChange={() => {}}
                  />
                  {question.type === 'multiple' ? (
                    <span className="option-checkbox" />
                  ) : (
                    <span className="option-radio" />
                  )}
                  <span className="option-text">{option.label}</span>
                </label>
              ))}
            </div>

            <div className="question-nav">
              {currentQuestion > 0 ? (
                <button className="btn btn-back" onClick={handleBack}>
                  ← Précédent
                </button>
              ) : (
                <div></div>
              )}
              <button 
                className="btn btn-primary" 
                onClick={handleNext}
                disabled={!canContinue()}
                style={{ opacity: canContinue() ? 1 : 0.5 }}
              >
                {currentQuestion === questions.length - 1 ? 'Voir les résultats' : 'Suivant →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiagnosticPage
