import "./Portfolio.css";
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
              <div className="projects__list-item-details">
                <div className="projects__list-item-img-cont">
                  <img
                    src="./assets/mock.png"
                    alt="Project Image"
                    className="projects__list-item-img"
                  />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                  Project Name
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, aliquid! Itaque corrupti magnam fugiat mollitia
                    labore magni saepe veritatis voluptatum alias fugit.
                    Explicabo ducimus
                  </span>
                  <span>
                    sapiente aut corporis odio repellendus? Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit
                  </span>
                </p>
                <button className="btn btn-theme projects__btn-theme">
                  Live Link
                </button>
                <button className="btn btn-inv projects__btn-inv">
                  Code Link
                </button>
              </div>
            </div>
            <div className="projects__list-item projects__list-item--inv">
              <div className="projects__list-item-details">
                <div className="projects__list-item-img-cont">
                  <img
                    src="./assets/mock.png"
                    alt="Project Image"
                    className="projects__list-item-img"
                  />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                  Project Name
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, aliquid! Itaque corrupti magnam fugiat mollitia
                    labore magni saepe veritatis voluptatum alias fugit.
                    Explicabo ducimus
                  </span>

                  <span>
                    sapiente aut corporis odio repellendus? Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit
                  </span>
                </p>
                <button className="btn btn-theme projects__btn-theme">
                  Live Link
                </button>
                <button className="btn btn-inv projects__btn-inv">
                  Code Link
                </button>
              </div>
              <div className="projects__list-item-count">
                <span className="projects__list-item-count-num"> 2 </span>
                <span className="projects__list-item-count-line"> </span>
                <span className="projects__list-item-count-end-dot"> </span>
              </div>
            </div>
            <div className="projects__list-item">
              <div className="projects__list-item-count">
                <span className="projects__list-item-count-num"> 3 </span>
                <span className="projects__list-item-count-line"> </span>
                <span className="projects__list-item-count-end-dot"> </span>
              </div>
            </div>
            <div className="projects__list-item projects__list-item--inv">
              <div className="projects__list-item-details">
                <div className="projects__list-item-img-cont">
                  <img
                    src="./assets/mock.png"
                    alt="Project Image"
                    className="projects__list-item-img"
                  />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                  Project Name
                </h3>

                <p className="text-primary projects__list-item-text-primary">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, aliquid! Itaque corrupti magnam fugiat mollitia
                    labore magni saepe veritatis voluptatum alias fugit.
                    Explicabo ducimus
                  </span>
                  <span>
                    sapiente aut corporis odio repellendus? Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit
                  </span>
                </p>
                <button className="btn btn-theme projects__btn-theme">
                  Live Link
                </button>
                <button className="btn btn-inv projects__btn-inv">
                  Code Link
                </button>
              </div>
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
