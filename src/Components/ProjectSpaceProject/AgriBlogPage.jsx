import React from 'react';
import styles8 from './ProjectSpaceProject.module.css';
import { FaUserCircle } from 'react-icons/fa';

import img1 from '../../assets/AboutIntroImage1.jpg';
import img2 from '../../assets/AboutIntroImage2.jpg';
import img3 from '../../assets/AboutIntroImage3.png';

const AgriBlogSection = () => {
  return (
    <div className={styles8.blog_section}>
      <div className={styles8.blog_header}>
        <div className={styles8.blog_title_area}>
          <p className={styles8.blog_label}>FROM THE BLOG POST</p>
          <h1 className={styles8.blog_heading}>
            Latest Farming Tips & Insights <br />
            Directly from Our Experts
          </h1>
        </div>
        <div className={styles8.blog_text}>
          <p>
            Stay updated with the latest advancements in sustainable agriculture, crop management techniques, and innovations to boost your farm’s productivity.
          </p>
        </div>
      </div>

      <div className={styles8.blog_cards}>
        {/* Card 1 */}
        <div className={styles8.blog_card}>
          <div className={styles8.image_wrap}>
            <img src={img1} alt="Crop Field" />
            <div className={styles8.date_circle}>
              <span>15</span>
              <span>May</span>
            </div>
          </div>
          <div className={styles8.card_content}>
            <p className={styles8.author}>
              <FaUserCircle /> Dr. Priya Singh
            </p>
            <h3 className={styles8.blog_title}>5 Essential Tips for Healthy Crop Growth</h3>
            <button className={styles8.read_btn}>Read more</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles8.blog_card}>
          <div className={styles8.image_wrap}>
            <img src={img2} alt="Organic Farming" />
            <div className={styles8.date_circle}>
              <span>28</span>
              <span>Apr</span>
            </div>
          </div>
          <div className={styles8.card_content}>
            <p className={styles8.author}>
              <FaUserCircle /> Rahul Mehta
            </p>
            <h3 className={styles8.blog_title}>How Organic Farming Can Boost Soil Health</h3>
            <button className={styles8.read_btn}>Read more</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles8.blog_card}>
          <div className={styles8.image_wrap}>
            <img src={img3} alt="Irrigation System" />
            <div className={styles8.date_circle}>
              <span>12</span>
              <span>Jun</span>
            </div>
          </div>
          <div className={styles8.card_content}>
            <p className={styles8.author}>
              <FaUserCircle /> Anjali Patel
            </p>
            <h3 className={styles8.blog_title}>Efficient Irrigation Methods for Water Conservation</h3>
            <button className={styles8.read_btn}>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriBlogSection;
