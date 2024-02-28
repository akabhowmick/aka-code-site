import { myStory, techIcons, techStack } from "./HomePageInfo";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <section id="home-hero" className="home-hero">
        <div className="home-hero__content">
          <div className="home-hero__info">
            <h1 className="heading-primary home-hero__heading-primary">
              <span className="heading-primary__sm"> Hello 👋</span>
              <span className="heading-primary__main">
                I'm Akash Bhowmick! A Web Developer Building Awesome Web Apps
                And Websites That Powers The Internet
              </span>
            </h1>
            <button className="btn btn-theme home-hero__btn-theme">
              Projects
            </button>
            <button className="btn btn-inv home-hero__btn-theme">
              Contact
            </button>
          </div>
        </div>
      </section>
      <section id="about" className="about main-section">
        <div className="main-container">
          <h2 className="heading-secondary projects__heading-secondary">
            <span className="heading-secondary__sm"> About 🦄</span>
            <span className="heading-secondary__main" />
            Here you will find more information about me, what I do, and list of
            my current skills in programming.
          </h2>
          <div className="main-section__content">
            <div className="about__info">
              <div className="about__main-info">
                <h3 className="heading-quaternary about__heading-quaternary">
                  My Story
                </h3>
                <p className="text-primary about__text-primary">
                  {myStory.map((story, index) => {
                    return <span key={index}>{story}</span>;
                  })}
                </p>
                <button className="btn btn-theme about__btn-theme">
                  Projects
                </button>
              </div>
              <div className="about__skill-info">
                <h3 className="heading-quaternary about__heading-quaternary">
                  My Skills
                </h3>
                <ul className="about__skills">
                  {techStack.map((tech) => {
                    return (
                      <li key={tech} className="about__skill">
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills-showcase">
        <ul className="skills-showcase__list">
          {techIcons.map((icon) => {
            return (
              <li className="skills-showcase__list-item">
                <i className={icon}></i>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
