import Image from 'next/image';

export default function Hero() {
  return (
    <section className="text-center py-12 md:py-20">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 md:w-48 md:h-48 relative mb-8">
          <Image
            src="/placeholder-avatar.png"
            alt="Profile Avatar"
            fill
            className="rounded-full object-cover border-4 border-primary"
            sizes="(max-width: 768px) 128px, 192px"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          John Developer
        </h1>
        <h2 className="text-xl md:text-2xl text-secondary mb-6">
          Full-Stack Developer & Tech Enthusiast
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          I build modern, responsive web applications with cutting-edge technologies.
          Passionate about clean code, user experience, and continuous learning.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
