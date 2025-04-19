// // hooks/useGetSearchData.js
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useGetSearchData = () => {
    const [search, setSearch] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [enduser, setEndUser] = useState(null)
    const navigate = useNavigate()

    const fetchData = async (filters = {}) => {
        try {
            setIsLoading(true);
            setErrors(null);

            const params = new URLSearchParams(filters).toString();
            const response = await axios.get(`http://localhost:4000/api/v1/getAllSearch?${params}`);

            if (response.data.length === 0) {
                setErrors("No result found in database.");
            }
            console.log(response.data);
            
            setSearch(response.data);
        } catch (error) {
            setErrors("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); 
    }, []);

    const currentUser = async () => {
        const token = localStorage.getItem('token');
        try {
            const user = await axios.get("http://localhost:4000/api/v1/currentuser", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            setEndUser(user.data);
            console.log("user-data", user.data);
    
        } catch (error) {
            console.log(error, 'message');
            const errorMessage = error.response?.data?.message;
            console.log('axios', errorMessage);
    
            if (error.response?.data?.message) {
                localStorage.removeItem('token');
                toast('Token expired. Please login again');
                navigate('/login');
            } else if (error.response?.status === 401) {
                localStorage.removeItem('token');
                toast('Session expired. Please login again');
                navigate('/login');
            }
        }
    };
    
    useEffect(()=>{
        currentUser()
    },[])

    const logUserOut = () => {
        localStorage.removeItem('token');
        toast(`${enduser?.data?.name} have successfully logout`)
        navigate('/login')
    }

    return {
        search,
        enduser,
        fetchData,
        logUserOut,
        isLoading,
        errors
    };
};
