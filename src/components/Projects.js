import { motion } from 'framer-motion';

const projects = [
  {
    title: 'CI/CD Pipeline Setup Using Jenkins',
    image: 'https://placehold.co/400x220/222/fff?text=Jenkins+CI%2FCD',
    description: 'Automated build and deployment using Jenkins, integrated with GitHub, improved release cycles by 40%.',
    tech: ['Jenkins', 'GitHub', 'Shell Scripting'],
    github: '',
    demo: '',
  },
  {
    title: 'IoT-based Animal Monitoring System',
    image: 'https://placehold.co/400x220/222/fff?text=IoT+Animal+Monitor',
    description: 'Real-time animal health/location monitoring using IoT devices, GPS, and cloud storage.',
    tech: ['IoT', 'GPS', 'AWS', 'Python'],
    github: '',
    demo: '',
  },
  {
    title: 'Web App Deployment Automation',
    image: 'https://placehold.co/400x220/222/fff?text=Web+App+Deploy',
    description: 'Automated deployment with Jenkins, Docker, Ansible, EC2, Nginx, GitHub webhooks, and SSH.',
    tech: ['Jenkins', 'Docker', 'Ansible', 'AWS EC2', 'Nginx', 'GitHub'],
    github: 'https://github.com/veerashivakarthik',
    demo: '',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 fade-in">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl heading mb-10 text-indigo-400 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{
                y: [0, -10, 0, 10, 0],
                transition: {
                  duration: 6 + idx,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  delay: idx * 0.5,
                },
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(99,102,241,0.25)' }}
              className="glass-card overflow-hidden flex flex-col transition-transform duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-44 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-indigo-300">{project.title}</h3>
                <p className="text-gray-300 mb-3 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-indigo-700/30 text-indigo-200 px-2 py-1 rounded text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <div className="mt-auto flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2">GitHub</a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 