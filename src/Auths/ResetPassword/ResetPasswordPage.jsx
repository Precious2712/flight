import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthForm } from "@/components/AuthForm";
import axios from "axios";
import { toast } from "sonner";

const resetPasswordFields = [
  {
    name: "password",
    type: "password",
    placeholder: "New Password",
    label: "New Password",
    required: true,
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm New Password",
    label: "Confirm New Password",
    required: true,
  }
];

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      toast.error("Invalid reset link");
      navigate("/login");
    }
  }, [token, navigate]);

  const handleResetPassword = async (values) => {
    setIsLoading(true);

    try {
      // Validate passwords match
      if (values.password !== values.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      // Validate password length
      if (values.password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return;
      }

      const response = await axios.post(
        'https://request-0xlx.onrender.com/api/v1/reset-password',
        {
          token: token,
          password: values.password
        }
      );

      if (response.data.success) {
        toast.success("Password reset successful! You can now log in with your new password.");
        navigate("/login");
      } else {
        toast.error(response.data.message || "Failed to reset password");
      }

    } catch (error) {
      console.error('Reset password error:', error);
      const errorMessage = error.response?.data?.message || error.message || "Failed to reset password";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Invalid Reset Link</h2>
          <p>This password reset link is invalid or has expired.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600">
      <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8">
          <AuthForm
            fields={resetPasswordFields.map(field =>
              field.name === "password" || field.name === "confirmPassword"
                ? { ...field, type: showPassword ? "text" : "password" }
                : field
            )}
            onSubmit={handleResetPassword}
            title="Reset Password"
            subtitle="Enter your new password"
            submitText={isLoading ? "Resetting..." : "Reset Password"}
            footer={
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-indigo-600 hover:underline disabled:opacity-50 cursor-pointer"
                disabled={isLoading}
              >
                Back to login
              </button>
            }
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}