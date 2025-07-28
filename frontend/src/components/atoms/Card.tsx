import React from 'react';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
  motionProps?: MotionProps;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  motionProps,
  onClick,
  ...props
}) => {
  const baseStyles = 'rounded-xl overflow-hidden transition-all duration-300';
  
  const variants = {
    default: 'bg-gray-900 border border-gray-800',
    elevated: 'bg-gray-900 shadow-2xl border border-gray-800 hover:border-red-600/50',
    outlined: 'bg-transparent border-2 border-gray-700 hover:border-gray-600'
  };

  const cardClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (motionProps) {
    return (
      <motion.div
        className={cardClasses}
        onClick={onClick}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default Card;
