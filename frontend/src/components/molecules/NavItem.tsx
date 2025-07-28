import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link, Icon } from '../atoms';

interface NavItemProps {
  path: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const NavItem: React.FC<NavItemProps> = ({ path, label, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      variant="nav"
      className={`space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive 
          ? 'bg-red-600 text-white' 
          : 'hover:bg-red-600/20'
      }`}
      motionProps={{
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
      }}
    >
      <Icon icon={icon} size={18} />
      <span>{label}</span>
    </Link>
  );
};

export default NavItem;
