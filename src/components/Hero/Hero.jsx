import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm Huu Bang";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = fullText;

      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(150);

        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(100);

        if (displayText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {displayText}
          <span className={styles.cursor}>|</span>
        </h1>
        <p className={styles.description}>
          I'm a full-stack developer with 6 months of experience, specializing
          in Python, React JS, React Native, PostgreSQL, and MongoDB. Over the
          next three years, I aim to deepen my expertise and grow into a skilled
          mid-level full-stack developer.
        </p>

        <div className={styles.socialIcons}>
          <p className={styles.followText}>Follow me on:</p>
          <a
            href="https://www.facebook.com/lehuubang02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a
            href="https://www.instagram.com/lehuubang02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            href="https://www.tiktok.com/@bthope02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-tiktok"></ion-icon>
          </a>
          <a
            href="https://www.youtube.com/@BTHope02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </div>
        <div className={styles.btnContainer}>
          <a
            href="https://20049601.s3.ap-southeast-1.amazonaws.com/CV.pdf"
            className={styles.contactBtn}
            download
          >
            Download My CV
          </a>
          <a href="mailto:lehuubang965@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
      </div>
      <img
        src="https://20049601.s3.ap-southeast-1.amazonaws.com/avata.jpg"
        alt="Le Huu Bang"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};