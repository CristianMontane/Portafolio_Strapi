import React from 'react';
import { motion } from 'framer-motion';
import { Image, Text } from '../atoms';
import { SocialLinkButton } from '../molecules';
import type { HomeData } from '../../types';

interface HeroSectionProps {
  homeData: HomeData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ homeData }) => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <Image
              src={homeData.photo}
              alt={homeData.title}
              size="lg"
              shape="circle"
              className="relative border-4 border-red-600/50 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Title */}
        <Text 
          variant="h1"
          weight="bold"
          align="center"
          className="mb-6"
          motionProps={{
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 }
          }}
        >
          {homeData.title}
        </Text>

        {/* Description */}
        <Text 
          variant="p"
          size="xl"
          color="gray"
          align="center"
          className="leading-relaxed max-w-2xl mx-auto mb-8"
          motionProps={{
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.3 }
          }}
        >
          {homeData.description}
        </Text>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center space-x-6 mt-8"
        >
          {homeData.socialLinks.map((link, index) => (
            <SocialLinkButton 
              key={link.name} 
              socialLink={link} 
              index={index} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
