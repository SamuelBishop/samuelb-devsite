export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
  author: string;
  guid: string;
  isoDate: string;
  thumbnail?: string;
}

export interface SubstackFeedData {
  items: BlogPost[];
  feedUrl: string;
  title: string;
  description: string;
  link: string;
  lastBuildDate: string;
} 