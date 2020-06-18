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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut neque dui, hendrerit vel molestie eu, scelerisque ac leo.
                    Pellentesque ultricies vulputate tortor nec vehicula. Sed ut
                    mollis diam. Ut congue, magna ac hendrerit laoreet.
                </Project>
                <Project
                    title="Consquare"
                    backgroundColor="black"
                    textColor="white"
                    technologies={["Unity", "Django", "Blender", "Python", "Agile"]}
                    image="https://via.placeholder.com/700"
                    learnLink="#"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut neque dui, hendrerit vel molestie eu, scelerisque ac leo.
                    Pellentesque ultricies vulputate tortor nec vehicula. Sed ut
                    mollis diam. Ut congue, magna ac hendrerit laoreet.
                </Project>
                <Project
                    title="Real-time maze solver"
                    backgroundColor="white"
                    technologies={["Open.cv", "OOP", "Babel", "SCSS", "Algorithms", "WebRTC"]}
                    image="https://via.placeholder.com/700"
                    githubLink="#"
                    demoLink="#"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut neque dui, hendrerit vel molestie eu, scelerisque ac leo.
                    Pellentesque ultricies vulputate tortor nec vehicula. Sed ut
                    mollis diam. Ut congue, magna ac hendrerit laoreet.
                </Project>
            </section>
            <Footer />
        </>

    );
}

export default App;