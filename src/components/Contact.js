import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-950 flex justify-center items-center fade-in">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-lg glass-card p-8"
      >
        <h2 className="text-3xl heading mb-8 text-indigo-400 text-center">Contact</h2>
        <div className="flex flex-col gap-6 items-center text-lg">
          <motion.div className="flex items-center gap-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <motion.span whileHover={{ scale: 1.3, rotate: -10 }} className="social-icon text-xl cursor-pointer">📞</motion.span>
            <span className="font-semibold text-gray-200">Phone:</span>
            <motion.a href="tel:+918639371443" className="text-indigo-400 hover:underline font-medium" whileHover={{ scale: 1.1, color: '#6366f1' }} transition={{ type: 'spring', stiffness: 300 }}>+91 8639371443</motion.a>
          </motion.div>
          <motion.div className="flex items-center gap-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <motion.span whileHover={{ scale: 1.3, rotate: 10 }} className="social-icon text-xl cursor-pointer">✉️</motion.span>
            <span className="font-semibold text-gray-200">Email:</span>
            <motion.a href="mailto:veerashivakarthik@gmail.com" className="text-indigo-400 hover:underline font-medium" whileHover={{ scale: 1.1, color: '#6366f1' }} transition={{ type: 'spring', stiffness: 300 }}>veerashivakarthik@gmail.com</motion.a>
          </motion.div>
          <motion.div className="flex items-center gap-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <motion.span whileHover={{ scale: 1.3, rotate: 5 }} className="social-icon text-xl cursor-pointer">🔗</motion.span>
            <span className="font-semibold text-gray-200">LinkedIn:</span>
            <motion.a href="https://linkedin.com/in/veerashivakarthik" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline font-medium" whileHover={{ scale: 1.1, color: '#6366f1' }} transition={{ type: 'spring', stiffness: 300 }}>linkedin.com/in/veerashivakarthik</motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 