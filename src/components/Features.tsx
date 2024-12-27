import React from 'react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    title: "Customized Solutions",
    description: "We understand that every business is unique. We tailor our services to meet your specific needs, ensuring that the solutions we develop align perfectly with your goals and requirements."
  },
  {
    title: "Quality & Reliability",
    description: "We are committed to delivering high-quality software that is robust, reliable, and scalable. Our rigorous testing and quality assurance processes ensure that you receive a product that performs flawlessly."
  },
  {
    title: "Comprehensive Support",
    description: "Our partnership doesn't end with the delivery of the software. We offer ongoing support and maintenance to ensure that your systems continue to operate smoothly and efficiently."
  }
];

export const Features: React.FC = () => (
  <section className="py-12 sm:py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
        Why choose us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  </section>
);
