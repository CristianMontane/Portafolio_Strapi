import { httpClient, ImageProcessor } from './httpClient';
import type { 
  StrapiHomeData, 
  HomeData, 
  StrapiParagraph, 
  SocialLink, 
  StrapiNetworks,
  Project,
  Technology,
  Category 
} from '../types';

// Tipos específicos para las respuestas de Strapi
interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiProject {
  id: number;
  documentId: string;
  title: string;
  description?: StrapiParagraph[];
  cover_image?: Array<{ id: number; url: string; alternativeText?: string }>;
  project_url?: string;
  repository_url?: string;
  published_date?: string;
  Desplegado?: boolean;
  technologies?: Array<{ id: number; documentId: string; name: string }>;
  categories?: Array<{ id: number; documentId: string; name: string }>;
}

interface StrapiTechnology {
  id: number;
  name: string;
  logo?: { url: string };
}

interface StrapiCategory {
  id: number;
  name: string;
}

/**
 * Servicio para manejar todas las operaciones de la API de Strapi
 * Implementa el patrón Repository para abstraer las operaciones de datos
 */
class StrapiApiService {
  
  /**
   * Convierte texto enriquecido de Strapi a texto plano
   */
  private convertRichTextToPlainText(richText: StrapiParagraph[]): string {
    return richText
      .map(paragraph => 
        paragraph.children
          .map(child => child.text)
          .join('')
      )
      .join('\n');
  }

  /**
   * Convierte las redes sociales de Strapi a formato SocialLink
   */
  private convertNetworksToSocialLinks(networks?: StrapiNetworks): SocialLink[] {
    const socialLinks: SocialLink[] = [];
    
    if (networks?.github) {
      socialLinks.push({
        name: "GitHub",
        url: networks.github,
        icon: "github"
      });
    }
    
    if (networks?.linkedin) {
      socialLinks.push({
        name: "LinkedIn",
        url: networks.linkedin,
        icon: "linkedin"
      });
    }
    
    if (networks?.correo) {
      socialLinks.push({
        name: "Email",
        url: `mailto:${networks.correo}`,
        icon: "mail"
      });
    }
    
    return socialLinks;
  }

  /**
   * Obtiene los datos del home desde Strapi
   */
  async getHomeData(): Promise<HomeData> {
    try {
      const response = await httpClient.get<StrapiResponse<StrapiHomeData>>(
        'home?fields[0]=title&fields[1]=description&populate[photo][fields][0]=url&fields[2]=networks'
      );
      
      const strapiData = response.data;
      
      return {
        title: strapiData.title,
        description: this.convertRichTextToPlainText(strapiData.description),
        photo: ImageProcessor.getImageUrl(strapiData.photo),
        socialLinks: this.convertNetworksToSocialLinks(strapiData.networks)
      };
    } catch (error) {
      console.error('Error fetching home data:', error);
      throw new Error('No se pudieron cargar los datos del home');
    }
  }

  /**
   * Obtiene todos los proyectos desde Strapi
   */
  async getProjects(): Promise<Project[]> {
    try {
      const response = await httpClient.get<StrapiResponse<StrapiProject[]>>(
        'Projects?fields[1]=title&fields[2]=project_url&fields[3]=repository_url&fields[4]=published_date&fields[5]=Desplegado&fields[6]=description&populate[cover_image][fields][0]=url&populate[cover_image][fields][1]=alternativeText&populate[technologies][fields][0]=name&populate[categories][fields][0]=name'
      );
      
      return response.data.map((project) => ({
        id: project.id,
        title: project.title,
        description: project.description ? this.convertRichTextToPlainText(project.description) : '',
        coverImages: project.cover_image?.map(img => ImageProcessor.getImageUrl(img)) || [],
        projectUrl: project.project_url || '',
        repositoryUrl: project.repository_url || '',
        technologies: project.technologies?.map((tech) => ({ 
          id: tech.id, 
          name: tech.name, 
          logo: '' 
        })) || [],
        categories: project.categories?.map((cat) => ({ 
          id: cat.id, 
          name: cat.name 
        })) || [],
        publishedDate: project.published_date || '',
        deployed: project.Desplegado || false
      }));
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw new Error('No se pudieron cargar los proyectos');
    }
  }

  /**
   * Obtiene un proyecto específico por ID desde Strapi
   */
  async getProjectById(documentId: string): Promise<Project | null> {
    try {
      const response = await httpClient.get<StrapiResponse<StrapiProject>>(
        `Projects/${documentId}?fields[0]=documentId&fields[1]=title&fields[2]=project_url&fields[3]=repository_url&fields[4]=published_date&fields[5]=Desplegado&fields[6]=description&populate[cover_image][fields][0]=url&populate[cover_image][fields][1]=alternativeText&populate[cover_image][fields][2]=formats&populate[technologies][fields][0]=name&populate[categories][fields][0]=name`
      );
      
      const project = response.data;
      if (!project) return null;
      
      return {
        id: project.id,
        title: project.title,
        description: project.description ? this.convertRichTextToPlainText(project.description) : '',
        coverImages: project.cover_image?.map(img => ImageProcessor.getImageUrl(img)) || [],
        projectUrl: project.project_url || '',
        repositoryUrl: project.repository_url || '',
        technologies: project.technologies?.map((tech) => ({ 
          id: tech.id, 
          name: tech.name, 
          logo: '' 
        })) || [],
        categories: project.categories?.map((cat) => ({ 
          id: cat.id, 
          name: cat.name 
        })) || [],
        publishedDate: project.published_date || '',
        deployed: project.Desplegado || false
      };
    } catch (error) {
      console.error('Error fetching project by ID:', error);
      throw new Error('No se pudo cargar el proyecto');
    }
  }

  /**
   * Obtiene todas las tecnologías desde Strapi
   */
  async getTechnologies(): Promise<Technology[]> {
    try {
      const response = await httpClient.get<StrapiResponse<StrapiTechnology[]>>(
        'technologies?fields[0]=name&fields[1]=logo'
      );
      
      return response.data.map((tech, index) => ({
        id: tech.id || index + 1,
        name: tech.name,
        logo: tech.logo ? ImageProcessor.getImageUrl(tech.logo) : ''
      }));
    } catch (error) {
      console.error('Error fetching technologies:', error);
      throw new Error('No se pudieron cargar las tecnologías');
    }
  }

  /**
   * Obtiene todas las categorías desde Strapi
   */
  async getCategories(): Promise<Category[]> {
    try {
      const response = await httpClient.get<StrapiResponse<StrapiCategory[]>>(
        'categories?fields[0]=name'
      );
      
      return response.data.map((category, index) => ({
        id: category.id || index + 1,
        name: category.name
      }));
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('No se pudieron cargar las categorías');
    }
  }
}

// Singleton del servicio de API
export const strapiApiService = new StrapiApiService();

// Exports individuales para mantener compatibilidad
export const getHomeData = () => strapiApiService.getHomeData();
export const getProjects = () => strapiApiService.getProjects();
export const getProjectById = (id: string) => strapiApiService.getProjectById(id);
export const getTechnologies = () => strapiApiService.getTechnologies();
export const getCategories = () => strapiApiService.getCategories();
