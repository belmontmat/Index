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
    description: 'A demonstration of a multi-party, ranked-choice, blockchain-based voting system.',
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
    description: 'A test orchestration tool that can leverage ECS or EKS to balance and run your end-to-end tests in parallel.',
    image: 'CICD.png',
    tags: ['Typescript', "Test Automation", 'CI/CD', 'DevOps', 'Playwright', 'Cypress', 'Selenium'],
    link: {
      type: 'github',
      url: 'https://github.com/belmontmat/cheaptest',
    },
    featured: true,
  },
];
