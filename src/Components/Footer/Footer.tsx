import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-2">
            <h2 className="heading heading-sm text-lt">Akash Bhowmick</h2>
            <p className="main-footer__short-desc">
              A Fullstack Developer focused Web Development building the Websites and Web
              Applications that leads to the product's success.
            </p>
          </div>
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
                <LinkedInIcon className="social_media_icons" fontSize="large" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/akabhowmick">
                <GitHubIcon className="social_media_icons" fontSize="large" />
              </a>
            </div>
          </div>
        </div>
        <div className="main-footer__lower">
          <script>document.write( new Date().getFullYear() );</script> Made by
          <a target="_blank" href="https://akashbhowmick.com">
            Akash Bhowmick
          </a>
        </div>
      </div>
    </footer>
  );
};
