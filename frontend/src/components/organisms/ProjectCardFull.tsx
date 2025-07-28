import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Image, Card, Button, Badge } from '../atoms';
import { TechBadge, StatusBadge, ProjectLinks, DateDisplay } from '../molecules';
import type { Project } from '../../types';

interface ProjectCardFullProps {
  project: Project;
  index?: number;
}

const ProjectCardFull: React.FC<ProjectCardFullProps> = ({ project, index = 0 }) => {
  const navigate = useNavigate();
  
  // Debug log - podemos quitarlo después
  console.log('ProjectCardFull - project data:', { 
    id: project.id, 
    documentId: project.documentId, 
    title: project.title 
  });
  
  return (
    <Card
      variant="elevated"
      motionProps={{
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: index * 0.1 },
        whileHover: { 
          y: -8, 
          scale: 1.02,
          transition: { duration: 0.1 }
        }
      }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.coverImages[0]}
          alt={project.title}
          className="w-full h-full transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <StatusBadge deployed={project.deployed} />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <Text variant="h3" weight="bold" className="text-xl">
            {project.title}
          </Text>
          <DateDisplay date={project.publishedDate} />
        </div>

        {/* Description */}
        <Text variant="p" color="gray" className="mb-4 line-clamp-3">
          {project.description}
        </Text>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <TechBadge key={tech.id} technology={tech} />
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" size="sm">
              +{project.technologies.length - 3} más
            </Badge>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <ProjectLinks 
            projectUrl={project.projectUrl}
            repositoryUrl={project.repositoryUrl}
          />
          
          <Button
            variant="secondary"
            size="sm"
            motionProps={{
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 }
            }}
            onClick={() => {
              // Navigate to project detail using documentId
              const projectId = project.documentId || project.id.toString();
              navigate(`/project/${projectId}`);
            }}
          >
            Ver detalles
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCardFull;
