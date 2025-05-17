import { useState } from "react";
import { AuthForm } from "@/components/AuthForm";
import { signupFields } from "@/data/formFields";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function UserSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignup = async (values) => {
    if (values.password) {
      values.password = values.password.trim();
    }

    try {
      const apiSignup = await axios.post('https://request-0xlx.onrender.com/api/v1/signup', values);
      const data = apiSignup.data;
      if (data) {
        toast.success('Sign up successful');
        navigate('/login');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(`${error.response.data.error}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-sky-700 to-cyan-500 flex flex-col">
      <div className="flex flex-col md:flex-row font-sans flex-1">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8">
            <AuthForm
              fields={signupFields.map(field =>
                field.name === "password"
                  ? { ...field, type: showPassword ? "text" : "password" }
                  : field
              )}
              onSubmit={handleSignup}
              title="Create an account"
              subtitle="Your Trusted Flight Booking Partner ✈️"
              submitText="Sign up"
              footer={
                <div className="mt-4 text-sm text-center">
                  <p>
                    Already have an account?{" "}
                    <Link to={'/login'}>
                      <span className="text-blue-600 hover:underline">Sign in</span>
                    </Link>
                  </p>
                </div>
              }
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          </div>
        </div>
        {/* <div className="flex-1 relative overflow-hidden">
          <FlightRoutesBackground theme="light" />
        </div> */}
      </div>
    </div>
  );
}
