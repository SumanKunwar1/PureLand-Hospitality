"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PropertyCard } from "@/components/property-card";
import { properties } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MapPin, Filter, Grid, List } from "lucide-react";

type PropertyType = "hotel" | "resort" | "villa" | "retreat" | "all";
type ViewMode = "grid" | "list";

export default function PropertiesPage() {
  const [selectedType, setSelectedType] = useState<PropertyType>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const filteredProperties = selectedType === "all" 
    ? properties
    : properties.filter(property => property.type === selectedType);

  const locations = Array.from(
    new Set(properties.map(property => property.country))
  );

  return (
    <div className="pt-20 lg:pt-24">
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Our Properties
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our collection of premium destinations around the world, each offering unique experiences and exceptional service.
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-muted p-4 rounded-lg">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedType === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType("all")}
              >
                All
              </Button>
              <Button
                variant={selectedType === "hotel" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType("hotel")}
              >
                Hotels
              </Button>
              <Button
                variant={selectedType === "resort" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType("resort")}
              >
                Resorts
              </Button>
              <Button
                variant={selectedType === "villa" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType("villa")}
              >
                Villas
              </Button>
              <Button
                variant={selectedType === "retreat" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType("retreat")}
              >
                Retreats
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="px-2"
                onClick={() => setViewMode("grid")}
              >
                <Grid className={`h-5 w-5 ${viewMode === "grid" ? "text-primary" : "text-muted-foreground"}`} />
                <span className="sr-only">Grid view</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="px-2"
                onClick={() => setViewMode("list")}
              >
                <List className={`h-5 w-5 ${viewMode === "list" ? "text-primary" : "text-muted-foreground"}`} />
                <span className="sr-only">List view</span>
              </Button>
            </div>
          </div>
          
          {/* Featured Locations */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light mb-6">Featured Locations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {locations.map((location) => (
                <div 
                  key={location}
                  className="relative overflow-hidden rounded-lg h-32 flex items-center justify-center group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors z-10" />
                  <h3 className="text-xl font-medium text-white relative z-20 flex items-center">
                    <MapPin className="h-5 w-5 mr-1" /> {location}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          
          {/* Properties List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} variant="horizontal" />
              ))}
            </div>
          )}
          
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No properties found matching your criteria.</p>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}