import { query } from './strapi';
import type { StrapiHomeData, HomeData, StrapiParagraph, SocialLink, StrapiNetworks } from '../types';

/**
 * Converts Strapi rich text format to plain text
 */
function convertRichTextToPlainText(richText: StrapiParagraph[]): string {
  return richText
    .map(paragraph => 
      paragraph.children
        .map(child => child.text)
        .join('')
    )
    .join('\n');
}

/**
 * Converts Strapi networks to SocialLink array
 */
function convertNetworksToSocialLinks(networks?: StrapiNetworks): SocialLink[] {
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
      url: networks.correo.startsWith('mailto:') ? networks.correo : `mailto:${networks.correo}`,
      icon: "mail"
    });
  }
  
  return socialLinks;
}

/**
 * Fetches home page information from Strapi
 */
export async function getHomeData(): Promise<HomeData> {
  try {
    const response = await query('home?fields[0]=title&fields[1]=description&populate[photo][fields][0]=url&fields[2]=networks');
    const strapiData: StrapiHomeData = response.data;
    
    if (!strapiData) {
      throw new Error('No home data found');
    }

    // Convert Strapi data to frontend format
    const homeData: HomeData = {
      title: strapiData.title,
      description: convertRichTextToPlainText(strapiData.description),
      photo: strapiData.photoUrls?.large || strapiData.photoUrls?.original || strapiData.photo.url || '',
      socialLinks: convertNetworksToSocialLinks(strapiData.networks)
    };

    return homeData;
  } catch (error) {
    console.error('Error fetching home data:', error);
    throw error;
  }
}

/**
 * Fetches all projects from Strapi
 */
export async function getProjects() {
  try {
    const response = await query('Projects?fields[1]=title&fields[2]=project_url&fields[3]=repository_url&fields[4]=published_date&fields[5]=Desplegado&fields[6]=description&populate[cover_image][fields][0]=url&populate[cover_image][fields][1]=alternativeText&populate[technologies][fields][0]=name&populate[categories][fields][0]=name');
    return response.data || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}

/**
 * Fetches a single project by documentId
 */
export async function getProject(documentId: string) {
  try {
    const response = await query(`Projects/${documentId}?fields[0]=documentId&fields[1]=title&fields[2]=project_url&fields[3]=repository_url&fields[4]=published_date&fields[5]=Desplegado&fields[6]=description&populate[cover_image][fields][0]=url&populate[cover_image][fields][1]=alternativeText&populate[cover_image][fields][2]=formats&populate[technologies][fields][0]=name&populate[categories][fields][0]=name`);
    return response.data;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}

/**
 * Fetches all technologies from Strapi
 */
export async function getTechnologies() {
  try {
    const response = await query('technologies?fields[0]=name&fields[1]=logo');
    return response.data || [];
  } catch (error) {
    console.error('Error fetching technologies:', error);
    throw error;
  }
}

/**
 * Fetches all categories from Strapi
 */
export async function getCategories() {
  try {
    const response = await query('categories?fields[0]=name');
    return response.data || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}
