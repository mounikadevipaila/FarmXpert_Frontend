import React from 'react';
import AboutStyles1 from './ProjectSpaceProject.module.css';

import about1 from '../../assets/AboutIntroImage1.jpg';
import about2 from '../../assets/AboutIntroImage2.jpg';
import about3 from '../../assets/AboutIntroImage3.png';

const imageCards = [
  {
    src: about1,
    alt: 'Crop Management',
    text: 'Advanced Crop Management',
  },
  {
    src: about2,
    alt: 'Weather Forecasting',
    text: 'Real-Time Weather Insight',
  },
  {
    src: about3,
    alt: 'Smart Farming Tools',
    text: 'AI-Powered Smart Tools',
  },
];

const AboutIntroSection = () => {
  return (
    <div className={AboutStyles1.agriv_about1_container}>
      <div className={AboutStyles1.agriv_about1_headingWrapper}>
        <div className={AboutStyles1.agriv_about1_subheading}>About Us</div>
        <div className={AboutStyles1.agriv_about1_mainTitle}>
          Smarter Agriculture for <br /> a Sustainable Tomorrow
        </div>
        <div className={AboutStyles1.agriv_about1_description}>
          Our platform empowers farmers with advanced crop recommendations, real-time weather updates,
          disease detection tools, and access to essential fertilizers. By integrating smart technology
          with sustainable farming practices, we aim to revolutionize agriculture—making it more productive,
          predictable, and planet-friendly.
        </div>
      </div>

      <div className={AboutStyles1.agriv_about1_imagesRow}>
        {imageCards.map((item, idx) => (
          <div className={AboutStyles1.agriv_about1_imageWrapper} key={idx}>
            <img src={item.src} alt={item.alt} className={AboutStyles1.agriv_about1_imageCard} />
            <div className={AboutStyles1.agriv_about1_imageOverlay}>
              <div className={AboutStyles1.agriv_about1_imageText}>{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutIntroSection;
