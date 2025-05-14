
"use client";

import React, { useState, useEffect, type FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#mission', label: 'Our Mission' }, // Added mission link to make Services make more sense in order
  { href: '#services', label: 'Services' }, // Added services link
  { href: '#events', label: 'Events' },
  { href: '#about', label: 'About Us' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact Us' },
];

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-background/90 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
            <Sparkles className="h-7 w-7" />
            <span>HERlytics</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative font-medium text-foreground transition-colors hover:text-primary group text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Login/Register</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg pb-4">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block font-medium text-foreground hover:text-primary py-2"
                onClick={toggleMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" className="w-full" asChild>
               <Link href="/login">Login/Register</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
