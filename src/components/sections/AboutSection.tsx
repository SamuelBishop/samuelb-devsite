import { motion } from 'framer-motion';
import styles from './AboutSection.module.css';
import profilePhoto from '../../assets/about-me-profile-photo.jpg';

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.textContent}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.subtitle}>
              Where technology meets adventure
            </p>
            
            <div className={styles.description}>
              <p>
                I'm passionate about creating innovative solutions and exploring the great outdoors. 
                By day, I architect and build scalable software solutions that push the boundaries of what's possible in tech.
              </p>
              <p>
                By night (and weekends), I'm conquering peaks and navigating challenging terrain. 
                The mountains teach me resilience, the trails show me perseverance, and both disciplines 
                require the same level of precision and determination.
              </p>
            </div>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <h3>Innovation & Problem Solving</h3>
                <p>Tackling complex challenges with creative solutions</p>
              </div>
              <div className={styles.highlight}>
                <h3>Sustainability & Conservation</h3>
                <p>Building technology that respects our planet</p>
              </div>
              <div className={styles.highlight}>
                <h3>Community & Mentorship</h3>
                <p>Sharing knowledge both in code and on the trail</p>
              </div>
            </div>
          </div>
          
          <div className={styles.imageContent}>
            <div className={styles.profileImage}>
              <div className={styles.imagePlaceholder}>
                <img src={profilePhoto} alt="Samuel B. - Trail running in the forest" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 