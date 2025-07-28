import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Tipos para el procesamiento de imágenes
interface StrapiImageData {
  url?: string;
  formats?: {
    [key: string]: {
      url?: string;
    };
  };
}

// Configuración base del cliente HTTP
const BASE_CONFIG: AxiosRequestConfig = {
  baseURL: `${import.meta.env.VITE_STRAPI_HOST}/api`,
  timeout: 10000, // 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
};

// Cliente HTTP principal
class HttpClient {
  private client: AxiosInstance;

  constructor(config: AxiosRequestConfig = {}) {
    this.client = axios.create({ ...BASE_CONFIG, ...config });
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor - agregar token automáticamente
    this.client.interceptors.request.use(
      (config) => {
        const token = import.meta.env.VITE_STRAPI_TOKEN;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor - manejo centralizado de errores
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        const errorMessage = this.getErrorMessage(error);
        console.error('HTTP Client Error:', errorMessage);
        return Promise.reject(new Error(errorMessage));
      }
    );
  }

  private getErrorMessage(error: AxiosError): string {
    if (error.code === 'ECONNABORTED') {
      return 'La petición tardó demasiado tiempo. Inténtalo de nuevo.';
    }
    
    if (error.response) {
      // Error del servidor (4xx, 5xx)
      const status = error.response.status;
      switch (status) {
        case 401:
          return 'No autorizado. Verifica tu token de acceso.';
        case 403:
          return 'No tienes permisos para acceder a este recurso.';
        case 404:
          return 'El recurso solicitado no fue encontrado.';
        case 500:
          return 'Error interno del servidor. Inténtalo más tarde.';
        default:
          return (error.response.data as { error?: { message?: string } })?.error?.message || `Error del servidor (${status})`;
      }
    }
    
    if (error.request) {
      // Error de red
      return 'Error de conexión. Verifica tu conexión a internet.';
    }
    
    return error.message || 'Error desconocido';
  }

  // Métodos HTTP públicos
  public async get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  public async post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  public async put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  public async delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }
}

// Singleton del cliente HTTP
export const httpClient = new HttpClient();

// Utility para transformar URLs de imágenes de Strapi
export class ImageProcessor {
  private static readonly STRAPI_HOST = import.meta.env.VITE_STRAPI_HOST;

  static getImageUrl(imageData: { url?: string }): string {
    if (!imageData?.url) return '';
    
    // Si la URL ya es absoluta, devolverla tal como está
    if (imageData.url.startsWith('http')) {
      return imageData.url;
    }
    
    // Agregar el host de Strapi
    return `${this.STRAPI_HOST}${imageData.url}`;
  }

  static processImageFormats(imageData: StrapiImageData): Record<string, string> {
    if (!imageData) return {};

    const formats = ['thumbnail', 'small', 'medium', 'large'];
    const processedUrls: Record<string, string> = {
      original: this.getImageUrl(imageData)
    };

    formats.forEach(format => {
      if (imageData.formats?.[format]) {
        processedUrls[format] = this.getImageUrl(imageData.formats[format]);
      } else {
        processedUrls[format] = processedUrls.original;
      }
    });

    return processedUrls;
  }
}

// Export del cliente para uso directo si es necesario
export default httpClient;
