import React from 'react';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'small';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'white' | 'gray' | 'red' | 'muted';
  align?: 'left' | 'center' | 'right';
  className?: string;
  motionProps?: MotionProps;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'p',
  size,
  weight = 'normal',
  color = 'white',
  align = 'left',
  className = '',
  motionProps,
  ...props
}) => {
  // Default sizes for each variant
  const defaultSizes: Record<string, keyof typeof sizes> = {
    h1: '5xl',
    h2: '4xl', 
    h3: '3xl',
    h4: '2xl',
    p: 'base',
    span: 'base',
    small: 'sm'
  };

  const actualSize = size || defaultSizes[variant] || 'base';

  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl md:text-6xl',
    '6xl': 'text-6xl md:text-7xl'
  };

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const colors = {
    white: 'text-white',
    gray: 'text-gray-300',
    red: 'text-red-500',
    muted: 'text-gray-400'
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const textClasses = `${sizes[actualSize as keyof typeof sizes]} ${weights[weight]} ${colors[color]} ${alignments[align]} ${className}`;

  if (motionProps) {
    switch (variant) {
      case 'h1':
        return <motion.h1 className={textClasses} {...motionProps} {...props}>{children}</motion.h1>;
      case 'h2':
        return <motion.h2 className={textClasses} {...motionProps} {...props}>{children}</motion.h2>;
      case 'h3':
        return <motion.h3 className={textClasses} {...motionProps} {...props}>{children}</motion.h3>;
      case 'h4':
        return <motion.h4 className={textClasses} {...motionProps} {...props}>{children}</motion.h4>;
      case 'span':
        return <motion.span className={textClasses} {...motionProps} {...props}>{children}</motion.span>;
      case 'small':
        return <motion.small className={textClasses} {...motionProps} {...props}>{children}</motion.small>;
      default:
        return <motion.p className={textClasses} {...motionProps} {...props}>{children}</motion.p>;
    }
  }

  switch (variant) {
    case 'h1':
      return <h1 className={textClasses} {...props}>{children}</h1>;
    case 'h2':
      return <h2 className={textClasses} {...props}>{children}</h2>;
    case 'h3':
      return <h3 className={textClasses} {...props}>{children}</h3>;
    case 'h4':
      return <h4 className={textClasses} {...props}>{children}</h4>;
    case 'span':
      return <span className={textClasses} {...props}>{children}</span>;
    case 'small':
      return <small className={textClasses} {...props}>{children}</small>;
    default:
      return <p className={textClasses} {...props}>{children}</p>;
  }
};

export default Text;
