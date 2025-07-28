import { Project, HomeData, SocialLink, Technology, Category } from '../types';

export const homeData: HomeData = {
  title: "Alex Rodriguez",
  description: "Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. Especializado en React, Node.js y tecnologías modernas.",
  photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/username",
    icon: "github"
  },
  {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/username",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:contact@example.com",
    icon: "mail"
  }
];

export const technologies: Technology[] = [
  { id: 1, name: "React", logo: "" },
  { id: 2, name: "TypeScript", logo: "" },
  { id: 3, name: "Node.js", logo: "" },
  { id: 4, name: "MongoDB", logo: "" },
  { id: 5, name: "Express", logo: "" },
  { id: 6, name: "Next.js", logo: "" },
  { id: 7, name: "Tailwind CSS", logo: "" },
  { id: 8, name: "PostgreSQL", logo: "" }
];

export const categories: Category[] = [
  { id: 1, name: "Web App" },
  { id: 2, name: "E-commerce" },
  { id: 3, name: "API" },
  { id: 4, name: "Mobile" }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Una plataforma completa de comercio electrónico con carrito de compras, pagos seguros y panel de administración. Incluye gestión de inventario, análisis de ventas y sistema de notificaciones.",
    coverImages: [
      "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    projectUrl: "https://ecommerce-demo.com",
    repositoryUrl: "https://github.com/username/ecommerce",
    publishedDate: "2024-01-15",
    deployed: true,
    technologies: [technologies[0], technologies[1], technologies[2], technologies[3]],
    categories: [categories[1]]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push y sincronización en la nube. Permite crear equipos, asignar tareas y hacer seguimiento del progreso.",
    coverImages: [
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    projectUrl: "https://taskapp-demo.com",
    repositoryUrl: "https://github.com/username/taskapp",
    publishedDate: "2024-02-20",
    deployed: true,
    technologies: [technologies[0], technologies[5], technologies[6], technologies[7]],
    categories: [categories[0]]
  },
  {
    id: 3,
    title: "Restaurant API",
    description: "API RESTful para sistema de restaurantes con gestión de menús, pedidos, reservas y pagos. Incluye autenticación JWT, validación de datos y documentación completa con Swagger.",
    coverImages: [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    repositoryUrl: "https://github.com/username/restaurant-api",
    publishedDate: "2024-03-10",
    deployed: false,
    technologies: [technologies[2], technologies[4], technologies[3]],
    categories: [categories[2]]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Sitio web personal responsive con diseño moderno, animaciones suaves y optimización SEO. Incluye blog integrado, formulario de contacto y panel de administración.",
    coverImages: [
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    projectUrl: "https://portfolio-demo.com",
    repositoryUrl: "https://github.com/username/portfolio",
    publishedDate: "2024-04-05",
    deployed: true,
    technologies: [technologies[0], technologies[1], technologies[6]],
    categories: [categories[0]]
  }
];