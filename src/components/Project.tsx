import React from "react"
import ShowDemo from '../assets/icons/showDemo.svg';
import ShowCode from '../assets/icons/showCode.svg';

type Props = {
    children: React.ReactNode,
    title: string,
    technologies: string[],
    image: string,
    githubLink?: string,
    demoLink?: string,
    learnLink?: string,
    additionalClassName?: string,
};

const Project: React.FC<Props> = props => {

    const { children,
        title,
        technologies,
        image,
        githubLink,
        demoLink,
        learnLink,
        additionalClassName="",
    } = props;

    return (
        <section
            className={`project ${additionalClassName}`}
        >
            <div className="project__container">
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
                        {
                            learnLink &&
                            <a
                                className="project__button"
                                href={learnLink}
                                role="button">
                                <ShowDemo /> LEARN MORE
                    </a>
                        }
                    </div>
                </div>
                <div
                    className="project__image_container"
                >
                    <img src={image} alt={`${title} visualisation`} />
                </div>


            </div>
        </section>

    );
}

export default Project;