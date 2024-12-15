import { FaDollarSign, FaClock, FaUsers, FaLanguage, FaUserFriends, FaCreditCard} from 'react-icons/fa';
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
    icon: FaDollarSign,
    title: "Affordable and Accessible",
    description: "High-quality English education designed to fit every budget, so you can start your learning journey without financial strain.",
    highlightText: "At Affordable Price!"
  },
  {
    icon: FaClock,
    title: "Learn at Your Own Pace",
    description: "Our flexible schedules are crafted for busy homemakers. Study whenever it suits you best – before the kids wake or after family dinner."
  },
  {
    icon: FaUsers,
    title: "Supportive Community",
    description: "Join a vibrant community of homemakers on the same journey, supported by compassionate instructors who understand your unique goals."
  },
];
const homemakerBenefits = [
  {
    icon: FaLanguage,
    title: "Conversational English Made Easy",
    description: "Learn practical English skills for everyday situations like shopping, helping kids with homework, and navigating daily conversations with confidence.",
  },
  {
    icon: FaUserFriends,
    title: "Friendly, Supportive Teachers",
    description: "Our trainers are patient, skilled, and dedicated to helping you master English from the basics in a supportive environment tailored to your pace.",
  },
  {
    icon: FaCreditCard,
    title: "Flexible Payments",
    description: "Choose from easy payment plans that let you focus on learning without added financial pressure, making your English journey more affordable.",
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
export default function Page() {
  return (
<main>
    <Header/>
        <CourseHeroSection
      headline="Speak English with Confidence from Home!"
      subheadline="Affordable and flexible English classes, designed for busy homemakers."
      ctaLink="/join"
      ctaHoveredText="Book Your Trial Class Now"
      ctaNormalText="Try Your First Class – For Free!"
      learnMoreLink="/about"
    />
    <WhatWeOfferPage 
      title="Why This Course is Perfect for Homemakers"
      infoText="Our English course is tailored for homemakers, offering a flexible, affordable, and community-driven approach to language learning. Empower yourself and gain confidence in your English skills at your convenience."
      offerings={offerings}
      ctaText="Book You Free Trial Class"
      ctaLink="/join"
    />
     <KeyCourseBenefitsPage 
      benefits={homemakerBenefits}
      buttonText="Enroll For Free Class Now"
      buttonLink="/join"
    />
    
    <TestimonialsPage title="What Our Students Say" testimonials={testimonialsData} />
    <FAQPage title="Frequently Asked Questions" faqItems={faqData} />
    <Footer/>
    </main>
  );
}
