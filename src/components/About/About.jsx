import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container}>
      <h2>About</h2>
      <div>
        <img
          src="/assets/about/aboutImage.png"
          alt="Me sitting with a laptop"
          className={styles.heroImg}
        />
        <ul>
          <li>
            <img
              src="/assets/about/cursorIcon.png"
              alt="Cursor"
              className={styles.heroImg}
            />
            <div>
                <h3>Frontend Developer</h3>
                <p></p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
