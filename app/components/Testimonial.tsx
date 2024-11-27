"use client";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Testimonial Interface
interface Testimonial {
  name: string;
  feedback: string;
  location: string;
}

// Props Interface for TestimonialsPage
interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

const TestimonialCard: React.FC<Testimonial> = ({ name, feedback, location }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 mb-8 sm:mb-0 mx-2 transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
      {/* Quote Icons */}
      <div className="flex justify-between text-4xl text-brightYellow mb-4">
        <FaQuoteLeft />
        <FaQuoteRight />
      </div>

      {/* Feedback */}
      <p className="text-mediumGray italic mb-4">{feedback}</p>

      {/* Name */}
      <h3 className="text-deepBlue text-xl font-semibold">{name}</h3>

      {/* Location */}
      <p className="text-darkGray text-sm">{location}</p>
    </div>
  );
};

const TestimonialsPage: React.FC<TestimonialsProps> = ({ title, testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000); // 7 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);

  // Handlers for manual navigation
  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="min-h-[60vh] bg-gradient-to-b from-lightGray to-softSkyBlue px-6 sm:px-10 py-16">
      {/* Page Title */}
      <h1 className="text-deepBlue text-4xl sm:text-5xl font-extrabold mb-10 text-center drop-shadow-md">
        {title}
      </h1>

      {/* Testimonial Slider */}
      <div className="flex flex-col items-center">
        {/* Testimonial Card */}
        <TestimonialCard
          name={testimonials[currentTestimonial].name}
          feedback={testimonials[currentTestimonial].feedback}
          location={testimonials[currentTestimonial].location}
        />

        {/* Carousel Controls */}
        <div className="flex justify-between w-full max-w-sm mt-4">
          <button
            onClick={handlePrev}
            className="bg-deepBlue text-white px-4 py-2 rounded-lg hover:bg-lightBlue hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-deepBlue text-white px-4 py-2 rounded-lg hover:bg-lightBlue hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            Next
          </button>
        </div>
      </div>

     
    </section>
  );
};

export default TestimonialsPage;
