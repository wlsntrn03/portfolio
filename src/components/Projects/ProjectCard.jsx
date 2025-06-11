import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const isVideo = demo.endsWith(".mp4");

  const handleDemoClick = () => {
    if (isVideo) {
      window.open(getImageUrl(demo), "_blank");
    } else {
      window.open(demo, "_blank");
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div className={styles.content}> {}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          <a href={source} className={styles.link} target="_blank">
            Github
          </a>
          <button onClick={handleDemoClick} className={styles.link}>
            Demo ➜
          </button>
        </div>
      </div>
    </div>
  );
};
