import React from "react";
import { MoodifyShowcase } from "../components/showcases/MoodifyShowcase/MoodifyShowcase";
import { PostujSlider } from "../components/showcases/PostujSlider/PostujSlider";
import ConsquareImage from "../../assets/images/consquare.jpg";

export interface Showcase {
  description: string;
  title: string;
  technologies: string[];
  showcase: React.ReactNode;
  githubLink?: string;
  demoLink?: string;
  learnLink?: string;
  additionalClassName?: string;
}

export const showcases: Showcase[] = [
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
    technologies: ["Unity", "Django", "Blender", "Python", "Agile"],
    learnLink: "https://www.marekchoinski.com/consquare",
    showcase: <img src={ConsquareImage} alt="Consquare showcase" />,
    description:
      "GPS-based, procedurally structure generated, PokemonGo-alike multiplayer mobile game, using Unity and Django, glowed up with astonishingly magic graphics. Every model and UI was carefully crafted by me. Being under the wing of Innovative Projects by Nokia, our team stood on the podium of their competition.
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
    description: `
  Social community, where anyone can set up an account and start creating posts, comment and follow other users with interesting content. Typescript frontend stuffed with React, Redux and Context API is powered safely with the Firebase framework.`,
  },
];
