// import Link from "next/link"

import { Badge, Clock } from "lucide-react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"


// Sample special offers data
const specialOffers = [
  {
    id: 1,
    title: "Summer Sale to Bali",
    description: "Enjoy 30% off on all flights to Bali this summer season vacation",
    image: "https://images.unsplash.com/photo-1575224889663-4d96137aac12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHx3ZWVrZW5lZCUyMGdhdGV3YXklMjB0byUyMHBhcmlzfGVufDB8fDB8fHww",
    price: "$499",
    originalPrice: "$699",
    discount: "30%",
    expiry: "3 days left",
    tag: "Limited Time",
  },
  {
    id: 2,
    title: "Weekend Getaway to Paris",
    description: "Special weekend rates for Paris flights with complimentary hotel transfer",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNpdHl8ZW58MHx8MHx8fDA%3D",
    price: "$349",
    originalPrice: "$499",
    discount: "25%",
    expiry: "5 days left",
    tag: "Hot Deal",
  },
  {
    id: 3,
    title: "Business Class Upgrade",
    description: "Upgrade to Business Class for just $200 on select international routes",
    image: "https://images.unsplash.com/photo-1574175294984-7f2b90bdc07a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbmUlMjBidXNpbmVzcyUyMGNsYXNzJTIwdXBncmFkZXxlbnwwfHwwfHx8MA%3D%3D",
    price: "$1299",
    originalPrice: "$1899",
    discount: "30%",
    expiry: "7 days left",
    tag: "Premium",
  },
  {
    id: 4,
    title: "Family Package to Orlando",
    description: "Special family rates including theme park tickets and hotel stay",
    image: "https://plus.unsplash.com/premium_photo-1682001309562-776924b52bc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZhbWlseSUyMHBhY2thZ2UlMjB0byUyMG9ybGFuZG98ZW58MHx8MHx8fDA%3D",
    price: "$799",
    originalPrice: "$1099",
    discount: "25%",
    expiry: "10 days left",
    tag: "Family",
  },
  {
    id: 5,
    title: "Asian Adventure Bundle",
    description: "Visit Tokyo, Seoul, and Bangkok with this special multi-city package",
    image: "https://media.istockphoto.com/id/2168548288/photo/group-of-asian-young-travelers-trying-local-street-food-at-petaling-street-chinatown-street.webp?a=1&b=1&s=612x612&w=0&k=20&c=sHTe3guvQ3X2o9DE5-eetJIoC0gMgSLEy2w-_36lSmo=",
    price: "$1499",
    originalPrice: "$1999",
    discount: "25%",
    expiry: "14 days left",
    tag: "Multi-City",
  },
  {
    id: 6,
    title: "Last Minute Caribbean Escape",
    description: "Spontaneous travelers save big on flights to Caribbean destinations",
    image: "https://images.unsplash.com/photo-1473615695634-d284ec918736?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdlcm1hbnl8ZW58MHx8MHx8fDA%3D",
    price: "$399",
    originalPrice: "$599",
    discount: "33%",
    expiry: "2 days left",
    tag: "Last Minute",
  },
]

export default function SpecialOffers() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {specialOffers.map((offer) => (
        <Link
          key={offer.id}
          href={`/offers/${offer.id}`}
          className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
        >
          <div className="relative">
            <img src={offer.image || "/placeholder.svg"} alt={offer.title} className="h-48 w-full object-cover" />
            <Badge className="absolute left-3 top-3 " variant="secondary">
              {offer.tag}
            </Badge>
            <div className="absolute right-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
              {offer.discount} OFF
            </div>
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-xl font-semibold group-hover:text-blue-600">{offer.title}</h3>
            <p className="mb-3 text-sm text-gray-600">{offer.description}</p>
            <div className="mb-3 flex items-center justify-between">
              <div>
                <span className="text-xl font-bold text-blue-600">{offer.price}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">{offer.originalPrice}</span>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="mr-1 h-3 w-3" />
                {offer.expiry}
              </div>
            </div>
            <Button className="w-full group-hover:bg-blue-700">View Offer</Button>
          </div>
        </Link>
      ))}
    </div>
  )
}
