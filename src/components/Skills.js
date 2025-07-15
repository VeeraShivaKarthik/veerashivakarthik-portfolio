import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  { icon: '🐙', name: 'Git & GitHub', level: 'Proficient' },
  { icon: '⚙️', name: 'Jenkins', level: 'Proficient' },
  { icon: '🐳', name: 'Docker', level: 'Proficient' },
  { icon: '☸️', name: 'Kubernetes', level: 'Proficient' },
  { icon: '🛠️', name: 'CI/CD', level: 'Proficient' },
  { icon: '☁️', name: 'AWS', level: 'Proficient' },
  { icon: '📦', name: 'Terraform', level: 'Intermediate' },
  { icon: '📜', name: 'Ansible', level: 'Intermediate' },
  { icon: '💻', name: 'Linux/Shell', level: 'Intermediate' },
  { icon: '🌐', name: 'Networking', level: 'Intermediate' },
  { icon: '🔍', name: 'Nagios/CloudWatch', level: 'Familiar' },
  { icon: '🧰', name: 'Maven', level: 'Familiar' },
];

export default function Skills() {
  const [blobPos, setBlobPos] = useState({ x: 200, y: 100 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setBlobPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <section id="skills" className="py-20 bg-gray-900 flex flex-col items-center relative overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Interactive Mouse-Responsive Blob with gradient */}
      <svg className="absolute z-0 pointer-events-none select-none" style={{ left: blobPos.x - 120, top: blobPos.y - 80, width: 240, height: 160, transition: 'left 0.2s, top 0.2s' }} viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skillsBlob" x1="0" y1="0" x2="240" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <ellipse cx="120" cy="80" rx="100" ry="60" fill="url(#skillsBlob)" fillOpacity="0.22" />
      </svg>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-indigo-400 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              <span className="text-4xl mb-2">{skill.icon}</span>
              <span className="font-semibold text-lg mb-1 text-white">{skill.name}</span>
              <span className="text-sm text-indigo-300">{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 