# Sauvegarde Cabinet Comptable - Site d'affiliation

Site d'aide à la décision pour cabinets d'expertise-comptable cherchant une solution de sauvegarde NAS.

## 🚀 Déploiement rapide sur Vercel

### Option 1 : Via l'interface Vercel (recommandé)

1. Crée un nouveau repo GitHub et pousse ce code
2. Va sur [vercel.com](https://vercel.com)
3. Clique "Add New" → "Project"
4. Importe ton repo GitHub
5. Vercel détecte automatiquement Vite — clique "Deploy"
6. C'est en ligne !

### Option 2 : Via Vercel CLI

```bash
npm install -g vercel
cd nas-cabinet-comptable
vercel
```

## ⚙️ Configuration requise

### Liens d'affiliation Amazon

**IMPORTANT** : Avant de mettre en ligne, remplace les liens d'affiliation dans :
- `src/pages/MaterielPage.jsx`

Cherche `VOTRE-TAG-21` et remplace par ton vrai tag Amazon Associates.

### Nom de domaine (optionnel)

1. Achète ton domaine sur OVH
2. Dans Vercel : Settings → Domains → Add
3. Configure les DNS chez OVH :
   - Type A : `76.76.21.21`
   - Ou CNAME : `cname.vercel-dns.com`

## 📁 Structure du projet

```
nas-cabinet-comptable/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── HomePage.jsx          # Page d'accueil
│   │   ├── DiagnosticPage.jsx    # Diagnostic interactif
│   │   ├── ConfigurationPage.jsx # Page pilier SEO
│   │   └── MaterielPage.jsx      # Produits affiliés
│   ├── styles/
│   │   ├── global.css
│   │   └── diagnostic.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## 🔧 Développement local

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 📈 Prochaines étapes suggérées

1. **Liens affiliés** : Crée ton compte Amazon Associates et remplace les liens
2. **Analytics** : Ajoute Google Analytics ou Plausible
3. **SEO** : Ajoute des meta tags dynamiques par page
4. **Pages supplémentaires** :
   - `/configuration-1-3-personnes`
   - `/configuration-11-20-personnes`
   - Pages thématiques SEO (perte de données, RAID, etc.)

## 💰 Modèle économique

- Commission Amazon : ~3% sur l'informatique
- Panier moyen : ~1 600 €
- Commission estimée par conversion : ~48 €

Le diagnostic qualifie les visiteurs et les oriente vers le bon matériel.
