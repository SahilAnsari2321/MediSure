import React, { useState } from "react";
import { Dialog, DialogTitle, DialogPanel, Button } from "@headlessui/react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL } from "../../constants";

const ProfileImageEditModal = ({ isOpen, close }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8"];

  const { fetchUserData } = useAuth();

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/profile/img`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach JWT token
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: selectedImage }),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Profile image updated successfully");
      } else {
        toast.error("Error updating profile image:", result.message);
      }
    } catch (error) {
      toast.error("Error:", error);
    }

    fetchUserData(localStorage.getItem("token"));
    close();
  };

  return (
    <Dialog open={isOpen} onClose={close} className="relative z-10">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50" />
      <div className="fixed inset-0 z-10 flex justify-center items-center">
        <DialogPanel
          transition
          className="w-full max-w-md rounded-xl bg-black/60 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
        >
          <DialogTitle className="text-xl text-white font-semibold text-center mb-4">
            Choose Profile Image
          </DialogTitle>

          {/* Display Image Options */}
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative cursor-pointer rounded-full overflow-hidden border-4 ${
                  selectedImage === image
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => handleImageSelect(image)}
              >
                <img
                  src={`../${image}.png`}
                  alt={`Profile Image ${index + 1}`}
                  className="w-20 h-20 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-between">
            <Button
              onClick={handleSave}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              disabled={!selectedImage}
            >
              Save
            </Button>
            <Button
              onClick={close}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            >
              Cancel
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ProfileImageEditModal;
