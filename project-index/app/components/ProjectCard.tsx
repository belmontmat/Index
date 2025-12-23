import Image from 'next/image';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const CardContent = (
    <article className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      {/* Image with 16:9 aspect ratio */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={`/projects/${project.image}`}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300"
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
    return (
      <a
        href={project.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
