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
                    technologies={["react", "javascript", "react", "javascript", "react", "javascript", "react", "react", "javascript", "react",]}
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
                    technologies={["react", "javascript", "react", "javascript", "react", "javascript", "react", "react", "javascript", "react",]}
                    image="https://via.placeholder.com/700"
                    learnLink="#"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut neque dui, hendrerit vel molestie eu, scelerisque ac leo.
                    Pellentesque ultricies vulputate tortor nec vehicula. Sed ut
                    mollis diam. Ut congue, magna ac hendrerit laoreet.
                </Project>
                <Project
                    title="Postuj.pl"
                    backgroundColor="lightgray"
                    technologies={["react", "javascript", "react", "javascript", "react", "javascript", "react", "react", "javascript", "react",]}
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
                    technologies={["react", "javascript", "react", "javascript", "react", "javascript", "react", "react", "javascript", "react",]}
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