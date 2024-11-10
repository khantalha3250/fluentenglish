import { FaGamepad, FaSmile, FaBook, FaChild, FaChalkboardTeacher, FaMoneyBillWave } from 'react-icons/fa';
import React from 'react'
import CourseHeroSection from '@/app/components/CourseHeroSection'
import WhatWeOfferPage from '@/app/components/WhatWeOfferPage'
import Footer from '@/app/components/Footer'
import KeyCourseBenefitsPage from '@/app/components/KeyCourseBenefitsPage'
import Header from '@/app/components/Header'
import TestimonialsPage from '@/app/components/Testimonial';
import FAQPage from '@/app/components/FAQPage';

const offerings = [
  {
    icon: FaGamepad,
    title: "Interactive Learning",
    description: "Engage with English through games, storytelling, and exciting activities. Learning is never boring with our fun-filled approach!"
  },
  {
    icon: FaSmile,
    title: "Confidence Building",
    description: "Designed to help kids speak confidently, whether in class, at home, or with friends. Activities encourage self-expression and boost self-esteem."
  },
  {
    icon: FaBook,
    title: "Designed for Today’s Kids",
    description: "Modern lessons focus on everyday vocabulary, grammar, and expressions, so kids learn the language they can use in real-life situations."
  },
];
const kidFriendlyHighlights = [
    {
      icon: FaChild,
      title: "Kid-Friendly Content",
      description: "From English basics to conversational phrases, our lessons are crafted to suit the learning styles and interests of young minds.",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Engaging, Certified Tutors",
      description: "Our certified teachers bring creativity and excitement to each class, ensuring that kids remain engaged and motivated to learn.",
    },
    {
      icon: FaMoneyBillWave,
      title: "Affordable and Flexible",
      description: "Start learning from just 2000! We offer flexible class times that seamlessly fit into school schedules, making it easy for kids to join.",
    },
  ];
  const testimonialsData = [
    {
      name: "John Doe",
      feedback: "This course really helped me improve my business English skills!",
      location: "New York, USA",
    },
    {
      name: "Jane Smith",
      feedback: "The flexibility of the classes made it easy to fit into my busy schedule.",
      location: "London, UK",
    },
    {
      name: "Ahmed Khan",
      feedback: "Amazing experience! The teachers were so helpful and knowledgeable.",
      location: "Dubai, UAE",
    },
  ];
  const faqData = [
    {
      question: 'What is Fluent English?',
      answer: 'Fluent English is an online platform designed to help you master your speaking skills through live classes and practical exercises.'
    },
    {
      question: 'How do I join a live class?',
      answer: 'You can join a live class by signing up for an account and selecting a class from our schedule. Classes are available at various times to fit your schedule.'
    },
    {
      question: 'What are the payment options?',
      answer: 'We accept all major credit cards, PayPal, and other secure payment methods. You can pay for individual classes or choose from our subscription plans.'
    },
  ];
export default function KidsCoursePage() {
  return (
    <main>
        <Header/>
        <CourseHeroSection
      headline="Fun and Engaging English Classes for Kids!"
      subheadline="Boost your child’s confidence and communication skills through interactive, affordable lessons."
      ctaLink="/join"
      ctaHoveredText="Start Today for Only 2000!"
      ctaNormalText="Try Your First Class – Only 2000!"
      learnMoreLink="/about"
    />
    <WhatWeOfferPage 
      title="Why Our Course is Perfect for Kids"
      infoText="Our English course for kids is crafted to be engaging, confidence-boosting, and relevant. Let your child learn English in a way that’s as fun as it is educational!"
      offerings={offerings}
      ctaText="Enroll Your Child Today!"
      ctaLink="/join"
    />
    <KeyCourseBenefitsPage 
      benefits={kidFriendlyHighlights}
      buttonText="Join Now"
      buttonLink="/join"
    />
    
    <TestimonialsPage title="What Our Students Say" testimonials={testimonialsData} />
    <FAQPage title="Frequently Asked Questions" faqItems={faqData} />
    <Footer/>
    </main>
  );
}
