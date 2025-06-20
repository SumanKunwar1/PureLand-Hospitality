import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { Property } from "@/lib/constants";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  property: Property;
  className?: string;
  variant?: "default" | "horizontal";
}

export function PropertyCard({ 
  property, 
  className,
  variant = "default" 
}: PropertyCardProps) {
  if (variant === "horizontal") {
    return (
      <div className={cn(
        "group flex flex-col md:flex-row overflow-hidden rounded-lg bg-background shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}>
        <div className="relative h-64 md:h-auto md:w-1/3 overflow-hidden">
          <Image
            src={property.imageUrl}
            alt={property.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="flex-1 p-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
            </span>
            <span className="inline-flex items-center text-xs text-muted-foreground">
              <MapPin className="mr-1 h-3 w-3" /> {property.location}, {property.country}
            </span>
          </div>
          
          <h3 className="text-xl font-serif mb-2">{property.name}</h3>
          
          <p className="mb-4 text-muted-foreground line-clamp-3">
            {property.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {property.amenities.slice(0, 4).map((amenity, index) => (
              <span 
                key={index} 
                className="inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs"
              >
                {amenity}
              </span>
            ))}
            {property.amenities.length > 4 && (
              <span className="inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs">
                +{property.amenities.length - 4} more
              </span>
            )}
          </div>
          
          <div className="flex gap-3">
            <Button size="sm" asChild>
              <Link href={`/properties/${property.id}`}>View Details</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href={property.bookingUrl}>Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg bg-background shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg",
      className
    )}>
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={property.imageUrl}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
          </span>
          <span className="inline-flex items-center text-xs text-muted-foreground">
            <MapPin className="mr-1 h-3 w-3" /> {property.location}, {property.country}
          </span>
        </div>
        
        <h3 className="text-xl font-serif mb-2">{property.name}</h3>
        
        <p className="mb-4 text-muted-foreground line-clamp-2">
          {property.shortDescription}
        </p>
        
        <div className="flex gap-3">
          <Button size="sm" asChild>
            <Link href={`/properties/${property.id}`}>View Details</Link>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <Link href={property.bookingUrl}>Book Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}