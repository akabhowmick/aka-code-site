import { Project } from "./ProjectInfo";
import "../Portfolio/Portfolio.css";
import "./Project.css";

export const ProjectBox = ({
  project,
}: {
  project: Project;
}) => {
  const {
    name,
    description,
    image,
    caseStudyLink,
  } = project;
  return (
    <div className="projects__row">
      <div className="projects__row-img-cont">
        <img
          src={image}
          alt="Software Screenshot"
          className="projects__row-img"
          loading="lazy"
        />
      </div>
      <div className="projects__row-content">
        <h3 className="projects__row-content-title">
          {name}
        </h3>
        <p className="projects__row-content-desc">
          Project Description:{" "}
          {description[0]}
        </p>
        <a
          className="btn btn--med btn--theme dynamicBgClr"
          href={caseStudyLink}
        >
          Case Study
        </a>
      </div>
    </div>
  );
};
