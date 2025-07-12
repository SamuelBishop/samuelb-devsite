import { motion } from 'framer-motion';
import styles from './ExperienceSection.module.css';

const ExperienceSection = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Professional Journey</h2>
          <p className={styles.subtitle}>
            Building expertise through diverse challenges and continuous learning
          </p>
        </motion.div>
        
        <div className={styles.content}>
          <div className={styles.experienceCard}>
            <h3>Senior Software Engineer</h3>
            <p>Leading development of scalable web applications</p>
            <span className={styles.period}>2020 - Present</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 