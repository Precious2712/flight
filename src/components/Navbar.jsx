import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, ChevronDown, X, Menu } from "lucide-react";
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

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link to={'/home'} className="text-sm font-medium hover:text-primary">Home</Link>
                    <Link to="#" className="text-sm font-medium hover:text-primary">Flights</Link>
                    <Link to="#" className="text-sm font-medium hover:text-primary">Dashboard</Link>
                    <Link to="#" className="text-sm font-medium hover:text-primary">Deals</Link>
                    <div className="relative group">
                        {/* <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                            More <ChevronDown className="h-4 w-4" />
                        </button> */}
                        <div className="absolute hidden group-hover:block right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                            <Link to="#" className="block px-4 py-2 text-sm hover:bg-muted">About Us</Link>
                            <Link to="#" className="block px-4 py-2 text-sm hover:bg-muted">Contact</Link>
                            <Link to="#" className="block px-4 py-2 text-sm hover:bg-muted">FAQs</Link>
                        </div>
                    </div>
                </nav>

                <div className="hidden md:flex items-center gap-4 mr-6">
                    {/* <Link to="#" className="text-sm font-medium hover:text-primary">Sign In</Link> */}
                    <Button onClick={logUserOut} className='cursor-pointer'>Logout</Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden mr-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t">
                    <div className="container py-4 space-y-4">
                        <nav className="flex flex-col space-y-4">
                            <Link to="#" className="text-sm font-medium hover:text-primary">Home</Link>
                            <Link to="#" className="text-sm font-medium hover:text-primary">Flights</Link>
                            {/* <Link to="#" className="text-sm font-medium hover:text-primary">Hotels</Link>
                            <Link to="#" className="text-sm font-medium hover:text-primary">Packages</Link> */}
                            <Link to="#" className="text-sm font-medium hover:text-primary">Deals</Link>
                            <Link to="#" className="text-sm font-medium hover:text-primary">Dashboard</Link>
                        </nav>
                        <div className="flex flex-col space-y-2">
                            {/* <Link to="#" className="text-sm font-medium hover:text-primary">Sign In</Link> */}
                            <Button className="w-full">Logout</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
