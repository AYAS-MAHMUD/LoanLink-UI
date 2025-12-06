import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router';

export const Footer = () => {
  return (
    
    <div>
      <footer className=" dark:bg-dark-card border-t border-cyan-800 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cyan-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <span className="text-xl font-bold  ">LoanLink</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Empowering your financial journey with fast, fair, and flexible microloans tailored to your needs.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold  mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">Home</Link></li>
              <li><Link to="/all-loans" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">All Loans</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold  mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">Cookie Policy</Link></li>
              <li><Link to="/licenses" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm">Licenses</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold  mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 text-sm">
                <MapPin size={18} />
                <span>123 Financial District, Tech City, TC 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 text-sm">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 text-sm">
                <Mail size={18} />
                <span>support@loanlink.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} LoanLink. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Made with ❤️ by Ayas</span>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};
