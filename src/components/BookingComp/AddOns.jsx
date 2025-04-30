import React from 'react';
import { Luggage, Hotel, Shield, Phone } from 'lucide-react';

const AddOns = ({ addOns, contactInfo }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add-Ons & Contact</h2>

        <div className="space-y-4">
          <div className="flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-50">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${addOns.extraLuggage ? 'bg-green-100' : 'bg-gray-100'} mr-4`}>
              <Luggage className={`h-5 w-5 ${addOns.extraLuggage ? 'text-green-700' : 'text-gray-500'}`} />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">Extra Luggage</h3>
              <p className="text-sm text-gray-500">Additional baggage allowance</p>
            </div>
            <div className={`ml-4 text-sm font-medium ${addOns.extraLuggage ? 'text-green-700' : 'text-gray-500'}`}>
              {addOns.extraLuggage ? 'Added' : 'Not Added'}
            </div>
          </div>

          <div className="flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-50">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${addOns.hotelBooking ? 'bg-green-100' : 'bg-gray-100'} mr-4`}>
              <Hotel className={`h-5 w-5 ${addOns.hotelBooking ? 'text-green-700' : 'text-gray-500'}`} />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">Hotel Booking</h3>
              <p className="text-sm text-gray-500">Accommodation at destination</p>
            </div>
            <div className={`ml-4 text-sm font-medium ${addOns.hotelBooking ? 'text-green-700' : 'text-gray-500'}`}>
              {addOns.hotelBooking ? 'Added' : 'Not Added'}
            </div>
          </div>

          <div className="flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-50">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${addOns.travelInsurance ? 'bg-green-100' : 'bg-gray-100'} mr-4`}>
              <Shield className={`h-5 w-5 ${addOns.travelInsurance ? 'text-green-700' : 'text-gray-500'}`} />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">Travel Insurance</h3>
              <p className="text-sm text-gray-500">Coverage for trip cancellations</p>
            </div>
            <div className={`ml-4 text-sm font-medium ${addOns.travelInsurance ? 'text-green-700' : 'text-gray-500'}`}>
              {addOns.travelInsurance ? 'Added' : 'Not Added'}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 mr-4">
                <Phone className="h-5 w-5 text-blue-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-blue-700">Phone Number</p>
                <p className="font-medium text-gray-900">{contactInfo.phone}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddOns;