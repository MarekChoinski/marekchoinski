import React from "react";
import { MoodifyShowcase } from "../components/showcases/MoodifyShowcase/MoodifyShowcase";
import { PostujSlider } from "../components/showcases/PostujSlider/PostujSlider";
import ConsquareImage from "../../assets/images/consquare.jpg";
import { ProjectProps, ProjectVariant } from "@/components/Project/Project";
import { MazeShowcase } from "@/components/showcases/MazeShowcase/MazeShowcase";

export type Showcase = ProjectProps;

export const projectShowcases: Showcase[] = [
  {
    title: "Moodify",
    technologies: [
      "Typescript",
      "React",
      "Redux",
      "Styled-components",
      "IndexedDB",
      "REST API",
      "Jest",
      "Enzyme",
    ],
    githubLink: "https://github.com/MarekChoinski/Moodify",
    demoLink: "https://moodify.marekchoinski.com/",
    showcase: <MoodifyShowcase />,
    description:
      "The Progressive Web App written in React adjusts song choice depending on user's mood. Eye-pleasant visual experience based on spotify REST API changes the application's appearance according to vibrant color of the album cover using Styled-components. API usage is optimised by combining redux with IndexedDB caching.",
  },
  {
    title: "Consquare",
    variant: ProjectVariant.Consquare,
    technologies: ["Unity", "Django", "Blender", "Python", "Agile"],
    learnLink: "/consquare",
    showcase: <img src="/images/consquare.jpg" alt="Consquare showcase" />,
    reversed: true,
    description:
      "GPS-based, procedurally structure generated, PokemonGo-alike multiplayer mobile game, using Unity and Django, glowed up with astonishingly magic graphics. Every model and UI was carefully crafted by me. Being under the wing of Innovative Projects by Nokia, our team stood on the podium of their competition.",
  },
  {
    title: "Postuj",
    technologies: [
      "Typescript",
      "React",
      "Redux",
      "Firebase",
      "SCSS",
      "Bootstrap",
      "Context-API",
      "Jest",
      "Enzyme",
    ],
    githubLink: "https://github.com/MarekChoinski/Postuj",
    demoLink: "https://postuj.marekchoinski.com/",
    showcase: <PostujSlider />,
    description:
      "Social community, where anyone can set up an account and start creating posts, comment and follow other users with interesting content. Typescript frontend stuffed with React, Redux and Context API is powered safely with the Firebase framework.",
  },
  {
    title: "Real-time maze solver",
    variant: ProjectVariant.MazeSolver,
    technologies: ["Open.cv", "OOP", "Babel", "SCSS", "Algorithms", "WebRTC"],
    githubLink: "https://github.com/MarekChoinski/real-time-maze-solver",
    demoLink: "https://mazesolver.marekchoinski.com/",
    showcase: <MazeShowcase />,
    reversed: true,
    description:
      "The Progressive Web App with real-time camera solves handwritten labyrinths using Opencv.js, WebRTC and breadth-first search of the graph. Written carefully using OOP and tested with Jest.",
  },
];
