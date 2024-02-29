import { Project } from "./ProjectInfo";

export const ProjectBox = ({ project }: { project: Project }) => {
  const { name, description, image, link, githubLink } = project;
  return (
    <div className="projects__list-item-details">
      <div className="projects__list-item-img-cont">
        <img
          src={image}
          alt="Project Image"
          className="projects__list-item-img"
        />
      </div>
      <h3 className="heading-tertiary projects__list-item-heading-tertiary">
        {name}
      </h3>
      <p className="text-primary projects__list-item-text-primary">
        {description.map((paragraph, index) => {
          return <span key={index}>{paragraph}</span>;
        })}
      </p>
      <button className="btn btn-theme projects__btn-theme">
        Live Link {link}
      </button>
      <button className="btn btn-inv projects__btn-inv">
        Code Link {githubLink}
      </button>
    </div>
  );
};
