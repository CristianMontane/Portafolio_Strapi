import React from 'react';
import { useParams } from 'react-router-dom';
import { WithDataState } from '../components/DataStates';
import { ProjectDetailTemplate } from '../components/templates';
import { projects } from '../data/mockData';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === parseInt(id || '0')) || null;

  return (
    <WithDataState
      data={project}
      loading={false}
      error={null}
      emptyMessage="Proyecto no encontrado"
    >
      {(projectData) => <ProjectDetailTemplate project={projectData} />}
    </WithDataState>
  );
};

export default ProjectDetailPage;