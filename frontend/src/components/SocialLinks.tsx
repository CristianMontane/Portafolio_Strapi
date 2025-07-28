import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail
};

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex justify-center space-x-6 mt-8"
    >
      {links.map((link, index) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];
        
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-full transition-all duration-300 group"
          >
            <Icon 
              size={20} 
              className="text-gray-300 group-hover:text-white transition-colors" 
            />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;