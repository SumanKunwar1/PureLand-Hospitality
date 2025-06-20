import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function AboutPreview() {
  return (
    <Section variant="secondary">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              A Legacy of Exceptional Hospitality
            </h2>
            <p className="mb-4 text-lg">
              Pureland Hospitality has been crafting extraordinary experiences since 2005, 
              with a commitment to excellence, sustainability, and cultural authenticity.
            </p>
            <p className="mb-6 text-muted-foreground">
              Our properties blend seamlessly with their natural surroundings, drawing inspiration 
              from local traditions while providing all the modern comforts our guests expect. From
              mountain retreats to beachfront villas, each location offers a distinctive sense of place.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex flex-col items-center p-4 bg-secondary-foreground/5 rounded-lg">
                <span className="text-3xl font-light mb-1">15+</span>
                <span className="text-sm text-muted-foreground">Properties</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-secondary-foreground/5 rounded-lg">
                <span className="text-3xl font-light mb-1">7</span>
                <span className="text-sm text-muted-foreground">Countries</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-secondary-foreground/5 rounded-lg">
                <span className="text-3xl font-light mb-1">20+</span>
                <span className="text-sm text-muted-foreground">Years</span>
              </div>
            </div>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
              <Image 
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Pureland Hospitality team" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent p-6 rounded-lg flex items-center justify-center text-center shadow-lg">
              <p className="text-accent-foreground font-serif font-light">
                Creating extraordinary moments since 2005
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}