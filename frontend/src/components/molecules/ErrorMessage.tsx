import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Icon, Text, Button } from '../atoms';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  onRetry, 
  retryLabel = "Reintentar" 
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 max-w-md mx-auto px-6">
      <Icon 
        icon={AlertCircle} 
        size={48}
        color="red"
      />
      <Text variant="h4" align="center" weight="semibold">
        Error al cargar la información
      </Text>
      <Text variant="p" color="muted" align="center">
        {message}
      </Text>
      {onRetry && (
        <Button 
          variant="secondary"
          onClick={onRetry}
          className="space-x-2"
          motionProps={{
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 }
          }}
        >
          <Icon icon={RefreshCw} size={16} />
          <span>{retryLabel}</span>
        </Button>
      )}
    </div>
  );
};

export default ErrorMessage;
