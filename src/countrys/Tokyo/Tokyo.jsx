import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Tokyo() {
  const attractions = [
    {
      name: "Shibuya Crossing",
      description: "The world's busiest pedestrian crossing and a symbol of modern Tokyo.",
      image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Senso-ji Temple",
      description: "Tokyo's oldest Buddhist temple, located in historic Asakusa.",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Tokyo Skytree",
      description: "The world's tallest tower with observation decks offering stunning city views.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    },
    {
      name: "Shinjuku Gyoen",
      description: "Beautiful national garden featuring Japanese, English, and French gardens.",
      image: "https://images.unsplash.com/photo-1513622790541-eaa84d356909?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNpdHl8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar/>
      <div className="container py-8 px-4 sm:px-6">
        <Link to="/home" className="inline-flex items-center text-red-600 hover:text-red-800 mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80"
            alt="Tokyo"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">Tokyo, Japan</h1>
            <p className="text-xl md:text-2xl opacity-90 font-medium">Where Tradition Meets Innovation</p>
          </div>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-gray-800/80 p-6 rounded-xl shadow-sm backdrop-blur-sm">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">About Tokyo</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Tokyo, Japan's busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The city's energy is unmatched, offering visitors a unique blend of cutting-edge technology and ancient traditions.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The city is famous for its vibrant pop culture, exceptional food scene, and efficient transportation system, making it an exciting destination for travelers from around the world.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Visit Tokyo?</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>World-class dining and street food</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Unique blend of modern and traditional culture</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Advanced technology and innovation</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Beautiful temples and gardens</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Exciting nightlife and entertainment</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>Excellent public transportation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Attractions Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Must-Visit Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300  border border-gray-700 bg-gray-800">
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
        <div className="bg-gray-800/90 rounded-xl p-8 mb-12 border border-gray-700 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Travel Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div className="bg-gray-700/80 text-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 text-red-600">Best Time to Visit</h3>
              <p className="text-gray-600">Spring (March-May) for cherry blossoms and Fall (September-November) for comfortable weather.</p>
            </div>
            <div className="bg-gray-700/80 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 text-red-600">Getting Around</h3>
              <p className="text-gray-600">Get a PASMO or Suica card for easy access to trains and metros. Most signs have English translations.</p>
            </div>
            <div className="bg-gray-700/80 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 text-red-600">Local Customs</h3>
              <p className="text-gray-600">Bow when greeting people, remove shoes indoors, and be mindful of quiet zones in public transport.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center  rounded-xl bg-gray-800/90 p-8 border border-red-200">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Ready to Experience Tokyo?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Book your flight now and discover the magic of Japan's capital</p>
          <Button size="lg" className="px-8 bg-red-600 hover:bg-red-700 shadow-md text-white">
            Book Your Flight to Tokyo
          </Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}