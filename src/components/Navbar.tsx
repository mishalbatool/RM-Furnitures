import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { getWhatsAppGeneralUrl, ProductCategory } from '../data/products';

interface NavbarProps {
  onSelectCategory?: (category: ProductCategory) => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Furniture Collection', href: '#collection' },
  { label: 'Handicrafts', href: '#handicrafts' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onSelectCategory }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (label: string) => {
    setMobileMenuOpen(false);
    if (label === 'Furniture Collection' && onSelectCategory) {
      onSelectCategory('All Products');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF5EC]/95 backdrop-blur-md border-b border-[#3B2418]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title (single-line wordmark + chair emblem) */}
        <a
          href="#home"
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#765035] rounded-md shrink-0"
          aria-label="RM Furnitures Chiniot Home"
        >
          <BrandLogo variant="header" />
        </a>

        {/* Zone 2: 5 clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#3B2418]/85"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.label)}
              className="relative py-1 whitespace-nowrap shrink-0 text-[#3B2418]/85 hover:text-[#3B2418] transition-colors duration-150 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-[#C9A45C] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#765035]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#3B2418] text-[#FAF5EC] text-sm font-medium hover:bg-[#533524] transition-colors duration-150 shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#765035]"
          >
            <MessageCircle className="w-4 h-4 text-[#C9A45C] shrink-0" aria-hidden="true" />
            <span>WhatsApp Order</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#3B2418] hover:bg-[#3B2418]/5 transition-colors focus-visible:outline-2 focus-visible:outline-[#765035]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="lg:hidden bg-[#FAF5EC] border-b border-[#3B2418]/15 px-4 pt-3 pb-6 shadow-lg animate-fade-in"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className="px-3 py-3 rounded-lg text-base font-medium text-[#3B2418] hover:bg-[#3B2418]/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#3B2418]/10">
            <a
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#3B2418] text-[#FAF5EC] text-sm font-semibold hover:bg-[#533524] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#C9A45C] shrink-0" aria-hidden="true" />
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
