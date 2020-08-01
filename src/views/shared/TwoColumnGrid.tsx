import React, { ReactElement } from "react"

type Props = {
    children: React.ReactNode,
    title: string,
    showcase?: React.ReactNode,
    additionalClassName?: string,
};

const TwoColumnGrid: React.FC<Props> = props => {

    const {
        children,
        title,
        showcase,
        additionalClassName = "",
    } = props;

    return (
        <section
            className={`twoColumnGrid ${additionalClassName}`}
        >
            <div className="twoColumnGrid__container">
                <div
                    className="twoColumnGrid__info_container"
                >
                    <h1
                        className="twoColumnGrid__title"
                    >
                        {title}
                    </h1>

                    <p className="twoColumnGrid__description">
                        {children}
                    </p>
                </div>

                <div
                    className="twoColumnGrid__showcase"
                >
                    {showcase || <img src="https://via.placeholder.com/500" alt={`${title} visualisation`} />}


                </div>


            </div>
        </section>

    );
}

export default TwoColumnGrid;