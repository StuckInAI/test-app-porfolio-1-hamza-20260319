import Link from 'next/link';
import { FiHome, FiFolder, FiBook, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const navItems = [
    { href: '/', label: 'Home', icon: <FiHome /> },
    { href: '#projects', label: 'Projects', icon: <FiFolder /> },
    { href: '#blog', label: 'Blog', icon: <FiBook /> },
    { href: '#contact', label: 'Contact', icon: <FiMail /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-primary mb-4 md:mb-0">
            <Link href="/">Portfolio</Link>
          </div>
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  {item.icon}
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
