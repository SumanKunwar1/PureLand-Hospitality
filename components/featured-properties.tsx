import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Property, properties } from "@/lib/constants";

export function FeaturedProperties() {
  const featuredProperties = properties.filter(property => property.featured);
  
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">Our Featured Properties</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of unique destinations, each offering exceptional experiences 
            and the perfect blend of luxury, sustainability, and cultural immersion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/properties">View All Properties</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-80 w-full">
        <Image
          src={property.imageUrl}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="mb-2 inline-block rounded-full bg-primary/80 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
          {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
        </div>
        <h3 className="text-2xl font-serif mb-2">{property.name}</h3>
        <p className="flex items-center text-sm mb-3">
          <span className="mr-1">📍</span> {property.location}, {property.country}
        </p>
        <p className="mb-4 line-clamp-2">{property.shortDescription}</p>
        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
          <Link href={`/properties/${property.id}`}>Discover More</Link>
        </Button>
      </div>
    </div>
  );
}