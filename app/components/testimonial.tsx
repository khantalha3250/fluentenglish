"use client";
import { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "John Doe",
    feedback: "FluentEnglish has completely transformed my communication skills. The live classes were interactive, and the feedback was invaluable.",
    location: "New York, USA",
  },
  {
    name: "Jane Smith",
    feedback: "I love how engaging the platform is. The language exchange programs allowed me to practice with native speakers, boosting my confidence.",
    location: "London, UK",
  },
  {
    name: "Maria Garcia",
    feedback: "The interactive exercises made learning fun and effective. I've seen a significant improvement in my fluency.",
    location: "Madrid, Spain",
  },
  {
    name: "Ahmed Hassan",
    feedback: "The instructors were professional, and the resources available were very useful. I feel much more confident speaking English now.",
    location: "Cairo, Egypt",
  },
];

const TestimonialCard: React.FC<{ name: string; feedback: string; location: string }> = ({ name, feedback, location }) => {
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

const TestimonialsPage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-softSkyBlue to-lightGray px-6 sm:px-10 py-16">
      {/* Page Title */}
      <h1 className="text-deepBlue text-4xl sm:text-5xl font-extrabold mb-10 text-center drop-shadow-md">
        What Our Students Say
      </h1>

      {/* Testimonial Cards - Desktop */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            feedback={testimonial.feedback}
            location={testimonial.location}
          />
        ))}
      </div>

      {/* Testimonial Carousel - Mobile */}
      <div className="lg:hidden flex flex-col items-center">
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
