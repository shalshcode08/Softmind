import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600">{description}</p>
  </div>
);