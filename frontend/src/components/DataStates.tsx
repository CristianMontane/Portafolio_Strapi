import React from 'react';
import { LoadingSpinner, ErrorMessage } from './molecules';
import { Text } from './atoms';

interface LoadingStateProps {
  message?: string;
}

interface ErrorStateProps {
  error: string;
  onRetry?: () => void;
  retryLabel?: string;
}

interface EmptyStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = "Cargando información..." 
}) => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
    <LoadingSpinner message={message} />
  </div>
);

export const ErrorState: React.FC<ErrorStateProps> = ({ 
  error, 
  onRetry, 
  retryLabel = "Reintentar" 
}) => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
    <ErrorMessage 
      message={error} 
      onRetry={onRetry} 
      retryLabel={retryLabel} 
    />
  </div>
);

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  message = "No se encontró información" 
}) => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
    <Text variant="p" size="lg" align="center">
      {message}
    </Text>
  </div>
);

// HOC para manejar estados de carga, error y datos vacíos
interface WithDataStateProps<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  onRetry?: () => void;
  loadingMessage?: string;
  emptyMessage?: string;
  children: (data: T) => React.ReactNode;
}

export function WithDataState<T>({
  data,
  loading,
  error,
  onRetry,
  loadingMessage,
  emptyMessage,
  children
}: WithDataStateProps<T>) {
  if (loading) {
    return <LoadingState message={loadingMessage} />;
  }

  if (error) {
    return <ErrorState error={error} onRetry={onRetry} />;
  }

  if (!data) {
    return <EmptyState message={emptyMessage} />;
  }

  return <>{children(data)}</>;
}
