import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a
                target="_blank"
                rel="noreferrer"
                href=""
                // ! update with my linked in
              >
                <img
                  className="main-footer__icon"
                  src="./assets/png/linkedin-ico.png"
                  alt="Akash Bhowmick Linkedin Profile"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/akabhowmick"
              >
                <img
                  className="main-footer__icon"
                  src="./assets/png/github-ico.png"
                  alt="Akabhowmick Github Profile"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h2 className="heading heading-sm text-lt">
              Akash Bhowmick
            </h2>
            <p className="main-footer__short-desc">
              A Fullstack Developer
              focused Web Development
              building the Websites and
              Web Applications that
              leads to the product's success.
            </p>
          </div>
        </div>
        <div className="main-footer__lower">
          &copy; Copyright
          <script>
            document.write( new
            Date().getFullYear() );
          </script>
          . Made by
          <a
            target="_blank"
            href="https://akashbhowmick.com"
          >
            Akash Bhowmick
          </a>
        </div>
      </div>
    </footer>
  );
};
