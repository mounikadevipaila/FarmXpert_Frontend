import React from 'react';
import AgriNavbar from './AgriNavbar';
import AboutIntroSection from './AgriAboutIntroPage';
import AboutWhySection from './AgriAboutWhyPage';
// import AgriOfferSection from './AgriOfferPage';
// import AgriTestimonialsSection from './AgriTestimonialsPage';
import AgriContactSection from './AgriContactPage';
const AgriAboutMainPage = () => {
  return (
    <div>
      <AgriNavbar />
      <AboutIntroSection/>
      <AboutWhySection/>
      {/* <AgriOfferSection/>
      <AgriTestimonialsSection/> */}
      <AgriContactSection/>
    </div>
  );
};

export default AgriAboutMainPage;
