import React, { useState } from 'react';
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
  const [showTooltip, setShowTooltip] = useState(false);
  const IconComponent = iconMap[socialLink.icon as keyof typeof iconMap];

  const handleClick = () => {
    if (socialLink.icon === 'mail') {
      // Para correo: abrir directamente (permite al sistema abrir el cliente de correo)
      window.location.href = socialLink.url;
    } else {
      // Para redes sociales: abrir en nueva pestaña
      window.open(socialLink.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Extraer información para mostrar en tooltip
  const getTooltipText = () => {
    switch (socialLink.icon) {
      case 'mail':
        return socialLink.url.replace('mailto:', '');
      case 'github':
        return 'Ver mi GitHub';
      case 'linkedin':
        return 'Conectar en LinkedIn';
      default:
        return socialLink.name;
    }
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
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
        onClick={handleClick}
      >
        <Icon 
          icon={IconComponent} 
          size={24}
          color="white"
        />
      </Button>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg border border-gray-700 whitespace-nowrap z-10 shadow-lg">
          {getTooltipText()}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default SocialLinkButton;
