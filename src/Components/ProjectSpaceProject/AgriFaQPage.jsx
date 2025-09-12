import React, { useState } from 'react';
import AboutStyles2 from './ProjectSpaceProject.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import faqImage from '../../assets/AboutFAQImage.jpg';

const faqs = [
  {
    question: 'How are crops recommended?',
    answer: 'We analyze your NPK values to suggest the best crops for your soil.',
  },
  {
    question: 'Can I check crop diseases?',
    answer: 'Yes, just enter crop details and we’ll predict possible diseases.',
  },
  {
    question: 'Do you sell fertilizers?',
    answer: 'Yes, explore our Fertilizer Store for all essential nutrients.',
  },
  {
    question: 'Is the system accurate?',
    answer: 'Yes, we use reliable AI models for accurate recommendations.',
  },
];

const AgriFAQSection = ({ scrollToGetInTouch }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={AboutStyles2.agriv_faq_wrapper}>
      {/* LEFT SIDE */}
      <div className={AboutStyles2.agriv_faq_left}>
        <h3 className={AboutStyles2.agriv_faq_subtitle}>
          Help & FAQs <span>🌿</span>
        </h3>
        <h1 className={AboutStyles2.agriv_faq_title}>
          Frequently Asked <span className={AboutStyles2.agriv_faq_underline}>Questions!</span>
        </h1>
        <p className={AboutStyles2.agriv_faq_description}>
          We're committed to bringing you safe, sustainable, and healthy farm products. Explore the answers to common questions below.
        </p>

        <img src={faqImage} alt="Farm Support Image" className={AboutStyles2.agriv_faq_image} />

        <div className={AboutStyles2.agriv_contact_box}>
          <button
            className={AboutStyles2.agriv_contact_button}
            onClick={scrollToGetInTouch}
          >
            Get In Touch
          </button>
          <div className={AboutStyles2.agriv_contact_info}>
            <FaPhoneAlt className={AboutStyles2.agriv_phone_icon} />
            <div>
              <strong>(704) 555–0127</strong>
              <div>Call For Enquiries</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={AboutStyles2.agriv_faq_right}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${AboutStyles2.agriv_faq_item} ${
              index === activeIndex ? AboutStyles2.agriv_active : ''
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={AboutStyles2.agriv_faq_question}>
              {faq.question}
              <span className={AboutStyles2.agriv_symbol}>
                {index === activeIndex ? '−' : '+'}
              </span>
            </div>
            {index === activeIndex && (
              <div className={AboutStyles2.agriv_faq_answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgriFAQSection;
