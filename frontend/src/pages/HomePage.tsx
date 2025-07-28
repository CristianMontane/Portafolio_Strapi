import React from 'react';
import { useHomeData, useProjects, useCategories } from '../lib/hooks';
import { WithDataState } from '../components/DataStates';
import { HomePageTemplate } from '../components/templates';

const HomePage: React.FC = () => {
  const { homeData, loading: homeLoading, error: homeError, refetch: refetchHome } = useHomeData();
  const { projects, loading: projectsLoading, error: projectsError, refetch: refetchProjects } = useProjects();
  const { categories, loading: categoriesLoading, error: categoriesError, refetch: refetchCategories } = useCategories();

  // Combine loading states
  const loading = homeLoading || projectsLoading || categoriesLoading;
  
  // Combine errors
  const error = homeError || projectsError || categoriesError;
  
  // Combine refetch functions
  const refetch = async () => {
    await Promise.all([refetchHome(), refetchProjects(), refetchCategories()]);
  };

  return (
    <WithDataState
      data={homeData}
      loading={loading}
      error={error}
      onRetry={refetch}
      loadingMessage="Cargando información del portafolio..."
      emptyMessage="No se encontró información del portafolio"
    >
      {(data) => (
        <HomePageTemplate 
          homeData={data} 
          projects={projects} 
          categories={categories} 
        />
      )}
    </WithDataState>
  );
};

export default HomePage;