import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer__upper">
        <div className="main-container">
          <ul className="main-footer__links">
            <li className="main-footer__link">
              <a href="./index.html">Home</a>
            </li>
            <li className="main-footer__link">
              <a href="./index.html#about">About</a>
            </li>
            <li className="main-footer__link">
              <a href="./index.html#projects">Projects</a>
            </li>
            <li className="main-footer__link">
              <a href="./index.html#contact">Contact</a>
            </li>
          </ul>
          <div className="main-footer__mid-line"></div>
          <div className="main-footer__socials">
            <a href="#" className="main-footer__social-link">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
                alt=""
                className="main-footer__social-link-icon"
              />
            </a>
            <a href="#" className="main-footer__social-link">
              <img
                src="./assets/icons8-instagram-48.png"
                alt=""
                className="main-footer__social-link-icon"
              />
            </a>
            <a href="#" className="main-footer__social-link">
              <img
                src="./assets/icons8-twitter-50.png"
                alt=""
                className="main-footer__social-link-icon"
              />
            </a>
            <a href="#" className="main-footer__social-link">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                alt=""
                className="main-footer__social-link-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
