import { motion } from 'framer-motion';
import styles from './ToolsSection.module.css';

const ToolsSection = () => {
  return (
    <section className={styles.tools}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Development Toolkit</h2>
          <p className={styles.subtitle}>
            The technologies and tools that power my software development journey
          </p>
        </motion.div>
        
        <div className={styles.toolGrid}>
          <div className={styles.toolCategory}>
            <h3>Programming Languages</h3>
            <div className={styles.tools}>
              <span>Python</span>
              <span>JavaScript</span>
              <span>C</span>
              <span>C++</span>
              <span>Bash</span>
              <span>VHDL</span>
            </div>
          </div>
          <div className={styles.toolCategory}>
            <h3>Frontend Technologies</h3>
            <div className={styles.tools}>
              <span>React</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>TypeScript</span>
            </div>
          </div>
          <div className={styles.toolCategory}>
            <h3>Backend & Database</h3>
            <div className={styles.tools}>
              <span>Node.js</span>
              <span>MySQL</span>
              <span>SQL</span>
              <span>.NET</span>
            </div>
          </div>
          <div className={styles.toolCategory}>
            <h3>Cloud & DevOps</h3>
            <div className={styles.tools}>
              <span>Microsoft Azure</span>
              <span>AWS</span>
              <span>Kubernetes</span>
              <span>Linux</span>
              <span>Git</span>
            </div>
          </div>
          <div className={styles.toolCategory}>
            <h3>Hardware & Embedded</h3>
            <div className={styles.tools}>
              <span>Microcontrollers (Arm Cortex-M)</span>
              <span>Circuit Design</span>
            </div>
          </div>
          <div className={styles.toolCategory}>
            <h3>AI & Machine Learning</h3>
            <div className={styles.tools}>
              <span>TensorFlow</span>
              <span>Machine Learning</span>
              <span>Neural Networks</span>
            </div>
          </div>
          <div className={styles.toolCategory}>
            <h3>Design & Tools</h3>
            <div className={styles.tools}>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection; 