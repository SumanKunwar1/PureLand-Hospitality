import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <>
      <div className="pt-20 lg:pt-24">
        <Section>
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">
                About Pureland Hospitality
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                A legacy of exceptional hospitality experiences in extraordinary locations around the world.
              </p>
            </div>
          </Container>
        </Section>
        
        <Section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
                <Image 
                  src="https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Pureland Hospitality luxury resort"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-serif font-light mb-6">Our Story</h2>
                <p className="mb-4">
                  Founded in 2005, Pureland Hospitality began with a single vision: to create extraordinary 
                  hospitality experiences that honor both the natural environment and local cultures. Our founder, 
                  Anjali Sharma, drew inspiration from her travels across Asia, where she discovered the power 
                  of mindful hospitality rooted in authentic connections.
                </p>
                <p className="mb-4">
                  Starting with a boutique hotel in the Himalayas, we have grown to encompass a diverse 
                  collection of properties spanning multiple countries. Each location is carefully selected 
                  for its natural beauty and cultural richness, allowing us to create distinctive experiences 
                  that reflect the essence of their surroundings.
                </p>
                <p>
                  Today, Pureland Hospitality stands as a leader in premium experiential hospitality, 
                  renowned for our commitment to excellence, sustainability, and meaningful cultural 
                  immersion. Our dedicated team continues to expand our vision while remaining true 
                  to our founding principles.
                </p>
              </div>
            </div>
          </Container>
        </Section>
        
        <Section variant="secondary">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Pureland Hospitality, our values guide every aspect of our operations and guest experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-8 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-serif mb-3">Environmental Stewardship</h3>
                <p className="text-muted-foreground">
                  We prioritize sustainable practices that protect and preserve the natural environments 
                  where our properties are located, minimizing our ecological footprint.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-8 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-serif mb-3">Cultural Authenticity</h3>
                <p className="text-muted-foreground">
                  We honor and celebrate local cultures through architecture, design, cuisine, and 
                  experiences that create meaningful connections for our guests.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-8 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-serif mb-3">Exceptional Service</h3>
                <p className="text-muted-foreground">
                  We deliver attentive, personalized service that anticipates needs and creates 
                  memorable moments for every guest.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-8 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-serif mb-3">Community Partnership</h3>
                <p className="text-muted-foreground">
                  We forge meaningful relationships with local communities, supporting economic 
                  development and preserving cultural heritage.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-8 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💫</span>
                </div>
                <h3 className="text-xl font-serif mb-3">Mindful Luxury</h3>
                <p className="text-muted-foreground">
                  We redefine luxury as thoughtful, purpose-driven experiences that nourish 
                  the body, mind, and spirit.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-8 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-serif mb-3">Continuous Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace evolution and improvement, constantly seeking new ways to enhance 
                  our properties and guest experiences.
                </p>
              </div>
            </div>
          </Container>
        </Section>
        
        <Section>
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                Our Leadership Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the passionate individuals guiding Pureland Hospitality's vision and growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <Image 
                    src="https://images.pexels.com/photos/3782164/pexels-photo-3782164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Anjali Sharma" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">Anjali Sharma</h3>
                <p className="text-muted-foreground mb-3">Founder & CEO</p>
                <p className="text-sm">
                  Visionary leader with 25 years of experience in luxury hospitality across Asia.
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <Image 
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="David Chen" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">David Chen</h3>
                <p className="text-muted-foreground mb-3">Chief Operations Officer</p>
                <p className="text-sm">
                  Operational excellence expert with focus on sustainability and guest experience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <Image 
                    src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Maya Patel" 
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">Maya Patel</h3>
                <p className="text-muted-foreground mb-3">Creative Director</p>
                <p className="text-sm">
                  Award-winning designer specializing in authentic, sustainable luxury spaces.
                </p>
              </div>
            </div>
          </Container>
        </Section>
        
        <Section variant="primary">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 text-primary-foreground">
                Join the Pureland Journey
              </h2>
              <p className="mb-0 text-lg text-primary-foreground/90">
                Discover exceptional stays across our collection of premium properties, where every moment is crafted with care.
              </p>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}