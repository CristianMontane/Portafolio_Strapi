import React from 'react';
import { useParams } from 'react-router-dom';
import { WithDataState } from '../components/DataStates';
import { ProjectDetailTemplate } from '../components/templates';
import { useProjectById } from '../lib/hooks';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { project, loading, error, refetch } = useProjectById(id || '');

  return (
    <WithDataState
      data={project}
      loading={loading}
      error={error}
      onRetry={refetch}
      emptyMessage="Proyecto no encontrado"
    >
      {(projectData) => <ProjectDetailTemplate project={projectData} />}
    </WithDataState>
  );
};

export default ProjectDetailPage;