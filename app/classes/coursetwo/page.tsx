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
    highlightText: "Only 2000!"
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
export default function Page() {
  return (
<main>
    <Header/>
        <CourseHeroSection
      headline="Speak English with Confidence from Home!"
      subheadline="Affordable and flexible English classes, designed for busy homemakers."
      ctaLink="/join"
      ctaHoveredText="Start Today for Only 2000!"
      ctaNormalText="Try Your First Class – Only 2000!"
      learnMoreLink="/about"
    />
    <WhatWeOfferPage 
      title="Why This Course is Perfect for Homemakers"
      infoText="Our English course is tailored for homemakers, offering a flexible, affordable, and community-driven approach to language learning. Empower yourself and gain confidence in your English skills at your convenience."
      offerings={offerings}
      ctaText="Join Now for Only 2000!"
      ctaLink="/join"
    />
     <KeyCourseBenefitsPage 
      benefits={homemakerBenefits}
      buttonText="Join Homemaker Program"
      buttonLink="/join"
    />
    
    <TestimonialsPage title="What Our Students Say" testimonials={testimonialsData} />
    <FAQPage title="Frequently Asked Questions" faqItems={faqData} />
    <Footer/>
    </main>
  );
}
