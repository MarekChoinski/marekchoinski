import styles from "@/styles/pages/blog.module.scss";
import { NextPage } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Meta } from "@/components/Meta/Meta";
import { Header } from "@/components/Header/Header";
import { Project } from "@/components/Project/Project";
import { homeMetaTags } from "@/constants/metaTags";
import { projectShowcases } from "@/constants/projectShowcases";
import { Rubik } from "next/font/google";
import Link from "next/link";
import { Navbar } from "@/components/Navbar/Navbar";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

const tags = ["Ksiązki", "Technologia"];

enum Tags {
  Books = "BOOKS",
}

const posts = [
  {
    title: "Naprawdę wszystko co musisz wiedzieć o Event Loop",
    image:
      "https://images.unsplash.com/photo-1547675960-7634cf1b0856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2883&q=80",
    tags: [Tags.Books],
    time: 5,
  },
  {
    title: "Wykluczenie cyfrowe w Polsce",
    image:
      "https://images.unsplash.com/photo-1485847791529-09ed2263da0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: [Tags.Books],
    time: 5,
  },
  {
    title: "Czym rzeczywiście jest Promise?",
    image:
      "https://images.unsplash.com/photo-1611923973164-e0e5f7f69872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvbWlzZXxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=700&q=60",
    tags: [Tags.Books],
    time: 5,
  },
  {
    title: "Twój X niz puścić Cię na zdalną",
    image:
      "https://images.unsplash.com/photo-1511149547418-801db51a015f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: [Tags.Books],
    time: 5,
  },
  {
    title: "Cyberwojna na Ukrainie - studium",
    image:
      "https://images.unsplash.com/photo-1622443376373-41a580249c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3117&q=80",
    tags: [Tags.Books],
    time: 5,
  },
  {
    title: '"Czysta architektura" - recenzja ksiązki Uncle Boba',
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: [Tags.Books],
    time: 5,
  },
  {
    title: '"Czysty kod" - recenzja ksiązki Uncle Boba',
    image:
      "https://images.unsplash.com/photo-1556228994-efb7c88fa0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: [Tags.Books],
    time: 5,
  },
];

const desc =
  "Młodość spędziłem na pisaniu programów w C++, nastoletnie zycie na przyglądaniu się polskiej branzy IT, a na emeryturę wyrzucę komputer przez okno, zeby myślec o niebie i drzewach a nie młodzienczych bzdurach.";

const Home: NextPage = () => {
  return (
    <main className={rubik.className}>
      <Meta metaTags={homeMetaTags} />
      <Navbar />
      <aside className={styles.aboutMe}>
        <img src="/images/profilePic.jpg" alt="Profile pic" />
        <p>{desc}</p>
      </aside>
      <section className={styles.allProjectsContainer} id="projects">
        {/* <ul>tags</ul> */}
        <ul className={styles.wrapper}>
          {posts.map((post) => (
            <li
              style={{ backgroundImage: `url(${post.image})` }}
              key={post.title}
              className={styles.post}
            >
              <div
                className={styles.postWrapper}
                style={{ backgroundImage: `url(${post.image})` }}
              >
                <ul className={styles.postTagsWrapper}>
                  {post.tags.map((tag) => (
                    <li className={styles.postTag} key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className={styles.time}>Czas: {post.time} minutek</span>
                <h2>{post.title}</h2>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {/* <Footer /> */}
    </main>
  );
};

export default Home;
