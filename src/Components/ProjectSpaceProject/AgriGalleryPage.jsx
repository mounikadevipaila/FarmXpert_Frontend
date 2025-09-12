import React, { useState } from 'react';
import styles from './ProjectSpaceProject.module.css';

const AgriGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'crops', label: 'Crops' },
    { id: 'soil', label: 'Soil Analysis' },
    { id: 'tech', label: 'Technology' },
    { id: 'disease', label: 'Disease Prediction' },
    { id: 'harvest', label: 'Harvest' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Crop Suggestion',
      desc: 'Get personalized crop recommendations based on NPK values',
      category: 'crops',
      image: 'https://img.freepik.com/free-photo/farmer-standing-rice-field-with-tablet_1150-6062.jpg?uid=R143131336&ga=GA1.1.2128661408.1723047353&semt=ais_hybrid&w=740' // Crops
    },
    {
      id: 2,
      title: 'Soil Analysis',
      desc: 'Advanced soil testing for optimal nutrient management',
      category: 'soil',
      image: 'https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041865.jpg?uid=R143131336&ga=GA1.1.2128661408.1723047353&semt=ais_hybrid&w=740' // Soil test
    },
    {
      id: 3,
      title: 'Weather Insights',
      desc: 'Real-time climate data for better farming decisions',
      category: 'tech',
      image: 'https://img.freepik.com/free-vector/realistic-weather-widget_1284-4092.jpg?uid=R143131336&ga=GA1.1.2128661408.1723047353&semt=ais_hybrid&w=740' // Weather tech
    },
    {
      id: 4,
      title: 'Disease Detection',
      desc: 'AI-powered plant disease prediction system',
      category: 'disease',
      image: 'https://img.freepik.com/free-photo/biologist-forest_53876-20689.jpg?uid=R143131336&ga=GA1.1.2128661408.1723047353&semt=ais_hybrid&w=740' // Plant closeup
    },
    {
      id: 5,
      title: 'Crop Rotation Planning',
      desc: 'Optimize field usage with smart rotation schedules',
      category: 'crops',
      image: 'https://img.freepik.com/free-photo/farmers-hold-notebook-check-modern-tobacco-fields_1150-5864.jpg?uid=R143131336&ga=GA1.1.2128661408.1723047353&semt=ais_hybrid&w=740' // Field rotation
    },
    {
      id: 6,
      title: 'Hybrid Seed Selection',
      desc: 'Choose the best seeds for your region and soil',
      category: 'crops',
      image: 'https://img.freepik.com/free-photo/male-farmer-holding-grains-his-hands_23-2149211737.jpg?uid=R143131336&ga=GA1.1.2128661408.1723047353&semt=ais_hybrid&w=740' // Seed variety
    },
    {
      id: 7,
      title: 'Soil Moisture Monitoring',
      desc: 'Real-time soil hydration tracking',
      category: 'soil',
      image: 'https://img.freepik.com/free-photo/smart-farming-with-agriculture-iot_53876-124634.jpg?uid=R143131336&ga=GA1.1.2128661408.1723047353&semt=ais_hybrid&w=740' // Moisture sensors
    },
    {
      id: 8,
      title: 'Nutrient Deficiency Detection',
      desc: 'Identify and correct soil nutrient imbalances',
      category: 'soil',
      image: 'https://img.freepik.com/free-photo/close-up-botanist-injecting-nutritional-fertilizer-while-working-plant-nursery_637285-1702.jpg?uid=R143131336&ga=GA1.1.2128661408.1723047353&semt=ais_hybrid&w=740' // Soil nutrients
    },
    {
      id: 9,
      title: 'Precision Farming Tools',
      desc: 'GPS-guided equipment for efficient field management',
      category: 'tech',
      image: 'https://img.freepik.com/free-photo/drone-spraying-fertilizer-vegetable-green-plants-agriculture-technology-farm-automation_35913-2569.jpg?uid=R143131336&ga=GA1.1.2128661408.1723047353&semt=ais_hybrid&w=740' // Drone / tractor
    },
    {
      id: 10,
      title: 'Automated Irrigation',
      desc: 'Water conservation through smart irrigation systems',
      category: 'tech',
      image: 'https://img.freepik.com/free-photo/robot-spraying-fertilizer-vegetable-garden_35913-3099.jpg?uid=R143131336&ga=GA1.1.2128661408.1723047353&semt=ais_hybrid&w=740' // Irrigation
    },
    {
      id: 11,
      title: 'Pest Threat Assessment',
      desc: 'Early pest detection and mitigation strategies',
      category: 'disease',
      image: 'https://img.freepik.com/free-photo/asphodel-long-horned-beetle-agapanthia-asphodeli-resting-leaf_181624-981.jpg?uid=R143131336&ga=GA1.1.2128661408.1723047353&semt=ais_hybrid&w=740' // Pest
    },
    {
      id: 12,
      title: 'Harvest Timing Analysis',
      desc: 'Determine the optimal time to harvest',
      category: 'harvest',
      image: 'https://img.freepik.com/free-photo/futuristic-technology-concept_23-2151908083.jpg?uid=R143131336&ga=GA1.1.2128661408.1723047353&semt=ais_hybrid&w=740' // Harvest
    }
  ];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className={styles.agriv_gallery_container}>
      <div className={styles.agriv_gallery_header}>
        <h1>Agriculture Insights Gallery</h1>
        <p>
          Explore our comprehensive agricultural solutions through visual
          storytelling
        </p>
      </div>

      <div className={styles.agriv_gallery_filters}>
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`${styles.agriv_gallery_filter} ${
              activeFilter === filter.id
                ? styles.agriv_gallery_filter_active
                : ''
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className={styles.agriv_gallery_grid}>
        {filteredItems.map((item) => (
          <div key={item.id} className={styles.agriv_gallery_card}>
            <div className={styles.agriv_gallery_image_container}>
              <div
                className={styles.agriv_gallery_image}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div className={styles.agriv_gallery_category}>
                {item.category}
              </div>
              <div className={styles.agriv_gallery_content}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <div className={styles.agriv_gallery_overlay}></div>
            </div>
          </div>
        ))}
      </div>

    

      <div className={styles.agriv_gallery_decor}>
        <div className={styles.decor_leaf_1}></div>
        <div className={styles.decor_leaf_2}></div>
        <div className={styles.circle_1}></div>
        <div className={styles.circle_2}></div>
      </div>
    </div>
  );
};

export default AgriGallery;