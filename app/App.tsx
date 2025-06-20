import { Hero } from "@/components/hero";
import { FeaturedProperties } from "@/components/featured-properties";
import { AboutPreview } from "@/components/about-preview";
import { ExperiencesPreview } from "@/components/experiences-preview";
import { SustainabilityPreview } from "@/components/sustainability-preview";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <AboutPreview />
      <ExperiencesPreview />
      <SustainabilityPreview />
      <Testimonials />
      
      <Section variant="primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              Begin Your Journey with Pureland
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Discover exceptional stays across our collection of premium properties. 
              Elevate your experience with personalized service and unforgettable moments.
            </p>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/properties">Explore Our Properties</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}