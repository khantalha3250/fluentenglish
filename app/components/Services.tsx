"use client";
import { useState } from 'react';
import Link from 'next/link';

// Define the props for ServiceCard component using an interface
interface ServiceCardProps {
  title: string;
  description: string;
  expandedDescription: string;
  icon: string; // If you're using emoji or text for icons. For an icon component, use JSX.Element
}

// ServiceCard component with TypeScript props
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, expandedDescription, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative bg-white shadow-lg rounded-xl p-6 transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
      {/* Service Icon */}
      <div className="text-6xl mb-4">{icon}</div>

      {/* Service Title */}
      <h3 className="text-deepBlue text-2xl font-bold mb-2">{title}</h3>

      {/* Service Description */}
      <p className="text-mediumGray text-base mb-4">
        {description}
      </p>

      {/* Conditional expanded content */}
      {isExpanded && (
        <div className="text-mediumGray text-sm">
          {expandedDescription}
        </div>
      )}

      {/* Read More/Collapse Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute bottom-4 right-4 text-brightYellow hover:text-vibrantCoral transition duration-200 ease-in-out"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-softSkyBlue to-lightGray text-center px-6 sm:px-10 py-16">
      {/* Page Title */}
      <h1 className="text-deepBlue text-4xl sm:text-5xl font-extrabold mb-10 drop-shadow-md">
        Our Services
      </h1>

      {/* Services Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Live Online Classes */}
        <ServiceCard
          title="Live Online Classes"
          description="Join live sessions with experienced instructors to practice your speaking skills and receive personalized feedback."
          expandedDescription="These real-time classes are designed to enhance your communication skills. Learn with a structured curriculum and get instant feedback to help you improve in every session."
          icon="🎥" // Replace this with an actual icon component if necessary
        />

        {/* Interactive Exercises */}
        <ServiceCard
          title="Interactive Exercises"
          description="Engage in hands-on activities designed to improve your vocabulary, grammar, and pronunciation."
          expandedDescription="Our exercises range from quizzes, speaking practice, to role-playing activities. You'll have opportunities to practice with real-world scenarios, boosting your confidence and fluency."
          icon="📝"
        />

        {/* Language Exchange Programs */}
        <ServiceCard
          title="Language Exchange Programs"
          description="Collaborate with language learners from around the world to practice conversational skills."
          expandedDescription="Our exchange programs provide you with a unique chance to speak with native speakers, offering a deeper understanding of different cultures while improving your fluency."
          icon="🌍"
        />

        {/* Online Resources */}
        <ServiceCard
          title="Online Resources"
          description="Access a comprehensive library of articles, guides, and videos to supplement your learning."
          expandedDescription="From grammar guides to pronunciation tutorials, our resource hub is your go-to for self-paced learning. Gain additional insights to further enhance your English proficiency."
          icon="📚"
        />
      </div>

      {/* Call-to-action Section */}
      <div className="mt-16">
        <Link href="/join">
          <button className="bg-deepBlue text-white px-8 py-4 rounded-lg shadow-lg hover:bg-lightBlue hover:scale-105 transform transition-all duration-300 ease-in-out">
            Join Our Classes Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesPage;
