import { FaBriefcase, FaGlobe, FaGraduationCap } from 'react-icons/fa';
export default function TransformYourFuturePage() {
  return (
    <section className="pt-24 min-h-[70vh] bg-gradient-to-b from-softSkyBlue to-lightGray py-12 px-6 sm:px-10 lg:px-20 flex flex-col items-center">
            
      {/* Page Title */}
      <h1 className="text-deepBlue text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center drop-shadow-md animate-fadeInUp">
        Transform Your Future with Fluent English
      </h1>

      {/* Introduction Text */}
      <p className="text-darkGray text-lg sm:text-xl lg:text-2xl max-w-3xl text-center mb-12 font-light leading-relaxed animate-fadeInUp transition duration-300 ease-in-out">
        Mastering English can open doors to a world of opportunities—whether you aim to advance in your career, pursue studies abroad, or connect with people globally.
      </p>

      {/* Key Benefits Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Career Advancement */}
        <div className="relative bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate-fadeInUp overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deepBlue opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          <div className="mb-4 text-deepBlue text-5xl">
            <FaBriefcase />
          </div>
          <h3 className="text-deepBlue text-xl font-semibold mb-4">Advance Your Career</h3>
          <p className="text-mediumGray mb-6">
            Fluent English enables you to communicate effectively in the workplace, giving you a competitive edge and opening doors to new opportunities.
          </p>
          
        </div>

        {/* Global Connections */}
        <div className="relative bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate-fadeInUp overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deepBlue opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          <div className="mb-4 text-deepBlue text-5xl">
            <FaGlobe />
          </div>
          <h3 className="text-deepBlue text-xl font-semibold mb-4">Connect Globally</h3>
          <p className="text-mediumGray mb-6">
            Build relationships with people from different cultures and backgrounds, gaining a more global perspective and new friendships.
          </p>
      
        </div>

        {/* Academic Success */}
        <div className="relative bg-white rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate-fadeInUp overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deepBlue opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          <div className="mb-4 text-deepBlue text-5xl">
            <FaGraduationCap />
          </div>
          <h3 className="text-deepBlue text-xl font-semibold mb-4">Excel in Academics</h3>
          <p className="text-mediumGray mb-6">
            Fluent English is essential for academic achievement, especially if you’re aiming to study abroad or excel in international programs.
          </p>
        
        </div>
      </div>

   
    </section>
  );
}
