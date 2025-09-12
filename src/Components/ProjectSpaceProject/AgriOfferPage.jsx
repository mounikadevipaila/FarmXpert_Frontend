import React, { useState, useEffect } from 'react';
import styles from './ProjectSpaceProject.module.css';
import { FaSeedling, FaCloudSun, FaBug, FaFlask, FaTimes } from 'react-icons/fa';

import wheatIcon from '../../assets/statsImage.png';
import leafside from '../../assets/offerFlower.png';

const cards = [
  {
    title: 'Crop Recommendation',
    description: 'AI-powered crop suggestions based on NPK values and soil health analysis.',
    details: 'Our AI analyzes 15+ soil parameters and historical yield data to recommend the most profitable crops for your specific field conditions. Includes crop rotation suggestions and market demand forecasts.',
    icon: <FaSeedling />,
    color: '#fbbc42',
    features: [
      'Soil nutrient analysis with AI',
      'Seasonal crop rotation planner',
      'Market demand forecasting'
    ]
  },
  {
    title: 'Weather & Climate',
    description: 'Real-time weather updates for better irrigation and harvesting decisions.',
    details: 'Hyperlocal weather forecasting with 95% accuracy. Get frost alerts, rainfall predictions, and microclimate analysis tailored to your farm. Plan irrigation schedules and harvest windows with confidence.',
    icon: <FaCloudSun />,
    color: '#fbbc42',
    features: [
      'Hyperlocal weather forecasts',
      'Frost & drought early warnings',
      'Irrigation scheduling assistant'
    ]
  },
  {
    title: 'Disease Prediction',
    description: 'Detect crop diseases early using AI and take preventive actions instantly.',
    details: 'Upload field photos to identify 50+ common crop diseases. Our AI provides treatment plans with organic and chemical options. Get early warnings for disease outbreaks in your region.',
    icon: <FaBug />,
    color: '#fbbc42',
    features: [
      'AI-powered disease identification',
      'Organic treatment solutions',
      'Regional outbreak alerts'
    ]
  },
  {
    title: 'Fertilizer Store',
    description: 'Find the best organic and chemical fertilizers curated for your crops.',
    details: 'Personalized fertilizer recommendations based on soil test results. Access our verified marketplace with 200+ products. Get special farmer discounts and bulk pricing with direct delivery to your farm.',
    icon: <FaFlask />,
    color: '#fbbc42',
    features: [
      'Personalized nutrient plans',
      'Verified organic products',
      'Direct farm delivery service'
    ]
  },
];

const AgriOfferSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLearnMore = (index) => {
    setActiveCard(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  return (
    <div className={styles.agriv_offer_sectionWrapper}>
      <div className={styles.agriv_offer_ecoContainer}>
        <div className={styles.agriv_offer_ecoHeader}>
          <div className={styles.agriv_offer_titleWithIcon}>
            <div className={styles.agriv_offer_mainTitle}>🌾 Smart Farming Features</div>
          </div>
          <div className={styles.agriv_offer_subTitle}>
            Empowering farmers with AI-driven tools for better yield, prediction, and management.
          </div>
        </div>

        <div className={styles.agriv_offer_ecoCards}>
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`${styles.agriv_offer_ecoCard} ${activeCard === index ? styles.cardExpanded : ''}`}
            >
              <div className={styles.agriv_offer_ecoTopRow}>
                <div
                  className={styles.agriv_offer_ecoIconCircle}
                  style={{ border: `0.25vw solid ${card.color}` }}
                >
                  <div className={styles.agriv_offer_ecoIconInner}>{card.icon}</div>
                </div>
                <img src={leafside} alt="decor" className={styles.agriv_offer_ecoSideImage} />
              </div>

              <div className={styles.agriv_offer_ecoCardTitle}>{card.title}</div>
              <div className={styles.agriv_offer_ecoCardDesc}>{card.description}</div>

              <button 
                className={styles.agriv_offer_ecoCardBtn}
                onClick={() => handleLearnMore(index)}
              >
                Learn More
              </button>

              <img src={wheatIcon} alt="decorative" className={styles.agriv_offer_ecoDecorative} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div 
            className={styles.modalContent} 
            onClick={e => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              <FaTimes />
            </button>
            
            <div className={styles.modalHeader}>
              <div 
                className={styles.modalIcon}
                style={{ backgroundColor: cards[activeCard]?.color }}
              >
                {cards[activeCard]?.icon}
              </div>
              <h3 className={styles.modalTitle}>{cards[activeCard]?.title}</h3>
              <div className={styles.modalLeafDecor}></div>
            </div>
            
            <div className={styles.modalBody}>
              <p className={styles.modalDescription}>{cards[activeCard]?.details}</p>
              
              <div className={styles.featureList}>
  {cards[activeCard]?.features?.map((feature, idx) => (
    <div key={idx} className={styles.featureItem}>
      <span className={styles.featureBullet}>✓</span>
      <span>{feature}</span>
    </div>
  ))}
</div>
            </div>
            
  
          </div>
        </div>
      )}
    </div>
  );
};

export default AgriOfferSection;