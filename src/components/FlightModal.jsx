import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Plane, X } from "lucide-react";

export default function FlightModal({ open, onClose, results }) {
    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="bg-white rounded-xl shadow-2xl p-0 max-w-2xl overflow-hidden border-0">
                <div className="relative h-48 w-full bg-gray-800 overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    >
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-passengers-on-an-airplane-4153-large.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Plane className="text-white mr-2" size={32} />
                        <h1 className="text-2xl font-bold text-white">Your Flight Details</h1>
                    </div>
                </div>

                <div className="p-6 max-h-[60vh] overflow-y-auto">
                    {results.length > 0 ? (
                        results.map((flight) => (
                            <div key={flight._id} className="mb-6 p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="block text-lg font-semibold text-gray-800">
                                            {flight.departureAirport} → {flight.destinationAirport}
                                        </span>
                                        <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full capitalize">
                                            {flight.tripType}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-3 space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <span className="font-medium mr-2">Departure:</span>
                                        {formatDate(flight.departureDate)}
                                    </div>
                                    {flight.returnDate ? (
                                        <div className="flex items-center">
                                            <span className="font-medium mr-2">Return:</span>
                                            {formatDate(flight.returnDate)}
                                        </div>
                                    ) : (
                                        <div>No return date</div>
                                    )}
                                    <div className="flex items-center">
                                        <span className="font-medium mr-2">Passengers:</span>
                                        {flight.passenger}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8">
                            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Plane className="text-gray-400" size={24} />
                            </div>
                            <p className="text-gray-500">No flights found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}