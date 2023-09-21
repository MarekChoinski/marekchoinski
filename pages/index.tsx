import styles from "@/styles/pages/index.module.scss";
import { NextPage } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Meta } from "@/components/Meta/Meta";
import { Header } from "@/components/Header/Header";
import { Project } from "@/components/Project/Project";
import { homeMetaTags } from "@/constants/metaTags";
import { projectShowcases } from "@/constants/projectShowcases";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

const Home: NextPage = () => {
  return (
    <main className={rubik.className}>
      <Meta metaTags={homeMetaTags} />

      <Header />
      <section className={styles.allProjectsContainer} id="projects">
        {projectShowcases.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            technologies={project.technologies}
            description={project.description}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
            learnLink={project.learnLink}
            showcase={project.showcase}
            variant={project.variant}
            reversed={project.reversed}
          />
        ))}
      </section>
      <Footer />
    </main>
  );
};

export default Home;
