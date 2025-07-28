import React from 'react';
import { useHomeData } from '../lib/hooks';
import { WithDataState } from '../components/DataStates';
import HomePageContent from '../components/HomePageContent';

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
      {(data) => <HomePageContent homeData={data} />}
    </WithDataState>
  );
};

export default HomePage;