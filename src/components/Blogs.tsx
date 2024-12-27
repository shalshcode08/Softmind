import React from 'react';
import { BlogCard } from './BlogCard';
import { BlogPost } from '@/types';

const blogPosts: BlogPost[] = [
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    link: "#",
    image: "/api/placeholder/400/200"
  },
  // Add more blog posts...
];

export const Blog: React.FC = () => (
  <section className="py-12 sm:py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
        Our Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </div>
    </div>
  </section>
);