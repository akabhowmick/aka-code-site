import "./Portfolio.css";
import { ProjectBox } from "../Project/ProjectBox";
import { projectInfo } from "../Project/ProjectInfo";
export const Portfolio = () => {
  return (
    <section id="projects" className="projects main-section">
      <div className="main-container">
        <h2 className="heading-secondary projects__heading-secondary">
          <span className="heading-secondary__sm"> Projects 🛠️</span>
          <span className="heading-secondary__main">
            Here you will find some of the personal and clients projects that I
            created with the project details
          </span>
        </h2>
        <div className="main-section__content">
          <div className="projects__list">
            <div className="projects__list-item">
              <div className="projects__list-item-count">
                <span className="projects__list-item-count-num"> 1 </span>
                <span className="projects__list-item-count-line"> </span>
                <span className="projects__list-item-count-end-dot"> </span>
              </div>
              {projectInfo.map((project) => {
                return <ProjectBox key={project.name} project={project} />;
              })}
              <div className="projects__list-item-count">
                <span className="projects__list-item-count-num"> 4 </span>
                <span className="projects__list-item-count-line"> </span>
                <span className="projects__list-item-count-end-dot"> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
