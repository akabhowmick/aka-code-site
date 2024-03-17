import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [buttonState, setButtonState] = useState("Send Message");
  const formik = useFormik({
    initialValues: {
      from_name: "", //user name
      subject: "", // subject of email
      reply_to: "", // user email
      message: "", // message of email
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("* Name field is required"),
      subject: Yup.string().required("* Subject field is required"),
      reply_to: Yup.string().email("Invalid email address").required("* Email field is required"),
      message: Yup.string().required("* Message field is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      try {
        emailjs
          .send("service_iodyf8e", "template_s9bux1j", values, "a8dh5CLKMF5OX1aLy")
          .then(() => {
            setButtonState("Send Email");
            setSubmitting(false);
            resetForm();
          });
      } catch {
        setButtonState("Send Email");
        setSubmitting(false);
      }
    },
  });

  const contactFormInput = [
    { name: "Name", label: "from_name" },
    { name: "Email", label: "reply_to" },
    { name: "Subject", label: "subject" },
    { name: "Message", label: "message" },
  ];

  const getFormikValues = (label: string) => {
    if (label === "from_name") {
      return formik.values.from_name;
    } else if (label === "reply_to") {
      return formik.values.reply_to;
    } else if (label === "message") {
      return formik.values.message;
    } else if (label === "subject") {
      return formik.values.subject;
    }
    return "";
  };

  const getFormikErrors = (label: string) => {
    if (label === "from_name") {
      return formik.errors.from_name;
    } else if (label === "reply_to") {
      return formik.errors.reply_to;
    } else if (label === "message") {
      return formik.errors.message;
    } else if (label === "subject") {
      return formik.errors.subject;
    }
    return "";
  };

  const contactFormInputs = contactFormInput.map(({ name, label }) => {
    return (
      <div key={name} className="contact-form-div">
        <label htmlFor={label}>{name}</label>
        <input
          className="contact-form-input"
          id={label}
          name={label}
          type="text"
          autoComplete="off"
          placeholder={`Your ${name}`}
          onChange={formik.handleChange}
          value={getFormikValues(label)}
        />
        {formik.submitCount > 0 && getFormikErrors(label) && (
          <div className="expandable show">{getFormikErrors(label)}</div>
        )}
      </div>
    );
  });

  return (
    <form className="formcontact" onSubmit={formik.handleSubmit}>
      <div className="contactform">
        {contactFormInputs}
        <div className="col-12">
          <button disabled={formik.isSubmitting} type="submit" className="btn main-btn">
            <span>{buttonState}</span>
          </button>
        </div>
        <div className="col-12 form-message">
          <span id="output" className="output_message text-center text-uppercase" />
        </div>
      </div>
    </form>
  );
};
