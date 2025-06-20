import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Star,
  Globe,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero Section */}
      <Section>
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-sm font-medium">
              We're Here to Help
            </Badge>
            <h1 className="text-4xl md:text-6xl font-playfair font-light mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Experience exceptional hospitality from the moment you reach out.
              Our dedicated team is ready to craft your perfect getaway.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Support Available
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  &lt;2h
                </div>
                <div className="text-sm text-muted-foreground">
                  Response Time
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Methods */}
      <Section variant="secondary">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our hospitality experts
                </p>
                <div className="space-y-2">
                  <p className="font-medium">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">
                    Available 24/7 for reservations and support
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Get detailed information and assistance
                </p>
                <div className="space-y-2">
                  <p className="font-medium">hello@purelandhospitality.com</p>
                  <p className="text-sm text-muted-foreground">
                    Response within 2 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Physical Visit</h3>
                <p className="text-muted-foreground mb-4">
                  Visit our concierge desk at any of our properties
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <MapPin className="w-5 h-5 mr-2" />
                    Find Nearest Location
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Available at all properties
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Main Contact Form Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-light mb-6">
                  Let's Plan Your Perfect Experience
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From intimate getaways to grand celebrations, our team
                  specializes in creating unforgettable moments tailored to your
                  unique vision.
                </p>
              </div>

              {/* Contact Image */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/3715890/pexels-photo-3715890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Luxury hotel concierge service"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-medium">
                    Premium Concierge Service
                  </p>
                  <p className="text-sm opacity-90">
                    Available at all properties
                  </p>
                </div>
              </div>

              {/* Office Information */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Corporate Headquarters
                      </h4>
                      <p className="text-muted-foreground mb-3">
                        123 Hospitality Drive
                        <br />
                        Beverly Hills, CA 90210
                        <br />
                        United States
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        Mon - Fri: 8AM - 8PM PST
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Form */}
            <div className="bg-card border rounded-2xl p-8 shadow-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-3">
                  Send us a Message
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 2
                  hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <select
                    id="inquiryType"
                    className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="reservation">New Reservation</option>
                    <option value="existing">Existing Reservation</option>
                    <option value="events">Events & Meetings</option>
                    <option value="wellness">Wellness Programs</option>
                    <option value="partnership">
                      Partnership Opportunities
                    </option>
                    <option value="feedback">Feedback & Reviews</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help you today?"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please share details about your inquiry, preferred dates, special requirements, or any questions you may have..."
                    rows={6}
                    className="mt-2"
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mt-1 rounded border-input"
                  />
                  <Label htmlFor="newsletter" className="text-sm leading-5">
                    I'd like to receive updates about exclusive offers, new
                    properties, and special events from Pureland Hospitality.
                  </Label>
                </div>

                <Button type="submit" className="w-full h-12 text-base">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1 text-green-500" />
                    Spam-free
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1 text-green-500" />
                    Secure
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1 text-green-500" />
                    No commitment
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
