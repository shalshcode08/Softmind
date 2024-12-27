import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-6 sm:py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} Softmind Technologies. All Rights Reserved.
      </p>
    </div>
  </footer>
);