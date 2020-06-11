import React, { Children } from "react"
import Header from "./Header"
// import { ReactComponent as showDemo } from "../assets/icons/showDemo.svg";
// import showDemo from "";
import ShowDemo from '../assets/icons/showDemo.svg';
import ShowCode from '../assets/icons/showCode.svg';

type Props = {
    children: React.ReactNode,
    title: string,
    backgroundColor: string,
    technologies: string[],
    image: string,
    githubLink?: string,
    demoLink?: string,
};

const Project: React.FC<Props> = props => {

    const { children,
        title,
        backgroundColor,
        technologies,
        image,
        githubLink,
        demoLink
    } = props;

    return (
        <div className="project_container">
            <section
                className="project"
                style={{
                    backgroundColor: backgroundColor
                }}
            >
                <div
                    className="project__info_container"
                >
                    <h1
                        className="project__title"
                    >
                        {title}
                    </h1>

                    <p className="project__description">
                        {children}
                    </p>
                    <div className="project__tags_container">
                        {
                            technologies.map(technology =>
                                <div className="project__tag">
                                    {technology}
                                </div>
                            )
                        }
                    </div>
                    <div className="project__button_container">
                        {
                            githubLink &&
                            <a
                                className="project__button"
                                href={githubLink}
                                role="button">
                                <ShowCode /> SHOW CODE
                    </a>
                        }
                        {
                            demoLink &&
                            <a
                                className="project__button"
                                href={demoLink}
                                role="button">
                                <ShowDemo /> SHOW DEMO
                    </a>
                        }
                    </div>
                </div>
                <div
                    className="project__image_container"
                >
                    <img src={image} alt={`${title} visualisation`} />
                </div>


            </section>
        </div>

    );
}

export default Project;