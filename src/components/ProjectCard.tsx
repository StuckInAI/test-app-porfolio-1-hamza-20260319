import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

type ProjectCardProps = {
  project: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={project.imageUrl || '/placeholder-project.png'}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-blue-700 transition-colors"
        >
          View Project <FiExternalLink />
        </a>
      </div>
    </div>
  );
}
