import React from "react";
import {
  FiPhoneCall,
  FiSun,
  FiMoon,
  FiMapPin,
  FiStar,
  FiScissors,
} from "react-icons/fi";
import styles from "./LandingPage.module.css";

// 📸 IMPORT YOUR IMAGES HERE (Adjust names based on what you saved in src/assets)
import img1 from "../assets/nail1.jpg";
import img2 from "../assets/nail2.jpg";
import img3 from "../assets/nail3.jpg";
import img4 from "../assets/hair1.jpg";
import img5 from "../assets/hair2.jpg";
import img6 from "../assets/hair3.jpg";
import img7 from "../assets/braid1.jpg";
import img8 from "../assets/braid2.jpg";
import img9 from "../assets/braid3.jpg";
import img10 from "../assets/braid4.jpg";

const PHONE_NUMBER = "08032372161";
const TEL_LINK = `tel:${PHONE_NUMBER}`;

const LandingPage = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className={styles.container}>
      {/* 🧭 NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <FiScissors className={styles.logoIcon} />
          <span>Mayfair Salon & Spa</span>
        </div>
        <div className={styles.navActions}>
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
          <a href={TEL_LINK} className={styles.navCallBtn}>
            <FiPhoneCall /> Call Now
          </a>
        </div>
      </nav>

      {/* 🌟 HERO SECTION */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <FiStar className={styles.starIcon} /> Top Rated in Abuja
          </div>
          <h1 className={styles.title}>
            Elevate Your Style. <br />
            <span className={styles.highlight}>Book Your Look Today.</span>
          </h1>
          <p className={styles.subtitle}>
            Expert hair styling, custom wigs, and luxury nail art on Gana
            Street. Walk-ins welcome, but appointments guarantee your spot.
          </p>

          <div className={styles.ctaGroup}>
            <a href={TEL_LINK} className={styles.primaryBtn}>
              <FiPhoneCall size={24} /> Call to Book Now
            </a>
            <div className={styles.location}>
              <FiMapPin /> Plot 44, Bol Pharmgate Plaza, Gana Street, Maitama,
              Abuja
            </div>
          </div>
        </div>
      </header>

      {/* 🖼️ GALLERY SECTION */}
      <section className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>Our Latest Masterpieces</h2>
        <p className={styles.sectionSubtitle}>
          Tap to call and request this exact style.
        </p>

        <div className={styles.imageGrid}>
          {/* Using placeholders for your images. Replace the src with your actual imported images */}
          <div className={styles.imageCard}>
            <img src={img1} alt="Custom Nail Art" />
            <div className={styles.overlay}>
              <span className={styles.tag}>Nail Artistry</span>
            </div>
          </div>
          <div className={styles.imageCard}>
            <img src={img4} alt="Blonde Wig Styling" />
            <div className={styles.overlay}>
              <span className={styles.tag}>Wig Installation</span>
            </div>
          </div>
          <div className={styles.imageCard}>
            <img src={img2} alt="Gold Nails" />
            <div className={styles.overlay}>
              <span className={styles.tag}>Luxury Nails</span>
            </div>
          </div>
          <div className={styles.imageCard}>
            <img src={img5} alt="Dark Hair Styling" />
            <div className={styles.overlay}>
              <span className={styles.tag}>Hair Styling</span>
            </div>
          </div>
          <div className={styles.imageCard}>
            <img src={img3} alt="Jewelry Nails" />
            <div className={styles.overlay}>
              <span className={styles.tag}>3D Nail Art</span>
            </div>
          </div>
          <div className={styles.imageCard}>
            <img src={img6} alt="Hair Extensions" />
            <div className={styles.overlay}>
              <span className={styles.tag}>Premium Extensions</span>
            </div>
          </div>
          <div className={styles.imageCard}>
            <img src={img7} alt="Hair Extensions" />
            <div className={styles.overlay}>
              <span className={styles.tag}>Knotless Extensions</span>
            </div>
          </div>
          <div className={styles.imageCard}>
            <img src={img8} alt="Hair Extensions" />
            <div className={styles.overlay}>
              <span className={styles.tag}>Box Nraids</span>
            </div>
          </div>
          <div className={styles.imageCard}>
            <img src={img9} alt="Hair Extensions" />
            <div className={styles.overlay}>
              <span className={styles.tag}>Knotless Braids</span>
            </div>
          </div>
          {/* <div className={styles.imageCard}>
            <img src={img10} alt="Hair Extensions" />
            <div className={styles.overlay}>
              <span className={styles.tag}>Knotless Extensions</span>
            </div>
          </div> */}
        </div>
      </section>

      {/* 📞 STICKY BOTTOM CTA (For Mobile Users) */}
      <div className={styles.stickyFooter}>
        <div className={styles.stickyContent}>
          <div>
            <h4>Ready for a transformation?</h4>
            <p>We are open today.</p>
          </div>
          <a href={TEL_LINK} className={styles.stickyBtn}>
            <FiPhoneCall /> Call {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
