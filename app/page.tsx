
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
