import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AgriNavbar from './AgriNavbar';
import AgriHeroSection from './AgriHeroPage';
import AgriIntroSection from './AgriIntroPage';
import AgriStatsSection from './AgriStatsPage';
import AgriOfferSection from './AgriOfferPage';
import AgriTestimonialsSection from './AgriTestimonialsPage';
import AgriFAQSection from './AgriFaQPage';
import AgriGetInTouchSection from './AgriGetInTouchPage';
import AgriContactSection from './AgriContactPage';
import Mainstyles from './ProjectSpaceProject.module.css';

const MainPage = () => {
  const getInTouchRef = useRef(null);
  const location = useLocation();

  // Scroll manually when coming from "/#contact"
  useEffect(() => {
    if (location.hash === '#contact' && getInTouchRef.current) {
      const offset = getInTouchRef.current.offsetTop;
      setTimeout(() => {
        window.scrollTo({
          top: offset - 120, // adjust to your navbar height
          behavior: 'smooth',
        });
      }, 100); // delay to ensure DOM is rendered
    }
  }, [location]);

  const scrollToGetInTouch = () => {
    const offset = getInTouchRef.current.offsetTop;
    window.scrollTo({
      top: offset - 180,
      behavior: 'smooth',
    });
  };

  return (
    <div className={Mainstyles.MainContainer}>
      <AgriNavbar />
      <AgriHeroSection />
      <AgriIntroSection />
      <AgriStatsSection />
      <AgriOfferSection />
      <AgriTestimonialsSection />
      <AgriFAQSection scrollToGetInTouch={scrollToGetInTouch} />
      <div ref={getInTouchRef}>
        <AgriGetInTouchSection />
      </div>
      <AgriContactSection />
    </div>
  );
};

export default MainPage;
