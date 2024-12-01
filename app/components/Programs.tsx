import ProgramCard from "./ProgramCard";
import { FaWhatsapp } from "react-icons/fa";
export default function Programs() {
     const programs = [
        {
          title: "For Basic to Advanced Level",
          variants: [
            {
              name: "For Beginners - Extended Program",
              duration: "3 to 4 months",
              details: [
                "Variants: 1:1/1:2/1:3",
                "Dedicated personal tutor",
                "60+ hours of personalized class, student practice, and master class",
                "Level 1 Guaranteed CEFR Improvement",
              ],
            },
            {
              name: "Protracted Program",
              duration: "6 to 8 months",
              details: [
                "Variants: 1:1/1:2/1:3",
                "Dedicated personal tutor",
                "120+ hours of personalized class, student practice, and master class",
                "Level 2 Guaranteed CEFR Improvement",
                "A foreign speaking partner will be provided",
              ],
            },
          ],
        },
        {
          title: "Program 2: From Intermediate to Advanced Level",
          variants: [
            {
              name: "Fastened Program",
              duration: "2 to 3 months",
              details: [
                "Variants: 1:1/1:2/1:3",
                "Dedicated personal tutor",
                "40+ hours personalized session, student practice, and master class",
                "A foreign speaking partner will be provided (British or American)",
              ],
            },
            {
              name: "Protracted Program",
              duration: "4 to 5 months",
              details: [
                "Variants: 1:1/1:2/1:3",
                "Dedicated personal tutor",
                "80+ hours of personalized class, student practice, and master class",
                "Level 2 Guaranteed CEFR Improvement",
                "A foreign speaking partner will be provided",
              ],
            },
          ],
        },
        {
          title: "Program 3: For Kids (Ages 7-15)",
          variants: [
            {
              name: "Extended Program",
              duration: "3 to 4 months",
              details: [
                "Dedicated personal tutor",
                "60+ hours of personalized session, student practice, and master class",
                "Daily practice for mind, public speaking, quizzes, and activities",
              ],
            },
            {
              name: "Protracted Program",
              duration: "6 to 8 months",
              details: [
                "Dedicated personal tutor",
                "120+ hours of personalized session, student practice, and master class",
                "Daily practice for mind, public speaking, quizzes, and activities",
              ],
            },
          ],
        },
        {
          title: "For IELTS Preparation",
          variants: [
            {
              name: "Academic Extended Program",
              duration: "3 months",
              details: [
                "50+ hours of personalized session, module-wise practice",
                "Study material provided for all modules",
                "10 mock tests and 20 preparation tests",
              ],
            },
            {
              name: "General Extended Program",
              duration: "3 months",
              details: [
                "50+ hours of personalized session, module-wise practice",
                "10+ hours of master class",
                "Detailed evaluation as per IELTS",
                "10 mock tests and 20 preparation tests",
              ],
            },
          ],
        },
      ];
      

  return (
    <div className="min-h-screen bg-gradient-to-b from-softSkyBlue to-lightGray">
      <header className="bg-deepBlue text-white py-16 text-center">
        <h1 className="text-4xl sm:text-3xl font-extrabold drop-shadow-md pt-6">
          Our Programs
        </h1>
        <p className="text-lg sm:text-base mt-4 max-w-3xl mx-auto">
          Find the right program tailored to your needs and achieve your English fluency goals with expert guidance.
        </p>
        {/* WhatsApp Button */}
        <div className="mt-6 flex justify-center">
  <a
    href="https://api.whatsapp.com/send?phone=917045337426"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-brightYellow text-darkGray font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
  >
    <FaWhatsapp className="text-green-500 text-2xl" />
    Need help? Chat with a Counselor!
  </a>
</div>


      </header>

      <main className="max-w-7xl mx-auto py-16 px-8">
        <div className="grid gap-16 sm:grid-cols-1 md:grid-cols-2">
          {programs.map((program, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-deepBlue mb-8 drop-shadow-md">
                {program.title}
              </h2>
              <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
                {program.variants.map((variant, i) => (
                  <ProgramCard
                    key={i}
                    name={variant.name}
                    duration={variant.duration}
                    details={variant.details}
                  />
                ))}
              </div>
              {/* Book Free Trial Button */}
              <div className="mt-6 text-center">
                <a
                  href="/join"
                  className="bg-deepBlue text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-lightBlue transition duration-300"
                >
                  Book a Free Trial
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
