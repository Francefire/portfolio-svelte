# Portfolio – Touhami AGLAGAL

## 1. Vision & Objectifs

- Vision: Portfolio professionnel mettant en avant polyvalence full stack (Java / JS / Bases de données) et capacité à livrer des projets concrets.

- Objectifs principaux:
  1. Convaincre un recruteur en < 90 secondes (scannabilité, clarté des projets).
  2. Montrer diversité techno (Java EE, Next.js, Svelte, Express, DB relationnelles & NoSQL).
  3. Offrir un accès rapide au CV (téléchargement) et au contact.
  4. Valoriser résolution de problèmes réels et approche structurée.
  5. Préparer une base extensible (blog / analytics / features temps réel plus tard).

## 2. Public Cible & Usage

- Cibles: Recruteurs techniques, managers produit, responsables RH, clients freelance potentiels.

- Cas d’usage:
  - Arrivée depuis LinkedIn → lecture hero → ouverture d’un projet → clic contact.
  - Recherche sur nom/prénom → validation profil → téléchargement CV.
  - Client freelance → vérifie adaptabilité & diversité de stacks.

## 3. Proposition de Valeur

One-liner: "Développeur full stack adaptable, orienté livraison, maîtrisant frontend réactif et backend structuré."

Différenciateurs:
- Expérience temps réel (Socket.io + Discord API).
- Capacité à customiser un e-commerce (CSS + 3D embed).
- Connaissance Java EE + stacks modernes JS.
- Polyglotte (FR, EN C2, ES B2).

## 4. Persona(s)

- Recruteur Tech: veut vérifier stack, propreté, clarté des projets.
- Manager Produit: cherche capacité à comprendre besoin et livrer.
- Client freelance: veut preuve d’autonomie et adaptabilité.

## 5. Architecture de Contenu

Pages / Sections:

- Accueil (Hero, pitch, CTA principaux)
- Projets (liste + fiche détaillée optionnelle)
- Compétences (groupées par catégorie + tags)
- À propos (parcours, valeurs, approche de travail)
- CV (téléchargement PDF + aperçu)
- Contact (formulaire ou mailto + liens réseaux)
- (Backlog) Blog / Articles / Veille techno

Table sections:

| Section  | Objectif                                | Type contenu               | CTA                |
|----------|------------------------------------------|----------------------------|--------------------|
| Hero     | Identifier profil vite                   | texte court / bouton       | Voir Projets / CV  |
| Projets  | Preuve concrète de compétences           | cards + tags               | Ouvrir / Contact   |
| Compétences | Synthèse techno exploitable          | listes + tags              | Voir projet lié    |
| À propos | Humaniser + crédibilité                  | texte structuré            | Contact            |
| CV       | Téléchargement direct                    | embed + bouton             | Télécharger        |
| Contact  | Conversion                               | formulaire / mailto        | Envoyer message    |

## 6. Parcours Utilisateur

Flux critiques:

1. Arrivée → scan hero → scroll projets → clic fiche → Contact.
2. Arrivée → bouton CV → téléchargement.
3. Arrivée → Compétences → validation → Contact.

Points de friction potentiels: trop de texte, absence de hiérarchie visuelle, lenteur mobile.

## 7. Fonctionnalités

MVP:

- Navigation responsive.
- Liste projets statiques (JSON/TS).
- Téléchargement CV PDF.
- Meta SEO basiques + favicon + robots existant.
- Formulaire contact minimal (mailto fallback).

Nice-to-have:

- Filtre projets par stack/tag.
- Mode sombre / clair.
- Animations douces (transitions section + hover).
- Génération pages projets individuelles.

Backlog futur:

- Blog Markdown.
- Stats GitHub (API) / contribution graph simplifié.
- Formulaire serverless (Resend / Email API) + honeypot.
- OG image dynamique.

## 8. Stack Technique

- Framework: SvelteKit + TypeScript.
- Style: Tailwind CSS (rapide, atomic + thème).
- Données projets: fichier TS/JSON interne (pas de CMS au départ).
- Build & Deploy: (À décider) – Vercel recommandé (simplicité + edge adapt OG plus tard).

Justification: rapidité de mise en œuvre + hydrate seulement nécessaire + facile à étendre.

## 9. Données & Sources

Modèle projet initial:

```ts
export interface Project {
  id: string;
  slug: string;
  titre: string;
  periode?: string;
  role?: string;
  stack: string[];
  resume: string;
  contexte?: string;
  defi?: string;
  approche?: string;
  resultat?: string;
  lien_demo?: string;
  repo?: string;
  mots_cles?: string[];
}
```

## 10. Intégrations

- GitHub: liens projets (si public) – TODO: préciser repos.
- LinkedIn: profil.
- Email: mailto + futur form.
- (Optionnel) Analytics: Plausible ou Umami – TODO décision.
- OG image: statique d’abord.

## 11. Design System

Ton: professionnel, énergique, précis.

Couleurs (draft – TODO finaliser):

- Primary: indigo / violet (différenciation tech moderne)
- Accent: emerald / lime pour contrastes positifs
- Background light/dark: neutres gris 50 / 900

Typographies (draft):

- Titre: "Poppins" ou "Inter" bold
- Corps: "Inter" / "System UI"

Composants:

- Button, Tag, Card, SectionHeader, NavBar, Footer, ProjectGrid, SkillGroup

Animation: micro-transitions (opacity/translate), éviter parallax superflu.

## 12. Accessibilité & Performance

Objectifs:

- Lighthouse ≥ 90 partout.
- Couleurs AA au moins.
- Focus visible.
- Images optimisées (taille / format). Pas d’assets lourds.

## 13. SEO & Share

- Title pattern: "Touhami Aglagal – Développeur Full Stack" + suffix page.
- Meta description: ~150 chars orienté valeur.
- OG: image simple (nom + rôle + palette) – TODO générer.
- Sitemap auto (SvelteKit adapter).
- robots.txt déjà présent.
- Schema.org: Person + ItemList (projets) + CreativeWork (détails) futur.

## 14. Déploiement

- Cible proposée: Vercel (simplicité SvelteKit). Alternative: Cloudflare Pages.
- Branches: main (prod), feature/* (préviews auto si Vercel).
- Pipeline: build → preview → manual merge → prod.

## 15. Sécurité & Confidentialité

- Pas de stockage PII backend MVP.
- Formulaire futur: honeypot + délai anti-bot.
- En-têtes security via plateforme (Vercel default OK) – CSP custom si ajout scripts.

## 16. Roadmap

V0: Structure pages + données projets + CV download + SEO basique.
V1: Filtrage projets + dark mode + animations + amélioration accessibilité.
V2: Blog Markdown + analytics + OG dynamique.
V3: Stats GitHub + Form serverless + micro-features (timeline interactive).

## 17. KPI

- Téléchargements CV / semaine.
- Clics lien email / LinkedIn.
- Temps moyen sur page projets.
- Taux scroll jusqu'à section projets.

## 18. Questions Ouvertes (TODO répondre)

1. Mode sombre requis ? Non
2. Blog prévu ? oui
3. Hébergeur confirmé ? VPS hebergé chez OVH, avec CapRover
4. Analytics oui/non ? Outil ? Pas pour l'instant
5. Pages projets individuelles nécessaires dès V0 ? Non
6. Langues: FR seulement ou FR + EN ? FR

## 19. Annexe – Source CV

(Contenu CV déjà dans `CV_Touhami_Aglagal.md`) – À structurer si extraction future.

---
Short TODO technique immédiat:

- [ ] Répondre aux 6 questions ouvertes.
- [ ] Décider palette finale.
- [ ] Ajouter fichiers données projets.
- [ ] Intégrer composant ProjectCard.
