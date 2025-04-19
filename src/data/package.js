export const specialOffer = [
    {
        id: 1,
        name: "Early Bird Discount",
        description: "Save 20% on flights booked 3+ months in advance.",
        discount: "20%",
        airlines: "Multiple (Economy class only)",
        validity: {
            book_by: "31/12/2025",
            travel_within: "6 months"
        },
        conditions: ["Non-refundable", "Fixed dates"],
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
        region: "All"
    },
    {
        id: 2,
        name: "Last-Minute Escape",
        description: "Up to 40% off on flights departing in 7-14 days.",
        discount: "40%",
        airlines: "Select carriers (limited routes)",
        validity: {
            departure_window: "7-14 days",
            seats: "Limited"
        },
        conditions: ["No changes allowed"],
        image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
        region: "Europe"
    },
    {
        id: 3,
        name: "Family Vacation Bundle",
        description: "1 child flies FREE with 2 paying adults.",
        discount: "1 child free",
        airlines: "Partner family-friendly airlines",
        validity: {
            travel_by: "31/12/2025"
        },
        conditions: ["Kids under 12", "Economy class only"],
        image: "https://images.unsplash.com/photo-1542296332-2e4473faf563",
        region: "Americas"
    },
    {
        id: 4,
        name: "Business Class Flash Sale",
        description: "30% off premium cabins.",
        discount: "30%",
        airlines: ["Emirates", "Qatar", "Delta"],
        validity: {
            sale_ends_in: "48 hours"
        },
        conditions: ["Minimum stay: 3 nights"],
        image: "https://images.unsplash.com/photo-1520437358207-323b43b50729",
        region: "Asia"
    },
    {
        id: 5,
        name: "Weekend Getaway Special",
        description: "$99 one-way flights to domestic destinations.",
        discount: "$99 one-way",
        airlines: ["Southwest", "Ryanair"],
        validity: {
            travel_days: "Fri-Sun only"
        },
        conditions: ["Hand luggage only"],
        image: "https://images.unsplash.com/photo-1594219248178-a2d181ad275f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFzdCUyMG1pbnV0ZSUyMGVzY2FwZSUyMHZhY2F0aW9uJTIwZGVhbHxlbnwwfHwwfHx8MA%3D%3D",
        region: "Europe"
    },
    {
        id: 6,
        name: "Loyalty Bonus: Double Miles",
        description: "Earn 2x frequent flyer miles on selected routes.",
        discount: "2x miles",
        airlines: "SkyTeam/Star Alliance partners",
        validity: {
            register_before: "Booking required"
        },
        conditions: ["Must use co-branded credit card"],
        image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96",
        region: "Asia"
    },
    {
        id: 7,
        name: "Flexi-Travel Pass",
        description: "Free date changes + 10% discount.",
        discount: "10%",
        airlines: "Any airline (flexible fare only)",
        validity: {
            book_by: "31/12/2025"
        },
        conditions: ["Fare difference may apply"],
        image: "https://images.unsplash.com/photo-1532635241-17e820acc59f",
        region: "Africa"
    },
    {
        id: 8,
        name: "All-Inclusive Package",
        description: "Flight + 4-Star Hotel from $499 (7-night stay).",
        discount: "$499 package",
        airlines: "Package deals to Bali, Cancún, etc.",
        validity: {
            travel_by: "31/12/2025"
        },
        conditions: ["Non-refundable deposit"],
        image: "https://media.istockphoto.com/id/2150678874/photo/young-woman-boarding-an-airplane.webp?a=1&b=1&s=612x612&w=0&k=20&c=nt-L6jsYIFNFiIwi3fXjVwuIrAC6xn2-jaWjvKrIL4A=",
        region: "Asia"
    }
];

// Example usage:
// function getOffersByRegion(region) {
//     return specialOffers.filter(offer =>
//         offer.region === region || offer.region === "All"
//     );
// }

// console.log(getOffersByRegion("Europe")); 