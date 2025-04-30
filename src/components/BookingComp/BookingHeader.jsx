import React from 'react';
import { Calendar, Plane } from 'lucide-react';

const BookingHeader = ({ 
  departureDate, 
  tripType,
  bookingId 
}) => {
  const formattedDate = new Date(departureDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-blue-700 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Flight Booking</h1>
              <p className="text-gray-500">Booking ID: {bookingId}</p>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center bg-blue-50 px-4 py-2 rounded-full">
            <Calendar className="h-5 w-5 text-blue-700 mr-2" />
            <span className="text-blue-700 font-medium">{formattedDate}</span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {tripType === 'one-way' ? 'One-way Trip' : 'Round Trip'}
            </span>
          </div>
          
          <div className="text-sm text-gray-500">
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800">
              Confirmed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHeader;