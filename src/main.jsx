// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { route } from './route'
// import { RouterProvider } from 'react-router-dom'
// import { Toaster } from 'sonner'
// import { SearchProvider } from './context/useContext'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <SearchProvider>
//       <RouterProvider router={route} />
//       <Toaster theme='bg-black' />
//     </SearchProvider>
//   </StrictMode>,
// )





import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { route } from './route';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { SearchProvider } from './context/useContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <RouterProvider router={route} />
      <Toaster 
        theme="dark"
        toastOptions={{
          className: 'bg-black text-white', // default toast style
          success: {
            className: 'bg-green-600 text-white', // success toasts
          },
          error: {
            className: 'bg-red-600 text-white',   // error toasts
          },
          info: {
            className: 'bg-blue-600 text-white',  // info toasts
          },
          warning: {
            className: 'bg-yellow-400 text-black', // warning toasts
          },
        }}
      />
    </SearchProvider>
  </StrictMode>,
);