
"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card'; // Assuming Card components might be used, or remove if not.

const GallerySection = () => (
  <section id="gallery" className="py-16 md:py-24 bg-secondary/30 min-h-screen pt-24 md:pt-32"> {/* Added pt for navbar */}
    <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(12)].map((_, i) => ( // Increased image count for a fuller page
          <div key={i} className="overflow-hidden rounded-lg shadow-md aspect-square transform transition-all hover:scale-105">
            <Image 
              src={`https://placehold.co/400x400.png`} 
              alt={`Gallery image ${i + 1}`} 
              width={400} 
              height={400} 
              className="w-full h-full object-cover" 
              data-ai-hint="event photos community" 
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
