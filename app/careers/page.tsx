import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const positions = [
  {
    title: "Hotel General Manager",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    department: "Operations",
    description: "We're seeking an experienced General Manager to lead one of our premium properties in Kathmandu."
  },
  {
    title: "Executive Chef",
    location: "Bali, Indonesia",
    type: "Full-time",
    department: "Food & Beverage",
    description: "Join us in creating exceptional culinary experiences at our luxury resort in Bali."
  },
  {
    title: "Spa Director",
    location: "Kerala, India",
    type: "Full-time",
    department: "Wellness",
    description: "Lead our wellness programs and spa operations at our award-winning retreat."
  },
  {
    title: "Sustainability Coordinator",
    location: "Multiple Locations",
    type: "Full-time",
    department: "Operations",
    description: "Help implement and oversee our sustainability initiatives across properties."
  }
];

export default function CareersPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Be part of a team dedicated to creating exceptional hospitality experiences 
              while making a positive impact on communities and the environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {positions.map((position, index) => (
              <div key={index} className="bg-muted p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium mb-1">{position.title}</h3>
                    <p className="text-muted-foreground">{position.location}</p>
                  </div>
                  <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {position.type}
                  </span>
                </div>
                <p className="mb-4 text-muted-foreground">{position.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{position.department}</span>
                  <Button variant="outline">Apply Now</Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-secondary p-8 rounded-lg text-center">
            <h2 className="text-2xl font-serif mb-4">Don't see the right position?</h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button size="lg">Submit General Application</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}