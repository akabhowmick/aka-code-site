import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Project, projectInfo } from "./ProjectInfo";
import "./Project.css";

export const ProjectPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    if (projectId) {
      setProject(projectInfo[parseInt(projectId!, 10) - 1]);
    }
  }, [projectId]);

  return (
    <>
      <Navbar />
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <div className="air air1"></div>
          <div className="air air2"></div>
          <div className="air air3"></div>
          <div className="air air4"></div>
          <h1 className="heading-primary">{project?.name}</h1>
          <div className="project-cs-hero__info">
            <p className="text_primary">
              This page contains the case study of the {project?.name} which includes the Project
              Overview, Tools Used and Live Links to the official product.
            </p>
          </div>
          <div className="project-cs-hero__cta">
            <a id="project-page-cta" href={project?.link} className="btn btn--bg" target="_blank" rel="noreferrer">
              Live Link
            </a>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont">
              <img
                src={project?.image}
                alt="Project Image"
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h2 className="project-details__content-title">Project Overview</h2>
                {project?.description.map((sentence, index) => {
                  return (
                    <p key={index} className="project-details__desc-para">
                      {sentence}
                    </p>
                  );
                })}
              </div>
              <div className="project-details__tools-used">
                <h2 className="project-details__content-title">Tools Used</h2>
                <div className="skills">
                  {project?.techStack.map((tech) => {
                    return (
                      <div key={tech} className="skills__skill">
                        {tech.toUpperCase()}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="project-details__links">
                <h2 className="project-details__content-title">See Live</h2>
                <a
                  href={project?.link}
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
                <a href="/" className="btn btn--med btn--theme-inv project-details__links-btn">
                  Go Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
