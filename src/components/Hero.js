import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [isDark, setIsDark] = useState(false);
  const parallaxRef = useRef();

  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(match.matches);
    const handler = (e) => setIsDark(e.matches);
    match.addEventListener('change', handler);
    return () => match.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (parallaxRef.current) {
        const layers = parallaxRef.current.querySelectorAll('.parallax-layer');
        layers.forEach((layer, i) => {
          const speed = (i + 1) * 0.2;
          layer.style.transform = `translateY(${scrollY * speed}px)`;
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden dark:bg-gradient-to-br dark:from-white dark:to-gray-100">
      {/* Parallax SVG Layers with gradients */}
      <div ref={parallaxRef} className="absolute inset-0 z-0 pointer-events-none select-none">
        <svg className="parallax-layer absolute left-0 top-0 w-1/2 h-40 opacity-40" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hero1" x1="0" y1="0" x2="400" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="80" rx="200" ry="80" fill="url(#hero1)" />
        </svg>
        <svg className="parallax-layer absolute right-0 top-20 w-1/3 h-32 opacity-30" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hero2" x1="0" y1="0" x2="300" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" />
              <stop offset="1" stopColor="#a21caf" />
            </linearGradient>
          </defs>
          <ellipse cx="150" cy="60" rx="150" ry="60" fill="url(#hero2)" />
        </svg>
        <svg className="parallax-layer absolute left-1/4 bottom-0 w-1/4 h-24 opacity-20" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hero3" x1="0" y1="0" x2="200" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a21caf" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="40" rx="100" ry="40" fill="url(#hero3)" />
        </svg>
      </div>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          options={{
            background: { color: 'transparent' },
            fpsLimit: 60,
            interactivity: {
              events: { onClick: { enable: true, mode: 'push' }, onHover: { enable: true, mode: 'repulse' }, resize: true },
              modes: { push: { quantity: 4 }, repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
              color: { value: isDark ? '#2563eb' : '#6366f1' },
              links: { color: isDark ? '#2563eb' : '#6366f1', distance: 150, enable: true, opacity: 0.3, width: 1 },
              collisions: { enable: true },
              move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: false, speed: 1, straight: false },
              number: { density: { enable: true, area: 800 }, value: 40 },
              opacity: { value: 0.3 },
              shape: { type: 'circle' },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 dark:text-gray-900">
          <Typewriter
            words={["Hi, I'm Karthik", "DevOps Engineer", "Cloud Enthusiast", "Open Source Contributor"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-indigo-400 dark:text-blue-600">Somisetty Veera Shiva Karthik</h2>
        <p className="text-lg md:text-xl mb-6 text-gray-300 max-w-xl mx-auto dark:text-gray-700">
          Dedicated DevOps enthusiast passionate about automation, cloud, and scalable solutions.
        </p>
        <a href="#projects">
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold shadow-lg transition duration-300 dark:bg-blue-600 dark:hover:bg-blue-700">
            View Projects
          </button>
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-gray-800 hover:bg-indigo-600 text-white rounded-full font-semibold transition dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-blue-600 dark:hover:text-white"
        >
          Preview / Download Resume
        </a>
      </motion.div>
      {/* Gradient overlay for extra effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-tr from-indigo-900/30 via-transparent to-indigo-700/20 dark:from-blue-200/30 dark:to-blue-100/20" />
      </div>
      {/* Animated SVG Wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
          <path fill={isDark ? '#f1f5f9' : '#312e81'} fillOpacity="1">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,112C672,96,768,64,864,53.3C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
              M0,80L48,90.7C96,101,192,123,288,133.3C384,144,480,144,576,128C672,112,768,80,864,69.3C960,59,1056,69,1152,85.3C1248,101,1344,123,1392,133.3L1440,144L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
              M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,112C672,96,768,64,864,53.3C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </path>
        </svg>
      </div>
    </section>
  );
} 