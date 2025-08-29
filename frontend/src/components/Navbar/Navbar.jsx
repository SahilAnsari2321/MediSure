import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeartPulse, LogIn, UserPlus, Menu, X } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 flex justify-evenly page-transition ${
        scrolled ? "bg-white/20 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo and Branding */}
      <Link to="/" className="flex items-center space-x-2">
        <HeartPulse className="size-8 text-blue-600" />
        <span className="text-2xl font-bold font-display text-gray-800">
          MediSure
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center mr-20 ml-auto">
        {user ? (
          <>
            <ProfileDropdown />
          </>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="flex items-center space-x-1 px-4 py-2 rounded-lg btn-secondary text-gray-600 hover:bg-gray-100"
            >
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center space-x-1 px-4 py-2 rounded-lg btn-primary"
            >
              <UserPlus className="h-4 w-4" />
              <span>Sign Up</span>
            </Link>
          </div>
        )}
      </div>

      {/* Hamburger icon for mobile */}
      <div
        className="md:hidden flex items-center ml-auto"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-gray-800" />
        ) : (
          <Menu className="h-6 w-6 text-gray-800" />
        )}
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden flex flex-col items-center space-y-4 bg-white shadow-lg absolute top-16 left-0 w-full py-4 transition-transform duration-300 ease-in-out transform`}
      >
        <div className="w-full flex flex-col items-center space-y-4">
          {user ? (
            <>
              {/* User Greeting and Logout */}
              <ProfileDropdown mobile={true} />
            </>
          ) : (
            <>
              {/* Login and Register Links */}
              <Link
                to="/login"
                className="flex items-center space-x-1 px-4 py-2 btn-secondary rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className="flex items-center btn-primary space-x-1 px-4 py-2 rounded-lg"
              >
                <UserPlus className="h-4 w-4" />
                <span>Register</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
