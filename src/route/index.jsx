import LoginPage from "@/Auths/LoginPage/LoginPage";
import UserSignup from "@/Auths/userSignup/UserSignup";
import Dubai from "@/country/Dubia";
import AllCOuntryPage from "@/country/Dubia";
import NewYork from "@/country/NewYork";
import Paris from "@/country/Paris";
import Tokyo from "@/country/Tokyo";
import Home from "@/HomePage/home/Home";
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
        path: '/paris',
        element: <Paris/>
    },
    {
        path: '/tokyo',
        element: <Tokyo/>
    },
    {
        path: 'new-york',
        element: <NewYork/>
    },
    {
        path: '/dubai',
        element: <Dubai/>
    }
]);

