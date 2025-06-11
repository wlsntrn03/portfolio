import React from "react";
import { Typewriter } from 'react-simple-typewriter';

import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, Wilson here!</h1>
        <div className={styles.typingText}>
          <Typewriter
            words={[
              "I'm a recent Computer Science graduate from George Mason University.",
              "With a passion for software development, I am always seeking opportunities to learn new things.",
              "Feel free to reach out!"
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={30}
            deleteSpeed={45}
            delaySpeed={3000}
          />
        </div>
        <a href="#contact" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img
        src={getImageUrl("intro/gears.gif")}
        alt="gears"
        className={styles.introImg}
      />
    </section>
  );
};