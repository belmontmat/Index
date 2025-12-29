import Header from './components/Header';
import ProjectGrid from './components/ProjectGrid';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <Header
          name="Mathew Belmont"
          title="Software Development Engineer in Test"
          bio="University of Washington Tacoma graduate with 4 years of Quality Assurance Engineer experience working at Amazon. Specialized in automation, test design, and software development."
        />

        <div className="h-16 lg:h-24" />

        <ProjectGrid projects={projects} />

        {/* Footer with retro stripes */}
        <footer className="mt-24 pt-12 border-t-2 border-retro-golden dark:border-retro-orange transition-colors duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex gap-2" role="presentation" aria-hidden="true">
              <div className="w-16 h-2 rounded-full bg-retro-brown dark:bg-retro-cream transition-colors duration-300"></div>
              <div className="w-16 h-2 rounded-full bg-retro-burntOrange dark:bg-retro-golden transition-colors duration-300"></div>
              <div className="w-16 h-2 rounded-full bg-retro-orange dark:bg-retro-orange transition-colors duration-300"></div>
              <div className="w-16 h-2 rounded-full bg-retro-golden dark:bg-retro-burntOrange transition-colors duration-300"></div>
              <div className="w-16 h-2 rounded-full bg-retro-paleYellow dark:bg-retro-paleYellow transition-colors duration-300"></div>
            </div>
            <p className="text-sm text-retro-brown dark:text-retro-paleYellow transition-colors duration-300">
              © {new Date().getFullYear()} Mathew Belmont. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
