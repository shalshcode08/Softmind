import React from 'react';
import { Statistic } from '@/types';

export const StatCard: React.FC<Statistic> = ({ value, label }) => (
  <div className="text-center p-4 bg-gray-50 rounded-lg">
    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
      {value}
    </div>
    <div className="text-sm sm:text-base text-gray-600">{label}</div>
  </div>
);