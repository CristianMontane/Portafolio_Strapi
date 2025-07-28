import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Text, Image, Link, Badge } from '../atoms';
import { TechBadge, StatusBadge, ProjectLinks, DateDisplay } from '../molecules';
import type { Project } from '../../types';

interface ProjectDetailTemplateProps {
  project: Project;
}

const ProjectDetailTemplate: React.FC<ProjectDetailTemplateProps> = ({ project }) => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black pt-32 pb-16">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            variant="secondary"
            className="space-x-2"
            motionProps={{
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              whileHover: { x: -5 }
            }}
          >
            <ArrowLeft size={20} />
            <span>Volver a proyectos</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Project Images */}
          <div className="space-y-4">
            <Image
              src={project.coverImages[0]}
              alt={project.title}
              className="w-full h-64 lg:h-80 rounded-xl"
              motionProps={{
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.6 }
              }}
            />
            {project.coverImages.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {project.coverImages.slice(1, 3).map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${project.title} - Image ${index + 2}`}
                    className="w-full h-32 rounded-lg"
                    motionProps={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.4, delay: index * 0.1 }
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="space-y-6">
            <div>
              <Text
                variant="h1"
                weight="bold"
                className="mb-4"
                motionProps={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.2 }
                }}
              >
                {project.title}
              </Text>
              
              <div className="flex items-center space-x-4 mb-6">
                <StatusBadge deployed={project.deployed} size="md" />
                <DateDisplay date={project.publishedDate} size="sm" />
              </div>
            </div>

            <Text
              variant="p"
              size="lg"
              color="gray"
              className="leading-relaxed"
              motionProps={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.3 }
              }}
            >
              {project.description}
            </Text>

            {/* Technologies */}
            <div>
              <Text variant="h3" weight="semibold" className="mb-3">
                Tecnologías
              </Text>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech.id} technology={tech} size="md" />
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <Text variant="h3" weight="semibold" className="mb-3">
                Categorías
              </Text>
              <div className="flex flex-wrap gap-2">
                {project.categories.map((category) => (
                  <Badge key={category.id} variant="info" size="md">
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div>
              <Text variant="h3" weight="semibold" className="mb-3">
                Enlaces
              </Text>
              <ProjectLinks
                projectUrl={project.projectUrl}
                repositoryUrl={project.repositoryUrl}
                variant="vertical"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailTemplate;
