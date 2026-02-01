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
    description: 'This notebook demonstrates the fundamental limits of predicting chaotic systems using modern machine learning predictive models.',
    image: 'lorenz_attractor.png',
    tags: ['Python3', 'Machine Learning', 'Data Analysis'],
    link: {
      type: 'external',
      url: 'https://colab.research.google.com/drive/1lyBhGcbWNyVcrjIkLLeEHJSncaucCgcx',
    },
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Auto Government Chain',
    description: 'A demonstration of a blockchain-based voting system.',
    image: 'block-vote.jpg',
    tags: ['Next.js', 'Typescript', 'Blockchain'],
    link: {
      type: 'demo',
      url: 'https://ag-chain.vercel.app',
    },
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Cheaptest',
    description: 'A cheap e2e test orchestration tool',
    image: 'CICD.png',
    tags: ['Typescript', "Test Automation", 'CI/CD', 'DevOps'],
    link: {
      type: 'github',
      url: 'https://github.com/belmontmat/cheaptest',
    },
    featured: true,
  },
];
