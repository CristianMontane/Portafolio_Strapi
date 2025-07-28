import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '../atoms';

interface SmartNavItemProps {
  path: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  scrollTargetId?: string;
}

const SmartNavItem: React.FC<SmartNavItemProps> = ({ 
  path, 
  label, 
  icon, 
  scrollTargetId 
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Para el botón de proyectos, considerar activo si estamos en home o en cualquier página de proyecto
  const isActive = path === '/projects' 
    ? (location.pathname === '/' || location.pathname.startsWith('/project'))
    : location.pathname === path;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Si estamos en la home y hay un scrollTargetId, hacer scroll
    if (location.pathname === '/' && scrollTargetId) {
      const targetElement = document.getElementById(scrollTargetId);
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Si no estamos en home, navegar a home y luego hacer scroll
      navigate('/');
      
      // Esperar un poco para que la navegación se complete y luego hacer scroll
      if (scrollTargetId) {
        setTimeout(() => {
          const targetElement = document.getElementById(scrollTargetId);
          if (targetElement) {
            targetElement.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive 
          ? 'bg-red-600 text-white' 
          : 'hover:bg-red-600/20 text-white hover:text-white'
      }`}
      style={{
        transform: 'scale(1)',
        transition: 'transform 0.1s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.95)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
    >
      <Icon icon={icon} size={18} />
      <span>{label}</span>
    </button>
  );
};

export default SmartNavItem;
