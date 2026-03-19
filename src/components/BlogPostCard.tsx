import Image from 'next/image';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

type BlogPostCardProps = {
  post: {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    publishedAt: Date;
  };
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={post.imageUrl || '/placeholder-blog.png'}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-3">
          <FiCalendar />
          <span className="text-sm">{formattedDate}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.excerpt}
        </p>
        <a
          href={`#`} // Replace with actual blog post route when implemented
          className="inline-flex items-center gap-2 text-primary hover:text-blue-700 transition-colors"
        >
          Read More <FiArrowRight />
        </a>
      </div>
    </div>
  );
}
