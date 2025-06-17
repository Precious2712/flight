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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setIsLoading(true);
    try {
      const apiLogin = await axios.post('https://request-0xlx.onrender.com/api/v1/login', values);
      const db = apiLogin.data;
      console.log('user-info', db);

      const token = db.data?.tokenIn || db.data?.token;
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(db.data.user));
      }

      if (db.success !== false) {
        toast.success('Login successful');
        navigate('/home');
      } else {
        toast.error(db.message || 'Login failed');
      }

    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Login failed';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (values) => {
    setIsLoading(true);
    try {
      // Fix: Use values.email instead of undefined values
      const email = values.email;
      
      if (!email) {
        toast.error("Please enter your email address");
        return;
      }

      const response = await axios.post(
        'https://request-0xlx.onrender.com/api/v1/forgot-password',
        { email: email }
      );
      
      if (response.data.success) {
        toast.success("Password reset link sent to your email!");
        setShowForgotPassword(false); // Go back to login form
      } else {
        toast.error(response.data.message || "Failed to send reset link");
      }
    } catch (error) {
      console.error('Forgot password error:', error);
      const errorMessage = error.response?.data?.message || error.message || "Failed to send reset link";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
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
              submitText={isLoading ? "Signing in..." : "Sign in"}
              footer={
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-indigo-600 hover:underline disabled:opacity-50 cursor-pointer"
                    disabled={isLoading}
                  >
                    Forgot password?
                  </button>
                  <p>
                    Don't have an account?{" "}
                    <Link to="/" className="text-indigo-600 hover:underline cursor-pointer">
                      Sign up
                    </Link>
                  </p>
                </div>
              }
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
              isLoading={isLoading}
            />
          ) : (
            <AuthForm
              fields={[loginFields[0]]} // Only email field
              onSubmit={handleForgotPassword}
              title="Reset Password"
              subtitle="Enter your email to reset your password"
              submitText={isLoading ? "Sending..." : "Send Reset Link"}
              footer={
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  className="text-indigo-600 hover:underline disabled:opacity-50 cursor-pointer"
                  disabled={isLoading}
                >
                  Back to login
                </button>
              }
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
}