import { useState } from "react";
import { AuthForm } from "@/components/AuthForm";
import { loginFields } from "@/data/formFields";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function LoginPage() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const apiLogin = await axios.post('http://localhost:4000/api/v1/login', values);
      const db = apiLogin.data
      console.log('user-info', db);
      
      const token = db.data?.tokenIn; 
      if (token) {
        localStorage.setItem('token', token)
      }

      if (db) {
        toast('log in successful')
        navigate('/home')
      }else {
        navigate('/login')
      }
  
    } catch (error) {
      console.log(error);
      toast(error.message)
    }
  };

  const handleForgotPassword = async (email) => {
    console.log("Reset password for:", email);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600">
      <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8">
          {!showForgotPassword ? (
            <AuthForm
              fields={loginFields.map(field => 
                field.name === "password" 
                ? { ...field, type: showPassword ? "text" : "password" }
                : field
              )}
              onSubmit={handleLogin}
              title="Welcome back"
              subtitle="Your Trusted Flight Booking Partner ✈️"
              submitText="Sign in"
              footer={
                <div className="space-y-2">
                  <button
                    onClick={() => setShowForgotPassword(true)}
                    className="text-indigo-600 hover:underline"
                  >
                    Forgot password?
                  </button>
                  <p>
                    Don't have an account?{" "}
                    <Link to="/" className="text-indigo-600 hover:underline">
                      Sign up
                    </Link>
                  </p>
                </div>
              }
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          ) : (
            <AuthForm
              fields={[loginFields[0]]} // Only email field
              onSubmit={handleForgotPassword}
              title="Reset Password"
              subtitle="Enter your email to reset your password"
              submitText="Send Reset Link"
              footer={
                <button
                  onClick={() => setShowForgotPassword(false)}
                  className="text-indigo-600 hover:underline"
                >
                  Back to login
                </button>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}
