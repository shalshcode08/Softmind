import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '@/types';
import { MobileMenu } from './MobileMenu';

const navigationItems: NavItem[] = [
  { label: 'Insights', href: '#' },
  { label: 'Service', href: '#' },
  { label: 'Internships & Training', href: '#' },
  { label: 'Blogs', href: '#' },
  { label: 'Career', href: '#' },
  { label: 'About us', href: '#' },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold">Softmind</div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm lg:text-base text-gray-600 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <MobileMenu isOpen={isMenuOpen} items={navigationItems} />
      </nav>
    </header>
  );
};