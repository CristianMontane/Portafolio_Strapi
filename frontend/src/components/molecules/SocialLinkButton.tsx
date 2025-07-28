import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button, Icon } from '../atoms';
import type { SocialLink } from '../../types';

interface SocialLinkButtonProps {
  socialLink: SocialLink;
  index?: number;
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail
};

const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({ 
  socialLink, 
  index = 0 
}) => {
  const IconComponent = iconMap[socialLink.icon as keyof typeof iconMap];

  return (
    <Button
      variant="ghost"
      className="p-4 rounded-full bg-gray-800/50 hover:bg-red-600 hover:scale-110 transition-all duration-300"
      motionProps={{
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.3, delay: index * 0.1 },
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 }
      }}
      onClick={() => window.open(socialLink.url, '_blank')}
    >
      <Icon 
        icon={IconComponent} 
        size={24}
        color="white"
      />
    </Button>
  );
};

export default SocialLinkButton;
