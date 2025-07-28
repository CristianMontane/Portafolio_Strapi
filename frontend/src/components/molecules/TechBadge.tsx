import React from 'react';
import { Badge } from '../atoms';
import type { Technology } from '../../types';

interface TechBadgeProps {
  technology: Technology;
  size?: 'sm' | 'md' | 'lg';
}

const TechBadge: React.FC<TechBadgeProps> = ({ 
  technology, 
  size = 'sm' 
}) => {
  return (
    <Badge 
      variant="primary" 
      size={size}
      motionProps={{
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
      }}
    >
      {technology.name}
    </Badge>
  );
};

export default TechBadge;
