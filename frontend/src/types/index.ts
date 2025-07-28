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
  documentId?: string;
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

// Strapi response types
export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  alternativeText?: string;
  formats?: {
    thumbnail?: StrapiImage;
    small?: StrapiImage;
    medium?: StrapiImage;
    large?: StrapiImage;
  };
}

export interface StrapiTextNode {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
}

export interface StrapiParagraph {
  type: 'paragraph';
  children: StrapiTextNode[];
}

export interface StrapiNetworks {
  github?: string;
  linkedin?: string;
  correo?: string;
}

export interface StrapiHomeData {
  id: number;
  documentId: string;
  title: string;
  description: StrapiParagraph[];
  networks?: StrapiNetworks;
  photo: StrapiImage;
  photoUrls?: {
    original: string;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
  };
}

// Frontend types (processed)
export interface HomeData {
  title: string;
  description: string;
  photo: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}