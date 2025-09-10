export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  birthDate: string;
  presentation: string;
  objective: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Touhami AGLAGAL",
  title: "Concepteur et Développeur d'Applications – Recherche d'alternance",
  location: "Pays de la Loire",
  email: "touhami.aglagal.us@gmail.com",
  phone: "06 16 93 51 93",
  linkedin: "https://www.linkedin.com/in/agltouhami/",
  birthDate: "28/08/2000",
  presentation: "Actuellement en alternance pour préparer le titre de Concepteur Développeur d'Applications (CDA), je suis un développeur passionné et curieux, toujours motivé à apprendre et à relever de nouveaux défis. Autodidacte et orienté solutions, j'aime travailler en équipe et contribuer à des projets concrets qui ont de l'impact.",
  objective: "Mettre mon énergie et mes compétences full stack au service d'une entreprise ambitieuse et grandir avec elle."
};

export const experiences: Experience[] = [
  {
    id: "galerie-epokone",
    company: "Galerie EPOKONE",
    role: "Développeur Web (Free-lance)",
    period: "Depuis mai 2025",
    description: [
      "Conception et mise en ligne d'un site e-commerce via SquareSpace",
      "Personnalisation avancée via CSS pour affiner le design",
      "Ajout d'un module 3D (embed) pour la visualisation d'une sculpture",
      "Création de visuels (bannières, mockups) pour valoriser les œuvres",
      "Optimisation SEO et design responsive"
    ],
    technologies: ["SquareSpace", "CSS", "3D Embed", "SEO"]
  },
  {
    id: "banwaves",
    company: "Banwaves",
    role: "Développeur full stack",
    period: "juin 2024 – août 2024",
    location: "Télétravail complet",
    description: [
      "Développement d'une application DiscordDeck avec interface temps réel",
      "Frontend : Next.js 14 (React), Tailwind CSS, déploiement Cloudflare",
      "Backend : API REST avec Express.js, Sequelize ORM, MariaDB",
      "Intégration Socket.io pour temps réel et interaction avec l'API Discord via Discord.js"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Express.js", "Sequelize", "MariaDB", "Socket.io", "Discord.js"]
  },
  {
    id: "eni",
    company: "ENI École Informatique Nantes",
    role: "Étudiant - Projets informatiques",
    period: "décembre 2023 – juin 2024",
    description: [
      "Développement d'un site d'enchères sous Java EE et SQL Server (architecture en couches)",
      "Conception et développement d'un site d'organisation d'évènements avec PHP/MySQL",
      "Définition et mise en place de tests pour assurer la qualité du code"
    ],
    technologies: ["Java EE", "SQL Server", "PHP", "MySQL", "Tests unitaires"]
  },
  {
    id: "helpline",
    company: "Helpline Nantes",
    role: "Technicien support informatique N1",
    period: "novembre 2022 – mars 2023",
    description: [
      "Support technique de premier niveau",
      "Résolution d'incidents informatiques",
      "Assistance utilisateurs"
    ]
  },
  {
    id: "agl-web",
    company: "AGL Web Services (Micro-entreprise)",
    role: "Développeur - Créateur",
    period: "octobre 2021 – avril 2022",
    location: "Nantes",
    description: [
      "Développement d'applications mobiles avec React Native (Expo CLI)",
      "Intégration de l'API Google Maps, implémentation paiement PayPal",
      "Création d'une API REST avec Node.js/Express.js et base MongoDB Atlas",
      "Utilisation de Git/GitHub pour le contrôle de version"
    ],
    technologies: ["React Native", "Expo", "Google Maps API", "PayPal", "Node.js", "Express.js", "MongoDB", "Git"]
  }
];

export const education: Education[] = [
  {
    id: "cda",
    degree: "Concepteur et Développeur d'Applications",
    institution: "NEXA Digital School",
    year: "2025–2026",
    description: "Titre RNCP Niveau VI (Bac+3)"
  },
  {
    id: "dwwm",
    degree: "Développeur Web et Web Mobile",
    institution: "ENI École Informatique Nantes",
    year: "2023–2024",
    description: "Titre RNCP Niveau V (Bac+2)"
  },
  {
    id: "licence",
    degree: "Licence Mathématiques Informatique Physique",
    institution: "UFR Sciences et Techniques Nantes",
    year: "2018",
    description: "Parcours scientifique"
  },
  {
    id: "bac",
    degree: "Bac Scientifique (Spécialité Sciences de l'Ingénieur)",
    institution: "Lycée Polyvalent François Rabelais, Fontenay-le-Comte",
    year: "2015–2018",
    description: "Mention assez bien"
  }
];

export const skills: Skill[] = [
  {
    category: "Langages & Frameworks",
    items: ["Java", "Java EE", "Spring", "PHP", "Symfony", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Python", "Django", "Dart", "Flutter"]
  },
  {
    category: "Web & Frontend",
    items: ["HTML5", "CSS3", "TailwindCSS", "React", "Next.js", "Angular", "jQuery", "Responsive Design", "SEO"]
  },
  {
    category: "Backend & API",
    items: ["Node.js", "Express.js", "API REST", "Socket.io", "Java EE", "PHP", "Python Django"]
  },
  {
    category: "Bases de données",
    items: ["MySQL", "SQL Server", "Oracle", "MongoDB", "Sequelize ORM", "Drizzle ORM"]
  },
  {
    category: "Environnements & Outils",
    items: ["Visual Studio Code", "Eclipse", "Suite JetBrains", "Docker", "Git", "GitHub", "npm", "Expo CLI"]
  },
  {
    category: "CMS & Plateformes",
    items: ["WordPress", "SquareSpace", "Cloudflare"]
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "Flutter", "Google Maps API", "PayPal Integration"]
  }
];

export const languages = [
  { language: "Français", level: "Natif" },
  { language: "Anglais", level: "C2 (GoFluent)" },
  { language: "Espagnol", level: "B2" }
];

export const softSkills = [
  "Capacité d'apprentissage rapide et curiosité technique",
  "Souci du détail et précision",
  "Créativité et adaptabilité",
  "Résilience et gestion du stress",
  "Esprit analytique et résolution de problèmes",
  "Esprit d'équipe et collaboration"
];