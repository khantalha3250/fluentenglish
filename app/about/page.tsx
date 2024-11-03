
"use client";
import React from 'react'
import Motivation from '../components/motivation'
import Header from '../components/header'
import Footer from '../components/footer'
import TransformYourFuture from '../components/trasformyfuture'
import { useRef } from "react";
import TeamPage from '../components/teams';
import RealWorldScenarios from '../components/scenerios';
const page = () => {
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
export default page