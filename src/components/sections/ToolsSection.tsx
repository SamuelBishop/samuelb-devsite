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
          <h2 className={styles.title}>Tools & Technologies</h2>
          <p className={styles.subtitle}>
            The digital and physical gear that powers my adventures
          </p>
        </motion.div>
        
        <div className={styles.toolGrid}>
          <div className={styles.toolCategory}>
            <h3>Development</h3>
            <div className={styles.tools}>
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
            </div>
          </div>
          <div className={styles.toolCategory}>
            <h3>Mountain Gear</h3>
            <div className={styles.tools}>
              <span>GPS</span>
              <span>Weather Tech</span>
              <span>Safety Gear</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection; 