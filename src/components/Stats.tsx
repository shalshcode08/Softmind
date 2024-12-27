import React from 'react';
import { StatCard } from './StatCard';
import { Statistic } from '@/types';

const statistics: Statistic[] = [
  { value: "23+", label: "No. of visitor" },
  { value: "45+", label: "No. of Project" },
  { value: "45+", label: "Active Clients" },
  { value: "45+", label: "Experts" }
];

export const Stats: React.FC = () => (
  <section className="py-12 sm:py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {statistics.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  </section>
);