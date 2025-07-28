import React from 'react';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';

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
    <div className="text-center">
      <Loader2 className="w-12 h-12 text-red-500 animate-spin mx-auto mb-4" />
      <p className="text-white text-lg">{message}</p>
    </div>
  </div>
);

export const ErrorState: React.FC<ErrorStateProps> = ({ 
  error, 
  onRetry, 
  retryLabel = "Reintentar" 
}) => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
    <div className="text-center max-w-md mx-auto px-6">
      <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
      <h2 className="text-white text-xl font-semibold mb-2">Error al cargar la información</h2>
      <p className="text-gray-400 mb-4">{error}</p>
      {onRetry && (
        <button 
          onClick={onRetry} 
          className="inline-flex items-center space-x-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>{retryLabel}</span>
        </button>
      )}
    </div>
  </div>
);

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  message = "No se encontró información" 
}) => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
    <div className="text-center">
      <p className="text-white text-lg">{message}</p>
    </div>
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
