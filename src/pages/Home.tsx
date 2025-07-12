import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ToolsSection from '../components/sections/ToolsSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';
import styles from './Home.module.css';

const Home = () => {
  return (
    <motion.div 
      className={styles.homePage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ToolsSection />
      <BlogSection />
      <ContactSection />
    </motion.div>
  );
};

export default Home; 