import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        {/* <img src={getImageUrl("nav/logo.png")} alt="Logo" className={styles.logo} /> */}
        <img src="https://20049601.s3.ap-southeast-1.amazonaws.com/logoFE.png" alt="Logo" className={styles.logo} />
        <span className={styles.portfolioText}>Portfolio</span>
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen ? "https://20049601.s3.ap-southeast-1.amazonaws.com/closeIcon.png" : "https://20049601.s3.ap-southeast-1.amazonaws.com/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}

        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
