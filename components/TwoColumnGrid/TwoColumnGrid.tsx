import React from "react";

interface TwoColumnGridProps {
  children: React.ReactNode;
  title: string;
  showcase?: React.ReactNode;
  additionalClassName?: string;
  reversed?: boolean;
}

export const TwoColumnGrid = ({
  children,
  title,
  showcase,
  additionalClassName = "",
  reversed = false,
}: TwoColumnGridProps) => (
  <section
    className={`twoColumnGrid ${additionalClassName} ${
      reversed ? "reversed" : ""
    } `}
  >
    <div className="twoColumnGrid__container">
      <div className="twoColumnGrid__info_container">
        <h1 className="twoColumnGrid__title">{title}</h1>

        <p className="twoColumnGrid__description">{children}</p>
      </div>

      <div className="twoColumnGrid__showcase">
        {showcase || (
          <img
            src="https://via.placeholder.com/500"
            alt={`${title} visualisation`}
          />
        )}
      </div>
    </div>
  </section>
);
