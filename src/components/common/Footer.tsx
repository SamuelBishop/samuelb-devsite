import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo & Tagline */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoIcon}>🏔️</span>
              <span className={styles.logoText}>Samuel B.</span>
            </Link>
            <p className={styles.tagline}>
              Tech-Focused. Mountain-Minded.
            </p>
          </div>

          {/* Navigation Links */}
          <div className={styles.navigation}>
            <h4 className={styles.sectionTitle}>Navigate</h4>
            <ul className={styles.navList}>
              <li><Link to="/about" className={styles.navLink}>About</Link></li>
              <li><Link to="/projects" className={styles.navLink}>Projects</Link></li>
              <li><Link to="/experience" className={styles.navLink}>Experience</Link></li>
              <li><Link to="/tools" className={styles.navLink}>Tools</Link></li>
              <li><Link to="/blog" className={styles.navLink}>Blog</Link></li>
              <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className={styles.connect}>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <ul className={styles.socialList}>
              <li>
                <a 
                  href="https://github.com/SamuelBishop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/samuel-bishop-938212171/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:samueljacobbg@gmail.com" 
                  className={styles.socialLink}
                  aria-label="Email"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h4 className={`${styles.sectionTitle} ${styles.sectionTitleTrailUpdates}`}>Trail Updates</h4>
            <p className={styles.newsletterText}>
              Get notified about new projects and adventures
            </p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={styles.emailInput}
                aria-label="Email address"
              />
              <button type="submit" className={styles.subscribeButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Samuel B. Built with ❤️ somewhere between sea level and summit.
          </p>
          <p className={styles.motto}>
            "The best code, like the best routes, is both elegant and efficient."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 