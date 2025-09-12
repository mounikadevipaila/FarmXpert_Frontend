import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import for routing
import styles2 from './ProjectSpaceProject.module.css';

import { FaPhoneAlt, FaSeedling, FaChalkboardTeacher } from 'react-icons/fa';

import tractor1 from '../../assets/IntroTractor1.jpg';
import tractor2 from '../../assets/IntroTractor2.jpg';
import farmer from '../../assets/IntroFarmer.png';
import organicLabel from '../../assets/IntroBadge.png';
import leafIcon from '../../assets/IntroLeaf.svg';

export default function AgriHeroSection() {
  const navigate = useNavigate(); // ✅ Navigation hook

  return (
    <div className={styles2.agriv_intro_heroContainer}>
      <div className={styles2.agriv_intro_leftContent}>
        <div className={styles2.agriv_intro_imageBlock}>
          <img src={tractor1} className={styles2.agriv_intro_mainImage} alt="field" />
          <img src={organicLabel} className={styles2.agriv_intro_organicBadge} alt="100% Organic" />
          <img src={tractor2} className={styles2.agriv_intro_overlayImage} alt="tractor" />
          <img src={farmer} className={styles2.agriv_intro_farmerImage} alt="farmer" />
        </div>
      </div>

      <div className={styles2.agriv_intro_rightContent}>
        <div className={styles2.agriv_intro_experience}>
          Empowering Farmers for a Greener Future
        </div>

        <div className={styles2.agriv_intro_heading}>
          Cultivating Innovation<br />
          For <span>a Better <u>Tomorrow!</u></span>
        </div>

        <div className={styles2.agriv_intro_description}>
          We support sustainable agriculture that nurtures the earth and empowers local communities. Our platform promotes modern techniques and resources to help farmers thrive in a dynamic environment.
        </div>

        <div className={styles2.agriv_intro_features}>
          <div className={styles2.agriv_intro_feature}>
            <FaSeedling className={styles2.agriv_intro_featureIcon} />
            <strong>
              Organic Crop Cultivation <span className={styles2.agri_intro_breakLine}>& Growth</span>
            </strong>
          </div>

          <div className={styles2.agriv_intro_feature}>
            <FaChalkboardTeacher className={styles2.agriv_intro_featureIcon} />
            <strong>
              Farmer Training <span className={styles2.agri_intro_breakLine}>& Agri-Education</span>
            </strong>
          </div>
        </div>

        <div className={styles2.agriv_intro_bulletPoints}>
          <div className={styles2.agriv_intro_bulletPoint}>
            <img src={leafIcon} className={styles2.agriv_intro_leafIconSmall} alt="leaf" />
            Empowering Agriculture Through Innovation
          </div>
          <div className={styles2.agriv_intro_bulletPoint}>
            <img src={leafIcon} className={styles2.agriv_intro_leafIconSmall} alt="leaf" />
            Promoting Sustainability in Rural Communities
          </div>
          <div className={styles2.agriv_intro_bulletPoint}>
            <img src={leafIcon} className={styles2.agriv_intro_leafIconSmall} alt="leaf" />
            Bridging Traditional Wisdom and Technology
          </div>
        </div>

        <div className={styles2.agriv_intro_ctaSection}>
          <div
            className={styles2.agriv_intro_ctaButton}
            onClick={() => navigate('/about')} // ✅ Navigate on click
          >
            Explore Our Mission
          </div>

          <div className={styles2.agriv_intro_callSection}>
            <div className={styles2.agriv_intro_phoneIcon}><FaPhoneAlt /></div>
            <div>
              <div className={styles2.agriv_intro_phoneNumber}>(704) 555–0127</div>
              <div className={styles2.agriv_intro_callText}>Talk With Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
