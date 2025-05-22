import React from "react";
import { Typewriter } from 'react-simple-typewriter';

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
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
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={4000}
          />
        </div>
        <a href="#contact" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img
          src={getImageUrl("hero/brain.png")}
          alt="computer brain"
          className={styles.heroImg}
      />
    </section>
  );
};