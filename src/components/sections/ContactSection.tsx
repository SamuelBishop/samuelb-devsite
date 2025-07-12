import { motion } from 'framer-motion';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Let's Connect</h2>
          <p className={styles.subtitle}>
            Ready to explore new peaks together?
          </p>
        </motion.div>
        
        <div className={styles.contactInfo}>
          <div className={styles.contactCard}>
            <h3>Get in Touch</h3>
            <p>Whether you're looking to collaborate on a project or share trail stories, I'd love to hear from you.</p>
            <div className={styles.contactLinks}>
              <a href="mailto:samueljacobbg@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/samuel-bishop-938212171/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/SamuelBishop" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 