
import CoursesPage from "./components/CoursesPage";
import FAQPage from "./components/FAQPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeHeroSection from "./components/HomeHeroSection";
// import InteractiveImageSection from "./components/InteractiveImageSection";
// import MotivationPage from "./components/Services";
import TestimonialsPage from "./components/Testimonial";

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

export default function Home() {
  return (
   <main>
    <Header/>
    <HomeHeroSection/>
    {/* <InteractiveImageSection/> */}
    {/* <MotivationPage/> */}
    <CoursesPage/>
    <TestimonialsPage title="What Our Students Say" testimonials={testimonialsData} />
    <FAQPage title="Frequently Asked Questions" faqItems={faqData} />
    <Footer/>
   </main>
  );
}
