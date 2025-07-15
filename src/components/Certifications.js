import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Cloud Virtual Internship',
    file: '/Veera shiva Karthik   659994.pdf',
    year: '',
  },
  {
    title: 'Kapil IT Skill Hub - DevOps Course Completion Certificate',
    file: '/S VEERA SHIVA KARTHIK Course Certificate.pdf',
    year: '',
  },
  {
    title: 'Python for Data Science Badge',
    file: '/Python_for_Data_Science_Badge20240919-7-jg5qtq.pdf',
    year: '',
  },
  {
    title: 'Kapil IT Internship Certificate',
    file: '/Kapil IT Internship Certificate Somisetty Veera Shiva Karthik.pdf',
    year: '',
  },
  {
    title: 'Introduction To Internet Of Things - NPTEL',
    file: '/Introduction To Internet Of Things - NPTEL.pdf',
    year: '',
  },
  {
    title: 'Introduction To Cyber Security',
    file: '/I2CSUpdate20250604-24-4nkeha.pdf',
    year: '',
  },
  {
    title: 'Cybersecurity Essentials Update',
    file: '/CybersecurityEssentialsUpdate20250604-27-dxzj5e.pdf',
    year: '',
  },
  {
    title: 'AWS Academy Graduate - Machine Learning Foundations',
    file: '/AWS_Academy_Graduate___AWS_Academy_Machine_Learning_Foundations_Badge20240919-7-22l3z.pdf',
    year: '',
  },
  {
    title: 'AWS Academy Graduate - Cloud Foundations',
    file: '/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20240827-7-rlmwo0.pdf',
    year: '',
  },
  {
    title: 'AWS Academy Graduate - Cloud Architecting',
    file: '/AWS_Academy_Graduate___AWS_Academy_Cloud_Architecting_Badge20240827-7-xy85n8.pdf',
    year: '',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-900 dark:bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-indigo-400 dark:text-blue-600 text-center">Certifications</h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              className="bg-gray-800 dark:bg-white rounded-lg shadow-lg p-6 flex flex-col items-start mb-6 last:mb-0 transition-transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <h3 className="text-lg font-bold mb-2 text-indigo-400 dark:text-blue-600">{cert.title}</h3>
              <a href={cert.file} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 dark:text-gray-700 underline hover:text-indigo-400 dark:hover:text-blue-600 transition">
                View Certificate
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 