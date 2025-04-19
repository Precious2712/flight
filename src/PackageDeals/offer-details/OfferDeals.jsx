import HeroSection from "@/components/HeroSection";
import OffersGrid from "@/components/OffersGrid";
import Newsletter from "@/components/Newsletter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OfferDeals = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900">
            <Navbar />
            <HeroSection />
            <OffersGrid />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default OfferDeals;