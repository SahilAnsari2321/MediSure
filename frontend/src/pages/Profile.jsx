import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Users,
  Pencil,
  Ruler,
  Weight,
  ChevronLeft,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import ProfileEditModal from "../components/Profile/ProfileEditModal";
import ProfileImageEditModal from "../components/Profile/ProfileImageEditModal";
import { NavLink } from "react-router-dom";

function Profile() {
  const { user } = useAuth();
  const imageUrl = `../${user.image}.png`;

  let [isOpen, setIsOpen] = useState(false);
  let [isOpen1, setIsOpen1] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function open1() {
    setIsOpen1(true);
  }

  function close1() {
    setIsOpen1(false);
  }

  return (
    <div className=" bg-gradient-to-br from-blue-100 to-blue-200 pb-10 pt-44 sm:pt-92 min-h-screen px-4 page-transition">
      <NavLink
        to="/dashboard"
        className="absolute top-20 z-20 flex "
      >
        <button className="flex items-center text-medisure-700 hover:text-medisure-900 transition-colors">
          <ChevronLeft />
          Back to Dashboard
        </button>
      </NavLink>
      <div className="flex justify-center items-center ">
        <div className="glass-card max-w-lg sm:max-w-3xl w-full rounded-2xl shadow-xl p-8 relative">
          {/* Profile Picture */}
          <div
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 sm:left-6 sm:translate-x-0 cursor-pointer"
            onClick={open1}
          >
            <img
              src={imageUrl}
              alt="User Profile"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-md">
              <Pencil className="text-blue-600 " />
            </div>
          </div>

          {/* Edit Button */}
          <button
            onClick={open}
            className="flex gap-2 absolute top-5 right-5 px-3 py-2 sm:px-4 sm:py-2 bg-medisure-800 text-white font-bold rounded-lg shadow-md hover:scale-105 hover:bg-medisure-900 transition duration-300 sm:mt-0 mt-10"
          >
            Edit Profile <Pencil />
          </button>

          {/* Profile Information */}
          <div className="mt-20 sm:mt-16 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {user.username.toUpperCase()}
            </h1>
          </div>

          {/* Profile Details */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-gray-700">
            {[
              {
                label: "Email",
                value: user.email,
                icon: <Mail className="w-5 h-5 text-medisure-700" />,
              },
              {
                label: "Phone",
                value: user.phone,
                icon: <Phone className="w-5 h-5 text-medisure-700" />,
              },
              {
                label: "Height",
                value: user.height ? `${user.height} cm` : "NA",
                icon: <Ruler className="w-5 h-5 text-medisure-700" />,
              },
              {
                label: "Age",
                value: `${user.age} years`,
                icon: <Calendar className="w-5 h-5 text-medisure-700" />,
              },
              {
                label: "Gender",
                value: user.gender.toUpperCase(),
                icon: <Users className="w-5 h-5 text-medisure-700" />,
              },
              {
                label: "Weight",
                value: user.weight ? `${user.weight} Kg` : "NA",
                icon: <Weight className="w-5 h-5 text-medisure-700" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/70 p-3 sm:p-4 rounded-xl shadow-md"
              >
                <div>{item.icon}</div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.label}
                  </p>
                  <p className="text-gray-900 font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProfileEditModal isOpen={isOpen} close={close} />
      <ProfileImageEditModal isOpen={isOpen1} close={close1} />
    </div>
  );
}

export default Profile;
