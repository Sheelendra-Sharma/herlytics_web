"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

// Define section-wise image data
const collegeSections = {
  'Dropati Kanya Inter College': [
    { src: '/dropati1.jpg', alt: 'College A Image 1' },
    { src: '/dropati2.jpg', alt: 'College A Image 2' },
    { src: '/dropati3.jpg', alt: 'College A Image 2' },
  ],
  'Aarya Putri Inter College': [
    { src: '/Arya1.jpg', alt: 'College B Image 1' },
    { src: '/Arya2.jpg', alt: 'College B Image 2' },
    { src: '/Arya3.jpg', alt: 'College B Image 2' },
  ],
  'Stree Sudhar Kanya Inter College': [
    { src: '/stree1.jpg', alt: 'College C Image 1' },
    { src: '/stree2.jpg', alt: 'College C Image 2' },
    { src: '/stree3.jpg', alt: 'College C Image 2' },
  ],
  'Ram Bharosey Lal Girls Inter College': [
    { src: '/Ram1.jpg', alt: 'College C Image 1' },
    { src: '/Ram2.jpg', alt: 'College C Image 2' },
    { src: '/Ram3.jpg', alt: 'College C Image 2' },
  ],
  'Kusum kumari balika inter college': [
    { src: '/kusum1.jpg', alt: 'College C Image 1' },
    { src: '/kusum2.jpg', alt: 'College C Image 2' },
    { src: '/kusum3.jpg', alt: 'College C Image 2' },
  ],
  'Islamia Girls inter College': [
    { src: '/Islamia 1.jpg', alt: 'College C Image 1' },
    { src: '/Islamia 2.jpg', alt: 'College C Image 2' },
    { src: '/Islamia 3.jpg', alt: 'College C Image 2' },
  ],
  'K.P.R.C Kala Kendra Girls Inter College': [
    { src: '/K.P.R.C1.jpg', alt: 'College C Image 1' },
    { src: '/K.P.R.C2.jpg', alt: 'College C Image 2' },
    { src: '/K.P.R.C3.jpg', alt: 'College C Image 2' },
  ],
  'Shri Mahavir Prasad saxena girls inter College': [
    { src: '/Shri 1.jpg', alt: 'College C Image 1' },
    { src: '/Shri 2.jpg', alt: 'College C Image 2' },
    { src: '/Shri 3.jpg', alt: 'College C Image 2' },
  ],
 
};

// Create a type based on the keys of collegeSections
type SectionKey = keyof typeof collegeSections;

const GallerySection = () => {
  const [selectedSection, setSelectedSection] = useState<SectionKey | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary/30 min-h-screen pt-24 md:pt-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Gallery</h2>

        {/* Section Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {(Object.keys(collegeSections) as SectionKey[]).map((section) => (
            <button
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                selectedSection === section
                  ? 'bg-primary text-white'
                  : 'bg-white text-foreground hover:bg-primary hover:text-white'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Show images of selected section */}
        {selectedSection && (
          <div>
            <h3 className="text-2xl font-semibold mb-6">{selectedSection}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {collegeSections[selectedSection].map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg shadow-md aspect-square transform transition-all hover:scale-105"
                >
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
        )}
      </div>
    </section>
  );
};

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
