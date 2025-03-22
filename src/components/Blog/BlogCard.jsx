

import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Calendar, User, MessageCircle } from 'lucide-react';

export const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] flex flex-col h-full">
      <Link to={`/blog/${post.id}`} className="block relative overflow-hidden group">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/blog/${post.id}`}>
          <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-center mb-4">
            <div className="flex items-center bg-gray-100 rounded-full p-2">
              <User size={18} className="text-blue-600" />
              <span className="ml-2 font-medium text-gray-900">{post.author}</span>
            </div>
          </div>
          
          <div className="border-t pt-4 flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600">
              <Calendar size={16} className="text-blue-600" />
              <span className="ml-2">{format(new Date(post.date), 'MMM d, yyyy')}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MessageCircle size={16} className="text-blue-600" />
              <span className="ml-2">
                {post.comments?.length || 0} {post.comments?.length === 1 ? 'Comment' : 'Comments'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};