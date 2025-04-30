import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewYork() {
  const attractions = [
    {
      name: "Statue of Liberty",
      description: "Iconic symbol of freedom and democracy, located on Liberty Island.",
      image: "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    },
    {
      name: "Central Park",
      description: "Vast urban park offering recreational activities and natural beauty.",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Times Square",
      description: "Bustling entertainment hub known for bright lights and Broadway theaters.",
      image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      name: "Empire State Building",
      description: "Historic Art Deco skyscraper with observation deck offering city views.",
      image: "https://images.unsplash.com/photo-1486607303850-bc051a4ffad4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGNpdHl8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900">
        <Navbar/>
      <div className="container py-8 px-4 sm:px-6">
        <Link to="/home" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="New York"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">New York City, USA</h1>
            <p className="text-xl md:text-2xl opacity-90 font-medium">The City That Never Sleeps</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12  bg-gray-800/80 p-6 rounded-xl shadow-sm backdrop-blur-sm ">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">About New York</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural centers.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The city is known for its iconic skyline, Broadway theaters, world-class museums, diverse neighborhoods, and vibrant food scene, making it one of the world's most visited destinations.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Why Visit New York?</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>World-famous landmarks and architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>Broadway shows and entertainment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>Diverse culinary experiences</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>World-class museums and galleries</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>Shopping on Fifth Avenue</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>Vibrant nightlife and culture</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Must-Visit Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-700 bg-gray-800">
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

        <div className="border border-gray-700 bg-gray-800 rounded-xl p-8 mb-12 ">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Travel Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 text-blue-600">Best Time to Visit</h3>
              <p className="text-gray-600">Spring (April-June) and Fall (September-November) offer mild weather and fewer tourists.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 text-blue-600">Getting Around</h3>
              <p className="text-gray-600">Use the subway system for quick travel. Get a MetroCard for unlimited rides during your stay.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 text-blue-600">Local Tips</h3>
              <p className="text-gray-600">Walk like a New Yorker - fast and purposefully. Tip 15-20% at restaurants.</p>
            </div>
          </div>
        </div>

        <div className="text-center border border-gray-700 bg-gray-800 py-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Ready to Experience New York?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Book your flight now and discover the magic of the Big Apple</p>
          <Button size="lg" className="px-8 bg-blue-600 hover:bg-blue-700 shadow-md">
            Book Your Flight to New York
          </Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}