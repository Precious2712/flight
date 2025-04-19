import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Plane, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OfferDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [offer, setOffer] = useState();

  useEffect(() => {
    if (location.state) {
      setOffer(location.state);
    } 
  }, [id, location.state]);

  if (!offer) {
    return <Link className='flex justify-center align-middle inset-0'>
        <h1>click to return to special offer</h1>
    </Link>
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900">
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/special-offer")}
          className="mb-6 cursor-pointer "
        >
          <ArrowLeft className="mr-2" />
          Back to Offers
        </Button>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative h-[500px] overflow-hidden rounded-xl">
            <img
              src={offer.image}
              alt={offer.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute right-4 top-4 rounded-xl bg-purple-600 px-3 py-1 text-xs font-bold text-white">
              {offer.discount}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl text-white font-bold">{offer.name}</h1>
              <p className="mt-4 text-xl text-gray-600">{offer.description}</p>
            </div>
            
            <div className="rounded-lg  p-6 shadow-sm space-y-4  ">
              <h2 className="text-2xl text-white font-semibold">Offer Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Plane className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="text-white font-semibold">Available Airlines</p>
                    <p className="text-gray-600">
                      {Array.isArray(offer.airlines) ? offer.airlines.join(", ") : offer.airlines}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="text-white font-semibold">Validity</p>
                    <ul className="text-gray-600">
                      {Object.entries(offer.validity).map(([key, value]) => (
                        <li key={key} className="capitalize">
                          {key.replace(/_/g, " ")}: {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldAlert className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="text-white font-semibold">Conditions</p>
                    <ul className="list-disc ml-4 text-gray-600">
                      {offer.conditions.map((condition, index) => (
                        <li key={index}>{condition}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-purple-700 py-6 text-lg hover:bg-purple-800">
              Book This Offer
            </Button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default OfferDetails;