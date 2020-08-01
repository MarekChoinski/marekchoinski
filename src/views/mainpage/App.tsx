import React, { useRef, useEffect } from "react"
import Header from "../shared/Header"
import Project from "../shared/Project"
import Footer from "./Footer"

import ConsquareImage from "../../assets/images/consquare.jpg";
import MoodifyVideo from "../../static/moodify.mp4";
import MazeVideo from "../../static/mazesolver.mp4";
import Head from "./Head";
import PostujSlider from "./PostujSlider";

const ConsquareShowcase = () => <img src={ConsquareImage} alt="Consquare showcase" />;
const MoodifyShowcase = () =>
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <video autoPlay loop muted playsInline width="100%" height="100%" >
            <source src={MoodifyVideo} type="video/mp4" />
        </video>
    </div>;

const MazeShowcase = () =>
    <video autoPlay loop muted playsInline width="100%" height="100%">
        <source src={MazeVideo} type="video/mp4" />
    </video>;


const App: React.FC = () => {


    return (
        <main>
            <Head />
            <Header />
            <section className="all_projects_container" id="projects">
                <Project
                    title="Moodify"
                    technologies={["Typescript", "React", "Redux", "Styled-components", "IndexedDB", "REST API", "Jest", "Enzyme"]}
                    githubLink="https://github.com/MarekChoinski/Moodify"
                    demoLink="https://moodify.marekchoinski.com/"
                    showcase={<MoodifyShowcase />}
                    key="moodify"
                >
                    The Progressive Web App written in React adjusts song choice depending on user's mood.
                    Eye-pleasant visual experience based on spotify REST API changes the
                    application's appearance according to vibrant color of the album cover using Styled-components.
                    API usage is optimised by combining redux with IndexedDB caching.
                </Project>
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
                <Project
                    title="Postuj"
                    technologies={["Typescript", "React", "Redux", "Firebase", "SCSS", "Bootstrap", "Context-API", "Jest", "Enzyme"]}
                    githubLink="https://github.com/MarekChoinski/Postuj"
                    demoLink="https://postuj.marekchoinski.com/"
                    showcase={<PostujSlider />}
                    key="postuj"
                >
                    Social community, where anyone can set up an account and start creating posts,
                    comment and follow other users with interesting content.
                    Typescript frontend stuffed with React, Redux and Context API is powered safely with the Firebase framework.
                </Project>
                <Project
                    title="Real-time maze solver"
                    additionalClassName="project--mazesolver"
                    technologies={["Open.cv", "OOP", "Babel", "SCSS", "Algorithms", "WebRTC"]}
                    showcase={<MazeShowcase />}
                    githubLink="https://github.com/MarekChoinski/real-time-maze-solver"
                    demoLink="https://mazesolver.marekchoinski.com/"
                    key="mazesolver"
                >
                    The Progressive Web App with real-time camera solves handwritten labyrinths using Opencv.js,
                    WebRTC and breadth-first search of the graph. Written carefully using OOP and tested with Jest.
                </Project>
            </section>
            <Footer />
        </main>

    );
}

export default App;
