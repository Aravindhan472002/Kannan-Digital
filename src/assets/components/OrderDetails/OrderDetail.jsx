import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const location = useLocation();
  const frame = location.state?.frame; // Get frame details from the route state
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., save data or send to the backend
    console.log("Form submitted with files:", selectedFiles);
  };

  if (!frame) {
    return (
      <div className="mt-14 mb-12 text-center">
        <p>No frame selected. Please go back and select a frame.</p>
        <button
          className="bg-primary text-white py-2 px-4 rounded-md
          hover:bg-primary-dark transition-colors duration-300"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="mt-14 mb-12 container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex">
        {/* Left Side: Image, Name, and Price */}
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
          <img
            src={frame.img}
            alt={frame.title}
            className="h-[200px] w-[150px] object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">{frame.title}</h3>
          <p className="text-sm text-gray-600">Price: ${frame.price}</p>
        </div>

        {/* Right Side: Order Form */}
        <form className="flex-1 space-y-4 ml-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              className="w-full border rounded p-2"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <textarea
              className="w-full border rounded p-2"
              placeholder="Enter your address"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Payment Option</label>
            <select className="w-full border rounded p-2" required>
              <option value="gpay">Google Pay</option>
              <option value="phonepe">PhonePe</option>
              <option value="paytm">Paytm</option>
              <option value="creditcard">Credit Card</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Upload Photos</label>
            <input
              type="file"
              multiple
              className="w-full border rounded p-2"
              onChange={handleFileChange}
            />
            {selectedFiles.length > 0 && (
              <div className="mt-2 text-sm text-gray-600">
                <p>Selected files:</p>
                <ul>
                  {selectedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <p className="text-sm font-medium">
              Advance Payment (40%): ${frame.price * 0.4}
            </p>
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-md
            hover:bg-primary-dark transition-colors duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
      <button
        className="mt-4 text-red-500 underline"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default OrderDetails;
