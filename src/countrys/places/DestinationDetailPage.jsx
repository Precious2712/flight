import { useParams, Link } from "react-router-dom";
import { destinationsData } from "@/data/id"; // adjust path if needed
import { ArrowLeft, MapPin, Star, Calendar, Plane } from "lucide-react";
import { Button } from "@/components/ui/button"; // or use your own button
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DestinationDetailPage() {
  const { id } = useParams();
  const destination = destinationsData[id]; // <-- object access instead of .find()

  if (!destination) {
    return (
      <div className="p-8 text-center text-red-500 font-semibold">
        Destination not found.
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen">
      <Navbar/>
       <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          to={'/destination-page'}
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all destinations
        </Link>
      </div>

      <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-xl">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-4xl font-bold">{destination.name}</h1>
          <div className="mt-2 flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            <span>{destination.country}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-white ">About {destination.name}</h2>
            <p className="text-lg text-gray-400  ">{destination.description}</p>
            <p className="mt-4 text-lg text-gray-400">
              {destination.name} is a destination that captivates travelers from around the world. With its unique blend
              of culture, history, and natural beauty, it offers an unforgettable experience. Whether you're seeking
              adventure, relaxation, or culture, {destination.name} has something special to offer.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-white ">Highlights</h2>
            <ul className="space-y-3">
              {destination.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <Star className="mr-2 mt-1 h-5 w-5 text-yellow-500" />
                  <span className="text-gray-400" >{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-white ">Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              {destination.gallery.map((image, index) => (
                <div key={index} className="relative h-48 overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${destination.name} ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="sticky top-8 rounded-xl border bg-card p-6 shadow-sm">
            <div className="mb-4 text-center">
              <span className="text-3xl font-bold text-primary">From {destination.price}</span>
              <p className="text-sm text-muted-foreground">per person, flights included</p>
            </div>

            <div className="mb-6 space-y-4">
              <div className="flex items-center">
                <Calendar className="mr-3 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Best time to visit</p>
                  <p className="text-sm text-muted-foreground">{destination.bestTimeToVisit}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Star className="mr-3 h-5 w-5 text-yellow-500" />
                <div>
                  <p className="font-medium">Traveler rating</p>
                  <p className="text-sm text-muted-foreground">
                    {destination.rating}/5 based on traveler reviews
                  </p>
                </div>
              </div>
            </div>

            <Button className="mb-3 w-full gap-2">
              <Plane className="h-4 w-4" />
              Book Flight to {destination.name}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Free cancellation available up to 48 hours before departure
            </p>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}
