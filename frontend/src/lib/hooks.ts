import { useState, useEffect } from 'react';
import { getHomeData, getProjects, getCategories, getProjectById } from './apiService';
import type { HomeData, Project, Category } from '../types';

interface UseHomeDataReturn {
  homeData: HomeData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

interface UseProjectsReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

interface UseCategoriesReturn {
  categories: Category[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

interface UseProjectByIdReturn {
  project: Project | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useHomeData(): UseHomeDataReturn {
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHomeData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getHomeData();
      setHomeData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar la información del home');
      console.error('Error fetching home data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  return {
    homeData,
    loading,
    error,
    refetch: fetchHomeData
  };
}

export function useProjects(): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProjects();
      setProjects(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar los proyectos');
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects
  };
}

export function useCategories(): UseCategoriesReturn {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCategories();
      setCategories(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar las categorías');
      console.error('Error fetching categories:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    error,
    refetch: fetchCategories
  };
}

export function useProjectById(documentId: string): UseProjectByIdReturn {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Debug log - podemos quitarlo después
        console.log('useProjectById - attempting to fetch with documentId:', documentId);
        
        // Validar que documentId no sea un número simple (debe ser un documentId de Strapi)
        if (!documentId || /^\d+$/.test(documentId)) {
          throw new Error('DocumentId inválido. Debe usar el documentId de Strapi, no el ID numérico.');
        }
        
        const data = await getProjectById(documentId);
        setProject(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar el proyecto');
        console.error('Error fetching project:', err);
      } finally {
        setLoading(false);
      }
    };

    if (documentId) {
      fetchProject();
    }
  }, [documentId]);

  const refetch = async () => {
    if (documentId) {
      setLoading(true);
      setError(null);
      
      try {
        const data = await getProjectById(documentId);
        setProject(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar el proyecto');
        console.error('Error fetching project:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    project,
    loading,
    error,
    refetch
  };
}
