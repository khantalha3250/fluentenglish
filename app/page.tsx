
import Footer from "./components/footer";
import Header from "./components/header";
import HomeHeroSection from "./components/homeHero";
import MotivationPage from "./components/services";
import TestimonialsPage from "./components/testimonial";

export default function Home() {
  return (
   <main>
    <Header/>
    <HomeHeroSection/>
    <MotivationPage/>
    <TestimonialsPage/>
    <Footer/>
   </main>
  );
}
