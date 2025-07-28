import React from 'react';
import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'square' | 'rounded' | 'circle';
  motionProps?: MotionProps;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = '',
  size = 'md',
  shape = 'rounded',
  motionProps,
  ...props
}) => {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64'
  };

  const shapes = {
    square: 'rounded-none',
    rounded: 'rounded-lg',
    circle: 'rounded-full'
  };

  const imageClasses = `${sizes[size]} ${shapes[shape]} object-cover ${className}`;

  if (motionProps) {
    return (
      <motion.img
        src={src}
        alt={alt}
        className={imageClasses}
        {...motionProps}
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={imageClasses}
      {...props}
    />
  );
};

export default Image;
