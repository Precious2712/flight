import { SearchProvider } from "@/context/useContext";
import Home from "./home/Home";
const LandingPage = () => {
    return (
        <SearchProvider>
            <Home />
        </SearchProvider>
    )
};

export default LandingPage