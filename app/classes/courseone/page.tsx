import React from 'react'
import CourseHeroSection from '@/app/components/CourseHeroSection'
import WhatWeOfferPage from '@/app/components/WhatWeOfferPage'
import Footer from '@/app/components/Footer'
import KeyCourseBenefitsPage from '@/app/components/KeyCourseBenefitsPage'
import Header from '@/app/components/Header'
import { FaDollarSign, FaClock, FaBriefcase, FaChalkboardTeacher, FaComments, FaWallet } from 'react-icons/fa';
import TestimonialsPage from '@/app/components/Testimonial'
import FAQPage from '@/app/components/FAQPage'
const offerings = [
  {
    icon: FaDollarSign,
    title: "Affordable Excellence",
    description: "World-class English fluency preparation with personnel tutor at affordable price with easy payment plan",
    highlightText: ""
  },
  {
    icon: FaClock,
    title: "Designed for Busy Lives",
    description: "Flexible scheduling that works for professionals juggling multiple commitments. Learn at your own pace and convenience."
  },
  {
    icon: FaBriefcase,
    title: "Career-Centric Skills",
    description: "Focused on enhancing business communication, presentations, and professional conversations to help you succeed in your career."
  },
];
const keyCourseBenefits = [
  {
    icon: FaChalkboardTeacher,
    title: "Live, Interactive Classes",
    description: "Not prerecorded – get real-time feedback and practice with expert tutors, allowing for instant improvements and a dynamic learning experience.",
  },
  {
    icon: FaComments,
    title: "Practical, Relevant Content",
    description: "Engage in role-playing scenarios such as client meetings, interviews, and negotiations. Develop communication skills that apply directly to your personal and professional life.",
  },
  {
    icon: FaWallet,
    title: "Flexible Payment Plans",
    description: "Pay in easy installments and focus on learning without the financial stress. Choose a plan that fits your needs and lets you prioritize skill-building.",
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
const Page = () => {
  return (
    <main>
        <Header/>
        <CourseHeroSection
      headline="Level Up Your English – Without Breaking the Bank"
      subheadline="Achieve professional English fluency quickly—Ideal for busy professionals aiming to excel in their careers."
      ctaLink="/join"
      ctaHoveredText="Book Your Trial Class Now"
      ctaNormalText="Try Your First Class – For Free!"
      learnMoreLink="/about"
    />
     <WhatWeOfferPage 
      title="Why this course is perfect for Working professionals ,Business owner, self employed."
      infoText="Explore the unique offerings that make our language courses stand out."
      offerings={offerings}
      ctaText="Book Your Trial Class Now!"
      ctaLink="/join"
    />
    <KeyCourseBenefitsPage 
      benefits={keyCourseBenefits}
      buttonText="Join Now"
      buttonLink="/join"
    />
    <TestimonialsPage title="What Our Students Say" testimonials={testimonialsData} />
    <FAQPage title="Frequently Asked Questions" faqItems={faqData} />
    <Footer/>
    </main>
  )
}

export default Page