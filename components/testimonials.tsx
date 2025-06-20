import { Lightbulb, Quote } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const testimonials = [
  {
    content: "Staying at the Mountain Retreat was truly transformative. The views were breathtaking, the service impeccable, and their commitment to sustainability was evident in every detail.",
    author: "Emma Thompson",
    title: "Travel Journalist",
  },
  {
    content: "Pureland Hospitality has mastered the art of luxury without compromise. The Coastal Villas offered privacy, serenity, and a deep connection to the local culture.",
    author: "James Chen",
    title: "Business Executive",
  },
  {
    content: "The Wellness Retreat provided exactly what I needed - a sanctuary for healing and rejuvenation. The Ayurvedic treatments and mindfulness programs were life-changing.",
    author: "Priya Sharma",
    title: "Wellness Coach",
  },
];

export function Testimonials() {
  return (
    <Section variant="muted">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Quote className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
            Guest Experiences
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover what our guests have to say about their stays at Pureland Hospitality properties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg p-6 shadow-sm"
            >
              <div className="flex-1 mb-4">
                <p className="italic text-muted-foreground">"{testimonial.content}"</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Quote className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}