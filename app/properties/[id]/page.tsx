import { Property, properties } from "@/lib/constants";
import { PropertyDetails } from "@/components/property-details";

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    return null;
  }

  return <PropertyDetails property={property} />;
}