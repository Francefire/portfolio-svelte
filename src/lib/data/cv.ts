import type { CVData } from '../types/cv';

export const cv: CVData = {
  profile: {
    name: 'Touhami AGLAGAL',
    title: "Concepteur & Développeur d'Applications (Alternance)",
    location: 'Pays de la Loire, France',
    email: 'touhami.aglagal.us@gmail.com',
    phone: '+33 6 16 93 51 93',
    linkedin: 'https://www.linkedin.com/in/agltouhami/',
    summary:
      "Développeur full stack passionné, curieux et orienté solutions. Objectif: apporter de la valeur produit et grandir techniquement au sein d'une équipe ambitieuse." 
  },
  experiences: [
    {
      role: 'Création site marchand (Galerie EPOKONE)',
      company: 'Freelance',
      start: '2025-05',
      end: 'Present',
      type: 'Freelance',
      bullets: [
        'Conception et mise en ligne (SquareSpace)',
        'Personnalisation avancée CSS',
        'Intégration module 3D (embed)',
        'Création de visuels marketing',
        'Optimisation SEO & responsive'
      ],
      stack: ['Squarespace', 'SEO', 'CSS', '3D Embed']
    },
    {
      role: 'Développeur Full Stack (DiscordDeck)',
      company: 'Banwaves',
      start: '2024-06',
      end: '2024-08',
      type: 'Stage / Remote',
      bullets: [
        'Frontend: Next.js 14, TailwindCSS, Cloudflare',
        'Socket.io temps réel',
        'Backend Express REST + Sequelize',
        'MariaDB & intégration Discord.js'
      ],
      stack: ['Next.js', 'TailwindCSS', 'Cloudflare', 'Socket.io', 'Express', 'Sequelize', 'MariaDB', 'Discord.js']
    },
    {
      role: 'Projets académiques (ENI)',
      company: 'ENI École Informatique',
      start: '2023-12',
      end: '2024-06',
      type: 'Formation',
      bullets: [
        "Site d'enchères Java EE + SQL Server (architecture en couches)",
        "Application d'organisation d'évènements PHP/MySQL avec tests"
      ],
      stack: ['Java EE', 'SQL Server', 'PHP', 'MySQL', 'Tests']
    },
    {
      role: 'Technicien Support N1',
      company: 'Helpline',
      location: 'Nantes',
      start: '2022-11',
      end: '2023-03',
      bullets: [ 'Support utilisateurs et résolution incidents de premier niveau' ]
    },
    {
      role: 'Créateur Micro-Entreprise (AGL Web Services)',
      company: 'Indépendant',
      location: 'Nantes',
      start: '2021-10',
      end: '2022-04',
      bullets: [
        'Développement mobile React Native (Expo)',
        'Intégration Google Maps & paiement PayPal (début)',
        'API REST Node.js/Express + Mongo Atlas',
        'Gestion version Git/GitHub'
      ],
      stack: ['React Native', 'Expo', 'Google Maps API', 'Node.js', 'Express', 'MongoDB', 'Git']
    }
  ],
  projects: [
    {
      name: 'Site d\'enchères',
      context: 'Projet académique Java EE',
      bullets: [ 'Architecture en couches', 'Gestion enchères & utilisateurs' ],
      stack: ['Java EE', 'SQL Server']
    },
    {
      name: "Organisation d'évènements",
      context: 'Projet académique PHP',
      bullets: [ 'CRUD évènements', 'Gestion participants', 'Mise en place de tests' ],
      stack: ['PHP', 'MySQL', 'Tests']
    }
  ],
  skills: [
    { label: 'Langages / Frameworks', items: ['Java', 'Spring', 'PHP', 'Symfony', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Express.js', 'Angular', 'jQuery', 'TailwindCSS', 'Django', 'Flutter'] },
    { label: 'Bases de données', items: ['MySQL', 'SQL Server', 'MongoDB', 'MariaDB', 'Oracle'] },
    { label: 'Outils', items: ['Git', 'Docker', 'Eclipse', 'VS Code', 'JetBrains Suite'] },
    { label: 'CMS', items: ['Wordpress', 'Squarespace'] }
  ],
  education: [
    {
      title: "Concepteur et Développeur d'Applications",
      school: 'NEXA Digital School',
      start: '2025',
      end: '2026',
      level: 'RNCP Niveau VI (Bac+3)'
    },
    {
      title: 'Développeur Web et Web Mobile',
      school: 'ENI École Informatique',
      start: '2023',
      end: '2024',
      level: 'RNCP Niveau V (Bac+2)'
    },
    {
      title: 'Licence Mathématiques Informatique Physique',
      school: 'UFR Sciences et Techniques Nantes',
      start: '2018'
    },
    {
      title: 'Bac Scientifique (Spécialité SI)',
      school: 'Lycée François Rabelais',
      end: '2018'
    }
  ],
  languages: [
    { label: 'Anglais', level: 'C2 (GoFluent)' },
    { label: 'Espagnol', level: 'B2' }
  ],
  strengths: [
    'Apprentissage rapide',
    'Curiosité technique',
    'Souci du détail',
    'Créativité',
    'Résilience',
    'Esprit analytique',
    'Collaboration'
  ]
};

export type { CVData } from '../types/cv';
