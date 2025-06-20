import Image from "next/image";
import Link from "next/link";
import { Leaf, Recycle, Heart, Users } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export function SustainabilityPreview() {
  return (
    <Section variant="accent">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              Our Commitment to Sustainability
            </h2>
            <p className="mb-6 text-lg">
              At Pureland Hospitality, sustainability isn't just a practice—it's
              a core value that guides every aspect of our operations and guest
              experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-background rounded-lg p-5 shadow-sm">
                <Leaf className="h-10 w-10 text-chart-2 mb-3" />
                <h3 className="text-green-600 text-lg font-medium mb-2">
                  Eco-Friendly Operations
                </h3>
                <p className="text-sm text-muted-foreground">
                  Renewable energy, water conservation, and waste reduction
                  across all properties.
                </p>
              </div>

              <div className="bg-background rounded-lg p-5 shadow-sm">
                <Recycle className="h-10 w-10 text-chart-2 mb-3" />
                <h3 className="text-green-600 text-lg font-medium mb-2">
                  Sustainable Design
                </h3>
                <p className="text-sm text-muted-foreground">
                  Local, eco-friendly materials and architecture that minimizes
                  environmental impact.
                </p>
              </div>

              <div className="bg-background rounded-lg p-5 shadow-sm">
                <Users className="h-10 w-10 text-chart-2 mb-3" />
                <h3 className="text-green-600 text-lg font-medium mb-2">
                  Community Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  Partnerships with local communities for economic development
                  and cultural preservation.
                </p>
              </div>

              <div className="bg-background rounded-lg p-5 shadow-sm">
                <Heart className="h-10 w-10 text-chart-2 mb-3" />
                <h3 className="text-green-600 text-lg font-medium mb-2">
                  Ethical Sourcing
                </h3>
                <p className="text-sm text-muted-foreground">
                  Local, organic ingredients and fair-trade products throughout
                  our properties.
                </p>
              </div>
            </div>

            <Button asChild>
              <Link href="/sustainability">
                Learn More About Our Initiatives
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Sustainable forest"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/3735217/pexels-photo-3735217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Organic garden"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/268261/pexels-photo-268261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Solar panels"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Local artisans"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
