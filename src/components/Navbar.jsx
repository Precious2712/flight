import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, X, Menu } from "lucide-react";
import { useState } from "react";
import { useGetSearchData } from "@/HomePage/home/hook/useGetSearchData";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {logUserOut} = useGetSearchData();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2 ml-6">
                    <Link to="/" className="flex items-center gap-2">
                        <Plane className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold">SkyWay</span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    <Link to={'/home'} className="text-sm font-medium hover:text-primary">Home</Link>
                    <Link to={'/all-flights'} className="text-sm font-medium hover:text-primary">Flights</Link>
                    <Link to={'/booking'} className="text-sm font-medium hover:text-primary">Dashboard</Link>
                    <Link to="#" className="text-sm font-medium hover:text-primary">Deals</Link>
                    <div className="relative group">
                        <div className="absolute hidden group-hover:block right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                            <Link to="#" className="block px-4 py-2 text-sm hover:bg-muted">About Us</Link>
                            <Link to="#" className="block px-4 py-2 text-sm hover:bg-muted">Contact</Link>
                            <Link to="#" className="block px-4 py-2 text-sm hover:bg-muted">FAQs</Link>
                        </div>
                    </div>
                </nav>

                <div className="hidden md:flex items-center gap-4 mr-6">
                    <Button onClick={logUserOut} className='cursor-pointer'>Logout</Button>
                </div>

                <button className="md:hidden mr-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden border-t">
                    <div className="container py-4 space-y-4">
                        <nav className="flex flex-col space-y-4 ml-6">
                            <Link to="/home" className="text-sm font-medium hover:text-primary">Home</Link>
                            <Link to={'/all-flights'} className="text-sm font-medium hover:text-primary">Flights</Link>
                            <Link to={'#'} className="text-sm font-medium hover:text-primary">Deals</Link>
                            <Link to={'/booking'} className="text-sm font-medium hover:text-primary">Dashboard</Link>
                        </nav>
                        <div className="flex flex-col ml-5 space-y-2">
                            <Button onClick={logUserOut} className="w-32 cursor-pointer ">Logout</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
