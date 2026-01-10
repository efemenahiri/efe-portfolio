
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[]; // Added gallery for themed images
  tags: string[];
  links: {
    live: string;
    github: string;
  };
  details: {
    problem: string;
    solution: string;
    techDecisions: string[];
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export type Theme = 'light' | 'dark';
