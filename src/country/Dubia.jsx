import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dubai() {
  const attractions = [
    {
      name: "Burj Khalifa",
      description: "World's tallest building with observation decks offering panoramic views.",
      image: "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNpdHl8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Dubai Mall",
      description: "One of the world's largest shopping centers with entertainment attractions.",
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Palm Jumeirah",
      description: "Artificial archipelago with luxury hotels and amazing views.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Dubai Desert Safari",
      description: "Exciting desert adventures including dune bashing and camel rides.",
      image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <Navbar/>
      <div className="container py-8 px-4 sm:px-6">
        <Link to="/home" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Dubai"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">Dubai, UAE</h1>
            <p className="text-xl md:text-2xl opacity-90 font-medium">City of the Future</p>
          </div>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-white p-6 rounded-xl shadow-sm">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">About Dubai</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Dubai is a city of superlatives, home to the world's tallest building, largest mall, and most luxurious hotel. This modern metropolis has transformed from a desert outpost into a destination of global significance.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The city offers an unforgettable blend of traditional Arabian culture and ultramodern lifestyle, from bustling souks to futuristic architecture.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Visit Dubai?</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>Spectacular modern architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>Luxury shopping and entertainment</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>Desert adventures and safaris</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>Traditional markets and culture</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>World-class dining and hospitality</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>Year-round sunshine</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Attractions Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Must-Visit Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="relative h-48">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-gray-800">{attraction.name}</h3>
                  <p className="text-sm text-gray-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Travel Tips */}
        <div className="bg-amber-50 rounded-xl p-8 mb-12 border border-amber-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Travel Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 text-amber-600">Best Time to Visit</h3>
              <p className="text-gray-600">November to March offers pleasant weather. Avoid summer months (June-August) due to extreme heat.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 text-amber-600">Getting Around</h3>
              <p className="text-gray-600">Use the modern Metro system, taxis are abundant. Consider a hop-on-hop-off bus tour.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 text-amber-600">Local Customs</h3>
              <p className="text-gray-600">Dress modestly in public places. Respect local customs during Ramadan.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Ready to Experience Dubai?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Book your flight now and discover the magic of this modern oasis</p>
          <Button size="lg" className="px-8 bg-amber-600 hover:bg-amber-700 shadow-md text-white">
            Book Your Flight to Dubai
          </Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}