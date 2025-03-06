import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const location = useLocation();
  const frame = location.state?.frame;
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Redirect to home if no frame is selected
  useEffect(() => {
    if (!frame) navigate("/");
  }, [frame, navigate]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter((file) => file.size <= 5 * 1024 * 1024); // 5MB limit
    setSelectedFiles(validFiles);

    if (files.length > validFiles.length) {
      alert("Some files were excluded because they exceed the 5MB limit.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Log form data and selected files
    console.log("Order Details:", {
      ...formData,
      message,
      selectedFiles,
      frame,
    });

    alert("Order details submitted successfully!");
    setIsLoading(false);
    navigate("/");
  };

  if (!frame) return null;

  return (
    <div className="mt-14 mb-12 container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex">
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
          <img
            src={frame.img || "path/to/fallback-image.jpg"}
            alt={frame.title || "Frame Image"}
            className="h-[200px] w-[150px] object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">{frame.title}</h3>
          <p className="text-sm text-gray-600">Price: ${frame.price}</p>
        </div>

        <form className="flex-1 space-y-4 ml-6" onSubmit={handleSubmit}>
          {["firstName", "lastName", "phone", "address"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type={field === "phone" ? "tel" : "text"}
                name={field}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder={`Enter your ${field}`}
                value={formData[field]}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              className="w-full border rounded p-2"
              placeholder="Add a message for your order (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
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

          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full flex items-center gap-2 hover:shadow-lg transition-all"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
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