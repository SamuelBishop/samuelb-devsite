import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';
import heroBackgroundImage from '../../assets/hero-section-background.png';

const HeroSection = () => {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroBackgroundImage})` }}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={styles.title}>
              <span className={styles.highlight}>Tech-Focused.</span>
              <span className={styles.secondary}>Mountain-Minded.</span>
            </h1>
            
            <div className={styles.actions}>
              <Link to="/about" className={styles.primaryButton}>
                Explore My Journey
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 