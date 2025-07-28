import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import SocialLinks from '../components/SocialLinks';
import { homeData, socialLinks, projects, categories } from '../data/mockData';

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const filteredProjects = selectedCategory
    ? projects.filter(project => 
        project.categories.some(cat => cat.id === selectedCategory)
      )
    : projects;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8"
          >
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <img
                src={homeData.photo}
                alt={homeData.title}
                className="relative w-full h-full object-cover rounded-full border-4 border-red-600/50 shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            {homeData.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8"
          >
            {homeData.description}
          </motion.p>

          <SocialLinks links={socialLinks} />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Mis <span className="text-red-500">Proyectos</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Descubre algunos de los proyectos en los que he trabajado
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Filter size={18} />
              <span>Todos</span>
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">
                No hay proyectos en esta categoría
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;