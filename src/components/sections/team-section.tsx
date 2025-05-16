
"use client";

import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  socials: {
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  aiHint: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Iram Naim',
    role: 'Founder',
    imageUrl: '/iram mam profile.jpg',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
    aiHint: 'profile professional woman'
  },
  {
    id: 2,
    name: 'Aditya Nath Mishra',
    role: 'Mentor',
    imageUrl: '/Aditya Nath Mishra.jpg',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
    aiHint: 'profile professional man'
  },
  {
    id: 3,
    name: 'Abhishek Kumar',
    role: 'Coordinator',
    imageUrl: '/Abhishek Kumar.jpg',
    socials: {
      linkedin: '#',
      twitter: '#',
      instagram: '#',
    },
    aiHint: 'profile professional person'
  },
];

const TeamSection: FC = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="group bg-background rounded-xl shadow-lg overflow-hidden text-center p-6 transition-all duration-300 ease-in-out hover:shadow-2xl"
            >
              <div className="relative mx-auto mb-6 w-32 h-32 md:w-36 md:h-36">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full object-cover border-4 border-background shadow-md group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  data-ai-hint={member.aiHint}
                />
              </div>
              <CardContent className="p-0">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  {member.role}
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href={member.socials.linkedin} aria-label={`${member.name} LinkedIn`} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
                  </Link>
                  <Link href={member.socials.twitter} aria-label={`${member.name} Twitter`} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Twitter className="h-5 w-5 md:h-6 md:w-6" />
                  </Link>
                  <Link href={member.socials.instagram} aria-label={`${member.name} Instagram`} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
