import React from 'react';
import { useHomeData } from '../lib/hooks';
import { WithDataState } from '../components/DataStates';
import { HomePageTemplate } from '../components/templates';
import { projects, categories } from '../data/mockData';

const HomePage: React.FC = () => {
  const { homeData, loading, error, refetch } = useHomeData();

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