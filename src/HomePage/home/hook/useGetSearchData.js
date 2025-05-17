// // hooks/useGetSearchData.js
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useGetSearchData = () => {
    const [search, setSearch] = useState([]);
    const [enduser, setEndUser] = useState(null);
    const navigate = useNavigate()

    const currentUser = async () => {
        const token = localStorage.getItem('token');
        try {
            const user = await axios.get("https://request-0xlx.onrender.com/api/v1/currentuser", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setEndUser(user.data);
            // console.log("user-data", user.data);
        } catch (error) {
            console.log(error, 'message');
            const errorMessage = error.response?.data?.message;
            console.log('axios', errorMessage);

            if (error.response?.data?.message) {
                localStorage.removeItem('token');
                toast.error('Token expired. Please login again');
                navigate('/login');
            } else if (error.response?.status === 401) {
                localStorage.removeItem('token');
                toast.error('Session expired. Please login again');
                navigate('/login');
            }
        }
    };

    const searchFlight = async (filter) => {
        try {
            const token = localStorage.getItem('token');
            const params = new URLSearchParams(filter).toString();
    
            const filterSearch = await axios.get(`https://request-0xlx.onrender.com/api/v2/flights?${params}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = filterSearch?.data?.result
            console.log('rtrtrtr', result);
            setSearch(result);
            return result
        } catch (error) {
            console.error("Error fetching flight data:", error);
        }
    };    

    useEffect(() => {
        currentUser();
    }, []);

    useEffect(()=>{
        searchFlight();
    },[]);

    const logUserOut = () => {
        localStorage.removeItem('token');
        toast.success(`${enduser?.data?.name} have successfully logout`)
        navigate('/login')
    }

    return {
        searchFlight,
        enduser,
        search,
        logUserOut,
        search
    };
};
