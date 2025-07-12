import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Tools from './pages/Tools';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ScrollToTop from './components/common/ScrollToTop';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="main-content"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.main>
      <Footer />
    </div>
  );
}

export default App; 