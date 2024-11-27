"use client";
import Link from "next/link";
import Image from "next/image";

const HomeHeroSection = () => {
  const handleJoinNowClick = () => {
    console.log("Join Now clicked");
  };

  const handleLearnMoreClick = () => {
    console.log("Learn More clicked");
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-6 sm:px-10 bg-gradient-to-b from-lightGray to-softSkyBlue overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/img2.png" // Replace with the actual background image path
          alt="Background"
          fill
          className="object-contain sm:object-cover object-center opacity-60"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Tagline */}
        <h2 className="text-darkGray text-lg sm:text-xl lg:text-2xl font-light mb-4 pt-20">
          Boost Your English Communication Skills
        </h2>

        {/* Main Heading */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-deepBlue to-lightBlue text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-snug mt-4 sm:pb-0 pb-10 drop-shadow-lg">
          FLUENTT ENGLISH LIVE
        </h1>

        {/* Highlighted Text */}
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-lightBlue to-deepBlue text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 drop-shadow-md">
          MASTER YOUR SPEAKING SKILLS
        </p>

        {/* Description */}
        <p className="text-mediumGray text-base sm:text-lg lg:text-xl mt-6 max-w-3xl mx-auto">
          Join us for live classes and practical exercises designed to enhance your speaking skills. Speak confidently, fluently, and accurately in real-world scenarios.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Join Now Button */}
          <Link href="/classes">
            <button
              onClick={handleJoinNowClick}
              className="bg-deepBlue text-white px-8 py-3 rounded-lg shadow-lg hover:bg-lightBlue hover:scale-105 transform transition-all duration-300 ease-in-out"
            >
              Join Now
            </button>
          </Link>

          {/* Learn More Button */}
          <Link href="/about">
            <button
              onClick={handleLearnMoreClick}
              className="border border-deepBlue text-deepBlue px-8 py-3 rounded-lg hover:bg-brightYellow hover:text-darkGray shadow-md transition-all duration-300 ease-in-out"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
