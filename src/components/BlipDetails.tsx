import React, { type FC } from "react";
import { Blip, Quadrants, Rings } from "../types/Blip";
import DOMPurify from "dompurify";
import { marked } from "marked";
import styles from "./BlipDetails.module.scss";

interface BlipDetailsProps {
  blip: Blip;
}

export const BlipDetails: FC<BlipDetailsProps> = ({ blip }) => {
  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>{blip.title}</h2>
        <div className={styles.subtitle}>
          <span>{Quadrants[blip.quadrant]}</span>
          <span>{Rings[blip.ring]}</span>
        </div>
      </div>

      {blip.link && (
        <a href={blip.link} target="_blank">
          {blip.link}
        </a>
      )}

      <h3>Description</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked(blip.description)),
        }}
      />

      {blip.opinion && (
        <>
          <h3>Opinion</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(marked(blip.opinion)),
            }}
          />
        </>
      )}

      <h3>Projects</h3>
      {blip.projects?.length && (
        <ul>
          {blip.projects?.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
