/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaBox,
  FaCalendarAlt,
  FaDollarSign,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

const ThirdStep = ({ formData, setStep, setFormData }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const basePrices = { electronics: 150, furniture: 200 };
    setPrice(basePrices[formData.cargoType] || 100);
  }, [formData]);

  // Array for booking details
  const bookingDetails = [
    {
      label: "Name",
      value: formData.name,
      icon: <FaUser className="text-blue-500 text-lg" />,
    },
    {
      label: "Email",
      value: formData.email,
      icon: <FaEnvelope className="text-red-500 text-lg" />,
    },
    {
      label: "Cargo Type",
      value: formData.cargoType,
      icon: <FaBox className="text-green-500 text-lg" />,
    },
    {
      label: "Shipment Date",
      value: formData.shipmentDate,
      icon: <FaCalendarAlt className="text-purple-500 text-lg" />,
    },
  ];
  const handleSubmit = () => {
    toast.success("Booking Submitted Successfully!", {
      position: "top-right",
      autoClose: 3000, // Closes after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // After a delay, reset to Step 1

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        cargoType: "",
        shipmentDate: "",
      });

      setStep(1); // Navigate back to Step 1
    }, 3500); // 3-second delay
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Review Your Booking Details
      </h2>

      <div className="space-y-4">
        {bookingDetails.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 p-3 rounded-lg"
          >
            {item.icon}
            <p className="text-gray-700 text-lg ml-2 ">
              <strong>{item.label}:</strong> {item.value}
            </p>
          </div>
        ))}

        <div className="flex items-center justify-between bg-gray-200 p-4 rounded-lg border border-green-500">
          <FaDollarSign className="text-green-600 text-xl" />
          <p className="text-xl font-semibold text-green-600">
            Total Price: <span className="font-bold">${price}</span>
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full p-3 text-lg font-semibold text-white bg-green-500 rounded-md shadow-md hover:bg-green-600 transition duration-300"
      >
        Submit Booking
      </button>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ThirdStep;
