import Dubai from "./Dubai/Dubai"
import NewYork from "./NewYork/NewYork"
import Paris from "./Paris/Paris"
import DestinationDetailPage from "./places/DestinationDetailPage"
import DestinationsPage from "./popular-country/DestinationPage"
import Tokyo from "./Tokyo/Tokyo"

export default PopularCountrys = () => {
    return (
        <>
            <div>
                <Dubai />
                <Paris />
                <NewYork />
                <Tokyo />
                <DestinationsPage/>
                <DestinationDetailPage/>
            </div>
        </>
    )
}