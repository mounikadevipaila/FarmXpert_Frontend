import React from 'react';
import AboutStyles2 from './ProjectSpaceProject.module.css';
import { LuFlaskConical, LuSun } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

import veggiesImg from '../../assets/AboutWhyImage1.jpg';
import farmerImg from '../../assets/AboutWhyImage2.png';

const AboutWhySection = () => {
  const navigate = useNavigate();

  return (
    <div className={AboutStyles2.agriv_why1_heroContainer}>
      {/* Left Content */}
      <div className={AboutStyles2.agriv_why1_leftContent}>
        <p className={AboutStyles2.agriv_why1_intro}>Empowering Agriculture</p>

        <h1 className={AboutStyles2.agriv_why1_heading}>
          Smarter Farming With <br />Data-Driven Insights
        </h1>

        <p className={AboutStyles2.agriv_why1_description}>
          Our platform helps farmers make intelligent decisions using crop recommendation based on NPK values,
          real-time weather data, disease prediction, and access to essential fertilizers — all in one place.
        </p>

        <div className={AboutStyles2.agriv_why1_featureRow}>
          <div className={AboutStyles2.agriv_why1_featureCard}>
            <div className={AboutStyles2.agriv_why1_featureIcon}>
              <LuFlaskConical />
            </div>
            <p>Recommend Best Crops Using NPK</p>
          </div>
          <div className={AboutStyles2.agriv_why1_featureCard}>
            <div className={AboutStyles2.agriv_why1_featureIcon}>
              <LuSun />
            </div>
            <p>Accurate Weather & Climate Insights</p>
          </div>
        </div>

        <button
          className={AboutStyles2.agriv_why1_ctaButton}
          onClick={() => navigate('/services')}
        >
          Discover More 
          <span className={AboutStyles2.agriv_why1_arrowCircle}>&rarr;</span>
        </button>
      </div>

      {/* Right Content */}
      <div className={AboutStyles2.agriv_why1_rightContent}>
        <div className={AboutStyles2.agriv_why1_imageContainer}>
          <img 
            src={veggiesImg} 
            alt="Healthy crops" 
            className={AboutStyles2.agriv_why1_mainImage} 
          />
          <img 
            src={farmerImg} 
            alt="Empowered farmer" 
            className={AboutStyles2.agriv_why1_smallImage} 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutWhySection;
