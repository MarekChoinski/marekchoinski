import React from "react"
import Header from "./Header"
import Project from "./Project"
import Footer from "./Footer"

const App: React.FC = () => {


    return (
        <>
            <section className="home">
                <Header />
            </section>
            <section className="all_projects_container" id="projects">
                <Project
                    title="Moodify"
                    backgroundColor="white"
                    technologies={["Typescript", "React", "Redux", "Styled-components", "IndexedDB", "REST API", "Jest", "Enzyme"]}
                    image="https://via.placeholder.com/500"
                    githubLink="#"
                    demoLink="#"
                >
                    The Progressive Web App written in React adjusts song choice depending on user mood.
                    Eye-pleasant visual experience based on spotify REST API changes dynamically
                    application appearance according to vibrant color of album cover using Styled-components.
                    Optimal work is assured by combining redux with IndexedDB.
                </Project>
                <Project
                    title="Consquare"
                    backgroundColor="black"
                    textColor="white"
                    technologies={["Unity", "Django", "Blender", "Python", "Agile"]}
                    image="https://via.placeholder.com/700"
                // learnLink="#"
                >
                    GPS-based, procedurally structure generated PokemonGo-alike multiplayer
                    mobile game using Unity and Django, glowed up with astonishingly magic graphic.
                    Every model and UI was carefully crafted by me. Being under the wing of
                    Innovative Projects by Nokia our team stood on the podium of their competition.
                </Project>
                <Project
                    title="Postuj.pl"
                    backgroundColor="lightgray"
                    technologies={["Typescript", "React", "Redux", "Firebase", "SCSS", "Bootstrap", "Context-API", "Jest", "Enzyme"]}
                    image="https://via.placeholder.com/700"
                    githubLink="#"
                    demoLink="#"
                >
                    Website where anyone can set up an account and start creating posts, comment and follow other users. Frontend stuffed with React, Redux and Context API is powered safely with Firebase framework.
                </Project>
                <Project
                    title="Real-time maze solver"
                    backgroundColor="white"
                    technologies={["Open.cv", "OOP", "Babel", "SCSS", "Algorithms", "WebRTC"]}
                    image="https://via.placeholder.com/700"
                    githubLink="#"
                    demoLink="#"
                >
                    The Progressive Web App with real-time camera solves handwritten labyrinths using Opencv.js, WebRTC and breadth-first search of graph. Written carefully using OOP and tested with Jest.
                </Project>
            </section>
            <Footer />
        </>

    );
}

export default App;