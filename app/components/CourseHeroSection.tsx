"use client";
import Link from 'next/link';
import { useState } from 'react';

interface CourseHeroSectionProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaLink: string;
  learnMoreLink?: string;
  ctaHoveredText?: string;
  ctaNormalText?: string;
  backgroundColor?: string; // Optional: custom background gradient
}

const CourseHeroSection: React.FC<CourseHeroSectionProps> = ({
  headline,
  subheadline,
  // ctaText = 'Try Your First Class – Only 2000!', // Default text for CTA
  ctaLink,
  learnMoreLink = '/about', // Default Learn More link
  ctaHoveredText = 'Start Today for Only 2000!',
  ctaNormalText = 'Try Your First Class – Only 2000!',
  backgroundColor = 'bg-gradient-to-b from-softSkyBlue to-lightGray ', // Default background gradient
}) => {
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section
      className={`flex flex-col items-center justify-center min-h-[60vh] text-center px-6 sm:px-10 ${backgroundColor}`}
    >
      {/* Headline */}
      <h1 className="text-deepBlue text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-4 drop-shadow-md transition-transform transform hover:scale-105 duration-300">
        {headline}
      </h1>

      {/* Subheadline */}
      <p className="text-mediumGray text-lg sm:text-xl lg:text-2xl mt-4 max-w-3xl">
        {subheadline}
      </p>

      {/* Call-to-Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        {/* Try Your First Class Button */}
        <Link href={ctaLink}>
          <button
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            className={`bg-brightYellow text-darkGray px-8 py-4 rounded-lg shadow-lg font-bold transition-all duration-300 ease-in-out transform ${ctaHovered ? 'hover:scale-110' : ''}`}
          >
            {ctaHovered ? ctaHoveredText : ctaNormalText}
          </button>
        </Link>

        {/* Learn More Button */}
        {learnMoreLink && (
          <Link href={learnMoreLink}>
            <button
              className="border border-deepBlue text-deepBlue px-8 py-4 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-lightBlue hover:text-darkGray transform hover:scale-105"
            >
              Learn More
            </button>
          </Link>
        )}
      </div>

      {/* Decorative Elements for Animation */}
      <div className="mt-12 flex space-x-4">
        <div className="bg-brightYellow w-4 h-4 rounded-full animate-pulse"></div>
        <div className="bg-brightYellow w-6 h-6 rounded-full animate-bounce"></div>
        <div className="bg-brightYellow w-4 h-4 rounded-full animate-pulse"></div>
      </div>

      {/* Background Animated Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-deepBlue via-softSkyBlue to-lightGray opacity-30 blur-xl pointer-events-none animate-backgroundGradient"></div>
    </section>
  );
};

export default CourseHeroSection;
