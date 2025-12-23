export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // filename in /public/projects/
  tags?: string[];
  link?: {
    type: 'github' | 'demo' | 'external';
    url: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe, featuring real-time inventory management and seamless checkout experience.',
    image: 'placeholder.png',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    link: {
      type: 'github',
      url: 'https://github.com',
    },
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'Clean and intuitive task manager with drag-and-drop functionality, real-time collaboration, and smart notifications.',
    image: 'placeholder.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: {
      type: 'demo',
      url: 'https://example.com',
    },
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with detailed forecasts, interactive maps, and location-based alerts using modern weather APIs.',
    image: 'placeholder.png',
    tags: ['Vue.js', 'TypeScript', 'Chart.js'],
    link: {
      type: 'github',
      url: 'https://github.com',
    },
  },
  {
    id: 'project-4',
    title: 'Portfolio Builder',
    description: 'No-code portfolio builder that helps developers create stunning portfolio websites with customizable templates and themes.',
    image: 'placeholder.png',
    tags: ['Next.js', 'Tailwind', 'Prisma'],
  },
  {
    id: 'project-5',
    title: 'Code Snippet Manager',
    description: 'Organize and share code snippets with syntax highlighting, tagging system, and team collaboration features.',
    image: 'placeholder.png',
    tags: ['React', 'Firebase', 'Monaco Editor'],
    link: {
      type: 'demo',
      url: 'https://example.com',
    },
  },
  {
    id: 'project-6',
    title: 'Fitness Tracker',
    description: 'Track workouts, monitor progress, and achieve fitness goals with detailed analytics and personalized workout plans.',
    image: 'placeholder.png',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    link: {
      type: 'github',
      url: 'https://github.com',
    },
  },
];
