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

export const projects: Project[] = [
  {
    id: 'discorddeck',
    slug: 'discorddeck',
    titre: 'DiscordDeck – Dashboard temps réel',
    periode: '06/2024 - 08/2024',
    role: 'Développeur full stack',
    stack: ['Next.js', 'TailwindCSS', 'Express', 'Sequelize', 'MariaDB', 'Socket.io', 'Discord.js'],
    resume: 'Outil de gestion multi-utilisateurs avec synchronisation temps réel et intégration API Discord.',
    contexte: 'Projet remote pour Banwaves.',
    defi: 'Synchroniser états utilisateurs et événements Discord en temps réel sans surcharge.',
    approche: 'Endpoints REST modulaires + canal Socket.io pour événements; normalisation des payloads.',
    resultat: 'Plateforme fonctionnelle stable démontrant maîtrise temps réel et intégration externe.',
    lien_demo: '',
    repo: '',
    mots_cles: ['temps réel', 'API', 'intégration Discord']
  },
  {
    id: 'galerie-epokone',
    slug: 'galerie-epokone',
    titre: 'Galerie E-commerce – EPOKONE',
    periode: 'Depuis 05/2025',
    role: 'Free-lance',
    stack: ['SquareSpace', 'CSS', '3D Embed', 'SEO'],
    resume: 'Mise en ligne et customisation d\'une galerie e-commerce avec intégration 3D et optimisation SEO.',
    contexte: 'Création d\'une vitrine artistique moderne.',
    defi: 'Adapter un template générique à des besoins artistiques spécifiques avec forte identité visuelle.',
    approche: 'Personnalisation CSS avancée + intégration module 3D + optimisation structure balises.',
    resultat: 'Visuels cohérents, UX fluide, base SEO préparée.',
    mots_cles: ['e-commerce', '3D', 'SEO', 'personnalisation']
  },
  {
    id: 'site-encheres-java',
    slug: 'site-encheres-java',
    titre: "Application d'enchères Java EE",
    periode: '2023 - 2024',
    role: 'Développeur',
    stack: ['Java EE', 'SQL Server', 'Architecture en couches'],
    resume: 'Application d\'enchères avec gestion utilisateurs, offres et persistance robuste.',
    contexte: 'Projet formation ENI.',
    defi: 'Structurer couches (présentation, métier, DAO) avec transactions fiables.',
    approche: 'Séparation stricte des responsabilités + mapping SQL optimisé.',
    resultat: 'Fonctionnalités principales stables démontrant compréhension architecture entreprise.',
    mots_cles: ['Java EE', 'architecture', 'SQL']
  },
  {
    id: 'evenements-php',
    slug: 'evenements-php',
    titre: 'Site organisation événements PHP',
    periode: '2023 - 2024',
    role: 'Développeur',
    stack: ['PHP', 'MySQL', 'Tests'],
    resume: 'Site pour organiser et gérer des événements avec base relationnelle.',
    contexte: 'Projet formation ENI.',
    defi: 'Assurer cohérence données et fiabilité fonctionnalités.',
    approche: 'Définition des cas de test + validation logique métier.',
    resultat: 'Site fonctionnel démontrant rigueur et validation.',
    mots_cles: ['PHP', 'tests', 'événements']
  },
  {
    id: 'react-native-startup',
    slug: 'react-native-startup',
    titre: 'Prototype mobile React Native',
    periode: '2021 - 2022',
    role: 'Développeur',
    stack: ['React Native', 'Expo', 'Google Maps API', 'Node.js', 'Express', 'MongoDB'],
    resume: 'Prototype applicatif avec géolocalisation et API REST custom.',
    contexte: 'Micro-entreprise AGL Web Services.',
    defi: 'Intégrer services externes et persistance cloud avec rapidité.',
    approche: 'Utilisation Expo pour accélérer, API Node + Mongo Atlas.',
    resultat: 'Base technique démontrant polyvalence full stack mobile.',
    mots_cles: ['mobile', 'API', 'géolocalisation']
  }
];

export type { Project as ProjectType };
