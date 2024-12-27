import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactInfo: React.FC = () => (
  <div>
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
      Get in touch with our support team
    </h2>
    <div className="space-y-4">
      <div className="flex items-center">
        <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
        <span className="text-sm sm:text-base">7321063552</span>
      </div>
      <div className="flex items-center">
        <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
        <span className="text-sm sm:text-base break-all">
          info@softmindtechnologies.com
        </span>
      </div>
      <div className="flex items-start">
        <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
        <span className="text-sm sm:text-base">
          SOFTMIND TECHNOLOGIES, House no 32, First Floor Chattarpur,
          New Delhi - 110074
        </span>
      </div>
    </div>
  </div>
);