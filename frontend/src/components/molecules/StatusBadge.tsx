import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Badge, Icon } from '../atoms';

interface StatusBadgeProps {
  deployed: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  deployed, 
  size = 'sm' 
}) => {
  return (
    <Badge 
      variant={deployed ? 'success' : 'secondary'} 
      size={size}
      className="space-x-1"
    >
      <Icon 
        icon={deployed ? CheckCircle : XCircle} 
        size={12} 
        color={deployed ? 'white' : 'gray'} 
      />
      <span>{deployed ? 'Desplegado' : 'En desarrollo'}</span>
    </Badge>
  );
};

export default StatusBadge;
