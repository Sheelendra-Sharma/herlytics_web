"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const images = [
  { src: '/logo.png', alt: 'Logo' },
  { src: '/Main.jpg', alt: 'Main' },
    { src: '/Main.jpg', alt: 'Main' },
  { src: '/Mission.jpeg', alt: 'Mission' },
  // Add more images as needed
];

const GallerySection = () => (
  <section id="gallery" className="py-16 md:py-24 bg-secondary/30 min-h-screen pt-24 md:pt-32">
    <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow-md aspect-square transform transition-all hover:scale-105">
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={400}
              className="w-full h-full object-cover"
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