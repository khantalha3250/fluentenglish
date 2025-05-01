// https://script.google.com/macros/s/AKfycbx4y1aDHxuZaauHEr0_Z31fuQMJp4AxSvdo7GuEXrFIditmKeCkGW57-GnYP9PsySLz/exec"use client";
"use client";
import { useState } from "react";

const JoinCoursePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    countryCode: "+91", // Default country code
    currentLevel: "",
    preferredSlot: "",
    budget: "",
  });

  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [loading, setLoading] = useState(false); // Track loading state

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return; // Prevent multiple submissions
    setLoading(true); // Set loading state to true

    const scriptURL = "https://script.google.com/macros/s/AKfycbx4y1aDHxuZaauHEr0_Z31fuQMJp4AxSvdo7GuEXrFIditmKeCkGW57-GnYP9PsySLz/exec"; 

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(document.forms[0]), 
      });

      if (response.ok) {
        setAlert({
          message:
            "Thank you for your interest! Stay connected—we’ll be reaching out to you soon",
          type: "success",
        });
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          countryCode: "+1",
          currentLevel: "",
          preferredSlot: "",
          budget: "",
        });
      } else {
        throw new Error("Submission failed.");
      }
    } catch (error) {
      console.error("Submission Error:", error); // Log the error for debugging
      setAlert({
        message: `Oops! Something went wrong. Error: ${
          (error as Error).message
        }`,
        type: "error",
      });
    } finally {
      setLoading(false); // Reset loading state
      setTimeout(() => setAlert(null), 5000); // Hide alert after 5 seconds
    }
  };

  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-softSkyBlue to-lightGray py-12 px-6 sm:px-10 lg:px-20 flex flex-col items-center pt-28 md:pt-38">
      <h1 className="text-deepBlue text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-center drop-shadow-md animate-fadeInUp">
        BOOK YOUR TRIAL CLASS NOW
      </h1>
      <p className="text-darkGray text-lg sm:text-xl max-w-2xl text-center mb-10 font-light leading-relaxed animate-fadeInUp">
        Join us for a free trial class! Simply fill out the form below to get
        started on your journey.
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
        className="w-full text-deepBlue max-w-lg bg-white shadow-xl rounded-lg p-8 animate-fadeInUp transition-transform duration-300 ease-in-out transform hover:scale-105"
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

              {/* Phone Number with Country Code */}
              <div className="mb-4">
          <label className="block text-deepBlue font-semibold mb-2">
            Phone Number
          </label>
          <div className="flex items-center space-x-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleInputChange}
              required
              className="px-3 py-2 w-1/2 border border-lightGray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue transition-all duration-300 bg-white"
            >
              <option value="+1">+1 (US)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (India)</option>
              <option value="+977">+977 (Nepal)</option>
              <option value="+92">+92 (Pakistan)</option>
              <option value="+880">+880 (Bangladesh)</option>
              <option value="+93">+93 (Afghanistan)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+81">+81 (Japan)</option>
              <option value="+49">+49 (Germany)</option>
              {/* Add more country codes as needed */}
            </select>
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
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-deepBlue font-semibold mb-2">
            Email
          </label>
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
          <label className="block text-deepBlue font-semibold mb-2">
            Select Your Current Level
          </label>
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
            <option value="Basic Level">
              Basic Level (Beginner to Intermediate)
            </option>
            <option value="Intermediate Level">
              Intermediate Level (Good to Advanced)
            </option>
            <option value="Advanced Level">
              Advanced Level (Business Communication)
            </option>
          </select>
        </div>

        {/* Preferred Slot */}
        <div className="mb-4">
          <label className="block text-deepBlue font-semibold mb-2">
            Preferred Date and Time Slot
          </label>
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
          <label className="block text-deepBlue font-semibold mb-2">
            Your Budget
          </label>
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
            <option value="15k and above">
              15k and above (Long-term practice)
            </option>
            <option value="10k to 15k">10k to 15k</option>
            <option value="7.5k to 10k">7.5k to 10k</option>
            <option value="5k to 7.5k">5k to 7.5k</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading} // Disable button when loading
          className={`w-full bg-brightYellow text-darkGray font-bold py-3 rounded-lg shadow-lg transition-transform duration-300 transform ${
            loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-vibrantCoral hover:text-white hover:scale-105"
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </div>
          ) : (
            "Join Now"
          )}
        </button>
      </form>
    </section>
  );
};

export default JoinCoursePage;
