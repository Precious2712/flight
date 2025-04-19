import LoginPage from "@/Auths/LoginPage/LoginPage";
import UserSignup from "@/Auths/userSignup/UserSignup";
import Home from "@/HomePage/home/Home";
import AllPackagesDeals from "@/PackageDeals";
import DestinationDetailPage from "@/countrys/places/DestinationDetailPage";
import DestinationsPage from "@/countrys/popular-country/DestinationPage";
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
    }

]);

