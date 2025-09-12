import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AgriServicesStyles from './ProjectSpaceProject.module.css';

const AgriServicesSection = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(0);

  const services = [
    // NEW SERVICE: Nearest Soil Center (as first item)
    {
      id: 1,
      title: "Nearest Soil Center",
      description:
        "Locate certified soil testing centers near you to get accurate analysis of your farmland. Our comprehensive directory helps you find professional services to test soil nutrients, pH levels, and contamination.",
      features: [
        "GPS-based soil center locator",
        "Book testing appointments online",
        "Digital soil health reports",
      ],
      path: "/soil-centers",
      color: "#2c5f2d",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
          <path d="M12 6a1 1 0 0 0-1 1c0 .6.4 1 1 1s1-.4 1-1-.4-1-1-1z"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Precision Crop Advisor",
      description:
        "Harness the power of AI-driven analytics to transform your soil data into actionable insights. Our system processes NPK values, pH levels, and micronutrient data to recommend the most profitable crops tailored to your specific land conditions.",
      features: [
        "Soil health assessment with detailed reports",
        "Crop rotation planning for sustainable farming",
        "Hybrid seed recommendations by region",
      ],
      path: "/plant",
      color: "#4a8c4a",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.14 12.94c.05-.3.07-.61.07-.94s-.02-.64-.07-.94l2.03-1.58a.5.5 0 0 0 .12-.66l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96a7.03 7.03 0 0 0-1.63-.94L14.5 2.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5l-.24 2.74a7.03 7.03 0 0 0-1.63.94l-2.39-.96a.5.5 0 0 0-.61.22L2.7 8.82a.5.5 0 0 0 .12.66l2.03 1.58c-.05.3-.07.61-.07.94s.02.64.07.94l-2.03 1.58a.5.5 0 0 0-.12.66l1.92 3.32c.14.24.43.34.68.22l2.39-.96c.5.39 1.05.71 1.63.94L9.5 21.5a.5.5 0 0 0 .5.5h4c.27 0 .49-.21.5-.48l.24-2.74c.58-.23 1.13-.55 1.63-.94l2.39.96a.5.5 0 0 0 .61-.22l1.92-3.32a.5.5 0 0 0-.12-.66l-2.03-1.58zM12 15.5A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5z" />
          <path d="M6.5 10c1.75-3 4.25-4 7.5-4-1.75 3-4.25 4-7.5 4zM6.5 14c1.75-3 4.25-4 7.5-4-1.75 3-4.25 4-7.5 4z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Climate Intelligence Hub",
      description:
        "Access hyper-local weather forecasting powered by satellite imagery and IoT sensors. Our predictive models help you optimize irrigation, prevent weather-related crop damage, and maximize growing season potential.",
      features: [
        "15-day rainfall probability forecasts",
        "Frost and heatwave early warnings",
        "Microclimate analysis for your fields",
      ],
      path: "/weather",
      color: "#97bc62",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 19a2 2 0 0 1-2-2c0-.8.5-1.5 1.2-1.8A5.98 5.98 0 0 1 6 7a6 6 0 0 1 11.8 1.2A4.5 4.5 0 0 1 21 12.5a4.5 4.5 0 0 1-4.5 4.5H6zM7 22a1 1 0 0 1-1-1c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1zm4 0a1 1 0 0 1-1-1c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1zm4 0a1 1 0 0 1-1-1c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Plant Health Guardian",
      description:
        "Our AI-powered disease detection system identifies over 200 common plant diseases and nutrient deficiencies from images. Receive instant diagnosis with organic and chemical treatment options tailored to your crops.",
      features: [
        "Image-based disease identification",
        "Prevention strategy recommendations",
        "Pesticide calculator for precise application",
      ],
      path: "/disease",
      color: "#3a7a4a",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C7 2 2 4 2 8c0 5.5 5.3 10 10 13 4.7-3 10-7.5 10-13 0-4-5-6-10-6zm0 16.6C8.2 16 4 12.3 4 8.4c0-.8.7-1.4 1.6-1.8C7 6 9.4 6 12 6s5 .1 6.4.6c.9.4 1.6 1 1.6 1.8 0 3.9-4.2 7.6-8 10.2z" />
          <path d="M12 9c-1.7 0-3 1.3-3 3h2c0-.6.4-1 1-1s1 .4 1 1c0 .3-.1.6-.3.8l-2.5 2.5 1.4 1.4 2.5-2.5c.6-.6.9-1.4.9-2.2 0-1.7-1.3-3-3-3z" />
        </svg>
      ),
    },
  ];

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <section className={AgriServicesStyles.agri_servi_container}>
      <div className={AgriServicesStyles.agri_servi_header}>
        <h2>Revolutionizing Agriculture Through Technology</h2>
        <p>Our services empower farmers with data-driven insights to boost yields, reduce risks, and cultivate a sustainable future.</p>
        <div className={AgriServicesStyles.agri_servi_header_underline}></div>
      </div>

      <div className={AgriServicesStyles.agri_servi_indicators_container}>
        <div className={AgriServicesStyles.agri_servi_line}></div>
        <div className={AgriServicesStyles.agri_servi_indicators}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${AgriServicesStyles.agri_servi_indicator} ${
                index === activeService ? AgriServicesStyles.agri_servi_indicator_active : ""
              }`}
              onClick={() => setActiveService(index)}
            >
              <div
                className={AgriServicesStyles.agri_servi_indicator_icon}
                style={{ backgroundColor: service.color }}
              >
                {service.icon}
                {index === activeService && (
                  <div className={AgriServicesStyles.agri_servi_pulse_effect}></div>
                )}
              </div>
              <div className={AgriServicesStyles.agri_servi_indicator_label}>{service.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={AgriServicesStyles.agri_servi_content}>
        <div className={AgriServicesStyles.agri_servi_service_details}>
          <div className={AgriServicesStyles.agri_servi_details_header}>
            <div
              className={AgriServicesStyles.agri_servi_service_icon}
              style={{ backgroundColor: services[activeService].color }}
            >
              {services[activeService].icon}
              <div className={AgriServicesStyles.agri_servi_icon_pulse}></div>
            </div>
            <h3>{services[activeService].title}</h3>
          </div>

          <p>{services[activeService].description}</p>

          <div className={AgriServicesStyles.agri_servi_features_container}>
            <h4>Key Features:</h4>
            <div className={AgriServicesStyles.agri_servi_features_grid}>
              {services[activeService].features.map((feature, index) => (
                <div key={index} className={AgriServicesStyles.agri_servi_feature_card}>
                  <div className={AgriServicesStyles.agri_servi_feature_icon}>
                    <div className={AgriServicesStyles.agri_servi_feature_bullet}></div>
                  </div>
                  <div className={AgriServicesStyles.agri_servi_feature_text}>{feature}</div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={AgriServicesStyles.agri_servi_explore_button}
            onClick={() => handleServiceClick(services[activeService].path)}
            style={{ backgroundColor: services[activeService].color }}
          >
            Let's Check
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
        </div>
      </div>

      <div className={AgriServicesStyles.agri_servi_footer}>
        <p>Join <strong>15,000+ farmers</strong> already transforming their operations with our technology</p>
      </div>
    </section>
  );
};

export default AgriServicesSection;