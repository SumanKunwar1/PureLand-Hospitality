import Image from "next/image";
import { Leaf, Recycle, Heart, Users } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const initiatives = [
  {
    title: "Environmental Conservation",
    description: "Our properties implement comprehensive sustainability programs including renewable energy, water conservation, and waste reduction.",
    image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stats: [
      { label: "Renewable Energy", value: "60%" },
      { label: "Water Saved", value: "40M Gallons" },
      { label: "Waste Recycled", value: "85%" }
    ]
  },
  {
    title: "Community Impact",
    description: "We actively engage with local communities through employment, cultural preservation, and economic development initiatives.",
    image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    stats: [
      { label: "Local Employment", value: "80%" },
      { label: "Community Projects", value: "50+" },
      { label: "Cultural Programs", value: "100+" }
    ]
  }
];

export default function SustainabilityPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Our Commitment to Sustainability
            </h1>
            <p className="text-xl text-muted-foreground">
              At Pureland Hospitality, we believe in creating positive impact through 
              sustainable practices and community engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {initiatives.map((initiative, index) => (
              <div key={index} className="space-y-6">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-serif mb-3">{initiative.title}</h2>
                  <p className="text-muted-foreground mb-6">{initiative.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {initiative.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-2xl font-light mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-muted p-6 rounded-lg">
              <Leaf className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">Eco-Friendly Design</h3>
              <p className="text-muted-foreground">
                Sustainable architecture and materials that minimize environmental impact.
              </p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <Recycle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">Waste Reduction</h3>
              <p className="text-muted-foreground">
                Comprehensive recycling and composting programs across all properties.
              </p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">Community Support</h3>
              <p className="text-muted-foreground">
                Local partnerships and initiatives that benefit host communities.
              </p>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <Heart className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">Cultural Preservation</h3>
              <p className="text-muted-foreground">
                Programs to protect and promote local cultural heritage.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}