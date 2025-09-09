// Exports des projets
export { projects, type Project as ProjectType } from './data/projects.js';

// Exports des données personnelles
export { 
  personalInfo, 
  experiences, 
  education, 
  skills, 
  languages, 
  softSkills,
  type PersonalInfo,
  type Experience,
  type Education,
  type Skill 
} from './data/personal.js';

// Exports des composants
export { default as Navigation } from './components/Navigation.svelte';
export { default as Footer } from './components/Footer.svelte';
export { default as ProjectCard } from './components/ProjectCard.svelte';
export { default as SkillBadge } from './components/SkillBadge.svelte';
