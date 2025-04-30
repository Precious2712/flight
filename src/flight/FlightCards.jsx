
import { useState, useEffect, useContext } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Users, ArrowRight } from "lucide-react";
import { SearchApi } from "@/context/useContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const FlightCards = () => {
    const airportImages = [
        "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        'https://plus.unsplash.com/premium_photo-1682091907070-4985a6fbe6d2?w=1920&auto=format&fit=crop&q=100',
        'https://images.unsplash.com/photo-1532702524251-0ca37f3c0ae1?w=1920&auto=format&fit=crop&q=100',
        'https://plus.unsplash.com/premium_photo-1661501359079-b362cda0d5d0?w=1920&auto=format&fit=crop&q=100',
        'https://images.unsplash.com/photo-1581745841536-c10790870219?w=1920&auto=format&fit=crop&q=100',
        "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        'https://images.unsplash.com/photo-1721826054197-2e27eb6bbda8?w=1920&auto=format&fit=crop&q=100',
        'https://images.unsplash.com/photo-1570688747221-eaac6319a727?w=1920&auto=format&fit=crop&q=100',
        'https://images.unsplash.com/photo-1664188578262-08c57ebf69ae?w=1920&auto=format&fit=crop&q=100',
        "https://images.unsplash.com/photo-1713690677756-6a7584c69359?w=1920&auto=format&fit=crop&q=100"

    ];

    const [imageIndex, setImageIndex] = useState(0);

    const { allFlights } = useContext(SearchApi);

    const formatDate = (dateString) => {
        const options = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % airportImages.length);
        }, 9000);

        return () => clearInterval(intervalId);
    }, [airportImages.length]);

    return (
        <>
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen">
                <Navbar />
                <div className="container mx-auto  p-4">
                    <div className="relative h-72 w-full rounded-lg mb-8 overflow-hidden">
                        <img
                            src={airportImages[imageIndex]}
                            alt={`Airport scene ${imageIndex + 1}`}
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <div className="flex items-center gap-3">
                                <h2 className="text-2xl font-bold text-white">Discover Your Perfect Flight</h2>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h1 className="text-2xl font-bold text-white">Available Flights</h1>
                        <p className="text-gray-300">{allFlights?.length} options found</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {allFlights?.map((flight, index) => (
                            <Card
                                key={flight._id}
                                className="group overflow-hidden relative hover:shadow-lg transition-all duration-200 border-0"
                            >
                                <div
                                    className="absolute inset-0 z-0 transition-transform group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url(${airportImages[index % airportImages.length]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        opacity: 0.25
                                    }}
                                ></div>

                                <div className="relative z-10">
                                    <CardHeader className="black/40 backdrop-blur-sm">
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-lg text-black">
                                                {flight.departureAirport.split(',')[0].split('(')[0]}
                                                <ArrowRight className="inline mx-2 w-4 h-4 text-gray-300" />
                                                {flight.destinationAirport.split(',')[0].split('(')[0]}
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3 - p-4">
                                        <div className="flex items-start gap-3">
                                            <CalendarDays className="w-5 h-5 text-gray-700 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">Departure</p>
                                                <p className="text-sm text-gray-800">{formatDate(flight.departureDate)}</p>
                                            </div>
                                        </div>

                                        {flight.returnDate && (
                                            <div className="flex items-start gap-3">
                                                <CalendarDays className="w-5 h-5 text-gray-700 mt-0.5" />
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Return</p>
                                                    <p className="text-sm text-gray-800">{formatDate(flight.returnDate)}</p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex items-start gap-3">
                                            <Users className="w-5 h-5 text-gray-700 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">Passengers</p>
                                                <p className="text-sm text-gray-800">{flight.passenger}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between items-center bblack/40 backdrop-blur-sm">
                                        <Link to={'/booking-flight-page'}>
                                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                                                Book Now
                                            </Button>
                                        </Link>
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${flight.tripType === 'one-way'
                                                ? 'bg-purple-100 text-purple-800'
                                                : 'bg-blue-100 text-blue-800'
                                            }`}
                                        >
                                            {flight.tripType.replace('-', ' ')}
                                        </span>
                                    </CardFooter>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default FlightCards;