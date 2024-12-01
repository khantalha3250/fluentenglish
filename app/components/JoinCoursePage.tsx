"use client";
import { useState } from "react";

const JoinCoursePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    currentLevel: "",
    preferredSlot: "",
    budget: "",
  });

  const [alert, setAlert] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxLGK7vu3JoZBYOyK4TGKanLisoCpOzGq-yVPirm0xsu5-Z_HflFHJLIcoF8pRqS2-D/exec"; // Replace with your Web App URL

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(document.forms[0]), // Ensure the form tag has `name="join-course-form"`
    })
      .then((response) => {
        if (response.ok) {
          setAlert({
            message: "Thank you for your interest! Stay connected—we’ll be reaching out to you soon",
            type: "success",
          });
          setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            currentLevel: "",
            preferredSlot: "",
            budget: "",
          });
        } else {
          throw new Error("Submission failed.");
        }
      })
      .catch((error) => {
        console.error("Submission Error:", error); // Log the error for debugging
        setAlert({
          message: `Oops! Something went wrong. Error: ${error.message}`,
          type: "error",
        });
      })
      .finally(() => {
        setTimeout(() => setAlert(null), 5000); // Hide alert after 5 seconds
      });
  };

  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-softSkyBlue to-lightGray py-12 px-6 sm:px-10 lg:px-20 flex flex-col items-center pt-28 md:pt-38">
      <h1 className="text-deepBlue text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-center drop-shadow-md animate-fadeInUp">
        BOOK YOUR TRIAL CLASS NOW
      </h1>
      <p className="text-darkGray text-lg sm:text-xl max-w-2xl text-center mb-10 font-light leading-relaxed animate-fadeInUp">
        Join us for a free trial class! Simply fill out the form below to get started on your journey.
      </p>

      {/* Alert Box */}
      {alert && (
        <div
          className={`fixed top-10 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-md shadow-md text-white flex items-center gap-4 ${
            alert.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <span>{alert.message}</span>
          <button
            className="text-white text-xl leading-none font-bold focus:outline-none"
            onClick={() => setAlert(null)}
          >
            &times;
          </button>
        </div>
      )}

      <form
        name="join-course-form"
        onSubmit={handleSubmit}
        className="w-full text-deepBlue max-w-lg bg-white shadow-xl rounded-lg p-8 animate-fadeInUp transition-transform duration-300 ease-in-out transform hover:scale-105 te"
      >
        {/* Name */}
        <div className="mb-4">
          <label className="block text-deepBlue font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-lightGray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue transition-all duration-300"
            placeholder="Enter your full name"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-deepBlue font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-lightGray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue transition-all duration-300"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-deepBlue font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-lightGray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue transition-all duration-300"
            placeholder="Enter your email"
          />
        </div>

        {/* Current Level */}
        <div className="mb-4">
          <label className="block text-deepBlue font-semibold mb-2">Select Your Current Level</label>
          <select
            name="currentLevel"
            value={formData.currentLevel}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-lightGray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue transition-all duration-300"
          >
            <option value="" disabled>
              Choose your level
            </option>
            <option value="Basic Level">Basic Level (Beginner to Intermediate)</option>
            <option value="Intermediate Level">Intermediate Level (Good to Advanced)</option>
            <option value="Advanced Level">Advanced Level (Business Communication)</option>
          </select>
        </div>

        {/* Preferred Slot */}
        <div className="mb-4">
          <label className="block text-deepBlue font-semibold mb-2">Preferred Date and Time Slot</label>
          <input
            type="text"
            name="preferredSlot"
            value={formData.preferredSlot}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-lightGray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue transition-all duration-300"
            placeholder="e.g., 25th Nov, 4 PM"
          />
        </div>

        {/* Budget */}
        <div className="mb-6">
          <label className="block text-deepBlue font-semibold mb-2">Your Budget</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-lightGray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue transition-all duration-300"
          >
            <option value="" disabled>
              Select your budget
            </option>
            <option value="15k and above">15k and above (Long-term practice)</option>
            <option value="10k to 15k">10k to 15k</option>
            <option value="7.5k to 10k">7.5k to 10k</option>
            <option value="5k to 7.5k">5k to 7.5k</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-brightYellow text-darkGray font-bold py-3 rounded-lg shadow-lg hover:bg-vibrantCoral hover:text-white transition-transform duration-300 transform hover:scale-105"
        >
          Join Now
        </button>
      </form>
    </section>
  );
};

export default JoinCoursePage;
