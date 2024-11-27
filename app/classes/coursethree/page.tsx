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
      name: "Saqueeb khan",
      feedback: "Affordable and effective! I loved the flexible time slots that fit perfectly into my busy schedule. Plus, the expert trainers were incredibly supportive and knowledgeable.",
      location: "NEOSOFT",
    },
    {
      name: "Vivek Rai",
      feedback: "The personal tutor really made a difference in my learning. I never thought I could improve my spoken English this quickly. The 1-on-1 sessions were worth every penny!”",
      location: "UNACADEMY",
    },
    {
      name: "Kajol Mehra",
      feedback: "I was hesitant at first, but the installment facility made it easy to join. The guaranteed certification has already helped me land a better job. Highly recommended!",
      location: "TATA CONSULTANCY SERVICES",
    },
    {
      name: "Reeta Roy",
      feedback: "Having a personal tutor was a game-changer for me. The individualized attention helped me overcome my fear of speaking English. I’m much more confident now",
      location: "BYJUS",
    },
    {
      name: "Ramchandra Swami",
      feedback: "The expert trainers really know their stuff! I appreciated the guaranteed certification, which added value to my resume. The different time slots made scheduling easy.",
      location: "HDFC BANK",
    },
  ];
  const faqData = [
    {
      question: 'What is Fluent English Live?',
      answer: 'Fluent English is an online platform designed to help you master your speaking skills through live classes and practical exercises.'
    },
    {
      question: 'Can I get discount? Is fees negotiable?',
      answer: 'Yes, we provide discounts based on offers and seasons.'
    },
    {
      question: 'How to book  free trial Sessions?',
      answer: 'You can take a free trial class by filling out the form on our website.'
    },
    {
      question: 'Does Fluentt English provide flexible time slots?',
      answer: "Yes, we provide flexible time slots according to the customer's convenience."
    },
    {
      question: 'What are the fees ?',
      answer: 'Please contact us for fee details.'
    },
    {
      question: 'Can I choose a tutor of my choice OR change a tutor at any point? ',
      answer: 'Yes, you can choose a tutor of your choice or change a tutor at any point.'
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
  ctaHoveredText="Book Your Trial Class Now"
      ctaNormalText="Try Your First Class – For Free!"
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
