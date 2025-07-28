export interface Technology {
  id: number;
  name: string;
  logo?: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  coverImages: string[];
  projectUrl?: string;
  repositoryUrl?: string;
  publishedDate: string;
  deployed: boolean;
  technologies: Technology[];
  categories: Category[];
}

export interface HomeData {
  title: string;
  description: string;
  photo: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}