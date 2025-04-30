import React from 'react';
import { User, Import as Passport, Utensils, MapPin } from 'lucide-react';

const PassengerInfo = ({ passenger }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <User className="h-6 w-6 text-blue-700 mr-2" />
          Passenger Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Personal Details</h3>
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center text-gray-700">
                  <span>Gender</span>
                  <span className="font-medium capitalize">{passenger.gender}</span>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                  <span>Date of Birth</span>
                  <span className="font-medium">{formatDate(passenger.dob)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                  <span>Nationality</span>
                  <span className="font-medium">{passenger.nationality}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 flex items-center mb-2">
                <Passport className="h-4 w-4 text-gray-500 mr-2" />
                Passport Information
              </h3>
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center text-gray-700">
                  <span>Passport Number</span>
                  <span className="font-medium">{passenger.passportNumber}</span>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                  <span>Expiry Date</span>
                  <span className="font-medium">{formatDate(passenger.passportExpiry)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 flex items-center mb-2">
                <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                Seating Preference
              </h3>
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center text-gray-700">
                  <span>Seat Type</span>
                  <span className="font-medium">{passenger.seatPreference}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 flex items-center mb-2">
                <Utensils className="h-4 w-4 text-gray-500 mr-2" />
                Meal Preference
              </h3>
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center text-gray-700">
                  <span>Meal Type</span>
                  <span className="font-medium">{passenger.mealPreference}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerInfo;