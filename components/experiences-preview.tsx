"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: "dining",
    title: "Fine Dining",
    description: "Experience culinary excellence with our farm-to-table restaurants, featuring local ingredients and global techniques.",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "wellness",
    title: "Spa & Wellness",
    description: "Rejuvenate your body and mind with our holistic wellness programs, spa treatments, and mindfulness practices.",
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "culture",
    title: "Cultural Immersion",
    description: "Connect with local traditions through curated experiences, from cooking classes to artisan workshops.",
    image: "https://images.pexels.com/photos/7534294/pexels-photo-7534294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "adventure",
    title: "Adventure",
    description: "Explore breathtaking landscapes with guided excursions, from hiking and diving to wildlife safaris.",
    image: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }
];

export function ExperiencesPreview() {
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);
  
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">Curated Experiences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We craft extraordinary moments that go beyond typical hospitality, 
            connecting you with local cultures, traditions, and natural environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] overflow-hidden rounded-lg">
            {experiences.map((exp) => (
              <div 
                key={exp.id} 
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  exp.id === activeExperience ? "opacity-100" : "opacity-0"
                )}
              >
                <Image 
                  src={exp.image} 
                  alt={exp.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          
          <div>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <button 
                  key={exp.id}
                  className={cn(
                    "w-full text-left p-4 rounded-lg transition-colors",
                    exp.id === activeExperience 
                      ? "bg-primary/5 border-l-4 border-primary" 
                      : "hover:bg-muted"
                  )}
                  onClick={() => setActiveExperience(exp.id)}
                >
                  <h3 className="text-xl font-medium mb-2">{exp.title}</h3>
                  <p className={cn(
                    "text-muted-foreground transition-all",
                    exp.id === activeExperience ? "h-auto opacity-100" : "h-0 opacity-0 md:h-auto md:opacity-100"
                  )}>
                    {exp.description}
                  </p>
                </button>
              ))}
            </div>
            
            <div className="mt-8">
              <Button asChild>
                <Link href="/experiences" className="flex items-center">
                  Explore All Experiences
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}