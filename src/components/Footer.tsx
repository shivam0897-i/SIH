import React from 'react';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">MindSpark</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Supporting student mental health through innovative digital solutions. 
              Available 24/7 for confidential, professional psychological support.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone size={16} />
                <span>Crisis Hotline: 988</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/chat" className="hover:text-blue-400 transition-colors">AI Chat Support</a></li>
              <li><a href="/self-help" className="hover:text-blue-400 transition-colors">Self-Help Resources</a></li>
              <li><a href="/community" className="hover:text-blue-400 transition-colors">Peer Support</a></li>
              <li><a href="/booking" className="hover:text-blue-400 transition-colors">Book Counselor</a></li>
              <li><a href="/crisis" className="hover:text-blue-400 transition-colors">Crisis Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>support@mindspark.edu</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>1-800-MIND-HELP</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Student Health Center</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MindSpark. All rights reserved. | Privacy Policy | Terms of Service</p>
          <p className="mt-2 text-sm">
            If you're experiencing a mental health emergency, please call 911 or go to your nearest emergency room.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;