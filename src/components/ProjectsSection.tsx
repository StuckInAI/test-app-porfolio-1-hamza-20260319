import { initializeDatabase, AppDataSource } from '@/lib/db/data-source';
import { Project } from '@/lib/db/entities/Project';
import ProjectCard from './ProjectCard';

export default async function ProjectsSection() {
  await initializeDatabase();
  const projectRepository = AppDataSource.getRepository(Project);
  // For demo, we'll use static data; replace with actual database query
  // const projects = await projectRepository.find({ order: { createdAt: 'DESC' } });
  
  // Static data for demonstration
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart, payment integration, and admin dashboard.',
      imageUrl: '/placeholder-project1.png',
      link: 'https://example.com/project1',
      createdAt: new Date('2024-01-15'),
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks with teams and deadlines.',
      imageUrl: '/placeholder-project2.png',
      link: 'https://example.com/project2',
      createdAt: new Date('2024-02-10'),
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with interactive maps and forecasts.',
      imageUrl: '/placeholder-project3.png',
      link: 'https://example.com/project3',
      createdAt: new Date('2024-03-05'),
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
