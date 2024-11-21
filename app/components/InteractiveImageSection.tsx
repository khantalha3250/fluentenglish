    "use client";
import Link from "next/link";
import Image from "next/image";

const InteractiveImageSection = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden bg-gray-200">
      {/* Background Image */}
      <Image
        src="/img1.jpeg" // Replace with your desired image URL
        alt="Engaging English Learning"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 flex flex-col items-center justify-center text-center px-6">
        {/* Headline */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg animate-fadeIn">
          Speak English with Confidence<br />
          Anytime, Anywhere
        </h2>

        {/* Subheadline */}
        <p className="text-gray-300 text-lg sm:text-xl mt-4 max-w-2xl drop-shadow-md">
          Experience personalized, live English lessons tailored to your needs. 
          Learn with fun, confidence, and success.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link href="/classes">
            <button className="bg-brightYellow text-darkNavy px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-deepBlue hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in-out">
              Explore Classes
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-white text-darkNavy border-2 border-brightYellow px-6 py-3 rounded-full font-semibold shadow-md hover:bg-brightYellow hover:text-white transition-transform transform hover:scale-105 duration-300 ease-in-out">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveImageSection;
