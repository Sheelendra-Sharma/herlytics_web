
"use client";

import React, { useState, useEffect, type FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Sparkles } from 'lucide-react'; // X is no longer needed from here as Sheet handles close
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/#mission', label: 'Our Mission' },
  { href: '/#services', label: 'Services' },
  { href: '/#events', label: 'Events' },
  { href: '/#about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#team', label: 'Team' },
  { href: '/#contact', label: 'Contact Us' },
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
  
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    // Smooth scroll for hash links is handled by browser / Next.js Link
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
                onClick={() => handleNavClick(link.href)}
                target={link.href === '/gallery' ? '_blank' : undefined}
                rel={link.href === '/gallery' ? 'noopener noreferrer' : undefined}
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
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[320px] pt-12 px-6 bg-background">
                <div className="flex flex-col space-y-5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block font-medium text-foreground hover:text-primary py-2 text-lg"
                      onClick={() => handleNavClick(link.href)}
                      target={link.href === '/gallery' ? '_blank' : undefined}
                      rel={link.href === '/gallery' ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button variant="outline" className="w-full mt-5" asChild>
                     <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Login/Register</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
