import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';

interface LinkProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'nav';
  external?: boolean;
  className?: string;
  motionProps?: MotionProps;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({
  children,
  to,
  href,
  variant = 'primary',
  external = false,
  className = '',
  motionProps,
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center transition-all duration-300 focus:outline-none';
  
  const variants = {
    primary: 'text-red-400 hover:text-red-300',
    secondary: 'text-gray-400 hover:text-white',
    ghost: 'text-white hover:text-red-500',
    nav: 'text-gray-300 hover:text-white'
  };

  const linkClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (motionProps) {
    if (to) {
      const MotionRouterLink = motion(RouterLink);
      return (
        <MotionRouterLink
          to={to}
          className={linkClasses}
          onClick={onClick}
          {...motionProps}
        >
          {children}
        </MotionRouterLink>
      );
    }
    
    return (
      <motion.a
        href={href}
        className={linkClasses}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  if (to) {
    return (
      <RouterLink 
        to={to} 
        className={linkClasses}
        onClick={onClick}
        {...props}
      >
        {children}
      </RouterLink>
    );
  }

  return (
    <a 
      href={href} 
      className={linkClasses}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
