import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart, FiSearch, FiUser } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';
import styles from './ProjectSpaceProject.module.css';

const AgriNavbar = ({ cartItemCount, setShowCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = !!localStorage.getItem("userEmail");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(`.${styles['profile-wrapper']}`)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScrollToContact = () => {
    if (location.pathname === '/') {
      const section = document.getElementById('contact');
      if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setIsOpen(false);
      }
    } else {
      navigate('/#contact');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate('/login');
  };

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'STORE', path: '/store' }
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${styles['vine-decoration']} ${styles['left-vine']}`}></div>
      <div className={`${styles['vine-decoration']} ${styles['right-vine']}`}></div>

      <div className={styles['navbar-main']}>
        <div className={styles.container}>
          <div className={styles['navbar-brand']}>
            <div className={styles['brand-icon-container']}>
              <FaLeaf className={styles['brand-icon']} />
              <div className={styles['brand-icon-glow']}></div>
              <div className={styles['leaf-particles']}>
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={styles['leaf-particle']}
                    style={{
                      '--delay': `${i * 0.2}s`,
                      '--size': `${Math.random() * 10 + 5}px`,
                      '--rotation': `${Math.random() * 360}deg`,
                      '--x-start': `${Math.random() * 40 - 20}px`,
                      '--y-start': `${Math.random() * 40 - 20}px`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className={styles['brand-text']}>
              <NavLink to="/" className={styles['brand-name']}>FarmXpert</NavLink>
              <span className={styles['brand-slogan']}>NATURE'S FINEST</span>
            </div>
          </div>

          <div className={styles['desktop-nav']}>
            <div className={styles['navbar-links']}>
              <div className={styles['links-container']}>
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `${styles['nav-link']} ${isActive ? styles.active : ''}`
                    }
                  >
                    <span className={styles['nav-link-text']}>{item.label}</span>
                    <span className={styles['nav-link-underline']}></span>
                  </NavLink>
                ))}

                {/* CONTACT scroll link */}
                <span className={styles['nav-link']} onClick={handleScrollToContact}>
                  <span className={styles['nav-link-text']}>CONTACT</span>
                  <span className={styles['nav-link-underline']}></span>
                </span>

                {/* EXPLORE dropdown */}
                <div className={styles['dropdown-container']}>
                  <span className={styles['nav-link']}>
                    <span className={styles['nav-link-text']}>EXPLORE</span>
                    <span className={styles['nav-link-underline']}></span>
                  </span>
                  <div className={styles['dropdown-content']}>
                    <NavLink to="/gallery" className={styles['dropdown-link']}>Gallery</NavLink>
                    {/* CORRECTED REVIEWS LINK */}
                    <NavLink to="/review" className={styles['dropdown-link']}>Reviews</NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles['navbar-actions']}>
              {/* <div className={`${styles['search-wrapper']} ${searchOpen ? styles.active : ''}`}>
                <button
                  className={styles['search-toggle']}
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <FiSearch className={styles['search-icon']} />
                </button>
                <input
                  type="text"
                  placeholder="Search Products..."
                  className={styles['search-input']}
                />
              </div> */}

              {isLoggedIn ? (
                <div className={styles['profile-wrapper']}>
                  <button
                    className={styles['profile-icon']}
                    onClick={() => setShowDropdown(prev => !prev)}
                  >
                    <FiUser />
                  </button>
                  {showDropdown && (
                    <div className={styles['profile-dropdown']}>
                      <button onClick={() => navigate('/profile')}>My Profile</button>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  className={styles['account-button']}
                  onClick={() => navigate('/login')}
                >
                  <span className={styles['account-button-text']}>Sign In</span>
                  <span className={styles['account-button-glow']}></span>
                </button>
              )}
            </div>
          </div>

          <button
            className={`${styles['mobile-menu-button']} ${isOpen ? styles.active : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className={styles['hamburger-box']}>
              <div className={styles['hamburger-inner']}></div>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`${styles['mobile-menu-overlay']} ${isOpen ? styles.active : ''}`}>
        <div className={styles['mobile-menu-content']}>
          <div className={styles['mobile-nav-links']}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `${styles['mobile-nav-link']} ${isActive ? styles.active : ''}`
                }
                onClick={() => setIsOpen(false)}
              >
                <span className={styles['mobile-nav-link-text']}>{item.label}</span>
                <span className={styles['mobile-nav-link-underline']}></span>
              </NavLink>
            ))}

            {/* CONTACT scroll link for mobile */}
            <span
              className={styles['mobile-nav-link']}
              onClick={handleScrollToContact}
            >
              <span className={styles['mobile-nav-link-text']}>CONTACT</span>
              <span className={styles['mobile-nav-link-underline']}></span>
            </span>

            <NavLink to="/gallery" className={styles['mobile-nav-link']} onClick={() => setIsOpen(false)}>
              <span className={styles['mobile-nav-link-text']}>Gallery</span>
              <span className={styles['mobile-nav-link-underline']}></span>
            </NavLink>
            {/* CORRECTED REVIEWS LINK FOR MOBILE */}
            <NavLink to="/review" className={styles['mobile-nav-link']} onClick={() => setIsOpen(false)}>
              <span className={styles['mobile-nav-link-text']}>Reviews</span>
              <span className={styles['mobile-nav-link-underline']}></span>
            </NavLink>
          </div>

          <div className={styles['mobile-nav-actions']}>
            <div className={`${styles['mobile-search-wrapper']} ${searchOpen ? styles.active : ''}`}>
              <button
                className={styles['search-toggle']}
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <FiSearch className={styles['search-icon']} />
              </button>
              <input
                type="text"
                placeholder="Search organic goodness..."
                className={styles['search-input']}
              />
            </div>

            <div className={styles['mobile-action-buttons']}>
              <button 
                className={`${styles['action-button']} ${styles['cart-button']}`}
                onClick={() => {
                  setShowCart(true);
                  setIsOpen(false);
                }}
              >
                <FiShoppingCart />
                <span className={styles['cart-count']}>{cartItemCount}</span>
                <span className={styles['cart-pulse']}></span>
              </button>

              <button 
                className={styles['account-button']}
                onClick={() => {
                  setIsOpen(false);
                  navigate(isLoggedIn ? '/profile' : '/login');
                }}
              >
                <FiUser className={styles['account-icon']} />
                <span className={styles['account-button-text']}>
                  {isLoggedIn ? 'Profile' : 'Sign In'}
                </span>
                <span className={styles['account-button-glow']}></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AgriNavbar;