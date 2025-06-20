import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Pureland Hospitality</h3>
            <p className="text-primary-foreground/80 mb-6">
              Experience tranquility with our premium collection of hotels, 
              resorts, villas, and wellness retreats.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary-foreground/70 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-primary-foreground/70 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-primary-foreground/70 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary-foreground/70 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-primary-foreground/70 transition-colors">
                  Our Properties
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-primary-foreground/70 transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-primary-foreground/70 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary-foreground/70 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span>123 Serenity Lane<br />Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+977 1 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@purelandhospitality.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe to receive updates on new properties and special offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address"
                className="px-3 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 rounded-md bg-primary-foreground text-primary font-medium hover:bg-primary-foreground/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Pureland Hospitality. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}