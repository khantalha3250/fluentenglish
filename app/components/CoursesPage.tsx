"use client";
import Link from 'next/link';
import { useState } from 'react';

const courses = [
  {
    title: "English for Professionals",
    headline: "Level Up Your English – Without Breaking the Bank",
    subheadline:
      "Professional English fluency starts at just 2000! Perfect for busy professionals looking to advance in their careers.",
    cta: "Start Today for Only 2000!",
    link: "/classes/courseone",  // Add link for each course
    benefits: [
      "Affordable Excellence",
      "Flexible Scheduling",
      "Career-Centric Skills",
      "Live, Interactive Classes",
      "Practical, Relevant Content",
      "Flexible Payment Plans",
    ],
  },
  {
    title: "English for Homemakers",
    headline: "Speak English with Confidence from Home!",
    subheadline:
      "Affordable and flexible English classes, designed for busy homemakers.",
    cta: "Join for Just 2000 – Start Today!",
    link: "/classes/coursetwo",  // Add link for each course
    benefits: [
      "Affordable and Accessible",
      "Learn at Your Own Pace",
      "Supportive Community",
      "Conversational English Made Easy",
      "Friendly, Supportive Teachers",
      "Flexible Payments",
    ],
  },
  {
    title: "English for Kids",
    headline: "Fun and Engaging English Classes for Kids!",
    subheadline:
      "Boost your child’s confidence and communication skills through interactive, affordable lessons.",
    cta: "Enroll Now for Just 2000!",
    link: "classes/coursethree",  // Add link for each course
    benefits: [
      "Interactive Learning",
      "Confidence Building",
      "Designed for Today’s Kids",
      "Kid-Friendly Content",
      "Engaging, Certified Tutors",
      "Affordable and Flexible",
    ],
  },
];

const CoursesPage: React.FC = () => {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-softSkyBlue to-lightGray py-16 px-6 sm:px-10 lg:px-24">
      {/* Page Header */}
      <h1 className="text-deepBlue text-4xl sm:text-5xl font-bold text-center mb-10 drop-shadow-md animate-fadeInUp pt-40">
        Choose the Perfect English Course
      </h1>

      {/* Course Grid */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredCourse(index)}
            onMouseLeave={() => setHoveredCourse(null)}
            className={`relative bg-white rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out ${hoveredCourse === index ? "border-4 border-brightYellow" : ""}`}
          >
            {/* Headline */}
            <h2 className="text-deepBlue text-2xl font-semibold mb-3">
              {course.headline}
            </h2>
            <p className="text-mediumGray text-sm mb-4">{course.subheadline}</p>

            {/* Benefits List */}
            <ul className="text-darkGray space-y-2 mb-4">
              {course.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-brightYellow mr-2">•</span>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link href={course.link}>
              <button
                className="w-full py-3 mt-auto bg-deepBlue text-white font-semibold rounded-lg shadow-md transition-colors hover:bg-darkNavy duration-300 ease-in-out z-10 relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {course.cta}
              </button>
            </Link>

            {/* Overlay for hover effect */}
            {hoveredCourse === index && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-lightBlue opacity-80 transition-opacity duration-300 rounded-xl z-0"></div>
            )}
          </div>
        ))}
      </div>

      {/* Footer CTA Section */}
      <div className="flex flex-col items-center mt-16">
        <p className="text-center text-darkGray text-lg sm:text-xl mb-6">
          Not sure which course is right for you? Contact us for a free consultation!
        </p>
        <Link href="/contact"><button className="bg-brightYellow text-deepBlue px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105">
          Get in Touch
        </button></Link>
      </div>
    </section>
  );
};

export default CoursesPage;
