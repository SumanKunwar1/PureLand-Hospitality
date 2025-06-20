export const siteConfig = {
  name: "Pureland Hospitality",
  description: "Experience tranquility with Pureland Hospitality's premium collection of hotels, resorts, villas, and wellness retreats.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Properties",
      href: "/properties",
    },
    {
      title: "Experiences",
      href: "/experiences",
    },
    {
      title: "Sustainability",
      href: "/sustainability",
    },
    {
      title: "Careers",
      href: "/careers",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};

export type Property = {
  id: string;
  name: string;
  type: "hotel" | "resort" | "villa" | "retreat";
  location: string;
  country: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  gallery: string[];
  amenities: string[];
  roomTypes: {
    name: string;
    description: string;
    imageUrl: string;
  }[];
  featured?: boolean;
  bookingUrl: string;
};

export const properties: Property[] = [
  {
    id: "mountain-retreat",
    name: "Mountain Retreat & Spa",
    type: "resort",
    location: "Himalayas",
    country: "Nepal",
    description: "Nestled in the majestic Himalayas, our Mountain Retreat & Spa offers breathtaking views and unparalleled luxury. Experience the perfect blend of traditional architecture and modern amenities, complemented by our world-class spa treatments inspired by ancient Himalayan healing practices.",
    shortDescription: "Luxury resort with panoramic Himalayan views and traditional spa treatments.",
    imageUrl: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: [
      "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    amenities: [
      "Mountain View Spa",
      "Organic Restaurant",
      "Yoga Studio",
      "Hiking Trails",
      "Meditation Gardens",
      "Infinity Pool",
      "Thermal Baths"
    ],
    roomTypes: [
      {
        name: "Mountain View Suite",
        description: "Spacious suite with panoramic Himalayan views, private balcony, and luxury amenities.",
        imageUrl: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Garden Cottage",
        description: "Private cottage surrounded by native gardens with outdoor soaking tub.",
        imageUrl: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    featured: true,
    bookingUrl: "#booking"
  },
  {
    id: "coastal-villas",
    name: "Coastal Villas",
    type: "villa",
    location: "Bali",
    country: "Indonesia",
    description: "Set along pristine beaches, our Coastal Villas offer privacy and luxury with direct access to turquoise waters. Each villa features traditional Balinese architecture blended with modern design, private pools, and personalized butler service.",
    shortDescription: "Exclusive beachfront villas with private pools and personalized service.",
    imageUrl: "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: [
      "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    amenities: [
      "Private Beach Access",
      "Individual Infinity Pools",
      "24/7 Butler Service",
      "Beachfront Dining",
      "Water Sports",
      "Private Chef Option",
      "Sunset Cruise"
    ],
    roomTypes: [
      {
        name: "Beachfront Villa",
        description: "Spacious villa with direct beach access, private pool, and outdoor living areas.",
        imageUrl: "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Garden Villa",
        description: "Secluded villa surrounded by tropical gardens with private pool and outdoor shower.",
        imageUrl: "https://images.pexels.com/photos/2029719/pexels-photo-2029719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    featured: true,
    bookingUrl: "#booking"
  },
  {
    id: "urban-sanctuary",
    name: "Urban Sanctuary",
    type: "hotel",
    location: "Tokyo",
    country: "Japan",
    description: "Located in the heart of Tokyo, Urban Sanctuary offers a peaceful retreat amid the bustling city. The hotel combines Japanese minimalist design with luxurious comfort, featuring a rooftop zen garden, traditional tea ceremony room, and contemporary art throughout.",
    shortDescription: "Peaceful luxury hotel with Japanese aesthetic in downtown Tokyo.",
    imageUrl: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: [
      "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    amenities: [
      "Rooftop Zen Garden",
      "Traditional Tea House",
      "Michelin-Star Restaurant",
      "Spa & Wellness Center",
      "Art Gallery",
      "Business Center",
      "Concierge Service"
    ],
    roomTypes: [
      {
        name: "Zen Suite",
        description: "Minimalist luxury suite with city views, tatami area, and modern amenities.",
        imageUrl: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Executive Room",
        description: "Elegant room with work area, premium bedding, and spa-inspired bathroom.",
        imageUrl: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    bookingUrl: "#booking"
  },
  {
    id: "wellness-retreat",
    name: "Wellness Retreat",
    type: "retreat",
    location: "Kerala",
    country: "India",
    description: "Our Wellness Retreat in Kerala is dedicated to holistic healing and rejuvenation. Set amidst lush tropical gardens, the retreat offers authentic Ayurvedic treatments, yoga classes, and meditation sessions. The architecture honors local traditions while providing modern comforts.",
    shortDescription: "Ayurvedic wellness center with traditional healing practices and yoga.",
    imageUrl: "https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: [
      "https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3735233/pexels-photo-3735233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3768731/pexels-photo-3768731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    amenities: [
      "Ayurvedic Spa Center",
      "Yoga Pavilions",
      "Meditation Gardens",
      "Organic Farm-to-Table Cuisine",
      "Cooking Classes",
      "Nature Trails",
      "Cultural Workshops"
    ],
    roomTypes: [
      {
        name: "Healing Suite",
        description: "Spacious suite with private garden, natural materials, and wellness amenities.",
        imageUrl: "https://images.pexels.com/photos/4915547/pexels-photo-4915547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Garden Cottage",
        description: "Private cottage with traditional design, surrounded by medicinal gardens.",
        imageUrl: "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ],
    bookingUrl: "#booking"
  }
];