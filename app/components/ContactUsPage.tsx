"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

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
          <span>+91-8454974682</span>
        </div>
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-4xl text-brightYellow mb-2" />
          <span>11/2 First floor , Sakinaka industrial estate,near saki naka metro Andheri East 400072</span>
        </div>
      </div>

      {/* WhatsApp Section */}
      <div className="flex items-center justify-center gap-4 mb-12 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out">
        <FaWhatsapp className="text-green-500 text-3xl" />
        <a
          href="https://api.whatsapp.com/send?phone=917400363250"
          target="_blank"
          rel="noopener noreferrer"
          className="text-deepBlue font-bold text-lg hover:text-lightBlue transition-colors"
        >
          Chat with us on WhatsApp
        </a>
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
            className="w-full px-4 py-2 border border-lightGray rounded-lg text-deepBlue focus:outline-none focus:border-deepBlue"
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
            className="w-full px-4 py-2 border border-lightGray rounded-lg text-deepBlue focus:outline-none focus:border-deepBlue"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="text-mediumGray block mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-lightGray rounded-lg text-deepBlue focus:outline-none focus:border-deepBlue"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="w-full max-w-xs mx-auto bg-deepBlue text-white flex items-center justify-center gap-3 py-3 px-4 rounded-lg shadow-lg hover:bg-lightBlue transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
          <button
            type="submit"
            className="text-lg font-semibold flex items-center gap-2 focus:outline-none"
          >
            Send Message
            <FaWhatsapp className="text-green-500 text-2xl" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUsPage;
