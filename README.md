# oppus-landing-page-test

Site vitrine moderne pour la solution SaaS **Oppus** — plateforme de gestion documentaire RH (génération et sécurisation de contrats et documents RH, conformité en temps réel), en partenariat avec Lefebvre Dalloz.

## Stack

- **Vite + React + TypeScript**
- **React Router** (multi-pages : Accueil, Oppus Expert, Oppus RH, Contact)
- **Tailwind CSS** (design system bleu pro & épuré)
- **Framer Motion** (animations)
- **lucide-react** (icônes)

## Démarrage

```bash
npm install
npm run dev      # serveur de dev (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Structure

```
src/
├── components/   # Navbar, Footer, Button, Section, FeatureCard,
│                 # PartnerBanner, CtaBand, PageHero, ImageRow,
│                 # Marquee, Counter, FeatureTable, Logo
├── pages/        # Home, Expert, RH, Contact
├── content.ts    # contenu centralisé (types de documents, fonctionnalités)
└── App.tsx       # routes + layout
public/assets/    # visuels produit
```

## Notes

- Le **formulaire de contact** est factice (aucune donnée envoyée). Point d'accroche : `handleSubmit` dans `src/pages/Contact.tsx`.
- **Déploiement SPA** : configurer un fallback vers `index.html` (Netlify `_redirects`, Vercel rewrite, etc.) pour que `/expert`, `/rh`, `/contact` fonctionnent en accès direct.
