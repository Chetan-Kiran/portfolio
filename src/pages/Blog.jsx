import '../styles/blog.css';
import { Calendar, Clock } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components. This guide covers useState, useEffect, and custom hooks.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'React'
    },
    {
      title: 'Building Scalable Web Applications',
      excerpt: 'Best practices for building maintainable and scalable web applications. Explore architecture patterns, code organization, and performance optimization.',
      date: 'March 10, 2024',
      readTime: '8 min read',
      category: 'Web Development'
    },
    {
      title: 'CSS Grid vs Flexbox: When to Use Which',
      excerpt: 'A comprehensive comparison of CSS Grid and Flexbox. Understand the strengths of each layout system and when to use them in your projects.',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'CSS'
    },
    {
      title: 'Mastering Async JavaScript',
      excerpt: 'Dive deep into asynchronous JavaScript with promises, async/await, and handling complex asynchronous operations effectively.',
      date: 'February 28, 2024',
      readTime: '10 min read',
      category: 'JavaScript'
    },
    {
      title: 'Firebase: The Complete Guide',
      excerpt: 'Everything you need to know about Firebase - from authentication and real-time database to hosting and cloud functions.',
      date: 'February 20, 2024',
      readTime: '12 min read',
      category: 'Firebase'
    },
    {
      title: 'Responsive Design in 2024',
      excerpt: 'Modern approaches to responsive web design. Learn about mobile-first design, breakpoints, and creating adaptive user experiences.',
      date: 'February 15, 2024',
      readTime: '7 min read',
      category: 'Design'
    }
  ];

  return (
    <div className="blog">
      <div className="blog-container">
        <h1 className="page-title">Blog</h1>
        <p className="blog-intro">
          Thoughts, tutorials, and insights about web development, design, and technology.
        </p>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-category">{post.category}</div>
              <h2 className="blog-title">{post.title}</h2>
              <div className="blog-meta">
                <span className="blog-date">
                  <Calendar size={16} />
                  {post.date}
                </span>
                <span className="blog-read-time">
                  <Clock size={16} />
                  {post.readTime}
                </span>
              </div>
              <p className="blog-excerpt">{post.excerpt}</p>
              <button className="read-more-btn">Read More</button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
