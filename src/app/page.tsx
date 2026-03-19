import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <ProjectsSection />
      <BlogSection />
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
