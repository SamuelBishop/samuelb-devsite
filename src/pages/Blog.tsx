import { motion } from 'framer-motion';
import { useSubstackPosts } from '../hooks/useSubstackPosts';
import styles from './Blog.module.css';

const Blog = () => {
  const { posts, loading, error } = useSubstackPosts('calebolson123', 5);

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Helper function to strip HTML tags from description
  const stripHtml = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  // Helper function to truncate text
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <div className={styles.blogPage}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>
            Stories from the intersection of code and mountains
          </p>
        </motion.div>

        <div className={styles.content}>
          {loading && (
            <div className={styles.loading}>
              <div className={styles.spinner}></div>
              <p>Loading latest posts...</p>
            </div>
          )}

          {error && (
            <div className={styles.error}>
              <h3>Failed to load blog posts</h3>
              <p>{error}</p>
              <p>Please try again later or visit directly at <a href="https://calebolson123.substack.com" target="_blank" rel="noopener noreferrer">calebolson123.substack.com</a></p>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className={styles.noPosts}>
              <h3>No posts found</h3>
              <p>Check back soon for new adventures in code and mountains!</p>
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className={styles.postsGrid}>
              {posts.map((post, index) => (
                <motion.article
                  key={post.guid}
                  className={styles.postCard}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {post.thumbnail && (
                    <div className={styles.postImage}>
                      <img 
                        src={post.thumbnail} 
                        alt={post.title}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  <div className={styles.postContent}>
                    <div className={styles.postMeta}>
                      <span className={styles.postDate}>
                        {formatDate(post.pubDate)}
                      </span>
                      <span className={styles.postAuthor}>
                        by {post.author}
                      </span>
                    </div>
                    
                    <h2 className={styles.postTitle}>
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        {post.title}
                      </a>
                    </h2>
                    
                    <p className={styles.postDescription}>
                      {truncateText(stripHtml(post.description), 150)}
                    </p>
                    
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.readMoreButton}
                    >
                      Read on Substack
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <motion.div
              className={styles.viewAllSection}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="https://calebolson123.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.viewAllButton}
              >
                View All Posts on Substack
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog; 