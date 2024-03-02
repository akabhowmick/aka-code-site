import "./Contact.css";
import "../../App.css";
import { SetStateAction, useState } from "react";
import { validEmail, validMessage, validName } from "./Validations";
import { TextFieldWithValidation } from "./TextFieldWithValidation";
import { emailErrorMessage, nameErrorMessage } from "./ErrorMessage";
export const Contact = () => {
  const [emailInput, setEmailInput] = useState("");
  const isEmailInputValid = validEmail(emailInput);
  const [messageInput, setMessageInput] = useState("");
  const isMessageInputValid = validMessage(emailInput);
  const [nameInput, setNameInput] = useState("");
  const isNameInputValid = validName(emailInput);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const reset = () => {
    setEmailInput("");
    setIsSubmitted(false);
  };

  const handleSignInSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (isNameInputValid && isMessageInputValid && isEmailInputValid) {
      reset();
    }
  };

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
          {/* <form action="#" className="contact__form" method="post"> */}
          <input type="hidden" name="form-name" value="form 1" />
          <TextFieldWithValidation
            label="Name"
            inputProps={{
              placeholder: "John Doe",
              value: nameInput,
              type: "text",
              onChange: (e: {
                target: {
                  value: SetStateAction<string>;
                };
              }) => {
                setNameInput(e.target.value);
              },
            }}
            errorMessage={nameErrorMessage}
            shouldDisplayError={!isNameInputValid && isSubmitted}
          />
          <TextFieldWithValidation
            label="Email"
            inputProps={{
              placeholder: "ab@bing.net",
              value: emailInput,
              type: "text",
              onChange: (e: {
                target: {
                  value: SetStateAction<string>;
                };
              }) => {
                setEmailInput(e.target.value);
              },
            }}
            errorMessage={emailErrorMessage}
            shouldDisplayError={!isEmailInputValid && isSubmitted}
          />
          <div className="contact__form-field">
            <label className="contact__form-label" htmlFor="message">
              Message
            </label>
            <textarea
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              required
              className="contact__form-input"
              placeholder="Enter Your Message"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn--theme contact__btn"
            onClick={(e) => handleSignInSubmit(e)}
          >
            Submit Message
          </button>
          {/* </form> */}
        </div>
      </div>
    </section>
  );
};
