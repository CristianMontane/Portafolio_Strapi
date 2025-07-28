import React from 'react';
import { Calendar } from 'lucide-react';
import { Text, Icon } from '../atoms';

interface DateDisplayProps {
  date: string;
  variant?: 'inline' | 'block';
  size?: 'xs' | 'sm' | 'base';
}

const DateDisplay: React.FC<DateDisplayProps> = ({ 
  date, 
  variant = 'inline',
  size = 'sm'
}) => {
  const formattedDate = new Date(date).toLocaleDateString();
  
  const containerClass = variant === 'inline' 
    ? 'flex items-center space-x-1' 
    : 'flex flex-col items-center space-y-1';

  return (
    <div className={containerClass}>
      <Icon icon={Calendar} size={14} color="muted" />
      <Text 
        variant={variant === 'inline' ? 'span' : 'p'} 
        size={size} 
        color="muted"
      >
        {formattedDate}
      </Text>
    </div>
  );
};

export default DateDisplay;
