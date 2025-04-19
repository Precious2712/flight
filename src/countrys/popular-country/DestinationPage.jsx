import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { destinationsData } from "@/data/id";

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function DestinationsPage() {
  const destinations = Object.values(destinationsData); // Convert object to array

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center">
          <Link to="/home" className="flex items-center text-sm font-medium text-muted-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white">All Destinations</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Explore our collection of amazing destinations around the world
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              to={`/destinationId/${destination.id}`}
              className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{destination.name}</h3>
                  <span className="text-sm text-muted-foreground">{destination.country}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{destination.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-medium text-primary">From {destination.price}</span>
                  <span className="text-sm text-blue-600 underline">View details</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
