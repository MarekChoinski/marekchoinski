import styles from "@/styles/pages/consquare.module.scss";
import { NextPage } from "next";
import { Meta } from "@/components/Meta/Meta";
import { Project, ProjectVariant } from "@/components/Project/Project";
import { consquareMetaTags } from "@/constants/metaTags";
import { useMemo } from "react";
import { Showcase, projectShowcases } from "@/constants/projectShowcases";
import { Hero } from "@/components/consquare/Hero/Hero";
import { WizardTower } from "@/components/consquare/WizardTower/WizardTower";
import { MineShowcase } from "@/components/showcases/MineShowcase/MineShowcase";
import { consquareShowcases as showcases } from "@/constants/consquareShowcases";

const Consquare: NextPage = () => {
  const consquareProject: Showcase | undefined = useMemo(
    () =>
      projectShowcases.find(
        (project) => project?.variant === ProjectVariant.Consquare
      ),
    []
  );

  return (
    <main className={styles.consquarePage}>
      <Meta metaTags={consquareMetaTags} />

      <Hero />
      {consquareProject && (
        <Project
          title={consquareProject.title}
          technologies={consquareProject.technologies}
          description={consquareProject.description}
          demoLink={consquareProject.demoLink}
          githubLink={consquareProject.githubLink}
          showcase={consquareProject.showcase}
          variant={consquareProject.variant}
          reversed={consquareProject.reversed}
        />
      )}
      <WizardTower />
      <Project
        title={showcases.innovativeProject.title}
        description={showcases.innovativeProject.description}
        showcase={showcases.innovativeProject.showcase}
        variant={showcases.innovativeProject.variant}
      />
      <MineShowcase />
      <Project
        title={showcases.blueOre.title}
        description={showcases.blueOre.description}
        showcase={showcases.blueOre.showcase}
        variant={showcases.blueOre.variant}
        reversed={showcases.blueOre.reversed}
      />
      <img
        src="/images/consquare/wizard.jpg"
        alt="Wizard"
        className={styles.wizard}
      />
      <img
        src="/images/consquare/logos.png"
        alt="Logos of technologies used in project"
        className={styles.logos}
      />
      <img
        src="/images/consquare/coming_soon.png"
        alt="Coming soon"
        className={styles.comingSoon}
      />
    </main>
  );
};

export default Consquare;
