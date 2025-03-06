import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CupOrderDetails = () => {
  const location = useLocation();
  const cup = location.state?.cup;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    message: "",
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!cup) navigate("/");
  }, [cup, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => file.size <= 5 * 1024 * 1024); // 5MB limit
    setSelectedFiles(validFiles);

    if (files.length > validFiles.length) {
      alert("Some files were excluded because they exceed the 5MB limit.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Order Details:", { ...formData, selectedFiles, cup });

    alert("Order submitted successfully!");
    setIsLoading(false);
    navigate("/");
  };

  if (!cup) return null;

  return (
    <div className="mt-14 mb-12 container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex">
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
          <img
            src={cup.img}
            alt={cup.title}
            className="h-[200px] w-[150px] object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">{cup.title}</h3>
          <p className="text-sm text-gray-600">Price: ₹{cup.price}</p>
        </div>

        <form className="flex-1 space-y-4 ml-6" onSubmit={handleSubmit}>
          {Object.keys(formData).map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type={field === "phone" ? "tel" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder={`Enter your ${field}`}
                required={field !== "message"}
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium">Upload Photos</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="w-full border rounded p-2"
            />
            {selectedFiles.length > 0 && (
              <ul className="mt-2 text-sm text-gray-600">
                {selectedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full hover:shadow-lg transition-all"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Order"}
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

export default CupOrderDetails;
