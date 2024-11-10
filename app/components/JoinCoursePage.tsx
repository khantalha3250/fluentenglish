"use client";
import { useState } from "react";

const JoinCoursePage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    courseType: "",
    additionalInfo: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-softSkyBlue to-lightGray py-12 px-6 sm:px-10 lg:px-20 flex flex-col items-center pt-28 md:pt-38">
      {/* Page Title */}
      <h1 className="text-deepBlue text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 text-center drop-shadow-md animate-fadeInUp">
        Join Our Course
      </h1>
      <p className="text-darkGray text-lg sm:text-xl max-w-2xl text-center mb-10 font-light leading-relaxed animate-fadeInUp">
        Enroll in one of our transformative English courses by filling out the form below.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8 animate-fadeInUp transition-transform duration-300 ease-in-out transform hover:scale-105">
        {/* First Name */}
        <div className="mb-4">
          <label className="block text-deepBlue font-semibold mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-lightGray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue transition-all duration-300"
            placeholder="Enter your first name"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-deepBlue font-semibold mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-lightGray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue transition-all duration-300"
            placeholder="Enter your last name"
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

        {/* Course Type */}
        <div className="mb-6">
          <label className="block text-deepBlue font-semibold mb-2">Select Course</label>
          <select
            name="courseType"
            value={formData.courseType}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-lightGray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue transition-all duration-300"
          >
            <option value="">Choose a course...</option>
            <option value="Professional English for Busy Professionals">Professional English for Busy Professionals</option>
            <option value="Conversational English for Homemakers">Conversational English for Homemakers</option>
            <option value="Business English">Fun and Engaging English for Kids</option>
           
          </select>
        </div>

        {/* Additional Information */}
        <div className="mb-6">
          <label className="block text-deepBlue font-semibold mb-2">Additional Information (Optional)</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-lightGray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lightBlue transition-all duration-300"
            placeholder="Share any specific goals or preferences..."
          ></textarea>
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
