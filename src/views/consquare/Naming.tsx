import React, { useRef, useEffect } from "react"
import Footer from "../mainpage/Footer"
import Header from "../shared/Header"
import Project from "../shared/Project";

import ConsquareImage from "../../assets/images/consquare.jpg";
const ConsquareShowcase = () => <img src={ConsquareImage} alt="Consquare showcase"/>;

const Consquare: React.FC = () => {

    return (
        <main>
            <Header />

            <Project
                    title="Consquare"
                    additionalClassName="project--consquare"
                    technologies={["Unity", "Django", "Blender", "Python", "Agile"]}
                    showcase={<ConsquareShowcase/>}
                    key="consquare"
                >
                    GPS-based, procedurally structure generated, PokemonGo-alike multiplayer
                    mobile game, using Unity and Django, glowed up with astonishingly magic graphics.
                    Every model and UI was carefully crafted by me. Being under the wing of
                    Innovative Projects by Nokia, our team stood on the podium of their competition.
                </Project>

                
        </main>
    );
}

export default Consquare;
