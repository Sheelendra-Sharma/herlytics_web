"use client";

import React, { useState, useEffect, type FC } from 'react';
import Image from 'next/image';
import mainImg from '@/app/gallery/Main.jpg';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeroSection: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen bg-secondary text-secondary-foreground">
      <Image
        src={mainImg}
        alt="Empowered women"
        layout="fill"
        objectFit="cover"
        className="opacity-30"
        data-ai-hint="community women empowerment"
        priority
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div
          className={cn(
            'transition-all duration-1000 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-background mb-6">
            Empowering Women in Analytics
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-background/90 mb-10 max-w-3xl mx-auto">
            Join a vibrant community dedicated to advancing women in the field of data and analytics through mentorship, events, and resources.
          </p>
        </div>
        <div
          className={cn(
            'flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-1000 ease-out delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg" asChild>
            <a href="#mission">Our Mission</a>
          </Button>
          <Button variant="outline" size="lg" className="border-background text-black  hover:bg-background hover:text-primary px-8 py-3 text-lg" asChild>
             <a href="#contact">Join Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
