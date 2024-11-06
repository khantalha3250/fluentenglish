// components/RealWorldScenarios.tsx

import Image from 'next/image';

export default function RealWorldScenarios() {
  return (
    <section className="pt-24 min-h-[70vh] bg-gradient-to-b from-softSkyBlue to-lightGray py-12 px-6 sm:px-10 lg:px-20 flex flex-col items-center">
      {/* Real-World Scenarios Section */}
      <div className="flex flex-col items-center animate-fadeInUp">
        <h2 className="text-deepBlue text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 transition-all duration-300 ease-in-out text-center">
          Real-World Scenarios to Build Confidence
        </h2>
        <p className="text-mediumGray mb-8 text-lg sm:text-xl lg:text-2xl leading-relaxed text-center">
          Our interactive classes simulate real-life situations to help you speak with confidence in interviews, presentations, and social interactions.
        </p>
        <Image
          src="/p1.jpg"
          alt="Real World Scenarios"
          width={600}
          height={400}
          className="rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out mb-8"
        />
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 animate-fadeInUp text-center">
        <h2 className="text-deepBlue text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 transition-all duration-300 ease-in-out">
          Ready to Transform?
        </h2>
        <button className="bg-brightYellow text-darkGray font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-vibrantCoral hover:text-white transition-transform duration-300 transform hover:scale-105 animate-bounce">
          Start Your Journey
        </button>
      </div>
    </section>
  );
}
