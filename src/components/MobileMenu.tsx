import React from 'react';
import { NavItem } from '@/types/index';

interface MobileMenuProps {
  isOpen: boolean;
  items: NavItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, items }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg flex-col space-y-4 p-4 z-50">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-gray-600 hover:text-gray-900 px-4 py-2 block"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};