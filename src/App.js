import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gradient-glass animate-gradient-x text-white min-h-screen font-sans dark:bg-white dark:text-gray-900 transition-colors duration-300">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="certifications"><Certifications /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
