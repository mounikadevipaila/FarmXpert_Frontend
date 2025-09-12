import React from 'react';
import styles6 from './ProjectSpaceProject.module.css';
import { FaPhoneAlt, FaEnvelope, FaHome, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';

export default function AgriContactSection() {
  return (
    <div className={styles6.agriv_footer_container}>
      <div className={styles6.agriv_footer_top}>
        <div className={styles6.agriv_footer_content}>
          {/* Logo & Newsletter */}
          <div className={styles6.agriv_footer_column}>
            <div className={styles6.agriv_footer_logo}>FarmXpert</div>
            <p className={styles6.agriv_footer_description}>
              Pioneering sustainable agriculture solutions since 2010. We combine cutting-edge technology with traditional farming wisdom to create a greener future for all.
            </p>
            <div className={styles6.agriv_footer_socialIcons}>
              <h4>Follow Us</h4>
              <div className={styles6.agriv_footer_iconContainer}>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaPinterestP /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </div>
            <div className={styles6.agriv_footer_businessHours}>
              <h4>Business Hours</h4>
              <p>Monday-Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Explore Links */}
          <div className={styles6.agriv_footer_column}>
            <h3>Explore</h3>
            <ul className={styles6.agriv_footer_linkList}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Meet Our Team</a></li>
              <li><a href="#">News & Media</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className={styles6.agriv_footer_column}>
            <h3>Latest News</h3>
            <div className={styles6.agriv_footer_post}>
              <div 
                className={styles6.agriv_footer_postImage}
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80')" }}
              ></div>
              <div className={styles6.agriv_footer_postContent}>
                <span>June 15, 2023</span>
                <p>New Sustainable Farming Techniques Yield 30% Higher Crop Production</p>
              </div>
            </div>
            <div className={styles6.agriv_footer_post}>
              <div 
                className={styles6.agriv_footer_postImage}
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80')" }}
              ></div>
              <div className={styles6.agriv_footer_postContent}>
                <span>May 28, 2023</span>
                <p>Agricia Partners with Local Communities for Food Security Initiative</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles6.agriv_footer_column}>
            <h3>Contact Us</h3>
            <div className={styles6.agriv_footer_contactItem}>
              <div className={styles6.agriv_footer_icon}><FaHome /></div>
              <div>
                <p className={styles6.agriv_footer_contactLabel}>ADDRESS:</p>
                <p>5919 Trussville Crossings Pkwy<br />Birmingham, AL 35235</p>
              </div>
            </div>
            <div className={styles6.agriv_footer_contactItem}>
              <div className={styles6.agriv_footer_icon}><FaEnvelope /></div>
              <div>
                <p className={styles6.agriv_footer_contactLabel}>EMAIL:</p>
                <p><a href="mailto:info@agricia.com">info@agricia.com</a></p>
                <p><a href="mailto:support@agricia.com">support@agricia.com</a></p>
              </div>
            </div>
            <div className={styles6.agriv_footer_contactItem}>
              <div className={styles6.agriv_footer_icon}><FaPhoneAlt /></div>
              <div>
                <p className={styles6.agriv_footer_contactLabel}>PHONE:</p>
                <p>+1 (205) 555-0123</p>
                <p>+1 (800) 555-0199</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles6.agriv_footer_bottom}>
        <div className={styles6.agriv_footer_bottomContent}>
          <p>Copyright © 2023 Agricia. All Rights Reserved. 
            <span className={styles6.agriv_footer_separator}>|</span> 
            <a href="#">Privacy Policy</a> 
            <span className={styles6.agriv_footer_separator}>|</span> 
            <a href="#">Terms of Service</a>
          </p>
       
        </div>
      </div>
    </div>
  );
}
