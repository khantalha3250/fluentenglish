
"use client";
import React from 'react'
import Motivation from '../components/MotivationPage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TransformYourFuture from '../components/TransformYourFuturePage'
import { useRef } from "react";
import TeamPage from '../components/Teams';
import RealWorldScenarios from '../components/RealWorldScenarios';
const Page = () => {
    const transformRef = useRef<HTMLDivElement | null>(null);

    const handleLearnMoreClick = () => {
      if (transformRef.current) {
        transformRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div>
        <Header/>
        <Motivation onLearnMoreClick={handleLearnMoreClick} />
 
        <div ref={transformRef}>
          <TransformYourFuture />
        </div>
        <TeamPage/>
        <RealWorldScenarios/>
        <Footer/>
      </div>
    );
  }
export default Page