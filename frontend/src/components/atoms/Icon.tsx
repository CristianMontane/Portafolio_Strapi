import React from 'react';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';

interface IconProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  size?: number;
  color?: 'white' | 'gray' | 'red' | 'muted';
  className?: string;
  motionProps?: MotionProps;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 20,
  color = 'white',
  className = '',
  motionProps,
  ...props
}) => {
  const colors = {
    white: 'text-white',
    gray: 'text-gray-300',
    red: 'text-red-500',
    muted: 'text-gray-400'
  };

  const iconClasses = `${colors[color]} ${className}`;

  if (motionProps) {
    return (
      <motion.div className="inline-flex" {...motionProps}>
        <IconComponent size={size} className={iconClasses} {...props} />
      </motion.div>
    );
  }

  return <IconComponent size={size} className={iconClasses} {...props} />;
};

export default Icon;
