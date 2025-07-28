import React from 'react';
import { Loader2 } from 'lucide-react';
import { Icon, Text } from '../atoms';

interface LoadingSpinnerProps {
  message?: string;
  size?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "Cargando...", 
  size = 48 
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Icon 
        icon={Loader2} 
        size={size}
        color="red"
        className="animate-spin"
      />
      <Text variant="p" color="gray" align="center">
        {message}
      </Text>
    </div>
  );
};

export default LoadingSpinner;
