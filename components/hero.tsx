"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroImages = [
  {
    src: "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Luxury beachfront villa with infinity pool"
  },
  {
    src: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Mountain resort with scenic views"
  },
  {
    src: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    alt: "Elegant urban hotel lobby"
  }
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === activeIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
      
      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 animate-fade-in">
              Experience Tranquility with Pureland Hospitality
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Discover our collection of premium hotels, resorts, villas, and wellness retreats 
              where luxury meets sustainability and cultural immersion.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/properties">Explore Properties</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#booking">Book Now</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === activeIndex ? "bg-white scale-100" : "bg-white/50 scale-75"
            )}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}