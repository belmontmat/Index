import Header from './components/Header';
import ProjectGrid from './components/ProjectGrid';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <Header
          name="Mathew Belmont"
          title="Software Development Engineer in Test"
          bio="University of Washington Tacoma graduate with 4 years of Quality Assurance Engineer experience working at Amazon. Specialized in automation, test design, and software development."
        />

        <div className="h-16 lg:h-24" />

        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
