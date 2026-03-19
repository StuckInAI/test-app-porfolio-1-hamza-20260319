import { initializeDatabase, AppDataSource } from '@/lib/db/data-source';
import { BlogPost } from '@/lib/db/entities/BlogPost';
import BlogPostCard from './BlogPostCard';

export default async function BlogSection() {
  await initializeDatabase();
  const blogRepository = AppDataSource.getRepository(BlogPost);
  // For demo, we'll use static data; replace with actual database query
  // const posts = await blogRepository.find({ 
  //   where: { isPublished: true }, 
  //   order: { publishedAt: 'DESC' },
  //   take: 3,
  // });
  
  // Static data for demonstration
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14',
      content: 'A comprehensive guide to the latest features...',
      excerpt: 'Learn how to leverage the App Router and server components.',
      imageUrl: '/placeholder-blog1.png',
      publishedAt: new Date('2024-01-20'),
      isPublished: true,
    },
    {
      id: 2,
      title: 'TypeORM with SQLite in Production',
      content: 'Best practices for using TypeORM...',
      excerpt: 'Setting up and optimizing SQLite for small to medium applications.',
      imageUrl: '/placeholder-blog2.png',
      publishedAt: new Date('2024-02-15'),
      isPublished: true,
    },
    {
      id: 3,
      title: 'Building Responsive UIs with Tailwind CSS',
      content: 'Tips and tricks for modern responsive design...',
      excerpt: 'Create beautiful layouts that work on all devices.',
      imageUrl: '/placeholder-blog3.png',
      publishedAt: new Date('2024-03-01'),
      isPublished: true,
    },
  ];

  return (
    <section id="blog" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
