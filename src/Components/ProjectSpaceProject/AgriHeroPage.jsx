import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import styles1 from './ProjectSpaceProject.module.css';

import farmer from '../../assets/HeroFarmerImage.png';
import carrot from '../../assets/HeroCarrot.png';
import corn from '../../assets/HeroCorn.png';
import naturalBadge from '../../assets/HeroBadgeImage.png';
import bgImage from '../../assets/HeroBackground.jpg';

import farmer2 from '../../assets/HeroFarmerImage1.png';
import bgImage2 from '../../assets/HeroBackground1.jpg';

const slidesData = [
  {
    bg: bgImage,
    topLabel: 'Farming with Nature 🌾',
    mainTitle: (
      <>
        FARMING THE FUTURE,<br />
        <span className={styles1.agriv_hero_underline}>ROOTED IN TRADITION!</span>
      </>
    ),
    subText: 'Agriculture is the backbone of our society, providing food, raw materials, and economic stability.',
    images: {
      farmer: farmer,
      carrot: carrot,
      corn: corn,
      badge: naturalBadge,
    },
    buttonText: 'Discover Now',
    buttonLink: '/about', // ✅ Add this
  },
  {
    bg: bgImage2,
    topLabel: 'Sowing Seeds of Success 🌱',
    mainTitle: (
      <>
        GROWING TOGETHER,<br />
        <span className={styles1.agriv_hero_underline}>HARVESTING TOMORROW!</span>
      </>
    ),
    subText: 'Join us in cultivating sustainable farming practices and innovations.',
    images: {
      farmer: farmer2,
      carrot: carrot,
      corn: corn,
      badge: naturalBadge,
    },
    buttonText: 'Learn More',
    buttonLink: '/about', // ✅ Add this
  },
];

const AgriHeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;
  const navigate = useNavigate(); // ✅ For navigation

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles1.agriv_hero_carouselContainer}>
      <div className={styles1.agriv_hero_arrowLeft} onClick={handlePrev}>&#8249;</div>
      <div className={styles1.agriv_hero_arrowRight} onClick={handleNext}>&#8250;</div>

      <div
        className={styles1.agriv_hero_slidesWrapper}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={styles1.agriv_hero_bannerContainer}
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            <div className={styles1.agriv_hero_overlay}></div>

            <div className={styles1.agriv_hero_leftContent}>
              <div className={styles1.agriv_hero_topLabel}>{slide.topLabel}</div>
              <div className={styles1.agriv_hero_mainTitle}>{slide.mainTitle}</div>
              <div className={styles1.agriv_hero_subText}>{slide.subText}</div>
              <button
                className={styles1.agriv_hero_discoverBtn}
                onClick={() => navigate(slide.buttonLink)} // ✅ Go to /about
              >
                {slide.buttonText}
              </button>
            </div>

            <div className={styles1.agriv_hero_rightContent}>
              <img src={slide.images.farmer} className={styles1.agriv_hero_farmerImg} alt="Farmer" />
              <img src={slide.images.carrot} className={styles1.agriv_hero_carrotImg} alt="Carrot" />
              <img src={slide.images.corn} className={styles1.agriv_hero_cornImg} alt="Corn" />
              <img src={slide.images.badge} className={styles1.agriv_hero_naturalBadge} alt="Badge" />
            </div>
          </div>
        ))}
      </div>

      <div className={styles1.agriv_hero_dots}>
        {slidesData.map((_, idx) => (
          <span
            key={idx}
            className={currentSlide === idx ? styles1.agriv_hero_active : ''}
            onClick={() => setCurrentSlide(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AgriHeroBanner;
