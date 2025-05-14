
"use client";

import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Users, Bookmark, type LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  id: string;
}

const services: Service[] = [
  {
    id: 'workshops',
    title: 'Workshops',
    description: 'Hands-on learning experiences to build practical skills.',
    icon: Briefcase,
  },
  {
    id: 'mentorship',
    title: 'Mentorship',
    description: 'Personalized guidance from experienced industry professionals.',
    icon: Users,
  },
  {
    id: 'resources',
    title: 'Resources',
    description: 'Access to curated content, tools, and best practices.',
    icon: Bookmark,
  },
];

const ServicesSection: FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Services
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore what we offer to empower your journey in data and analytics.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group text-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-2 border-transparent hover:border-primary"
            >
              <div className="flex justify-center mb-6">
                <service.icon className="h-12 w-12 text-primary group-hover:animate-pulse" />
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
