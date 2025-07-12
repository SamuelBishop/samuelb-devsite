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
          <div className={styles.timeline}>
            <div className={styles.experienceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>💼</div>
                <div className={styles.cardMeta}>
                  <span className={styles.period}>2020 - Present</span>
                  <span className={styles.location}>Microsoft</span>
                </div>
              </div>
              <h3 className={styles.jobTitle}>Microsoft Career Journey</h3>
              <h4 className={styles.company}>Dynamics 365 Business Applications</h4>
              <p className={styles.description}>
                <strong>Software Engineer II (2023 - Present)</strong> - Implementation and maintenance of Rich Text Editor 
                for enterprise communications. Development and maintenance of Live Chat Widget enabling 
                real-time customer interactions across multiple platforms.
                <br/><br/>
                <strong>Software Engineer (2021 - 2023)</strong> - Development of Apple Business Messaging Channel integration. 
                Building Agent Experience features in Dynamics Omnichannel to enhance customer service workflows.
                <br/><br/>
                <strong>Intern (Summer 2020)</strong> - Completed proof of concept microservice using .NET Core, 
                React, TypeScript, and Azure services. Released to production in May 2021.
              </p>
              <div className={styles.achievements}>
                <span className={styles.achievement}>.NET Framework & Core</span>
                <span className={styles.achievement}>React & TypeScript</span>
                <span className={styles.achievement}>Azure Service Fabric</span>
                <span className={styles.achievement}>Azure SignalR</span>
                <span className={styles.achievement}>Microservices</span>
                <span className={styles.achievement}>Enterprise Applications</span>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>✈️</div>
                <div className={styles.cardMeta}>
                  <span className={styles.period}>Summer 2019</span>
                  <span className={styles.location}>Garmin International</span>
                </div>
              </div>
              <h3 className={styles.jobTitle}>Software Engineering Intern</h3>
              <h4 className={styles.company}>Garmin Integration Flight Decks</h4>
              <p className={styles.description}>
                Worked on aviation flight deck systems development using OpenGL and C++. 
                Contributed to the development of integrated cockpit display systems for 
                commercial and general aviation aircraft, focusing on graphics rendering 
                and user interface components for critical flight instrumentation.
              </p>
              <div className={styles.achievements}>
                <span className={styles.achievement}>OpenGL</span>
                <span className={styles.achievement}>C++</span>
                <span className={styles.achievement}>Aviation Systems</span>
                <span className={styles.achievement}>Graphics Programming</span>
                <span className={styles.achievement}>Flight Instrumentation</span>
              </div>
            </div>

            <div className={styles.experienceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🎓</div>
                <div className={styles.cardMeta}>
                  <span className={styles.period}>2017 - 2021</span>
                  <span className={styles.location}>Columbia, MO</span>
                </div>
              </div>
              <h3 className={styles.jobTitle}>Bachelor of Science (BS)</h3>
              <h4 className={styles.company}>University of Missouri-Columbia</h4>
              <p className={styles.description}>
                Electrical and Computer Engineering Degrees with minors in Mathematics and Computer Science. 
                Comprehensive coursework in algorithms, machine learning, embedded systems, circuit design, 
                and software engineering. Extensive hands-on project experience bridging hardware and software
                development.
              </p>
              <div className={styles.achievements}>
                <span className={styles.achievement}>Cum Laude</span>
                <span className={styles.achievement}>Electrical Engineering Major</span>
                <span className={styles.achievement}>Computer Engineering Major</span>
                <span className={styles.achievement}>Mathematics Minor</span>
                <span className={styles.achievement}>Computer Science Minor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 