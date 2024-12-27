import React from 'react';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export const Contact: React.FC = () => (
  <section className="py-12 sm:py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </section>
);