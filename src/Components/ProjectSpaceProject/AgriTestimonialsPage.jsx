import React, { useState, useEffect, useRef } from 'react';
import styles5 from './ProjectSpaceProject.module.css';
import testimg1 from '../../assets/testimg1.jpg';
import testimg2 from '../../assets/testimg2.jpg';
import testimg3 from '../../assets/testimg3.jpg';
import testimg4 from '../../assets/testimg4.jpg';
import testleaf1 from '../../assets/testleaf1.png';
import testleaf2 from '../../assets/testleaf2.png';

const testimonials = [
  {
    text: "The NPK crop suggestion tool was a game-changer for our farm. It helped us choose the right crop for our soil condition, resulting in a better harvest.",
    author: "Anil Reddy",
    subtext: "Farmer, Guntur District",
  },
  {
    text: "We used FarmXpert's disease prediction tool during the early season. It alerted us in advance and saved our tomato crop from pest attacks.",
    author: "Lakshmi Narayana",
    subtext: "Vegetable Grower, Chittoor",
  },
  {
    text: "Finding the right fertilizers was never this easy. The Fertilizer Store feature helped us quickly locate and purchase high-quality products.",
    author: "Meena Kumari",
    subtext: "Horticulturist, Nellore",
  },
];


const AgriTestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => resetTimeout();
  }, [activeIndex]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className={styles5.agriv_testi_wrapper}
      onMouseEnter={resetTimeout}
      onMouseLeave={() =>
        (timeoutRef.current = setTimeout(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000))
      }
    >
      <div className={styles5.agriv_testi_leftImages}>
        <div className={styles5.agriv_testi_imgGroup}>
          <div className={styles5.agriv_testi_imgBox1}>
            <img src={testimg1} alt="testi1" />
          </div>
          <div className={styles5.agriv_testi_imgBox2}>
            <img src={testimg2} alt="testi2" />
          </div>
        </div>
        <img src={testleaf1} alt="leaf" className={styles5.agriv_testi_leaf1} />
      </div>

      <div className={styles5.agriv_testi_centerContent}>
        <div className={styles5.agriv_testi_label}>OUR TESTIMONIALS</div>
        <div className={styles5.agriv_testi_heading}>Hear What Our Global Clients Say</div>

        <div className={styles5.agriv_testi_slider}>
          <div
            className={styles5.agriv_testi_slide}
            key={activeIndex}
            style={{ animation: 'fade 1s ease-in-out' }}
          >
            <div className={styles5.agriv_testi_text}>{testimonials[activeIndex].text}</div>
            <div className={styles5.agriv_testi_author}>{testimonials[activeIndex].author}</div>
            <div className={styles5.agriv_testi_subtext}>{testimonials[activeIndex].subtext}</div>
          </div>
        </div>

        <div className={styles5.agriv_testi_dots}>
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`${styles5.agriv_testi_dot} ${
                index === activeIndex ? styles5.agriv_testi_active : ''
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles5.agriv_testi_rightImages}>
        <div className={styles5.agriv_testi_imgGroup}>
          <div className={styles5.agriv_testi_imgBox3}>
            <img src={testimg3} alt="testi3" />
          </div>
          <div className={styles5.agriv_testi_imgBox4}>
            <img src={testimg4} alt="testi4" />
          </div>
        </div>
        <img src={testleaf2} alt="leaf" className={styles5.agriv_testi_leaf2} />
      </div>
    </div>
  );
};

export default AgriTestimonialsSection;
