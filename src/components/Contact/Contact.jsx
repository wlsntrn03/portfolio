import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to<br></br>reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/email.png")} alt="Email icon" />
          <a href="mailto:wlsntrn03@gmail.com" target="_blank" rel="noopener noreferrer">wlsntrn03@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="Github icon" />
          <a href="https://github.com/wlsntrn03" target="_blank" rel="noopener noreferrer">github.com/wlsntrn03</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/wilson-tran-3a31a922a" target="_blank" rel="noopener noreferrer">linkedin.com/in/wilson-tran-3a31a922a</a>
        </li>
      </ul>
    </footer>
  );
};