import React from 'react';
import { MapPin, Calendar, Clock, Plane } from 'lucide-react';

const FlightDetails = ({
  departureAirport,
  destinationAirport,
  departureDate,
  returnDate,
  airline,
  tripType
}) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
  
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getEstimatedArrival = (departureDate) => {
    const date = new Date(departureDate);
    date.setHours(date.getHours() + 3);
    return formatTime(date.toISOString());
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Plane className="h-5 w-5 text-blue-700 mr-2" />
          Flight Details
        </h2>
        
        <div className="mb-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
            {airline}
          </div>
        </div>
        
        <div className="relative">
          <div className="flex justify-between items-start">
            <div className="relative z-10">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <MapPin className="h-5 w-5 text-blue-700" />
              </div>
              <h3 className="font-semibold text-lg">{departureAirport}</h3>
              <div className="flex items-center mt-1">
                <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{formatDate(departureDate)}</span>
              </div>
              <div className="flex items-center mt-1">
                <Clock className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{formatTime(departureDate)}</span>
              </div>
            </div>
            
            <div className="flex-1 px-4 py-8 relative">
              <div className="border-t-2 border-dashed border-gray-300 absolute top-1/2 left-0 right-0 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white rounded-full p-2">
                <Plane className="h-5 w-5 rotate-90" />
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                <MapPin className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="font-semibold text-lg">{destinationAirport}</h3>
              <div className="flex items-center mt-1">
                <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">{formatDate(departureDate)}</span>
              </div>
              <div className="flex items-center mt-1">
                <Clock className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-600">
                  {getEstimatedArrival(departureDate)} (Est.)
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {tripType === 'round-trip' && returnDate && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Return Flight</h3>
            <div className="flex justify-between items-start">
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mb-2">
                  <MapPin className="h-5 w-5 text-amber-700" />
                </div>
                <h3 className="font-semibold text-lg">{destinationAirport}</h3>
                <div className="flex items-center mt-1">
                  <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">{formatDate(returnDate)}</span>
                </div>
                <div className="flex items-center mt-1">
                  <Clock className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">{formatTime(returnDate)}</span>
                </div>
              </div>
              
              <div className="flex-1 px-4 py-8 relative">
                <div className="border-t-2 border-dashed border-gray-300 absolute top-1/2 left-0 right-0 transform -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white rounded-full p-2">
                  <Plane className="h-5 w-5 -rotate-90" />
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <MapPin className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="font-semibold text-lg">{departureAirport}</h3>
                <div className="flex items-center mt-1">
                  <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">{formatDate(returnDate)}</span>
                </div>
                <div className="flex items-center mt-1">
                  <Clock className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">
                    {getEstimatedArrival(returnDate)} (Est.)
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightDetails;