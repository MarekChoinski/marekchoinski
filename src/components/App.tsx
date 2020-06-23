import React from "react"
import Header from "./Header"
import Project from "./Project"
import Footer from "./Footer"

import ConsquareImage from "../assets/images/consquare.png";
import Head from "./Head";

const App: React.FC = () => {


    return (
        <>
            <Head />
            <section className="home">
                <Header />
            </section>
            <section className="all_projects_container" id="projects">
                <Project
                    title="Moodify"
                    technologies={["Typescript", "React", "Redux", "Styled-components", "IndexedDB", "REST API", "Jest", "Enzyme"]}
                    image="https://via.placeholder.com/500"
                    githubLink="https://github.com/MarekChoinski/Moodify"
                    demoLink="https://moodify.marekchoinski.com/"
                // additionalClassName="project--moodify"
                >
                    The Progressive Web App written in React adjusts song choice depending on user mood.
                    Eye-pleasant visual experience based on spotify REST API changes dynamically
                    application appearance according to vibrant color of album cover using Styled-components.
                    Optimal work is assured by combining redux with IndexedDB.
                </Project>
                <Project
                    title="Consquare"
                    additionalClassName="project--consquare"
                    technologies={["Unity", "Django", "Blender", "Python", "Agile"]}
                    image={ConsquareImage}
                // learnLink="https://www.marekchoinski.com/consquare"
                >
                    GPS-based, procedurally structure generated PokemonGo-alike multiplayer
                    mobile game using Unity and Django, glowed up with astonishingly magic graphic.
                    Every model and UI was carefully crafted by me. Being under the wing of
                    Innovative Projects by Nokia our team stood on the podium of their competition.
                </Project>
                <Project
                    title="Postuj.pl"
                    additionalClassName="project--postuj"
                    technologies={["Typescript", "React", "Redux", "Firebase", "SCSS", "Bootstrap", "Context-API", "Jest", "Enzyme"]}
                    image="https://via.placeholder.com/700"
                    githubLink="https://github.com/MarekChoinski/Postuj"
                    demoLink="https://postuj.marekchoinski.com/"
                >
                    Social community, where anyone can set up an account and start creating posts,
                    comment and follow other users with interesting content. Typescript frontend stuffed with React, Redux and Context API is powered safely with Firebase framework.
                </Project>
                <Project
                    title="Real-time maze solver"
                    technologies={["Open.cv", "OOP", "Babel", "SCSS", "Algorithms", "WebRTC"]}
                    image="https://via.placeholder.com/700"
                    githubLink="https://github.com/MarekChoinski/real-time-maze-solver"
                    demoLink="https://mazesolver.marekchoinski.com/"
                // additionalClassName="project--maze_solver"
                >
                    The Progressive Web App with real-time camera solves handwritten labyrinths using Opencv.js, WebRTC and breadth-first search of graph. Written carefully using OOP and tested with Jest.
                </Project>
            </section>
            <Footer />
        </>

    );
}

export default App;