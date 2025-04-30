import BookingDetails from '@/components/BookingComp/BookingDetails'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export const BookingDetail = () => {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-gray-900'>
      <Navbar />
      <BookingDetails />
      <Footer />
    </div>
  )
}

export default BookingDetail