import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { route } from './route'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Toaster> */}
      <RouterProvider router={route} />
      <Toaster/>
    {/* </Toaster> */}
  </StrictMode>,
)
