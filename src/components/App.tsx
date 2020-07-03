import React from "react"
import Header from "./Header"
import Project from "./Project"
import Footer from "./Footer"

import ConsquareImage from "../assets/images/consquare.jpg";
import MoodifyVideo from "../static/moodify.mp4";
import MazeVideo from "../static/mazesolver.mp4";
import Head from "./Head";
import PostujSlider from "./PostujSlider";

const ConsquareShowcase = () => <img src={ConsquareImage} alt="Consquare showcase"/>;
const MoodifyShowcase = () => 
<div style={{position: "relative", width: "100%", height: "100%"}}>
    <video autoPlay loop width="100%" height="100%">
        <source src={MoodifyVideo} type="video/mp4" />
    </video>
    <div className="shadow" style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        boxShadow: "rgb(255, 255, 255) 0px -11px 10px 0px inset",
        top: "0",
        left: "0",}}></div>
</div>;

const MazeShowcase = () => 
<div style={{position: "relative", width: "100%", height: "100%"}}>
    <video autoPlay loop muted width="100%" height="100%">
        <source src={MazeVideo} type="video/mp4" />
    </video>
    <div className="shadow" style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        border: "2px solid red",
        top: "0",
        left: "0",}}></div>
</div>;


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
                    githubLink="https://github.com/MarekChoinski/Moodify"
                    demoLink="https://moodify.marekchoinski.com/"
                    showcase={<MoodifyShowcase />}
                    key="moodify"
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
                    showcase={<ConsquareShowcase/>}
                    key="consquare"
                >
                    GPS-based, procedurally structure generated PokemonGo-alike multiplayer
                    mobile game using Unity and Django, glowed up with astonishingly magic graphic.
                    Every model and UI was carefully crafted by me. Being under the wing of
                    Innovative Projects by Nokia our team stood on the podium of their competition.
                </Project>
                <Project
                    title="Postuj"
                    additionalClassName="project--postuj"
                    technologies={["Typescript", "React", "Redux", "Firebase", "SCSS", "Bootstrap", "Context-API", "Jest", "Enzyme"]}
                    githubLink="https://github.com/MarekChoinski/Postuj"
                    demoLink="https://postuj.marekchoinski.com/"
                    showcase={<PostujSlider/>}
                    key="postuj"
                >
                    Social community, where anyone can set up an account and start creating posts,
                    comment and follow other users with interesting content. Typescript frontend stuffed with React, Redux and Context API is powered safely with Firebase framework.
                </Project>
                <Project
                    title="Real-time maze solver"
                    technologies={["Open.cv", "OOP", "Babel", "SCSS", "Algorithms", "WebRTC"]}
                    showcase={<MazeShowcase />}
                    githubLink="https://github.com/MarekChoinski/real-time-maze-solver"
                    demoLink="https://mazesolver.marekchoinski.com/"
                    key="mazesolver"
                >
                    The Progressive Web App with real-time camera solves handwritten labyrinths using Opencv.js, WebRTC and breadth-first search of graph. Written carefully using OOP and tested with Jest.
                </Project>
            </section>
            <Footer />
        </>

    );
}

export default App;