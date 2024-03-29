import { myStory, techIcons, techStack } from "./HomePageInfo";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <div className="air air1"></div>
          <div className="air air2"></div>
          <div className="air air3"></div>
          <div className="air air4"></div>
          <h1 className="heading-primary">Hi, I'm Akash Bhowmick!</h1>
          <div className="project-cs-hero__info">
            <p className="text_primary">
              A Full Stack Web Developer that loves to build and manage Websites and Web
              Applications that leads to the success of the overall product
            </p>
          </div>
          <div className="hero-btn">
            <a href="./#projects">
              <button className="btn btn-theme home-hero__btn-theme">Projects</button>
            </a>
            <a href="./#contact">
              <button className="btn btn-theme home-hero__btn-theme">Contact</button>
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">About Me</span>
            <span className="heading-sec__sub">
              Here you will find more information about me, what I do, and my current skills mostly
              in terms of programming and technology
            </span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <h3 className="about__content-title">Get to know me!</h3>
              <div className="about__content-details">
                {myStory.map((story, index) => {
                  return (
                    <p className="about__content-details-para" key={index}>
                      {story}
                    </p>
                  );
                })}
              </div>
              <a href="./#contact">
                <button className="btn">
                  <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                  </svg>
                  <span>Get in touch!</span>
                </button>
              </a>
            </div>
            <div className="about__content-skills">
              <h3 className="about__content-title">My Skills</h3>
              <ul className="skills">
                {techStack.map((tech) => {
                  return (
                    <li key={tech} aria-label={tech} className="about__skill">
                      {tech}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-showcase">
        <ul className="skills-showcase__list">
          {techIcons.map((icon) => {
            return (
              <li key={icon} className="skills-showcase__list-item">
                <i className={icon}></i>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
