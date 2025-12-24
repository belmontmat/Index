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
    title: 'Chaotic Systems and Predictability Limits',
    description: 'This notebook demonstrates the fundamental limits of predicting chaotic systems (like weather) by pitting them against modern machine learning predive models.',
    image: 'lorenz_attractor.png',
    tags: ['Python3', 'Machine Learning', 'Data Analysis'],
    link: {
      type: 'external',
      url: 'https://colab.research.google.com/drive/1lyBhGcbWNyVcrjIkLLeEHJSncaucCgcx',
    },
    featured: true,
  },
];
