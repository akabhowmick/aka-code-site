import "./Contact.css";
export const Contact = () => {
  return (
    <section id="contact" className="contact main-section">
      <div className="main-container">
        <h2 className="heading-secondary">
          <span className="heading-secondary__sm"> Contact 📞</span>
          <span className="heading-secondary__main">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </span>
        </h2>
        <div className="main-section__content">
          <div className="contact__form-cont">
            <form className="contact__form">
              <div className="contact__form-field">
                <label htmlFor="name" className="contact__form-field-label">
                  Name
                </label>
                <input
                  placeholder="Enter Your Name"
                  type="text"
                  className="contact__form-field-input"
                />
              </div>
              <div className="contact__form-field">
                <label htmlFor="name" className="contact__form-field-label">
                  Email
                </label>
                <input
                  placeholder="Enter Your Email"
                  type="text"
                  className="contact__form-field-input"
                />
              </div>
              <div className="contact__form-field">
                <label htmlFor="name" className="contact__form-field-label">
                  Message
                </label>
                <textarea
                  placeholder="Enter Your Message"
                  name="message"
                  id=""
                  className="contact__form-field-input"
                ></textarea>
              </div>
              <button type="submit" className="contact__form-submit">
                Submit
              </button>
            </form>
            <div className="contact__form-visual"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
