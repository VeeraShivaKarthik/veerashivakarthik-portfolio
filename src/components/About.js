import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950 flex flex-col items-center relative overflow-hidden fade-in">
      {/* Animated SVG Morphing Blob Divider with gradient */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-3xl z-0 pointer-events-none select-none">
        <svg viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32">
          <defs>
            <linearGradient id="aboutBlob" x1="0" y1="0" x2="600" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" />
              <stop offset="1" stopColor="#a21caf" />
            </linearGradient>
          </defs>
          <path fill="url(#aboutBlob)" fillOpacity="0.35">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0,80 Q150,20 300,80 T600,80 V120 H0Z;
                      M0,60 Q150,100 300,60 T600,60 V120 H0Z;
                      M0,80 Q150,20 300,80 T600,80 V120 H0Z" />
          </path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-card flex flex-col md:flex-row items-center max-w-4xl mx-auto px-4 gap-10 p-8"
      >
        <img
          src="/Profile.jpg"
          alt="Profile"
          className="w-44 h-44 rounded-full object-cover border-4 border-indigo-600 shadow-xl mb-6 md:mb-0"
        />
        <div className="text-left">
          <h2 className="text-3xl heading mb-4 text-indigo-400">About Me</h2>
          <p className="text-gray-300 text-lg max-w-xl">
            I’m a dedicated and enthusiastic B. Tech graduate in Computer Science and Engineering with expertise in DevOps, cloud computing, and automation. I’m proficient in CI/CD tools, cloud platforms, and infrastructure automation. I’m seeking an entry-level DevOps Engineer role to drive efficient and scalable development processes. Outside of tech, I enjoy learning new tools, collaborating on open-source projects, and exploring cloud innovations.
          </p>
        </div>
      </motion.div>
    </section>
  );
}