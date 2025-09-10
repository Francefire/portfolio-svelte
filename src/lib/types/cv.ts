export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  start: string; // ISO or human label
  end: string; // 'Present' or date
  type?: string; // freelance, alternance, etc.
  bullets: string[];
  stack?: string[];
}

export interface ProjectItem {
  name: string;
  context: string;
  bullets: string[];
  stack?: string[];
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface EducationItem {
  title: string;
  school: string;
  start?: string;
  end?: string;
  level?: string; // RNCP info
}

export interface CVData {
  profile: Profile;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  education: EducationItem[];
  languages: { label: string; level: string }[];
  strengths: string[];
}
