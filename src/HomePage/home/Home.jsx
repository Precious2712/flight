import { Card, CardContent } from "@/components/ui/card";
import {
    Calendar,
    MapPin,
    Plane,
    Search,
    Users,
    ArrowRight,
    CalendarIcon,
    PlaneIcon,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { destinations } from "@/data/destinations";
import { specialOffers } from "@/data/offers";
import Lottie from "lottie-react";
import { useGetSearchData } from "./hook/useGetSearchData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
// import { SearchApi } from "@/context/useContext";
import SpecialOffers from "@/components/specialOffers";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [animationData, setAnimationData] = useState(null);
    const { search, fetchData, errors, enduser } = useGetSearchData();
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [date, setDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [passenger, setPassenger] = useState('');
    const [fields, setFields] = useState(null);
    // const {product} = useContext(SearchApi);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const loadAnimation = async () => {
        try {
            const response = await fetch('/Animation - 1744326388971.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            setAnimationData(data);
        } catch (error) {
            console.error("Error loading animation:", error);
        }
    };

    useEffect(() => {
        loadAnimation();
    }, []);

    const handleCheck = () => {
        const filters = {
            departure,
            arrival,
            date,
            returnDate,
            passenger
        };

        const allEmpty = Object.values(filters).every((value) => !value);
        if (allEmpty) {
            alert("Please enter at least one search field.");
            return;
        }

        // console.log("Sending filters:", filters);
        fetchData(filters);
        setFields(filters)
        setIsDialogOpen(true)
    };


    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-r from-gray-800 to-gray-900">
            <Navbar />
            <main className="flex-1">
                <section className="relative  py-20 md:py-32 px-6 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-primary/80"></div>
                        <img
                            src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96"
                            alt="Airplane flying"
                            className="w-full h-full object-cover"
                            style={{ marginTop: 0, paddingTop: 0, position: 'absolute', top: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <div className="container relative z-10">
                        <div class="relative inline-block px-6 py-2 font-semibold text-white cursor-pointer group overflow-hidden h-10 rounded-2xl ">
                            <span class="relative z-10">Hi {enduser?.data?.name}</span>
                            <span class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-80 transition-all duration-300 group-hover:opacity-0 before:block before:absolute before:inset-0 before:bg-pink-500 before:scale-0 before:transition-transform before:duration-300 group-hover:before:scale-100 after:block after:absolute after:inset-0 after:bg-yellow-500 after:scale-0 after:transition-transform after:duration-300 group-hover:after:scale-100"></span>
                        </div>

                        <div className="max-w-3xl text-white space-y-6">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl drop-shadow-md">
                                Discover the World with SkyWay
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                                Find and book the best deals on flights, hotels, and vacation packages worldwide
                            </p>
                            <div className="flex gap-4">
                                <Button variant="secondary" className="px-6 py-3 text-base">
                                    Explore Destinations
                                </Button>
                                <Button variant="outline" className="px-6 py-3 text-base bg-transparent border-white text-white hover:bg-white/10">
                                    Watch Video
                                </Button>
                            </div>
                        </div>

                        <div className="mt-12 rounded-xl shadow-2xl p-4 md:p-6 max-w-5xl backdrop-blur-sm bg-white/10">
                            <Tabs defaultValue="flights">
                                <TabsList className="grid w-full grid-cols-3 mb-6">
                                    <TabsTrigger value="flights" className="text-sm md:text-base">
                                        <PlaneIcon className="h-4 w-4 mr-2" /> Flights
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="flights" className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white">Departure</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    value={departure}
                                                    onChange={(e) => setDeparture(e.target.value)}
                                                    placeholder="City or Airport"
                                                    className="pl-9"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white">Arrival</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    value={arrival}
                                                    onChange={(e) => setArrival(e.target.value)}
                                                    placeholder="City or Airport"
                                                    className="pl-9"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white">Date</label>
                                            <div className="relative">
                                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                    type="date"
                                                    className="pl-9"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white">Return Date</label>
                                            <div className="relative">
                                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    value={returnDate}
                                                    onChange={(e) => setReturnDate(e.target.value)}
                                                    type="date"
                                                    className="pl-9"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-white">Travelers</label>
                                            <div className="relative">
                                                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    value={passenger}
                                                    onChange={(e) => setPassenger(e.target.value)}
                                                    type="number"
                                                    min="1"
                                                    className="pl-9"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <Button onClick={handleCheck} className="w-full md:w-auto px-8 py-3 text-base">
                                        <Search className="mr-2 h-4 w-4" /> Search Flights
                                    </Button>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </section>

                <section className="py-16 px-7">
                    <div className="container pt-0">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                            <div>
                                <h2 className="text-2xl text-white font-bold tracking-tight">Popular Destinations</h2>
                                <p className="text-sm text-muted-foreground mt-2">Explore our most popular travel destinations</p>
                            </div>
                            <Link to={'/destination-page'}>
                                <Button variant="link" className="flex items-center text-blue-800 mt-4 md:mt-0 cursor-pointer ">
                                    View all destinations <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {destinations.map((destination, index) => (
                                <div key={index} className="group rounded-lg overflow-hidden hover:shadow-lg">
                                    {/* Image with zero top spacing */}
                                    <div className="relative">
                                        <img
                                            src={destination.image}
                                            alt={destination.name}
                                            className="w-full h-52 object-cover transition-transform group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
                                            <h3 className="font-semibold text-base">{destination.name}</h3>
                                            <p className="font-bold text-lg">${destination.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Special Offers Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-3xl font-bold  text-white ">Special Offers</h2>
                        <Link to={'/special-offer'}>
                            <Button variant="link" className="flex items-center text-blue-800 mt-4 md:mt-0 cursor-pointer">
                                View all offer <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                    <SpecialOffers />
                </div>

                <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl text-white font-bold tracking-tight">What Our Travelers Say</h2>
                            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                                Discover why thousands of travelers choose SkyWay for their journey
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                            {testimonials.map((testimonial, index) => (
                                <Card key={index} className="h-full hover:shadow-md transition-shadow">
                                    <CardContent className="p-6 flex flex-col h-full">
                                        <div className="flex items-center mb-6">
                                            <div className="relative mr-4">
                                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                                                    <img
                                                        src={`https://randomuser.me/api/portraits/women/${index + 44}.jpg`}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">{testimonial.name}</h3>
                                                <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                                            </div>
                                        </div>
                                        <p className="flex-1 italic mb-6 text-muted-foreground">"{testimonial.testimonial}"</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-primary/70"></div>
                        <img
                            src="https://images.unsplash.com/photo-1520437358207-323b43b50729"
                            alt="Airplane wing"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="container relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Get Exclusive Travel Deals</h2>
                            <p className="mb-6 text-lg text-primary-foreground/90">
                                Subscribe to our newsletter and be the first to know about special offers, discounts, and travel tips
                            </p>
                            <div className="flex flex-wrap justify-center sm:flex lg:flex-row gap-4 max-w-md mx-auto">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-white/90 w-[80%] text-foreground border-none focus-visible:ring-2 focus-visible:ring-white"
                                />
                                <Button
                                    variant="secondary"
                                    className="whitespace-nowrap w-[80%] hover:bg-white hover:text-primary transition-colors"
                                >
                                    Subscribe
                                </Button>
                            </div>
                            <p className="mt-4 text-sm text-primary-foreground/70">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container">
                        <div className="flex flex-wrap justify-center md:justify-around items-center">
                            <div className="text-center md:text-left mb-8 md:mb-0 px-4">
                                <h2 className="text-3xl text-white font-bold tracking-tight mb-4">Download the SkyWay App</h2>
                                <p className="text-muted-foreground mb-6 max-w-md mx-auto md:mx-0">
                                    Get exclusive mobile-only deals, track your trips, and manage your bookings on the go.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start ">
                                    <Button className="flex items-center gap-2 px-6 py-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"></path>
                                            <path d="M16 19h6"></path>
                                            <path d="M19 16v6"></path>
                                        </svg>
                                        App Store
                                    </Button>
                                    <Button className="flex items-center gap-2 px-6 py-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <polygon points="3 3 21 12 3 21 3 3"></polygon>
                                        </svg>
                                        Google Play
                                    </Button>
                                </div>
                            </div>
                            <div className="h-[300px] sm:h-[400px] w-full md:w-auto">
                                <Lottie
                                    animationData={animationData}
                                    loop={true}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        maxWidth: '400px',
                                        margin: '0 auto'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}