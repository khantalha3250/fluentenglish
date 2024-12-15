"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageProps {
  title: string;
  faqItems: FAQItem[];
}

const FAQItemComponent: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 mb-4 transition-all duration-300 transform hover:scale-105 ${
        isOpen ? "shadow-2xl" : ""
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-deepBlue font-semibold text-lg">{item.question}</h3>
        <span className="text-brightYellow">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {isOpen && (
        <p className="text-mediumGray text-sm mt-4 transition-all duration-300 ease-in-out">
          {item.answer}
        </p>
      )}
    </div>
  );
};

const FAQPage: React.FC<FAQPageProps> = ({ title, faqItems }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedFAQs = showAll ? faqItems : faqItems.slice(0, 3);

  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-softSkyBlue to-lightGray px-6 sm:px-10 py-16">
      {/* Page Title */}
      <h1 className="text-deepBlue text-4xl sm:text-5xl font-extrabold mb-10 text-center drop-shadow-md transition-transform transform hover:scale-105 duration-300">
        {title}
      </h1>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        {displayedFAQs.map((item, index) => (
          <FAQItemComponent key={index} item={item} />
        ))}
      </div>

      {/* Show More/Less Button */}
      {faqItems.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 bg-deepBlue text-white px-6 py-3 rounded-lg shadow-lg hover:bg-lightBlue hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            {showAll ? "Show Less" : "Show More"}
            {showAll ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="mt-12 flex justify-center space-x-4">
        <div className="bg-brightYellow w-4 h-4 rounded-full animate-pulse"></div>
        <div className="bg-brightYellow w-6 h-6 rounded-full animate-bounce"></div>
        <div className="bg-brightYellow w-4 h-4 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default FAQPage;
