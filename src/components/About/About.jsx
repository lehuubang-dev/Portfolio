import React from "react";

import styles from "./About.module.css";
// import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img src="https://20049601.s3.ap-southeast-1.amazonaws.com/aboutImage.png" alt="Me sitting with a laptop" className={styles.aboutImage} />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="https://20049601.s3.ap-southeast-1.amazonaws.com/cursorIcon.png" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend</h3>
              <p>
                I'm a frontend developer with experience in Next.js and
                TypeScript for responsive web and mobile.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="https://20049601.s3.ap-southeast-1.amazonaws.com/serverIcon.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend</h3>
              <p>
                I have experience developing backend systems and APIs using
                Spring Boot, Java, and PostgreSQL databases.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="https://20049601.s3.ap-southeast-1.amazonaws.com/uiIcon.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Design</h3>
              <p>
                I have designed web and mobile interfaces using Figma, including
                logos and complete UI systems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
