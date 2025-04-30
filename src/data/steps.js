export const steps = [
    {
        id: "flight-details",
        label: "Flight Details",
        fields: ["tripType", "availableAirline", "departureAirport", "destinationAirport", "departureDate", "returnDate"]
    },
    {
        id: "passenger-details",
        label: "Passenger Info",
        fields: [
            "passengers.0.dob",
            "passengers.0.gender",
            "passengers.0.nationality",
            "passengers.0.passportNumber",
            "passengers.0.passportExpiry",
            "passengers.0.seatPreference",
            "passengers.0.mealPreference"
        ]
    },
    {
        id: "contact-info",
        label: "Contact Info",
        fields: ["contactInfo.phone"]
    },
    {
        id: "add-ons",
        label: "Add-ons",
        fields: []
    },
    {
        id: "review",
        label: "Review",
        fields: []
    }
];