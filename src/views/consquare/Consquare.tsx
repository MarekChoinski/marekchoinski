import React from "react"
import Header from "../shared/Header"
import Project from "../shared/Project";
import Hero from "./Hero";
import TwoColumnGrid from "../shared/TwoColumnGrid";

import ConsquareImage from "../../assets/images/consquare.jpg";
import InnovativeProjectImage from "../../assets/images/consquare/innovative.png";
import WizardImage from "../../assets/images/consquare/wizard.jpg";
import BlueOreVideo from "../../static/consquare/blue_ore.mp4";

const ConsquareShowcase = () => <img src={ConsquareImage} alt="Consquare showcase" />;
const InnovativeProjectShowcase = () => <img src={InnovativeProjectImage} alt="Innovative projects logo" />;
const BlueOreShowcase = () =>
    <video autoPlay loop muted playsInline width="100%" height="100%">
        <source src={BlueOreVideo} type="video/mp4" />
    </video>;

const Consquare: React.FC = () => {

    return (
        <main className="consquarePage">
            <Header />

            <Hero />

            <Project
                title="Consquare"
                additionalClassName="project--consquare"
                technologies={["Unity", "Django", "Blender", "Python", "Agile"]}
                showcase={<ConsquareShowcase />}
                key="consquare"
            >
                GPS-based, procedurally structure generated, PokemonGo-alike multiplayer
                mobile game, using Unity and Django, glowed up with astonishingly magic graphics.
                Every model and UI was carefully crafted by me. Being under the wing of
                Innovative Projects by Nokia, our team stood on the podium of their competition.
                </Project>


            <TwoColumnGrid
                title="Master-winning finish"
                showcase={<InnovativeProjectShowcase />}
                additionalClassName="twoColumnGrid--innovativeProject"
                key="innovativeProject"
            >
                Our team spent almost three months participating in a competition organized by Nokia under the wing of the Innovative Project. Every week we met at Nokia's headquarters with employees to discuss next changes and vision of the project in the spirit of agile software development. Being ahead of the rest of others teams, we stood on the podium, gaining valuable work experience in the team and great beginning of our game development.
                </TwoColumnGrid>

            <div
                style={{
                    // margin:"0 100%",
                    textAlign: "center",
                    width: "100%",
                }}
            >
                <img
                    src={WizardImage}
                    alt="Consquare showcase" />

            </div>


            <TwoColumnGrid
                title="Me, creative director, designer (and developer)"
                showcase={<BlueOreShowcase />}
                additionalClassName="twoColumnGrid--innovativeProject"
                key="designer"
            >
                My main work on project was focused on designing every aspect of game. 3D models and UI graphic is my individual work. One of my tasks was to create consistent user-friendly UX experience. Models were created using Blender and GUI project along with concept arts was designed carefully in Photoshop. My role in the project was not only limited to the artistic side - I participate developing frontend for game in Unity connected with backend in Django.
                </TwoColumnGrid>

        </main>
    );
}

export default Consquare;
