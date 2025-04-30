import BookingsList from '@/components/BookingComp/BookingList'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { MoveLeft } from 'lucide-react'
import React from 'react'

export const BookingList = () => {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-gray-900'>
      {/* <MoveLeft /> */}
      <Navbar />
      <BookingsList />
      <Footer />
    </div>
  )
}

export default BookingList