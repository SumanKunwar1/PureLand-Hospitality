"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Users, Check, ChevronRight, ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Property } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PropertyDetailsProps {
  property: Property;
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  return (
    <div className="pt-20 lg:pt-24">
      <Section className="pt-0">
        <Container>
          {/* Property Header */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Link
                href="/properties"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center"
              >
                <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
                Back to Properties
              </Link>
              <span className="text-muted-foreground">•</span>
              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light">{property.name}</h1>
            
            <div className="flex items-center mt-2 text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location}, {property.country}</span>
            </div>
          </div>
          
          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="md:col-span-3 relative h-96 rounded-lg overflow-hidden">
              <Image 
                src={property.gallery[activeImageIndex]} 
                alt={`${property.name} - Featured Image`}
                fill
                sizes="(max-width: 768px) 100vw, 75vw"
                priority
                className="object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {property.gallery.slice(1, 4).map((image, index) => (
                <div 
                  key={index}
                  className="relative h-28 cursor-pointer rounded-lg overflow-hidden"
                  onClick={() => setActiveImageIndex(index + 1)}
                >
                  <Image 
                    src={image} 
                    alt={`${property.name} - Gallery Image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
              
              {property.gallery.length > 4 && (
                <div 
                  className="relative h-28 cursor-pointer rounded-lg overflow-hidden flex items-center justify-center bg-muted"
                >
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
                    <span>+{property.gallery.length - 4} more</span>
                  </div>
                  <Image 
                    src={property.gallery[4] || property.gallery[0]} 
                    alt={`${property.name} - More images`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Booking CTA */}
          <div className="mb-8 bg-muted p-6 rounded-lg grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-xl font-serif mb-2">Experience {property.name}</h3>
              <p className="text-muted-foreground">
                Book directly with us for the best rates and exclusive benefits.
              </p>
            </div>
            <div className="flex justify-end">
              <Button size="lg" className="w-full lg:w-auto" asChild>
                <Link href={property.bookingUrl}>
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      
      <Section className="py-12">
        <Container>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start overflow-auto mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="rooms">Rooms & Suites</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-serif font-light mb-4">About {property.name}</h2>
                  <p className="mb-6 whitespace-pre-line">{property.description}</p>
                  
                  <h3 className="text-xl font-serif font-light mb-3">Highlights</h3>
                  <ul className="space-y-2 mb-6">
                    {property.amenities.slice(0, 5).map((amenity, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mt-0.5 mr-2" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-xl font-serif mb-4">Quick Info</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Property Type</h4>
                      <p className="text-muted-foreground">{property.type.charAt(0).toUpperCase() + property.type.slice(1)}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Location</h4>
                      <p className="text-muted-foreground">{property.location}, {property.country}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Check-in/Check-out</h4>
                      <p className="text-muted-foreground">Check-in: 2:00 PM<br />Check-out: 12:00 PM</p>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      <span>Flexible booking policies</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      <span>Family-friendly amenities</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6" asChild>
                    <Link href={property.bookingUrl}>Book Your Stay</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="rooms" className="mt-0">
              <h2 className="text-2xl font-serif font-light mb-6">Rooms & Suites</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {property.roomTypes.map((room, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 bg-background rounded-lg shadow-sm overflow-hidden">
                    <div className="relative h-60 md:h-auto md:w-1/2">
                      <Image 
                        src={room.imageUrl} 
                        alt={room.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-1/2">
                      <h3 className="text-xl font-serif mb-3">{room.name}</h3>
                      <p className="mb-6 text-muted-foreground">{room.description}</p>
                      <Button asChild>
                        <Link href={property.bookingUrl}>Book Now</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="amenities" className="mt-0">
              <h2 className="text-2xl font-serif font-light mb-6">Amenities & Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="location" className="mt-0">
              <h2 className="text-2xl font-serif font-light mb-6">Location</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-muted-foreground">
                      Interactive map would be displayed here with the property location.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif mb-3">Getting Here</h3>
                  <div className="space-y-4 mb-6">
                    <p className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{property.location}, {property.country}</span>
                    </p>
                    <p className="text-muted-foreground">
                      Our property is located in a prime location with easy access to local attractions and transportation.
                    </p>
                  </div>
                  
                  <h4 className="font-medium mb-2">Nearby Attractions</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Local Cultural Sites - 15 min</li>
                    <li>• Nature Reserves - 20 min</li>
                    <li>• Shopping District - 10 min</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </Section>
    </div>
  );
}