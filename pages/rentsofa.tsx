import styles from "@/styles/pages/rentsofa.module.scss";
import { NextPage } from "next";
import { ProjectVariant } from "@/components/Project/Project";
import { useMemo } from "react";
import { Showcase, projectShowcases } from "@/constants/projectShowcases";
import { Montserrat } from "next/font/google";
import classnames from "classnames";
import { Navbar } from "@/components/Navbar/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const Rentsofa: NextPage = () => {
  const consquareProject: Showcase | undefined = useMemo(
    () =>
      projectShowcases.find(
        (project) => project?.variant === ProjectVariant.Consquare
      ),
    []
  );

  return (
    <main className={classnames(styles.page, montserrat.className)}>
      {/* <Meta metaTags={rentsofaMetaTags} /> */}
      <Navbar />
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url("/images/rentsofa/bg.png")` }}
      ></div>
      <p className={styles.description}>
        Pierwszy na świecie <strong>portal społecznościowy</strong> dla
        lokatorów i wynajmujących
      </p>
      <p className={styles.info}>
        Rentsofa jest pierwszym na świecie portalem społecznościowym łączącym
        lokatorów i wynajmujących. Obecny monopol przestarzałych portali
        ogłoszeniowych nie spełnia wymogów zmieniających się trendów światowych
        wynajmu mieszkań. Rynek jest coraz większy, wynajmujących jest coraz
        więcej, a istniejące portale nie pomagają prawidłowo magazynować i
        analizować wystawianych ofert.
      </p>
      <div className={styles.twoColumns}>
        <div className={styles.text}>
          <h2 className={styles.header}>Jesteśmy oparci o mapę.</h2>
          <p>
            Nasz portal opiera się na interaktywnej mapie, wykorzystując Leaflet
            na Next.js. Znaczniki są dynamicznie generowane, co oznacza, że
            przesuwając mapę, z łatwością znajdziesz oferty z sąsiednich
            regionów. Dzięki temu możesz szybko i intuicyjnie przeglądać oferty
            nieruchomości w całym kraju.
          </p>
        </div>
        <img src="/images/rentsofa/map.png" alt="Logo" className={styles.map} />
      </div>
      <div className={styles.twoColumns}>
        <div className={styles.text}>
          <h2 className={styles.header}>Zgrabna struktura mikroserwisów.</h2>
          <p>
            Portal nieruchomości działa w oparciu o zaawansowaną infrastrukturę
            mikroserwisową. Wykorzystujemy technologie takie jak Docker,
            Kubernetes oraz chmurę AWS, co pozwala nam na skalowalność,
            niezawodność i efektywność. Komunikacja między różnymi częściami
            portalu odbywa się przy użyciu standardów takich jak REST, GraphQL i
            WebSockets.
          </p>
        </div>
        <img
          src="/images/rentsofa/rs_1.png"
          alt="Logo"
          className={styles.map}
        />
      </div>
      <div className={styles.twoColumns}>
        <div className={styles.text}>
          <h2 className={styles.header}>Oferty wizualnie przyciągające.</h2>
          <p>
            Design jest kluczowym elementem naszego portalu. Stawiamy na prosty
            i nowoczesny wygląd, który sprawia, że korzystanie z naszej strony
            jest intuicyjne i przyjemne. Twoje projekty interfejsu graficznego
            przekształcają nasze zaawansowane technologie i funkcje w łatwo
            dostępne i atrakcyjne narzędzie dla użytkowników.
          </p>
        </div>
        <img
          src="/images/rentsofa/rs_2.png"
          alt="Logo"
          className={styles.map}
        />
      </div>
      <div className={styles.twoColumns}>
        <div className={styles.text}>
          <h2 className={styles.header}>
            Doświadczenie naprawdę AI - powered.
          </h2>
          <p>
            U nas AI - powered to nie tylko modne słówko. Portal na kadym kroku
            uzywa dedykowanych rozwiązań opartych o AI, aby jak najlepiej dobrać
            odpowiednie oferty do uzytkownika.
          </p>
        </div>
        <img
          src="/images/rentsofa/rs_3.png"
          alt="Logo"
          className={styles.map}
        />
      </div>
      <img
        src="/images/rentsofa/logo.png"
        alt="Logo"
        className={styles.outroLogo}
      />
      <p className={styles.outro}>
        <a href="https://rentsofa.com/pl" className={styles.linkRentsofa}>
          Rentsofa
        </a>
        . Tworzona całym 💜 przeze mnie i{" "}
        <a href="https://rentsofa.com/pl" className={styles.outroLink}>
          Rafała Kosteckiego
        </a>{" "}
        od 2021
      </p>
    </main>
  );
};

export default Rentsofa;
