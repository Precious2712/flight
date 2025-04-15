// "use client"

// import { useState } from "react"
// import { Calendar, MapPin } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Calendar as CalendarComponent } from "@/components/ui/calendar"
// import { format } from "date-fns"

// export default function SearchForm() {
//   const [departDate, setDepartDate] = useState<Date>()
//   const [returnDate, setReturnDate] = useState<Date>()

//   return (
//     <div className="rounded-lg bg-white p-6 shadow-lg">
//       <div className="mb-4 grid gap-4 md:grid-cols-2">
//         <div>
//           <label className="mb-1 block text-sm font-medium text-gray-700">From</label>
//           <div className="relative">
//             <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
//             <Input placeholder="Departure city" className="pl-10" />
//           </div>
//         </div>
//         <div>
//           <label className="mb-1 block text-sm font-medium text-gray-700">To</label>
//           <div className="relative">
//             <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
//             <Input placeholder="Destination city" className="pl-10" />
//           </div>
//         </div>
//       </div>

//       <div className="mb-4 grid gap-4 md:grid-cols-2">
//         <div>
//           <label className="mb-1 block text-sm font-medium text-gray-700">Depart</label>
//           <Popover>
//             <PopoverTrigger asChild>
//               <Button variant="outline" className="w-full justify-start text-left font-normal">
//                 <Calendar className="mr-2 h-4 w-4" />
//                 {departDate ? format(departDate, "PPP") : <span>Select date</span>}
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0">
//               <CalendarComponent mode="single" selected={departDate} onSelect={setDepartDate} initialFocus />
//             </PopoverContent>
//           </Popover>
//         </div>
//         <div>
//           <label className="mb-1 block text-sm font-medium text-gray-700">Return</label>
//           <Popover>
//             <PopoverTrigger asChild>
//               <Button variant="outline" className="w-full justify-start text-left font-normal">
//                 <Calendar className="mr-2 h-4 w-4" />
//                 {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0">
//               <CalendarComponent mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
//             </PopoverContent>
//           </Popover>
//         </div>
//       </div>

//       <div className="mb-4 grid gap-4 md:grid-cols-2">
//         <div>
//           <label className="mb-1 block text-sm font-medium text-gray-700">Passengers</label>
//           <Select defaultValue="1">
//             <SelectTrigger>
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
//           <label className="mb-1 block text-sm font-medium text-gray-700">Class</label>
//           <Select defaultValue="economy">
//             <SelectTrigger>
//               <SelectValue placeholder="Select class" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="economy">Economy</SelectItem>
//               <SelectItem value="premium">Premium Economy</SelectItem>
//               <SelectItem value="business">Business</SelectItem>
//               <SelectItem value="first">First Class</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       <Button className="w-full bg-blue-600 hover:bg-blue-700">Search Flights</Button>
//     </div>
//   )
// }
