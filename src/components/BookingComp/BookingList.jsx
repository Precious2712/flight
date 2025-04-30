import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Calendar, MapPin, ArrowRight, Shield, Hotel, Luggage } from 'lucide-react';
import { SearchApi } from '@/context/useContext';
import { Button } from '../ui/button';

const BookingsList = () => {
  const navigate = useNavigate();
  const {booking, name} = useContext(SearchApi);
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xs lg:text-3xl font-bold text-white">{name} Bookings</h1>
        <div className="bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium">
          {booking?.data?.length} Bookings
        </div>
      </div>

      <div className="grid gap-6">
        {booking?.data.map((booking) => (
          <div
            key={booking._id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
            onClick={() => navigate(`/booking/${booking._id}`)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Plane className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-800">{booking.availableAirline}</h2>
                    <span className="text-sm text-gray-500">Booking ID: {booking._id.slice(-11)}</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-700">
                  View Details
                  <ArrowRight className="h-5 w-5 ml-2" />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between mt-6">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">From</p>
                      <p className="font-medium">{booking.departureAirport}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">To</p>
                      <p className="font-medium">{booking.destinationAirport}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center mt-4 sm:mt-0">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Departure</p>
                    <p className="font-medium">{formatDate(booking.departureDate)}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium 
                  ${booking.tripType === 'round-trip' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                  {booking.tripType === 'round-trip' ? 'Round Trip' : 'One-way Trip'}
                </span>
                {booking.addOns?.extraLuggage && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 flex items-center">
                    <Luggage className="h-4 w-4 mr-1" />
                    Extra Luggage
                  </span>
                )}
                {booking.addOns?.hotelBooking && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-700 flex items-center">
                    <Hotel className="h-4 w-4 mr-1" />
                    Hotel Booked
                  </span>
                )}
                {booking.addOns?.travelInsurance && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    Travel Insurance
                  </span>
                )}
                <Button>remove</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingsList;
