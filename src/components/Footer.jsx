import { Link } from "react-router-dom";
import { Plane, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="container px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Plane className="h-7 w-7 text-blue-400" />
                            <span className="text-2xl font-bold text-white">SkyWay</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Elevating your travel experience with seamless journeys and unforgettable destinations.
                        </p>
                        <div className="flex space-x-5">
                            <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Facebook className="h-6 w-6" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter className="h-6 w-6" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Instagram className="h-6 w-6" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Linkedin className="h-6 w-6" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-5">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-start gap-2">
                                    <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-start gap-2">
                                    <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span>Flights</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={'new-york'} className="text-gray-400 hover:text-blue-400 transition-colors flex items-start gap-2">
                                    <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span>NewYork</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-start gap-2">
                                    <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span>Special Offers</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-start gap-2">
                                    <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span>About Us</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-5">
                        <h3 className="text-lg font-semibold text-white">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-start gap-2">
                                    <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span>Help Center</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-start gap-2">
                                    <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span>FAQs</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-start gap-2">
                                    <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span>Contact Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-start gap-2">
                                    <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span>Privacy Policy</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-start gap-2">
                                    <span className="mt-1 w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span>Terms of Service</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-5">
                        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 mt-0.5 text-blue-400" />
                                <span className="text-gray-400">123 SkyWay Avenue, Paris, France 75001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-blue-400" />
                                <span className="text-gray-400">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-blue-400" />
                                <span className="text-gray-400">contact@skyway.com</span>
                            </li>
                        </ul>
                        <div className="pt-2">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 my-10"></div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} SkyWay Travel. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}