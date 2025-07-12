import { motion } from 'framer-motion';
import { useState } from 'react';
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is where you'll integrate with your email service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>Let's Connect</h1>
          <p className={styles.subtitle}>
            Ready to explore new peaks together? Whether it's a project collaboration or trail stories, I'd love to hear from you.
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.form 
            className={styles.contactForm}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                  placeholder="Your full name"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className={styles.select}
              >
                <option value="">Select a topic</option>
                <option value="collaboration">Project Collaboration</option>
                <option value="job-opportunity">Job Opportunity</option>
                <option value="consulting">Consulting Inquiry</option>
                <option value="mentorship">Mentorship</option>
                <option value="trail-talk">Trail Stories & Adventures</option>
                <option value="tech-discussion">Tech Discussion</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={8}
                className={styles.textarea}
                placeholder="Tell me about your project, question, or just say hello! I'm always excited to connect with fellow adventurers and developers."
              />
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </motion.form>
          
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>Get in Touch</h3>
              <p className={styles.cardDescription}>
                I'm always open to discussing new opportunities, sharing experiences, or just having a good conversation about tech and trails.
              </p>
              
                             <div className={styles.contactDetails}>
                 <div className={styles.contactItem}>
                   <div className={styles.contactIcon}>
                     <SiGmail />
                   </div>
                   <div>
                     <strong>Email</strong>
                     <p>samueljacobbg@gmail.com</p>
                   </div>
                 </div>
                 
                 <div className={styles.contactItem}>
                   <div className={styles.contactIcon}>
                     <SiLinkedin />
                   </div>
                   <div>
                     <strong>LinkedIn</strong>
                     <p>Connect with me professionally</p>
                   </div>
                 </div>
                 
                 <div className={styles.contactItem}>
                   <div className={styles.contactIcon}>
                     <SiGithub />
                   </div>
                   <div>
                     <strong>GitHub</strong>
                     <p>Check out my code</p>
                   </div>
                 </div>
               </div>
              
              <div className={styles.socialLinks}>
                <a href="mailto:samueljacobbg@gmail.com" className={styles.socialLink}>
                  Email
                </a>
                <a href="https://www.linkedin.com/in/samuel-bishop-938212171/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  LinkedIn
                </a>
                <a href="https://github.com/SamuelBishop" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  GitHub
                </a>
              </div>
            </div>
            
            <div className={styles.responseCard}>
              <h4 className={styles.responseTitle}>Response Time</h4>
              <p className={styles.responseText}>
                I typically respond to messages within 24-48 hours. If you don't hear back, feel free to reach out again - sometimes emails get lost in the digital wilderness!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 