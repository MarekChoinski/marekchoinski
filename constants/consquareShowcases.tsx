import React from "react";
import { MoodifyShowcase } from "../components/showcases/MoodifyShowcase/MoodifyShowcase";
import { Showcase } from "./projectShowcases";
import { BlueOreShowcase } from "@/components/showcases/BlueOreShowcase/BlueOreShowcase";
import { ProjectVariant } from "@/components/Project/Project";

export interface ConsquareShowcase {
  innovativeProject: Showcase;
  blueOre: Showcase;
}

export const consquareShowcases: ConsquareShowcase = {
  innovativeProject: {
    title: "Master-winning finish",
    showcase: (
      <img
        src="/images/consquare/innovative.png"
        alt="Innovative projects logo"
      />
    ),
    variant: ProjectVariant.InnovativeProject,
    description:
      "Our team spent almost three months participating in a competition organized by Nokia under the wing of the Innovative consquareProject. Every week we met at Nokia's headquarters with employees to discuss next changes and vision of the project in the spirit of agile software development. Being ahead of the rest of others teams, we stood on the podium, gaining valuable work experience in the team and great beginning of our game development.",
  },
  blueOre: {
    title: "Me, creative director, designer (and developer)",
    reversed: true,
    showcase: <BlueOreShowcase />,
    variant: ProjectVariant.BlueOre,
    description:
      "My main work on project was focused on designing every aspect of game. 3D models and UI graphic is my individual work. One of my tasks was to create consistent user-friendly UX experience. Models were created using in Photoshop. My role in the project was not only limited to the artistic side - I participate developing frontend for game in Unity connected with backend in Django.",
  },
};
