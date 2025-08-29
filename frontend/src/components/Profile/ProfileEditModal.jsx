import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL } from "../../constants";

const ProfileEditModal = ({ isOpen, close }) => {
  const { user, fetchUserData } = useAuth(); // Assuming you have an updateUser function in your context
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        phone: user.phone,
        age: user.age,
        gender: user.gender,
        height: user.height || "",
        weight: user.weight || "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await fetch(`${API_BASE_URL}/profile`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach JWT token
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Profile updated successfully");
      } else {
        toast.error("Error updating profile:", result.message);
      }
    } catch (error) {
      toast.error("Error:", error);
    }

    fetchUserData(localStorage.getItem("token"));
    close();
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="bg-blue-600 relative z-10 focus:outline-none"
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-black/40 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              Edit Profile
            </DialogTitle>

            {/* Profile Edit Form */}
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="text-sm text-gray-300">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-transparent text-white"
                    required
                  />
                </div>

                {/* <div>
                  <label htmlFor="email" className="text-sm text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-transparent text-white"
                    required
                  />
                </div> */}

                <div>
                  <label htmlFor="phone" className="text-sm text-gray-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-transparent text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="age" className="text-sm text-gray-300">
                    Age - years
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-transparent text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="gender" className="text-sm text-gray-300">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 rounded-md border bg-transparent text-white"
                    required
                  >
                    <option value="male" className="text-black">
                      Male
                    </option>
                    <option
                      value="female"
                      className="text-black bg-transparent"
                    >
                      Female
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="height" className="text-sm text-gray-300">
                  Height - cm
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-transparent text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="weight" className="text-sm text-gray-300">
                  Weight - Kg
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 rounded-md border border-gray-300 bg-transparent text-white"
                  required
                />
              </div>

              <div className="flex mt-4 justify-between">
                <Button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 py-2 px-4 text-white font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Save Changes
                </Button>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-red-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none"
                  onClick={close}
                >
                  Cancel
                </Button>
              </div>
            </form>

            <div className="mt-4"></div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ProfileEditModal;
