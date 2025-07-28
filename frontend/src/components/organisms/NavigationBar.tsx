import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, FolderOpen } from 'lucide-react';
import { Link } from '../atoms';
import { NavItem } from '../molecules';

const NavigationBar: React.FC = () => {
  const navItems = [
    { path: '/', label: 'Inicio', icon: Home },
    { path: '/about', label: 'Sobre mí', icon: User },
    { path: '/projects', label: 'Proyectos', icon: FolderOpen }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-red-600/20 z-50"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            variant="ghost"
            className="text-2xl font-bold"
            motionProps={{
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 }
            }}
          >
            <span className="text-red-500">&lt;</span>
            Portfolio
            <span className="text-red-500">/&gt;</span>
          </Link>

          {/* Navigation Items */}
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                path={item.path}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default NavigationBar;
