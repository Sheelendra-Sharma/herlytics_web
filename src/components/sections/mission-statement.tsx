import React, { type FC } from 'react';
import Image from 'next/image';
import Mission from '@/app/gallery/Mission.jpeg';
import { Card, CardContent } from '@/components/ui/card';

const MissionStatement: FC = () => {
  return (
    <section id="mission" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HERlytics is committed to fostering an inclusive environment where women can thrive in the analytics industry. We aim to bridge the gender gap by providing opportunities for learning, networking, and professional growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through workshops, mentorship programs, and community events, we empower our members with the skills, knowledge, and connections needed to excel in their careers and become leaders in the field.
            </p>
          </div>
          <div className="md:w-1/2">
            <Card className="overflow-hidden shadow-xl rounded-xl">
              <CardContent className="p-0">
                <Image
                  src={Mission}
                  alt="Diverse group collaborating"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint="team collaboration"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
