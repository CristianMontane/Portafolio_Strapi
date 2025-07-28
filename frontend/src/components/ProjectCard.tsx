import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Calendar, CheckCircle, XCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800 hover:border-red-600/50 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.coverImages[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4 flex space-x-2">
          {project.deployed ? (
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
              <CheckCircle size={12} />
              <span>Desplegado</span>
            </div>
          ) : (
            <div className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
              <XCircle size={12} />
              <span>En desarrollo</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar size={14} className="mr-1" />
            {new Date(project.publishedDate).toLocaleDateString()}
          </div>
        </div>

        <p className="text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech.id}
              className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-xs border border-red-600/30"
            >
              {tech.name}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
              +{project.technologies.length - 3} más
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors"
              >
                <ExternalLink size={16} />
                <span className="text-sm">Demo</span>
              </a>
            )}
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={16} />
                <span className="text-sm">Código</span>
              </a>
            )}
          </div>
          
          <Link
            to={`/project/${project.id}`}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;