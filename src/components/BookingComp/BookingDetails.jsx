import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import FlightDetails from './FlightDetails';
import PassengerInfo from './PassengerInfo';
import AddOns from './AddOns';
import BookingHeader from './BookingHeader';
import { SearchApi } from '@/context/useContext';

const BookingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {booking} = useContext(SearchApi);
  const bookings = booking?.data.find(b => b._id === id);

  if (!bookings) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Booking not found</h2>
          <button
            onClick={() => navigate('/booking')}
            className="mt-4 inline-flex items-center text-blue-700 hover:text-blue-800 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to bookings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl ">
      <button
        onClick={() => navigate('/booking')}
        className="mb-6 inline-flex items-center text-blue-700 hover:text-blue-800 cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to bookings
      </button>

      <BookingHeader 
        departureDate={bookings.departureDate}
        tripType={bookings.tripType}
        bookingId={bookings._id}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <FlightDetails 
            departureAirport={bookings.departureAirport}
            destinationAirport={bookings.destinationAirport}
            departureDate={bookings.departureDate}
            returnDate={bookings.returnDate}
            airline={bookings.availableAirline}
            tripType={bookings.tripType}
          />
          
          <PassengerInfo passenger={bookings.passengers[0]} />
        </div>
        
        <div className="space-y-6">
          <AddOns 
            addOns={bookings.addOns}
            contactInfo={bookings.contactInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;