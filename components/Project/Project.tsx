import classnames from "classnames";
import React, { ReactElement } from "react";
import styles from "./Project.module.scss";
import { ShowCode } from "../icons/ShowCode";
import { ShowDemo } from "../icons/ShowDemo";
// import ShowDemo from '../../assets/icons/
// import ShowCode from '../assets/icons/showCode.svg';

export enum ProjectVariant {
  Default = "DEFAULT",
  MazeSolver = "MAZE_SOLVER",
  Consquare = "CONSQUARE",
  ConsquarePage = "CONSQUARE_PAGE",
}

export interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  showcase: React.ReactNode;
  githubLink?: string;
  demoLink?: string;
  learnLink?: string;
  variant?: ProjectVariant;
}

export const Project = ({
  title,
  description,
  technologies,
  showcase,
  githubLink,
  demoLink,
  learnLink,
  variant = ProjectVariant.Default,
}: ProjectProps) => (
  <section
    className={classnames(styles.project, {
      [styles.mazeSolver]: variant === ProjectVariant.MazeSolver,
      [styles.consquare]: variant === ProjectVariant.Consquare,
      [styles.consquarePage]: variant === ProjectVariant.ConsquarePage,
    })}
  >
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.tagsContainer}>
          {technologies.map((technology) => (
            <div className={styles.tag} key={technology}>
              {technology}
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          {githubLink && (
            <a className={styles.button} href={githubLink} role="button">
              <ShowCode /> SHOW CODE
            </a>
          )}
          {demoLink && (
            <a className={styles.button} href={demoLink} role="button">
              <ShowDemo /> SHOW DEMO
            </a>
          )}
          {learnLink && (
            <a className={styles.button} href={learnLink} role="button">
              <ShowDemo /> LEARN MORE
            </a>
          )}
        </div>
      </div>
      <div className={styles.imageContainer}>{showcase}</div>
    </div>
  </section>
);
