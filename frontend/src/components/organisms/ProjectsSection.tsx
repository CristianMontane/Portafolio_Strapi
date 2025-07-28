import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Text } from '../atoms';
import { CategoryFilterButton } from '../molecules';
import ProjectCardFull from './ProjectCardFull';
import type { Project, Category } from '../../types';

interface ProjectsSectionProps {
  projects: Project[];
  categories: Category[];
  id?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  projects, 
  categories,
  id 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const filteredProjects = selectedCategory
    ? projects.filter(project => 
        project.categories.some(cat => cat.id === selectedCategory)
      )
    : projects;

  return (
    <section className="py-20 px-6" id={id}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <Text
          variant="h2"
          weight="bold"
          align="center"
          className="mb-4"
          motionProps={{
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 }
          }}
        >
          Mis <span className="text-red-500">Proyectos</span>
        </Text>
        
        <Text
          variant="p"
          size="lg"
          color="muted"
          align="center"
          className="mb-16"
          motionProps={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.1 }
          }}
        >
          Descubre algunos de los proyectos en los que he trabajado
        </Text>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <CategoryFilterButton
            isActive={selectedCategory === null}
            onClick={() => setSelectedCategory(null)}
            isAllButton={true}
          />
          
          {categories.map((category) => (
            <CategoryFilterButton
              key={category.id}
              category={category}
              isActive={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCardFull key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <Text
            variant="p"
            size="lg"
            color="muted"
            align="center"
            className="py-16"
            motionProps={{
              initial: { opacity: 0 },
              animate: { opacity: 1 }
            }}
          >
            No hay proyectos en esta categoría
          </Text>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
