import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SearchApi = createContext();

export const SearchProvider = ({ children }) => {
    const [userId, setUser] = useState();
    const [name, setName] = useState()
    const [booking, setBooking] = useState();
    const token = localStorage.getItem('token');
    const [allFlights, setAllFlight] = useState();

    const getUser = async () => {
        try {
            const user = await axios.get("https://request-0xlx.onrender.com/api/v1/currentuser", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log('user', user.data.data.name);
            setName(user.data.data.name)
            setUser(user.data.data._id);
        } catch (error) {
            console.error('Error fetching user', error.message);
        }
    };

    const userBooking = async () => {
        try {
            if (!userId) return alert('No user id found');
            const res = await axios.get(`https://request-0xlx.onrender.com/v1/getUserBooking/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = res.data;
            setBooking(data)
            console.log('Booking data', data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const getAllFlightApi = async () => {
        try {
            const res = await axios.get('https://request-0xlx.onrender.com/api/v2/getAllFlight')
            const db = res.data.data
            console.log('return-flight', db);
            setAllFlight(db, 'db');
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        if (userId) {
            userBooking();
        }
    }, [userId]);

    useEffect(() => {
        getAllFlightApi();
    },[]);

    return (
        <SearchApi.Provider value={{ userBooking, booking, name, allFlights }}>
            {children}
        </SearchApi.Provider>
    );
};