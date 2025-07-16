import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  const toggleTheme = () => setDark(d => !d);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 dark:bg-white/90 backdrop-blur border-b border-gray-800 dark:border-gray-200 shadow-sm fade-in">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Removed brand/title from left side */}
        <div className="hidden md:flex gap-6 items-center ml-auto">
          {navLinks.map(link => (
            <button
              key={link.to}
              onClick={() => handleScroll(link.to)}
              className="text-white dark:text-gray-900 hover:text-indigo-400 dark:hover:text-blue-600 font-medium transition subheading"
            >
              {link.label}
            </button>
          ))}
          <a href="https://linkedin.com/in/veerashivakarthik" target="_blank" rel="noopener noreferrer" className="text-white dark:text-gray-900 hover:text-indigo-400 dark:hover:text-blue-600 mx-1 underline subheading">LinkedIn</a>
          <a href="https://github.com/veerashivakarthik" target="_blank" rel="noopener noreferrer" className="text-white dark:text-gray-900 hover:text-indigo-400 dark:hover:text-blue-600 mx-1 underline subheading">GitHub</a>
          <button
            onClick={toggleTheme}
            className="ml-4 text-2xl focus:outline-none transition btn-primary px-4 py-1"
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? '\ud83c\udf19' : '\u2600\ufe0f'}
          </button>
        </div>
        <button className="md:hidden text-2xl text-white dark:text-gray-900 ml-auto" onClick={() => setOpen(!open)}>
          \u2630
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col items-center bg-gray-900 dark:bg-white py-4 gap-4">
          {navLinks.map(link => (
            <button
              key={link.to}
              onClick={() => handleScroll(link.to)}
              className="text-white dark:text-gray-900 hover:text-indigo-400 dark:hover:text-blue-600 font-medium transition subheading"
            >
              {link.label}
            </button>
          ))}
          <div className="flex gap-2 mt-2">
            <a href="https://linkedin.com/in/veerashivakarthik" target="_blank" rel="noopener noreferrer" className="text-white dark:text-gray-900 hover:text-indigo-400 dark:hover:text-blue-600 mx-1 underline subheading">LinkedIn</a>
            <a href="https://github.com/veerashivakarthik" target="_blank" rel="noopener noreferrer" className="text-white dark:text-gray-900 hover:text-indigo-400 dark:hover:text-blue-600 mx-1 underline subheading">GitHub</a>
            <button
              onClick={toggleTheme}
              className="ml-4 text-2xl focus:outline-none transition btn-primary px-4 py-1"
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? '\ud83c\udf19' : '\u2600\ufe0f'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 