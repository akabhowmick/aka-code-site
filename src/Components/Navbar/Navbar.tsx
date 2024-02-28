import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="main-header">
      <div className="main-header__logo-container">
        <div className="main-header__logo-img-cont">
          <img
            //! replace the image
            src="https://d33wubrfki0l68.cloudfront.net/32c48e23e828c42a99a37db81e2a91d7c8eed4de/d134a/assets/png/ram-maheshwari.png"
            alt="logo Image"
            className="main-header__logo-img"
          />
        </div>
        <h4 className="main-header__logo-text">Akash Bhowmick</h4>
      </div>
      <nav className="main-header__navigation">
        <ul className="main-header__navigation-links">
          <li className="main-header__navigation-link">
            <a href="./index.html"> Home </a>
          </li>
          <li className="main-header__navigation-link">
            <a href="./index.html#about"> About </a>
          </li>
          <li className="main-header__navigation-link">
            <a href="./index.html#projects"> Projects </a>
          </li>
          <li className="main-header__navigation-link">
            <a href="./index.html#contact"> Contact </a>
          </li>
        </ul>
      </nav>
      <div className="main-header__sm-scr-nav-btn">
        <div className="main-header__sm-scr-nav-btn-line"></div>
        <div className="main-header__sm-scr-nav-btn-line"></div>
      </div>
      <div className="main-header__sm-menu">
        <div className="main-header__sm-menu-close"></div>
        <ul className="main-header__sm-menu-links">
          <li>
            <a
              className="main-header__sm-menu-link main-header__sm-menu-link--1"
              id="home-hero"
            >
              Home
            </a>
          </li>

          <li>
            <a
              className="main-header__sm-menu-link main-header__sm-menu-link--2"
              id="about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="main-header__sm-menu-link main-header__sm-menu-link--3"
              id="projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="main-header__sm-menu-link main-header__sm-menu-link--4"
              id="contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* <button className="btn btn-theme btn-sm">Download CV</button> */}
    </header>
  );
};
