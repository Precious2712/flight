import React from 'react';
import FlightDetails from './FlightDetails';
import PassengerInfo from './PassengerInfo';
import AddOns from './AddOns';
import BookingHeader from './BookingHeader';
import { SearchApi } from '@/context/useContext';

const Dashboard = () => {
    const {booking} = useContext(SearchApi);
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <BookingHeader 
        departureDate={booking.departureDate} 
        tripType={booking.tripType}
        bookingId={booking._id}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <FlightDetails 
            departureAirport={booking.departureAirport}
            destinationAirport={booking.destinationAirport}
            departureDate={booking.departureDate}
            returnDate={booking.returnDate}
            airline={booking.availableAirline}
            tripType={booking.tripType}
          />
          
          <PassengerInfo passenger={booking.passengers[0]} />
        </div>
        
        <div className="space-y-6">
          <AddOns 
            addOns={booking.addOns} 
            contactInfo={booking.contactInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
