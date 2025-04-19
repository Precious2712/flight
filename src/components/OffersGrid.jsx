import {specialOffer} from '@/data/package'
import { useState } from "react";
import OfferCard from './OfferCard';
import { Button } from "@/components/ui/button";

const regions = ["All", "Europe", "Asia", "Americas", "Africa"];

const OffersGrid = () => {
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredOffers = specialOffer.filter(
    offer => selectedRegion === "All" || offer.region === selectedRegion
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {regions.map((region) => (
          <Button
            key={region}  
            variant={selectedRegion === region ? "default" : "outline"}
            onClick={() => setSelectedRegion(region)}
            className={`${selectedRegion === region ? "bg-purple-700" : ""} cursor-pointer`}
          >
            {region}
          </Button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredOffers.map((offer) => (
          <OfferCard key={offer.id} {...offer} />
        ))}
      </div>
    </div>
  );
};

export default OffersGrid;