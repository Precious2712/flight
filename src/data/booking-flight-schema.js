import { z } from "zod";

export const flightBookingSchema = z.object({
  tripType: z.enum(["one-way", "round-trip"], {
    required_error: "Trip type is required",
  }),
  availableAirline: z.enum([
    "Emirate",
    "Qatar-Airways",
    "SkyWest Airlines",
    "British Airways",
    "Delta Air Lines",
    "Singapore Airlines",
    "AirAsia"
  ], {
    required_error: "Airline selection is required",
  }),
  departureAirport: z.string().min(2, {
    message: "Departure airport is required",
  }),
  destinationAirport: z.string().min(2, {
    message: "Destination airport is required",
  }),
  departureDate: z.date({
    required_error: "Departure date is required",
  }),
  returnDate: z.date().optional().nullable(),

  passengers: z.array(z.object({
    dob: z.date({ required_error: "Date of birth is required" }),
    gender: z.enum(["male", "female"], { required_error: "Gender is required" }),
    nationality: z.string().min(2, { message: "Nationality is required" }),
    passportNumber: z.string().min(5, { message: "Valid passport number is required" }),
    passportExpiry: z.date({ required_error: "Passport expiry date is required" }),
    seatPreference: z.string().min(1, { message: "Seat preference is required" }),
    mealPreference: z.string().min(1, { message: "Meal preference is required" }),
  })).min(1),

  contactInfo: z.object({
    phone: z.string().min(8, { message: "Valid phone number is required" }),
  }),

  addOns: z.object({
    extraLuggage: z.boolean().default(false),
    travelInsurance: z.boolean().default(false),
    hotelBooking: z.boolean().default(false),
  }),
}).refine((data) => {
  if (data.tripType === "round-trip" && !data.returnDate) {
    return false;
  }
  return true;
}, {
  message: "Return date is required for round trips",
  path: ["returnDate"],
});

export const formFields = [
  {
    tripType: {
      label: 'Select your trip type',
      options: [
        { value: 'one-way', label: 'One Way' },
        { value: 'round-trip', label: 'Round Trip' }
      ],
    },
    availableAirline: {
      label: 'Select your airline',
      options: [
        { value: 'Emirate', label: 'Emirates' },
        { value: 'Qatar-Airways', label: 'Qatar Airways' },
        { value: 'SkyWest Airlines', label: 'SkyWest Airlines' },
        { value: 'British Airways', label: 'British Airways' },
        { value: 'Delta Air Lines', label: 'Delta Air Lines' },
        { value: 'Singapore Airlines', label: 'Singapore Airlines' },
        { value: 'AirAsia', label: 'AirAsia' }
      ]
    },
    departureAirport: {
      name: 'departureAirport',
      label: 'Departure Airport',
      placeholder: 'Enter departure airport',
      required: true,
    },
    destinationAirport: {
      name: 'destinationAirport',
      label: 'Destination Airport',
      placeholder: 'Enter destination airport',
      required: true,
    },
    departureDate: {
      name: 'departureDate',
      label: 'Departure Date',
      required: true,
    },
    returnDate: {
      name: 'returnDate',
      label: 'Return Date',
      required: false,
    },
  },
  {
    dob: {
      name: 'dob',
      label: 'Date of Birth',
      required: true
    },
    gender: {
      label: 'Gender',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
      ]
    },
    nationality: {
      name: 'nationality',
      label: 'Nationality',
      placeholder: 'Enter nationality',
      required: true,
    },
    passportNumber: {
      name: 'passportNumber',
      label: 'Passport Number',
      placeholder: 'Enter passport number',
      required: true,
    },
    passportExpiry: {
      name: 'passportExpiry',
      label: 'Passport Expiry Date',
      required: true,
    },
    seatPreference: {
      name: 'seatPreference',
      label: 'Seat Preference',
      placeholder: 'Enter seat preference (e.g., Window, Aisle)',
      required: true,
    },
    mealPreference: {
      name: 'mealPreference',
      label: 'Meal Preference',
      placeholder: 'Enter meal preference',
      required: true,
    }
  },
  {
    phone: {
      name: 'contactInfo.phone',
      label: 'Phone Number',
      placeholder: 'Enter contact phone',
      required: true
    }
  },
  {
    extraLuggage: {
      name: 'extraLuggage',
      label: 'Extra Luggage',
      required: false
    },
    travelInsurance: {
      name: 'travelInsurance',
      label: 'Travel Insurance',
      required: false
    },
    hotelBooking: {
      name: 'hotelBooking',
      label: 'Hotel Booking',
      required: false
    }
  }
];
