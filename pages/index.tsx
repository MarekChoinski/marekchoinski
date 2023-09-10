import Image from "next/image";
import styles from "@/styles/pages/index.module.scss";
import { NextPage } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Meta } from "@/components/Meta/Meta";
import { Header } from "@/components/Header/Header";
import { Project } from "@/components/Project/Project";
import { homeMetaTags } from "@/constants/metaTags";
import { PostujSlider } from "@/components/showcases/PostujSlider/PostujSlider";
import { MazeShowcase } from "@/components/showcases/MazeShowcase/MazeShowcase";
import { MoodifyShowcase } from "@/components/showcases/MoodifyShowcase/MoodifyShowcase";

const Home: NextPage = () => {
  return (
    <main>
      <Meta metaTags={homeMetaTags} />

      <Header />
      <section className={styles.allProjectsContainer} id="projects">
        <Project
          title="Moodify"
          technologies={[
            "Typescript",
            "React",
            "Redux",
            "Styled-components",
            "IndexedDB",
            "REST API",
            "Jest",
            "Enzyme",
          ]}
          githubLink="https://github.com/MarekChoinski/Moodify"
          demoLink="https://moodify.marekchoinski.com/"
          showcase={<MoodifyShowcase />}
          key="moodify"
        >
          The Progressive Web App written in React adjusts song choice depending
          on user's mood. Eye-pleasant visual experience based on spotify REST
          API changes the application's appearance according to vibrant color of
          the album cover using Styled-components. API usage is optimised by
          combining redux with IndexedDB caching.
        </Project>
        <Project
          title="Consquare"
          additionalClassName="project--consquare"
          technologies={["Unity", "Django", "Blender", "Python", "Agile"]}
          learnLink="https://www.marekchoinski.com/consquare"
          showcase={
            <img src="/images/consquare.jpg" alt="Consquare showcase" />
          }
          key="consquare"
        >
          GPS-based, procedurally structure generated, PokemonGo-alike
          multiplayer mobile game, using Unity and Django, glowed up with
          astonishingly magic graphics. Every model and UI was carefully crafted
          by me. Being under the wing of Innovative Projects by Nokia, our team
          stood on the podium of their competition.
        </Project>
        <Project
          title="Postuj"
          technologies={[
            "Typescript",
            "React",
            "Redux",
            "Firebase",
            "SCSS",
            "Bootstrap",
            "Context-API",
            "Jest",
            "Enzyme",
          ]}
          githubLink="https://github.com/MarekChoinski/Postuj"
          demoLink="https://postuj.marekchoinski.com/"
          showcase={<PostujSlider />}
          key="postuj"
        >
          Social community, where anyone can set up an account and start
          creating posts, comment and follow other users with interesting
          content. Typescript frontend stuffed with React, Redux and Context API
          is powered safely with the Firebase framework.
        </Project>
        <Project
          title="Real-time maze solver"
          additionalClassName="project--mazesolver"
          technologies={[
            "Open.cv",
            "OOP",
            "Babel",
            "SCSS",
            "Algorithms",
            "WebRTC",
          ]}
          showcase={<MazeShowcase />}
          githubLink="https://github.com/MarekChoinski/real-time-maze-solver"
          demoLink="https://mazesolver.marekchoinski.com/"
          key="mazesolver"
        >
          The Progressive Web App with real-time camera solves handwritten
          labyrinths using Opencv.js, WebRTC and breadth-first search of the
          graph. Written carefully using OOP and tested with Jest.
        </Project>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
