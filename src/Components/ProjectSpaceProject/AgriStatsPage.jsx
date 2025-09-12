import React from 'react';
import styles from './ProjectSpaceProject.module.css';
import { GiWheat, GiCheckMark, GiFarmer } from 'react-icons/gi';
import { MdOutlineEmojiPeople } from 'react-icons/md';
import leafImage from '../../assets/statsImage.png';

const statsData = [
  { 
    id: 1, 
    icon: <GiWheat className={styles.agriv_stats_statIconInner} />, 
    number: 58, 
    label: "SUITABLE CROPS IDENTIFIED" 
  },
  { 
    id: 2, 
    icon: <GiCheckMark className={styles.agriv_stats_statIconInner} />, 
    number: 245, 
    label: "DISEASE PREDICTIONS MADE" 
  },
  { 
    id: 3, 
    icon: <MdOutlineEmojiPeople className={styles.agriv_stats_statIconInner} />, 
    number: 9800, 
    label: "FARMERS BENEFITED" 
  },
  { 
    id: 4, 
    icon: <GiFarmer className={styles.agriv_stats_statIconInner} />, 
    number: 130, 
    label: "FERTILIZER PRODUCTS AVAILABLE" 
  },
];

const AgriStatsSection = () => {
  return (
    <div className={styles.agriv_stats_statsContainer}>
      {statsData.map((item) => (
        <div className={styles.agriv_stats_statBox} key={item.id}>
          <div className={styles.agriv_stats_iconWrapper}>
            <img 
              src={leafImage} 
              alt="leaf" 
              className={styles.agriv_stats_leafIconLeft} 
            />
            <div className={styles.agriv_stats_statIcon}>{item.icon}</div>
            <img 
              src={leafImage} 
              alt="leaf" 
              className={styles.agriv_stats_leafIconRight} 
            />
          </div>
          <div className={styles.agriv_stats_statNumber}>{item.number}</div>
          <div className={styles.agriv_stats_statLabel}>{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AgriStatsSection;
