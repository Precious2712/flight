import LoginPage from "@/Auths/LoginPage/LoginPage";
import ResetPasswordPage from "@/Auths/ResetPassword/ResetPasswordPage";
import UserSignup from "@/Auths/userSignup/UserSignup";
import BookingFlightPage from "@/Booking";
import BookingDetail from "@/DashBoard/details/BookingDetail";
import BookingList from "@/DashBoard/list/BookingList";
import Home from "@/HomePage/home/Home";
import AllPackagesDeals from "@/PackageDeals";
import Tokyo from "@/countrys/Tokyo/Tokyo";
import DestinationDetailPage from "@/countrys/places/DestinationDetailPage";
import DestinationsPage from "@/countrys/popular-country/DestinationPage";
import FlightCards from "@/flight/FlightCards";
import OfferDetails from "@/offer-details/OfferDetails";
import { createBrowserRouter } from "react-router-dom";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <UserSignup />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: 'destination-page',
        element: <DestinationsPage />
    },
    {
        path: '/destinationId/:id',
        element: <DestinationDetailPage />
    },
    {
        path: '/special-offer',
        element: <AllPackagesDeals />
    },
    {
        path: '/offer-details/:id',
        element: <OfferDetails />
    },
    {
        path: '/booking-flight-page',
        element: <BookingFlightPage />
    },
    {
        path: '/booking',
        element: <BookingList />
    },
    {
        path: '/booking/:id',
        element: <BookingDetail />
    },
    {
        path: 'all-flights',
        element: <FlightCards />
    },
    {
        path: 'deals',
        element: <Tokyo />
    },
    {
        path: "/reset-password/:token",
        element: <ResetPasswordPage />
    }
]);

