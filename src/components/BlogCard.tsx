import React from 'react';
import { BlogPost } from '@/types';

export const BlogCard: React.FC<BlogPost> = ({ title, link, image }) => (
  <div className="bg-white border rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-40 sm:h-48 object-cover" />
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{title}</h3>
      <a href={link} className="text-blue-600 hover:text-blue-800 text-sm sm:text-base">
        Read More
      </a>
    </div>
  </div>
);