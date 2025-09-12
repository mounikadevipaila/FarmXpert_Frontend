// AgriGetInTouchSection.jsx
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles7 from './ProjectSpaceProject.module.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const AgriGetInTouchSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pbi5m48',
        'template_z622ndt',
        form.current,
        'qeda8CzVII4TN4tlL'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message: ' + error.text);
        }
      );
  };

  return (
    <div id="contact" className={styles7.agriv_get_contact_wrapper}>

      {/* LEFT SIDE */}
      <div className={styles7.agriv_get_contact_left}>
        <p className={styles7.agriv_get_contact_subtitle}>Contact Us</p>
        <h2 className={styles7.agriv_get_contact_title}>Get in Touch Now</h2>
        <p className={styles7.agriv_get_contact_desc}>
          Promoting sustainable agriculture through organic farming practices.
          Our goal is to provide high-quality, environmentally-friendly support
          to farmers and agricultural enthusiasts.
        </p>

        <div className={styles7.agriv_get_contact_infoItem}>
          <div className={styles7.agriv_get_contact_icon}><FaPhoneAlt /></div>
          <div>
            <p className={styles7.agriv_get_contact_infoLabel}>Have Questions?</p>
            <p className={styles7.agriv_get_contact_infoText}>Free +00 (92110) 85413</p>
          </div>
        </div>

        <div className={styles7.agriv_get_contact_infoItem}>
          <div className={styles7.agriv_get_contact_icon}><FaEnvelope /></div>
          <div>
            <p className={styles7.agriv_get_contact_infoLabel}>Write Email</p>
            <p className={styles7.agriv_get_contact_infoText}>needhelp@gmail.com</p>
          </div>
        </div>

        <div className={styles7.agriv_get_contact_infoItem}>
          <div className={styles7.agriv_get_contact_icon}><FaMapMarkerAlt /></div>
          <div>
            <p className={styles7.agriv_get_contact_infoLabel}>Our Location</p>
            <p className={styles7.agriv_get_contact_infoText}>88 Broklyn Golden, USA</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className={styles7.agriv_get_contact_formCard}>
        <form ref={form} onSubmit={sendEmail} className={styles7.agriv_get_contact_form}>
          <div className={styles7.agriv_get_contact_row}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Email Address" required />
          </div>
          <div className={styles7.agriv_get_contact_row}>
            <input type="text" name="phone" placeholder="Phone Number" />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <textarea name="message" rows="4" placeholder="Write Message" required />
          <button type="submit" className={styles7.agriv_get_contact_button}>
            Send Message <span className={styles7.agriv_get_arrow}>→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgriGetInTouchSection;
