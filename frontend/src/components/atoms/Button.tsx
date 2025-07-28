import React from 'react';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isActive?: boolean;
  className?: string;
  motionProps?: MotionProps;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  isActive = false,
  className = '',
  motionProps,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50';
  
  const variants = {
    primary: isActive 
      ? 'bg-red-600 text-white shadow-lg' 
      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white',
    secondary: isActive
      ? 'bg-red-600 text-white shadow-lg'
      : 'bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white',
    ghost: isActive
      ? 'bg-red-600 text-white shadow-lg'
      : 'text-gray-300 hover:text-white hover:bg-red-600/20'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (motionProps) {
    return (
      <motion.button
        className={buttonClasses}
        onClick={onClick}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
