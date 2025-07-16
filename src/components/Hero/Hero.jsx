import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Huu Bang</h1>
        <p className={styles.description}>
          Passionate Frontend Developer and Software Engineering student at
          Industrial University of Ho Chi Minh City. I specialize in creating
          beautiful, responsive, and user-friendly web applications,
          transforming complex problems into simple, elegant solutions through
          clean code and cutting-edge technologies.
        </p>
        <a href="mailto:lehuubang965@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/assets/hero/heroImage.jpg"
        alt="Le Huu Bang"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>

    </section>
  );
};
