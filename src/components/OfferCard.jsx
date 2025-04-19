import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OfferCard = ({
  id,
  name,
  image,
  description,
  discount,
  airlines,
  validity,
  conditions,
  region,
}) => {
  const navigate = useNavigate();

  const handleViewOffer = () => {
    navigate(`/offer-details/${id}}`, {
      state: { id, name, image, description, discount, airlines, validity, conditions, region }
    });
  };

  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg ">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute right-2 top-2 rounded-full bg-purple-600 px-3 py-1 text-sm font-semibold text-white">
          {discount}
        </div>
      </div>
      <div className="p-4 bg-gradient-to-bl from to-blue-500 to bg-pink-200 ">
        <h3 className="text-xl font-semibold">{name}</h3>
        <Button 
          className="mt-4 w-full bg-purple-700 hover:bg-purple-800 cursor-pointer"
          onClick={handleViewOffer}
        >
          View Offer Details
        </Button>
      </div>
    </div>
  );
};

export default OfferCard;