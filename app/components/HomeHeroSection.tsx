"use client";
import Link from 'next/link';

const HomeHeroSection = () => {
  const handleJoinNowClick = () => {
    console.log("Join Now clicked");
  };

  const handleLearnMoreClick = () => {
    console.log("Learn More clicked");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 sm:px-10 bg-gradient-to-b from-lightGray to-softSkyBlue">
      {/* Tagline */}
      <h2 className="text-darkGray text-lg sm:text-xl lg:text-2xl font-light mb-2 pt-20">
        Boost Your English Communication Skills
      </h2>

      {/* Main Heading */}
      <h1 className="text-deepBlue text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-snug mt-2 drop-shadow-lg">
        FLUENT ENGLISH <br /> MASTER YOUR SPEAKING SKILLS
      </h1>

      {/* Description */}
      <p className="text-mediumGray text-base sm:text-lg lg:text-xl mt-4 max-w-2xl">
        Join us for live classes and practical exercises designed to enhance your speaking skills. Speak confidently, fluently, and accurately in real-world scenarios.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        {/* Join Now Button */}
        <Link href="/join">
          <button 
            onClick={handleJoinNowClick} 
            className="bg-deepBlue text-white px-8 py-3 rounded-lg shadow-lg hover:bg-lightBlue hover:scale-105 transform transition-all duration-300 ease-in-out">
            Join Now
          </button>
        </Link>

        {/* Learn More Button */}
        <Link href="/about">
          <button 
            onClick={handleLearnMoreClick} 
            className="border border-deepBlue text-deepBlue px-8 py-3 rounded-lg hover:bg-brightYellow hover:text-darkGray shadow-md transition-all duration-300 ease-in-out">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeHeroSection;
