import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HeartPulse, User, Mail, Lock, Phone } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL } from "../constants";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    age: "",
    agree: false,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      toast.error("Please agree to the terms and conditions.");
      return;
    }

    const data = {
      username: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      gender: formData.gender,
      age: formData.age,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Registration Successful");
        navigate("/login");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Failed to connect to the server. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 page-transition">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-8">
        <div className="text-center mb-8">
        <div className="flex justify-center items-center gap-3">
            <HeartPulse className="h-12 w-12 text-blue-600" />
            <span className="text-3xl font-bold font-display text-gray-800">
              MediSure
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Create an account
          </h2>
          <p className="mt-2 text-gray-600">
            Join us for Your Personal Health Assistant
          </p>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="9418XXXXXX"
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
              className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option className="text-slate-700" value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your age"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••••"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={formData.agree}
              onChange={(e) =>
                setFormData({ ...formData, agree: e.target.checked })
              }
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the{" "}
              <Link to={"/terms"} className="text-blue-600 hover:text-blue-500">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to={"/terms"} className="text-blue-600 hover:text-blue-500">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
