// // hooks/useGetSearchData.js
// import { useEffect, useState } from "react";
// import axios from "axios";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// export const useGetSearchData = () => {
//     const [search, setSearch] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [errors, setErrors] = useState(false);

//     const fetchData = async (filters = {}) => {
//         setIsLoading(true);
//         try {
//             const response = await axios.get('http://localhost:4000/api/v1/getAllSearch', {
//                 params: filters // 👈 important: send query parameters to backend
//             });
//             console.log("Fetched result:", response); // ✅
//             setSearch(response);
//         } catch (error) {
//             console.log(error);
//             setErrors(true);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return {
//         search,
//         fetchData,
//         isLoading,
//         errors
//     };
// };



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

            // Build query string
            const params = new URLSearchParams(filters).toString();
            const response = await axios.get(`http://localhost:4000/api/v1/getAllSearch?${params}`);

            if (response.data.length === 0) {
                setErrors("No result found in database.");
            }
            console.log(response.data);
            
            setSearch(response.data);
        } catch (error) {
            // console.error("Fetch error:", error);
            setErrors("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); // load all by default
    }, []);

    const currentUser = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast('Access denied. No token provided')
                navigate('/login')
            }
    
            const user = await axios.get("http://localhost:4000/api/v1/currentuser", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            setEndUser(user.data);
            console.log("user-data", user.data);
            
        } catch (error) {
            console.log(error.response?.data || error.message);
            if (error.message === 'Access denied. No token provided') {
                toast('Access denied. No token provided')
                navigate('/login')
            }
            if (error.message === 'Invalid token. Please login again') {
                toast('Invalid token. Please login again')
                navigate('/login')
            }
            if (error.message === 'Token expired. Please login again') {
                toast('Token expired. Please login again')
                navigate('/login')
            }
        }
    };
    

    useEffect(()=>{
        currentUser()
    },[])

    const logUserOut = () => {
        // alert('logout')
        localStorage.removeItem('token');
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
