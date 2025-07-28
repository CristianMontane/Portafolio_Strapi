import React from 'react';
import { HeroSection, ProjectsSection } from '../organisms';
import type { HomeData, Project, Category } from '../../types';

interface HomePageTemplateProps {
  homeData: HomeData;
  projects: Project[];
  categories: Category[];
}

const HomePageTemplate: React.FC<HomePageTemplateProps> = ({
  homeData,
  projects,
  categories
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <HeroSection homeData={homeData} />
      <ProjectsSection projects={projects} categories={categories} id="projects-section" />
    </div>
  );
};

export default HomePageTemplate;
