import "./Portfolio.css";
import { ProjectBox } from "../Project/ProjectBox";
import { projectInfo } from "../Project/ProjectInfo";
export const Portfolio = () => {
  return (
    <section
      id="projects"
      className="projects sec-pad"
    >
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">
            Projects
          </span>
          <span className="heading-sec__sub">
            Here you will find some of
            the personal and clients
            projects that I created with
            each project containing its
            own case study
          </span>
        </h2>

        <div className="projects__content">
          {projectInfo.map(
            (project) => {
              return (
                <ProjectBox
                  key={project.name}
                  project={project}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};
