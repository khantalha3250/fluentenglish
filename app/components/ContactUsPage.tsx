"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.open(`https://api.whatsapp.com/send?phone=917400363250&text=${encodeURIComponent(whatsappMessage)}`);
  };
  

  return (
    <section className="min-h-[80vh] py-16 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-lightGray to-softSkyBlue flex flex-col items-center animate-fadeInUp pt-28 md:pt-48">
      {/* Title */}
      <h1 className="text-deepBlue text-4xl sm:text-5xl font-extrabold mb-8 text-center drop-shadow-md">
        Contact Us
      </h1>
      <p className="text-mediumGray text-lg sm:text-xl mb-12 text-center max-w-3xl">
        Have any questions? We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you soon!
      </p>

      {/* Contact Information */}
      <div className="flex flex-col sm:flex-row gap-8 mb-12 text-center text-mediumGray">
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-4xl text-brightYellow mb-2" />
          <span>contact@fluentenglish.com</span>
        </div>
        <div className="flex flex-col items-center">
          <FaPhone className="text-4xl text-brightYellow mb-2" />
          <span>+1 (234) 567-890</span>
        </div>
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-4xl text-brightYellow mb-2" />
          <span>123 Fluent St., Language City, ENG</span>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full transform transition-all hover:scale-105 duration-300 ease-in-out">
        <div className="mb-6">
          <label htmlFor="name" className="text-mediumGray block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-lightGray rounded-lg focus:outline-none focus:border-deepBlue"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="text-mediumGray block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-lightGray rounded-lg focus:outline-none focus:border-deepBlue"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="text-mediumGray block mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-lightGray rounded-lg focus:outline-none focus:border-deepBlue"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-deepBlue text-white py-3 rounded-lg hover:bg-lightBlue hover:scale-105 transform transition-all duration-300 ease-in-out shadow-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUsPage;
