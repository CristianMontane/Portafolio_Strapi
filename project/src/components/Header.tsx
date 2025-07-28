import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, FolderOpen } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

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
          <Link to="/" className="text-2xl font-bold text-white hover:text-red-500 transition-colors">
            <span className="text-red-500">&lt;</span>
            Portfolio
            <span className="text-red-500">/&gt;</span>
          </Link>

          <div className="flex space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === path
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;