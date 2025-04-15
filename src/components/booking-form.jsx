// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Calendar } from "@/components/ui/calendar"
// import { format } from "date-fns"
// import { CalendarIcon, Loader2 } from "lucide-react"

// export default function BookingForm({ offerId }: { offerId: string }) {
//   const [departDate, setDepartDate] = useState<Date>()
//   const [returnDate, setReturnDate] = useState<Date>()
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSuccess, setIsSuccess] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setIsSuccess(true)
//     }, 1500)
//   }

//   if (isSuccess) {
//     return (
//       <div className="rounded-lg bg-green-50 p-6 text-center">
//         <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
//           <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//           </svg>
//         </div>
//         <h3 className="mb-2 text-lg font-medium text-green-800">Booking Successful!</h3>
//         <p className="mb-4 text-sm text-green-600">Your booking has been confirmed. Check your email for details.</p>
//         <Button
//           variant="outline"
//           className="w-full border-green-600 text-green-600 hover:bg-green-50"
//           onClick={() => (window.location.href = "/")}
//         >
//           Return to Home
//         </Button>
//       </div>
//     )
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="space-y-4">
//         <div>
//           <Label htmlFor="passengers">Passengers</Label>
//           <Select defaultValue="1" required>
//             <SelectTrigger id="passengers">
//               <SelectValue placeholder="Select passengers" />
//             </SelectTrigger>
//             <SelectContent>
//               {[1, 2, 3, 4, 5, 6].map((num) => (
//                 <SelectItem key={num} value={num.toString()}>
//                   {num} {num === 1 ? "passenger" : "passengers"}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         <div>
//           <Label htmlFor="depart-date">Departure Date</Label>
//           <Popover>
//             <PopoverTrigger asChild>
//               <Button id="depart-date" variant="outline" className="w-full justify-start text-left font-normal">
//                 <CalendarIcon className="mr-2 h-4 w-4" />
//                 {departDate ? format(departDate, "PPP") : <span>Select date</span>}
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0">
//               <Calendar mode="single" selected={departDate} onSelect={setDepartDate} initialFocus />
//             </PopoverContent>
//           </Popover>
//         </div>

//         <div>
//           <Label htmlFor="return-date">Return Date</Label>
//           <Popover>
//             <PopoverTrigger asChild>
//               <Button id="return-date" variant="outline" className="w-full justify-start text-left font-normal">
//                 <CalendarIcon className="mr-2 h-4 w-4" />
//                 {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0">
//               <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
//             </PopoverContent>
//           </Popover>
//         </div>

//         <div>
//           <Label htmlFor="name">Full Name</Label>
//           <Input id="name" placeholder="Enter your full name" required />
//         </div>

//         <div>
//           <Label htmlFor="email">Email Address</Label>
//           <Input id="email" type="email" placeholder="Enter your email" required />
//         </div>

//         <div>
//           <Label htmlFor="phone">Phone Number</Label>
//           <Input id="phone" placeholder="Enter your phone number" required />
//         </div>

//         <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
//           {isSubmitting ? (
//             <>
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//               Processing...
//             </>
//           ) : (
//             "Book Now"
//           )}
//         </Button>

//         <p className="text-center text-xs text-gray-500">By booking, you agree to our terms and conditions</p>
//       </div>
//     </form>
//   )
// }
