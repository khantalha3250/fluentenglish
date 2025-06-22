"use client";
import { FaCrown, FaCheck, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const PremiumCourses = () => {
  const premiumPrograms = [
    {
      title: "🚀 PROTRACTED TANDEM PROGRAM",
      subtitle: "(Tandem Group: 5–7 Participants)",
      duration: "6 to 8 Months",
      actualFee: "₹4000/-",
      discountedFee: "₹2200/-",
      enrollLink: "https://payments.cashfree.com/forms/enrllform4",
      details: [
        "90 Interactive Group Sessions",
        "150+ Hours of Classes & Guided Student Practice",
        "Focus: Public Speaking, Confidence, and High-Level Communication",
        "Includes Practice with a Foreign Speaking Partner",
        "Guaranteed CEFR Level 2 Improvement",
      ],
      description:
        "Perfect for learners aiming for deep, lasting fluency and confidence in real-world communication. Join a small group, grow with personal guidance, and speak like a pro.",
    },
    {
      title: "🌍 EXTENDED TANDEM PROGRAM",
      subtitle: "(Tandem Group: 5–7 Participants)",
      duration: "3–4 Months",
      actualFee: "₹2500/-",
      discountedFee: "₹1200/-",
      enrollLink: "https://payments.cashfree.com/forms/Enrollform3",
      details: [
        "Goal: Guaranteed improvement in CEFR Level I",
        "Focus: Public Speaking, Confidence, and Real-World Communication",
        "75+ Hours of Student Practice",
        "45 Interactive Group Sessions",
        "Personalized Support in a Collaborative Setting",
        "Real-Time Feedback & Performance Tracking",
      ],
      description:
        "Collaborative group program with personalized feedback and structured growth in public speaking and confidence.",
    },
    {
      title: "🌟 EXTENDED PROGRAM",
      subtitle: "For Focused Language Progress",
      duration: "3 to 4 Months",
      actualFee: "₹14000/-",
      discountedFee: "₹10000/-",
      enrollLink: "https://payments.cashfree.com/forms/enrollform1",
      details: [
        "Dedicated, Certified Personal Trainer",
        "50 One-on-One Personal Classes",
        "Speaking Partner Practice Hours Included",
        "Guaranteed CEFR Level I Improvement",
        "75+ Hours of Student Practice",
      ],
      description:
        "For learners seeking structured progress with one-on-one coaching and real-life speaking practice.",
    },
    {
      title: "🚀 PROTRACTED PROGRAM",
      subtitle: "For Advanced Language Mastery",
      duration: "6 to 8 Months",
      actualFee: "₹25000/-",
      discountedFee: "₹18000/-",
      enrollLink: "https://payments.cashfree.com/forms/Enrollform2",
      details: [
        "Dedicated personal tutor",
        "100 One-on-One Personalized Classes",
        "150+ Hours of Classes & Guided Student Practice",
        "Focus: Public Speaking, Confidence, and High-Level Communication",
        "Includes Practice with a Foreign Speaking Partner",
        "Guaranteed CEFR Level 2 Improvement",
      ],
      description:
        "A long-term immersive course with mentorship and deep learning for fluency and confidence.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-softSkyBlue to-lightGray">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-deepBlue to-lightBlue text-white py-16 md:py-20 text-center">
        <div className="absolute top-6 left-4">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-white hover:text-brightYellow transition"
          >
            <FaArrowLeft className="mr-1" /> Back to Programs
          </Link>
        </div>

        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-golden to-yellow-400 text-deepBlue p-3 md:p-4 rounded-full shadow-lg">
            <FaCrown className="text-2xl md:text-3xl" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-md px-4">
          Premium Language Programs
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto px-4 text-black">
          Exclusive immersive experiences with guaranteed results and personal coaching
        </p>
      </header>

      {/* Cards */}
      <main className="max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {premiumPrograms.map((program, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl border border-golden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-5 md:p-6">
                <div className="flex items-start mb-2">
                  <h2 className="text-deepBlue font-bold text-lg md:text-xl flex-1 truncate">
                    {program.title}
                  </h2>
                  <span className="bg-gradient-to-r from-golden to-yellow-400 text-deepBlue text-xs font-bold py-1 px-2 rounded ml-2">
                    PREMIUM
                  </span>
                </div>

                <p className="text-mediumGray text-sm mb-2">{program.subtitle}</p>

                {/* Pricing Info */}
                <div className="mb-3">
                  <p className="text-sm text-darkGray font-semibold">
                    💰 Actual Fee: <span className="line-through">{program.actualFee}</span>
                  </p>
                  <p className="text-sm text-green-600 font-semibold">
                    🔥 Now Only: {program.discountedFee}
                  </p>
                </div>

                <div className="bg-softSkyBlue rounded-lg px-3 py-2 text-deepBlue font-semibold mb-4 text-sm md:text-base">
                  🕒 Duration: {program.duration}
                </div>

                <ul className="space-y-2 mb-4">
                  {program.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-sm text-darkGray">
                      <FaCheck className="text-golden mt-1 mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-mediumGray mt-3">{program.description}</p>
              </div>

              {/* Enroll Button */}
              <div className="px-5 md:px-6 py-4">
                <a href={program.enrollLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-brightYellow text-darkGray font-bold py-2 md:py-3 rounded-lg hover:scale-[1.02] transform transition-all duration-300 shadow-lg">
                    Enroll Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PremiumCourses;
