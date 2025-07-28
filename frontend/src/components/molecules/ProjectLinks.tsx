import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link, Icon } from '../atoms';

interface ProjectLinksProps {
  projectUrl?: string;
  repositoryUrl?: string;
  variant?: 'horizontal' | 'vertical';
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ 
  projectUrl, 
  repositoryUrl,
  variant = 'horizontal'
}) => {
  const containerClass = variant === 'horizontal' 
    ? 'flex items-center space-x-3' 
    : 'flex flex-col space-y-2';

  return (
    <div className={containerClass}>
      {projectUrl && (
        <Link
          href={projectUrl}
          external
          variant="primary"
          className="space-x-1"
          motionProps={{
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 }
          }}
        >
          <Icon icon={ExternalLink} size={16} />
          <span className="text-sm">Demo</span>
        </Link>
      )}
      
      {repositoryUrl && (
        <Link
          href={repositoryUrl}
          external
          variant="secondary"
          className="space-x-1"
          motionProps={{
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 }
          }}
        >
          <Icon icon={Github} size={16} />
          <span className="text-sm">Código</span>
        </Link>
      )}
    </div>
  );
};

export default ProjectLinks;
