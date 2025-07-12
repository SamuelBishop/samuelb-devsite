import { motion } from 'framer-motion';
import styles from './BlogSection.module.css';

const BlogSection = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Latest Adventures</h2>
          <p className={styles.subtitle}>
            Stories from the intersection of code and mountains
          </p>
        </motion.div>
        
        <div className={styles.blogGrid}>
          <div className={styles.blogCard}>
            <h3>Building in the Wild</h3>
            <p>How mountain adventures inspire better code architecture</p>
            <span className={styles.date}>March 2024</span>
          </div>
          <div className={styles.blogCard}>
            <h3>Peak Performance</h3>
            <p>Optimization lessons from high-altitude training</p>
            <span className={styles.date}>February 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 