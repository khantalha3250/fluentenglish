// pages/motivation.tsx

import { FaArrowRight } from 'react-icons/fa';

type MotivationProps = {
  onLearnMoreClick: () => void;
};

export default function MotivationPage({ onLearnMoreClick }: MotivationProps) {
  return (
    <section className="pt-24 min-h-[70vh] bg-gradient-to-b from-lightGray to-softSkyBlue py-12 px-6 sm:px-10 lg:px-20 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="pt-24 text-deepBlue text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center drop-shadow-md animate-fadeInUp">
        Unleash Your Potential with Fluent English
      </h1>

      {/* Motivational Text */}
      <p className="text-darkGray text-lg sm:text-xl lg:text-2xl max-w-2xl text-center mb-12 font-light leading-relaxed transition duration-300 ease-in-out">
        "Mastering English isn’t just about learning a language—it’s about opening doors to new opportunities, building confidence, and expressing yourself with ease."
      </p>

      {/* Interactive Content Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Transform Card */}
        <div className="bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate-fadeInUp">
          <h3 className="text-deepBlue text-xl font-semibold mb-4">Transform Your Future</h3>
          <p className="text-mediumGray mb-6">
            Fluent English can unlock your potential, whether you’re advancing your career, excelling in studies, or connecting worldwide.
          </p>
          <button
            onClick={onLearnMoreClick}
            className="text-deepBlue flex items-center font-semibold hover:text-lightBlue transition-all duration-300"
          >
            Learn More <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Grow Card */}
        <div className="bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate-fadeInUp">
          <h3 className="text-deepBlue text-xl font-semibold mb-4">A Journey of Growth</h3>
          <p className="text-mediumGray mb-6">
            Join a supportive community that helps you grow and gain confidence, every step of the way.
          </p>
          <button className="text-deepBlue flex items-center font-semibold hover:text-lightBlue transition-all duration-300">
            Discover More <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Succeed Card */}
        <div className="bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate-fadeInUp">
          <h3 className="text-deepBlue text-xl font-semibold mb-4">Succeed with Confidence</h3>
          <p className="text-mediumGray mb-6">
            With real-world exercises, live classes, and continuous feedback, you’ll develop skills that matter.
          </p>
          <button className="text-deepBlue flex items-center font-semibold hover:text-lightBlue transition-all duration-300">
            Start Now <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
