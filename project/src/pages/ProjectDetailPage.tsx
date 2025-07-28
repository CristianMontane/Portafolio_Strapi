import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar,
  CheckCircle,
  XCircle,
  Tag
} from 'lucide-react';
import { projects } from '../data/mockData';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Proyecto no encontrado</h1>
          <Link 
            to="/" 
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-32">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Volver a proyectos</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>{new Date(project.publishedDate).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {project.deployed ? (
                    <>
                      <CheckCircle size={18} className="text-green-500" />
                      <span className="text-green-500">Desplegado</span>
                    </>
                  ) : (
                    <>
                      <XCircle size={18} className="text-gray-500" />
                      <span>En desarrollo</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-6 lg:mt-0">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Ver proyecto</span>
                </a>
              )}
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors border border-gray-700"
                >
                  <Github size={20} />
                  <span>Ver código</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Project Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {project.coverImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`${project.title} - Vista ${index + 1}`}
                  className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Descripción del proyecto</h2>
            <div className="prose prose-lg text-gray-300 leading-relaxed">
              <p>{project.description}</p>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Technologies */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Tag size={20} className="mr-2 text-red-500" />
                Tecnologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.id}
                    className="px-3 py-2 bg-red-600/20 text-red-400 rounded-lg text-sm border border-red-600/30"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Categorías</h3>
              <div className="space-y-2">
                {project.categories.map((category) => (
                  <div
                    key={category.id}
                    className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm"
                  >
                    {category.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Otros proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/project/${relatedProject.id}`}
                  className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-red-600/50 transition-all duration-300"
                >
                  <img
                    src={relatedProject.coverImages[0]}
                    alt={relatedProject.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-semibold group-hover:text-red-400 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                      {relatedProject.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;