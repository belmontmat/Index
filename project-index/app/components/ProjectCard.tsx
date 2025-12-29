import Image from 'next/image';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const CardContent = (
    <article className="group relative rounded-3xl border-2 border-retro-brown dark:border-retro-brown bg-retro-cream dark:bg-retro-darkBrown transition-colors duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-retro-burntOrange dark:hover:border-retro-burntOrange h-full flex flex-col overflow-hidden">
      {/* Image with 16:9 aspect ratio */}
      <div className="relative aspect-[16/9] w-full bg-retro-paleYellow dark:bg-retro-charcoal flex-shrink-0 transition-colors duration-300">
        <Image
          src={`/projects/${project.image}`}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-retro-brown dark:text-retro-cream transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-retro-darkBrown dark:text-retro-paleYellow leading-relaxed line-clamp-3 transition-colors duration-300">
          {project.description}
        </p>

        {/* Tech stack tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-retro-paleYellow dark:bg-retro-brown rounded-full text-retro-brown dark:text-retro-cream border border-retro-brown dark:border-retro-cream transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  // If project has link, wrap in anchor tag
  if (project.link) {
    const linkTypeLabel = project.link.type === 'github' ? 'GitHub repository' : project.link.type === 'demo' ? 'Live demo' : 'External link';

    return (
      <a
        href={project.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-4 focus:ring-retro-burntOrange dark:focus:ring-retro-golden rounded-3xl transition-shadow"
        aria-label={`${project.title} - ${linkTypeLabel}`}
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
