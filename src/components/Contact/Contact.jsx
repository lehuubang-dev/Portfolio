import React from "react";

import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="https://20049601.s3.ap-southeast-1.amazonaws.com/emailIcon.png" alt="Email icon" />
          <a href="mailto:lehuubang965@gmail.com">lehuubang965@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="https://20049601.s3.ap-southeast-1.amazonaws.com/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/lehuubang02">in/lehuubang02</a>
        </li>
        <li className={styles.link}>
          <img src="https://20049601.s3.ap-southeast-1.amazonaws.com/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/bthope">github.com/bthope</a>
        </li>
      </ul>
    </footer>
  );
};
