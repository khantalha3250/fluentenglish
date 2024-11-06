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
    description: "World-class English training at a price that suits everyone. Our courses start at only",
    highlightText: "2000!"
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
const Page = () => {
  return (
    <main>
        <Header/>
        <CourseHeroSection
      headline="Level Up Your English – Without Breaking the Bank"
      subheadline="Professional English fluency starts at just 2000! Perfect for busy professionals looking to advance in their careers."
      ctaLink="/join"
      ctaHoveredText="Start Today for Only 2000!"
      ctaNormalText="Try Your First Class – Only 2000!"
      learnMoreLink="/about"
    />
     <WhatWeOfferPage 
      title="What We Offer"
      infoText="Explore the unique offerings that make our language courses stand out."
      offerings={offerings}
      ctaText="Start Learning for Only 2000!"
      ctaLink="/join"
    />
    <KeyCourseBenefitsPage 
      benefits={keyCourseBenefits}
      buttonText="View All Plans"
      buttonLink="/pricing"
    />
    <TestimonialsPage title="What Our Students Say" testimonials={testimonialsData} />
    <FAQPage title="Frequently Asked Questions" faqItems={faqData} />
    <Footer/>
    </main>
  )
}

export default Page