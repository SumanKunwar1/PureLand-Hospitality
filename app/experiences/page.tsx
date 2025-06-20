import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Fine Dining",
    description: "Experience culinary excellence with our farm-to-table restaurants, featuring local ingredients and global techniques.",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Spa & Wellness",
    description: "Rejuvenate your body and mind with our holistic wellness programs, spa treatments, and mindfulness practices.",
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Cultural Immersion",
    description: "Connect with local traditions through curated experiences, from cooking classes to artisan workshops.",
    image: "https://images.pexels.com/photos/7534294/pexels-photo-7534294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Adventure",
    description: "Explore breathtaking landscapes with guided excursions, from hiking and diving to wildlife safaris.",
    image: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }
];

export default function ExperiencesPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Curated Experiences
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover extraordinary moments that connect you with local cultures, traditions, 
              and natural environments across our properties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                <div className="relative h-80">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif mb-2">{experience.title}</h3>
                  <p className="mb-4 opacity-90">{experience.description}</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}