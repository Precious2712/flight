import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { flightBookingSchema, formFields } from "@/data/booking-flight-schema";
import { toast } from "sonner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useGetSearchData } from "@/HomePage/home/hook/useGetSearchData";
import { useNavigate } from "react-router-dom";
import { FormSelect } from "./FormComponents/FormSelect";
import { FormInput } from "./FormComponents/FormInput";
import { FormDatePicker } from "./FormComponents/FormDatePicker";
import { steps } from "@/data/steps";

const formatFlightDate = (date) => {
  if (!date) return "";

  try {
    const d = date instanceof Date ? date : new Date(date);
    if (isNaN(d.getTime())) return "";
    return `${format(d, 'yyyy-MM-dd')} ${format(d, 'HH:mm')}`;
  } catch (e) {
    console.error("Error formatting flight date:", e);
    return "";
  }
};

const formatDateOnly = (date) => {
  if (!date) return "";

  try {
    const d = date instanceof Date ? date : new Date(date);
    if (isNaN(d.getTime())) return "";
    return format(d, 'yyyy-MM-dd');
  } catch (e) {
    console.error("Error formatting date:", e);
    return "";
  }
};

const FlightBookingForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { enduser } = useGetSearchData()

  const form = useForm({
    resolver: zodResolver(flightBookingSchema),
    defaultValues: {
      tripType: "one-way",
      availableAirline: "",
      departureAirport: "",
      destinationAirport: "",
      departureDate: null,
      returnDate: null,
      passengers: [{
        dob: null,
        gender: '',
        nationality: "",
        passportNumber: "",
        passportExpiry: null,
        seatPreference: "",
        mealPreference: ""
      }],
      contactInfo: {
        phone: ""
      },
      addOns: {
        extraLuggage: false,
        travelInsurance: false,
        hotelBooking: false
      }
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const payload = {
        userId: enduser?.data?._id,
        tripType: data.tripType,
        availableAirline: data.availableAirline,
        departureAirport: data.departureAirport,
        destinationAirport: data.destinationAirport,
        departureDate: format(data.departureDate, 'yyyy-MM-dd hh:mma'),
        returnDate: data.returnDate ? format(data.returnDate, 'yyyy-MM-dd hh:mma') : null, 
        passengers: [{
          dob: format(data.passengers[0].dob, 'yyyy-MM-dd'),
          gender: data.passengers[0].gender,
          nationality: data.passengers[0].nationality,
          passportNumber: data.passengers[0].passportNumber,
          passportExpiry: format(data.passengers[0].passportExpiry, 'yyyy-MM-dd'), 
          seatPreference: data.passengers[0].seatPreference,
          mealPreference: data.passengers[0].mealPreference
        }],
        contactInfo: {
          phone: data.contactInfo.phone
        },
        addOns: data.addOns
      };

      console.log("Final payload:", payload); // Verify format before sending

      const response = await axios.post(
        'http://localhost:4000/api/v1/bookings',
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('response', response);

      toast.success('Flight booked successfully');
      setTimeout(() => {
        navigate('/home');
      }, 5000);
    } catch (error) {
      console.error("Error details:", {
        message: error.message,
        response: error.response?.data,
        request: error.config?.data
      });
      toast.error(error.response?.data?.message || "Booking failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const fields = steps[currentStep].fields;

    const isValid = await form.trigger(fields, { shouldFocus: true });

    if (!isValid) {
      return;
    }

    if (currentStep === 0 && form.getValues("tripType") === "round-trip" && !form.getValues("returnDate")) {
      form.setError("returnDate", {
        type: "manual",
        message: "Return date is required for round trips"
      });
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    const formData = form.getValues();

    switch (steps[currentStep].id) {
      case "flight-details":
        return (
          <>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Flight Details</CardTitle>
              <CardDescription>Enter your flight information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormSelect
                control={form.control}
                name="tripType"
                config={formFields[0].tripType}
              />

              <FormSelect
                control={form.control}
                name="availableAirline"
                config={formFields[0].availableAirline}
              />

              <FormInput
                control={form.control}
                name="departureAirport"
                config={formFields[0].departureAirport}
              />

              <FormInput
                control={form.control}
                name="destinationAirport"
                config={formFields[0].destinationAirport}
              />

              <FormDatePicker
                control={form.control}
                name="departureDate"
                config={formFields[0].departureDate}
                disabledDates={(date) => date < new Date()}
              />

              {form.watch("tripType") === "round-trip" && (
                <FormDatePicker
                  control={form.control}
                  name="returnDate"
                  config={formFields[0].returnDate}
                  disabledDates={(date) =>
                    date < form.getValues("departureDate") ||
                    !form.getValues("departureDate")
                  }
                />
              )}
            </CardContent>
          </>
        );

      case "passenger-details":
        return (
          <>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Passenger Details</CardTitle>
              <CardDescription>Enter passenger information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormDatePicker
                control={form.control}
                name="passengers.0.dob"
                config={{ ...formFields[1].dob, label: "Date of Birth" }}
                disabledDates={(date) => date > new Date()}
              />

              <FormSelect
                control={form.control}
                name="passengers.0.gender"
                config={formFields[1].gender}
              />

              <FormInput
                control={form.control}
                name="passengers.0.nationality"
                config={formFields[1].nationality}
              />

              <FormInput
                control={form.control}
                name="passengers.0.passportNumber"
                config={formFields[1].passportNumber}
              />

              <FormDatePicker
                control={form.control}
                name="passengers.0.passportExpiry"
                config={{ ...formFields[1].passportExpiry, label: "Passport Expiry Date" }}
                disabledDates={(date) => date <= new Date()}
              />

              <FormInput
                control={form.control}
                name="passengers.0.seatPreference"
                config={formFields[1].seatPreference}
              />

              <FormInput
                control={form.control}
                name="passengers.0.mealPreference"
                config={formFields[1].mealPreference}
              />
            </CardContent>
          </>
        );

      case "contact-info":
        return (
          <>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription>Enter your contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormInput
                control={form.control}
                name="contactInfo.phone"
                config={{
                  label: "Phone Number",
                  placeholder: "Enter contact phone",
                  required: true
                }}
              />
            </CardContent>
          </>
        );

      case "add-ons":
        return (
          <>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Additional Services</CardTitle>
              <CardDescription>Select any additional services you'd like</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(formFields[3]).map(([key, config]) => (
                <FormField
                  key={key}
                  control={form.control}
                  name={`addOns.${key}`}
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>{config.label}</FormLabel>
                        <p className="text-sm text-muted-foreground">
                          {config.description || `Add ${config.label.toLowerCase()} to your booking`}
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
              ))}
            </CardContent>
          </>
        );

      case "review":
        return (
          <>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Review Your Booking</CardTitle>
              <CardDescription>Please confirm your booking details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Flight Details</h3>
                  <Separator className="my-2" />
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="font-medium">Trip Type:</dt>
                      <dd>{formData.tripType === "one-way" ? "One Way" : "Round Trip"}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Airline:</dt>
                      <dd>{formData.availableAirline}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Route:</dt>
                      <dd>{formData.departureAirport} to {formData.destinationAirport}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Departure:</dt>
                      <dd>{formatFlightDate(formData.departureDate) || "Not selected"}</dd>
                    </div>
                    {formData.tripType === "round-trip" && (
                      <div className="flex justify-between">
                        <dt className="font-medium">Return:</dt>
                        <dd>{formatFlightDate(formData.returnDate) || "Not selected"}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div>
                  <h3 className="font-medium">Passenger Details</h3>
                  <Separator className="my-2" />
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="font-medium">Full Name:</dt>
                      <dd>{formData.passengers[0].fullName}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Date of Birth:</dt>
                      <dd>{formatDateOnly(formData.passengers[0].dob) || "Not provided"}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Gender:</dt>
                      <dd>{formData.passengers[0].gender}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Nationality:</dt>
                      <dd>{formData.passengers[0].nationality}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Passport Number:</dt>
                      <dd>{formData.passengers[0].passportNumber}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Passport Expiry:</dt>
                      <dd>{formatDateOnly(formData.passengers[0].passportExpiry) || "Not provided"}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="font-medium">Contact Information</h3>
                  <Separator className="my-2" />
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="font-medium">Phone:</dt>
                      <dd>{formData.contactInfo.phone}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="font-medium">Additional Services</h3>
                  <Separator className="my-2" />
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="font-medium">Extra Luggage:</dt>
                      <dd>{formData.addOns.extraLuggage ? "Yes" : "No"}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Travel Insurance:</dt>
                      <dd>{formData.addOns.travelInsurance ? "Yes" : "No"}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="font-medium">Hotel Booking:</dt>
                      <dd>{formData.addOns.hotelBooking ? "Yes" : "No"}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end pt-6 mt-4 border-t">
              <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Submit Booking"}
              </Button>
            </CardFooter>
          </>
        );

      default:
        return null;
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-center mb-8 gap-10 ">
        {steps.map((stepItem, index) => (
          <div key={stepItem.id} className="flex flex-col items-center relative">
            <div
              className={cn(
                "w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium border-2",
                currentStep === index
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted text-muted-foreground border-gray-300"
              )}
            >
              {index + 1}
            </div>
            <span className="hidden lg:block text-xs text-white mt-1 font-medium">{stepItem.label}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div>
        <Navbar />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-14">
            <div className="relative">
              {renderStepIndicator()}
              <Card className="w-[85%] max-w-3xl mx-auto">
                {renderStep()}
                {steps[currentStep].id !== "review" && (
                  <CardFooter className="flex justify-between pt-6 mt-4 border-t">
                    {currentStep > 0 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="flex items-center"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                      </Button>
                    )}
                    {currentStep === 0 && <div></div>}

                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center"
                    >
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </div>
          </form>
        </Form>
        <Footer />
      </div>
    </>
  );
};

export default FlightBookingForm;