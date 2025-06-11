import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section id="about">
      <div className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src={getImageUrl("about/me.jpg")}
            alt="picture of me"
            className={styles.aboutImage}
          />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hello! My name is Nguyen, but I go by Wilson. I'm a recent Computer Science graduate from George Mason University. I was born in Vietnam and moved to the United States when I was little. Growing up, I learned to face challenges by being adaptable, resilient, and disciplined. These traits have shaped how I navigate through life and technology today.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Throughout my time in college, I explored many different areas, from web and mobile development to databases and cloud-based tools. What I enjoyed most was building practical, user-friendly, and meaningful programs that solve real-world problems. Whether it's a class assignment or a personal project, I love bringing ideas to life through code.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Outside of coding, I enjoy watching movies, playing video games, listening to music, and spending time with family and friends. I also enjoy exploring and experimenting with new concepts. There's always something new to learn in this field!
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I'm excited to embark on my career and collaborate with teams that make a real impact. Feel free to check out my work below or reach out. I'm always open to chatting and making new connections!
          </p>
        </div>
      </div>
    </section>
  );
};
