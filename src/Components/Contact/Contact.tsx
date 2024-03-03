import "./Contact.css";
import "../../App.css";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Feel free to Contact me by submitting the form below and I will get back to you as soon
            as possible
          </span>
        </h2>
        <div className="contact__form-container">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};