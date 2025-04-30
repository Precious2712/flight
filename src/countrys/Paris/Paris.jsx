import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Paris() {
  const attractions = [
    {
      name: "Eiffel Tower",
      description: "The iconic symbol of Paris, offering breathtaking city views.",
      image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      name: "Louvre Museum",
      description: "World's largest art museum, home to the Mona Lisa.",
      image: "https://images.unsplash.com/photo-1422360902398-0a91ff2c1a1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGNpdHl8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Notre-Dame Cathedral",
      description: "Medieval Catholic cathedral known for its French Gothic architecture.",
      image: "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1290&q=80"
    },
    {
      name: "Champs-Élysées",
      description: "Famous avenue known for luxury shops, cafés, and the Arc de Triomphe.",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar/>
      <div className="container py-8 px-4 sm:px-6">
        <Link to="/home" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80"
            alt="Paris"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">Paris, France</h1>
            <p className="text-xl md:text-2xl opacity-90 font-medium">The City of Light</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-gray-800/80 p-6 rounded-xl shadow-sm backdrop-blur-sm">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-100">About Paris</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Why Visit Paris?</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 mt-1">•</span>
                <span>World-renowned museums and art galleries</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 mt-1">•</span>
                <span>Iconic architecture and historical monuments</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 mt-1">•</span>
                <span>Exquisite French cuisine and wine</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 mt-1">•</span>
                <span>Romantic atmosphere and beautiful gardens</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 mt-1">•</span>
                <span>Vibrant fashion and shopping scene</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 mt-1">•</span>
                <span>Rich history and cultural heritage</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Must-Visit Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-700 bg-gray-800">
                <div className="relative h-48">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 text-gray-100">{attraction.name}</h3>
                  <p className="text-sm text-gray-300">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/90 rounded-xl p-8 mb-12 border border-gray-700 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Travel Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-700/80 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 text-rose-400">Best Time to Visit</h3>
              <p className="text-gray-300">Spring (April-June) and Fall (September-November) offer mild weather and fewer tourists.</p>
            </div>
            <div className="bg-gray-700/80 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 text-rose-400">Getting Around</h3>
              <p className="text-gray-300">The Metro is efficient and extensive. Consider getting a Paris Visite pass for unlimited travel.</p>
            </div>
            <div className="bg-gray-700/80 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 text-rose-400">Local Customs</h3>
              <p className="text-gray-300">Learn basic French phrases. Greet with "Bonjour" when entering shops and restaurants.</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8 border border-gray-600">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Experience Paris?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Book your flight now and discover the magic of the City of Light</p>
          <Button size="lg" className="px-8 bg-rose-600 hover:bg-rose-700 shadow-md text-white">
            Book Your Flight to Paris
          </Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}