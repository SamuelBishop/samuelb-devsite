import { motion } from 'framer-motion';
import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'TrailTrack Analytics',
      description: 'Real-time trail conditions and safety analytics platform using IoT sensors and machine learning for outdoor enthusiasts.',
      tech: ['React', 'Node.js', 'MongoDB', 'IoT'],
      category: 'Full Stack',
      status: 'Featured'
    },
    {
      id: 2,
      title: 'PeakPlanner Mobile',
      description: 'Mobile app for planning mountain adventures with weather integration and offline GPS for remote areas.',
      tech: ['React Native', 'Firebase', 'Maps API'],
      category: 'Mobile',
      status: 'Featured'
    },
    {
      id: 3,
      title: 'EcoCode Platform',
      description: 'Sustainable development platform promoting environmental consciousness in software development practices.',
      tech: ['TypeScript', 'GraphQL', 'PostgreSQL'],
      category: 'Platform',
      status: 'Featured'
    }
  ];

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Innovative solutions built with passion and precision
          </p>
        </motion.div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🚀</div>
                <div className={styles.cardMeta}>
                  <span className={styles.category}>{project.category}</span>
                  <span className={styles.status}>{project.status}</span>
                </div>
              </div>
              
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.techStack}>
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className={styles.cardActions}>
                <button className={styles.viewProject}>View Project</button>
                <button className={styles.viewCode}>View Code</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 