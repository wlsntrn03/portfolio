import React from "react";
import { Typewriter } from 'react-simple-typewriter';

import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <img className={styles.badge} src="https://visitor-badge.laobi.icu/badge?page_id=wilson" alt="visitors" />
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, Wilson here!</h1>
        <div className={styles.typingText}>
          <Typewriter
            words={[
              "I'm a recent Computer Science graduate from George Mason University.",
              "With a passion for software development, I am always seeking opportunities to grow and learn new things.",
              "Feel free to reach out!"
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={45}
            deleteSpeed={45}
            delaySpeed={3000}
          />
        </div>
        <a href="#contact" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img
          src={getImageUrl("intro/brain.png")}
          alt="computer brain"
          className={styles.introImg}
      />
    </section>
  );
};