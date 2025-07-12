import { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';

export const useSubstackPosts = (substackUsername: string, limit: number = 5) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use RSS2JSON service to bypass CORS issues
        const rssUrl = `https://${substackUsername}.substack.com/feed`;
        const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        
        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.status !== 'ok') {
          throw new Error(data.message || 'Failed to fetch RSS feed');
        }

        // Transform the data to match our BlogPost interface
        const transformedPosts: BlogPost[] = data.items.slice(0, limit).map((item: any) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          description: item.description,
          content: item.content || item.description,
          author: item.author || data.feed?.title || 'Caleb Olson',
          guid: item.guid,
          isoDate: item.pubDate,
          thumbnail: item.thumbnail || item.enclosure?.url || extractImageFromContent(item.content || item.description)
        }));

        setPosts(transformedPosts);
      } catch (err) {
        console.error('Error fetching Substack posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
      } finally {
        setLoading(false);
      }
    };

    if (substackUsername) {
      fetchPosts();
    }
  }, [substackUsername, limit]);

  return { posts, loading, error };
};

// Helper function to extract image from content
const extractImageFromContent = (content: string): string | undefined => {
  if (!content) return undefined;
  
  const imgRegex = /<img[^>]+src="([^">]+)"/i;
  const match = content.match(imgRegex);
  return match ? match[1] : undefined;
}; 