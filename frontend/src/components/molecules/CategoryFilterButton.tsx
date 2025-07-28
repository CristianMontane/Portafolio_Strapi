import React from 'react';
import { Filter } from 'lucide-react';
import { Button, Icon } from '../atoms';
import type { Category } from '../../types';

interface CategoryFilterButtonProps {
  category?: Category;
  isActive: boolean;
  onClick: () => void;
  isAllButton?: boolean;
}

const CategoryFilterButton: React.FC<CategoryFilterButtonProps> = ({
  category,
  isActive,
  onClick,
  isAllButton = false
}) => {
  return (
    <Button
      variant="primary"
      isActive={isActive}
      onClick={onClick}
      className="space-x-2"
      motionProps={{
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
      }}
    >
      {isAllButton && <Icon icon={Filter} size={18} />}
      <span>{isAllButton ? 'Todos' : category?.name}</span>
    </Button>
  );
};

export default CategoryFilterButton;
