import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import * as formik from "formik";
import * as yup from "yup";
import Row from "react-bootstrap/esm/Row";

export const ContactForm = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  });

  const handleFormSubmitClick = (e: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }) => {
    console.log("form submit", e.firstName);
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(e) => handleFormSubmitClick(e)}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <FloatingLabel
                controlId="firstName"
                label="First name"
                className="mb-3 form-input-label"
              >
                <Form.Control
                  className="contact-form-input"
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <FloatingLabel controlId="validationFormik01" label="Last name" className="mb-3">
                <Form.Control
                  className="contact-form-input"
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <FloatingLabel controlId="email" label="Email Address" className="mb-3">
                <Form.Control
                  className="contact-form-input"
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group as={Col}>
            <FloatingLabel controlId="message" label="Comments">
              <Form.Control
                className="contact-form-input"
                as="textarea"
                style={{ height: "200px" }}
                value={values.message}
                onChange={handleChange}
                isValid={touched.message && !errors.message}
              />
            </FloatingLabel>
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
};
