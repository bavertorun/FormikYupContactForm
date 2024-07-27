import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { ContactFormSchemas } from "../Schemas/ContactFormSchemas";
import { FormValues } from "../Types";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [showOther, setShowOther] = useState<boolean>(false);

  const { values, errors, touched, handleSubmit, getFieldProps } =
    useFormik<FormValues>({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        otherSubject: "",
        message: "",
      },
      validationSchema: ContactFormSchemas,
      onSubmit: (values: FormValues) => {
        const existingDataString = localStorage.getItem("formData");
        let existingData: FormValues[] = [];

        if (existingDataString) {
          existingData = JSON.parse(existingDataString);
        }

        existingData.push(values);
        localStorage.setItem("formData", JSON.stringify(existingData));
        toast.success("Form successfully submitted!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
    });

  useEffect(() => {
    setShowOther(values.subject === "other");
  }, [values.subject]);
  return (
    <div className="container mt-5">
      <div className="row col-md-6 mx-auto">
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div>
            <h1 className="form-title mb-2 fw-bold text-light">Contact Form</h1>
            <hr className="text-secondary border-2" />
          </div>
          <div className="row mb-3 align-items-center">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label text-light">
                First Name
              </label>
              <input
                type="text"
                className={`form-control bg-dark text-secondary ${
                  touched.firstName && errors.firstName
                    ? "is-invalid border-danger"
                    : "border-secondary"
                }`}
                id="firstName"
                {...getFieldProps("firstName")}
                placeholder="Enter your First Name"
              />
              {touched.firstName && errors.firstName ? (
                <div className="invalid-feedback">{errors.firstName}</div>
              ) : null}
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label text-light">
                Last Name
              </label>
              <input
                type="text"
                className={`form-control bg-dark text-secondary ${
                  touched.lastName && errors.lastName
                    ? "is-invalid border-danger"
                    : "border-secondary"
                }`}
                id="lastName"
                {...getFieldProps("lastName")}
                placeholder="Enter your Last Name"
              />
              {touched.lastName && errors.lastName ? (
                <div className="invalid-feedback">{errors.lastName}</div>
              ) : null}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">
              Email address
            </label>
            <input
              type="email"
              className={`form-control bg-dark text-secondary ${
                touched.email && errors.email
                  ? "is-invalid border-danger"
                  : "border-secondary"
              }`}
              id="email"
              {...getFieldProps("email")}
              placeholder="Enter your Email"
            />
            {touched.email && errors.email ? (
              <div className="invalid-feedback">{errors.email}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label text-light">
              Phone Number
            </label>
            <input
              type="tel"
              className={`form-control bg-dark text-secondary ${
                touched.phoneNumber && errors.phoneNumber
                  ? "is-invalid border-danger"
                  : "border-secondary"
              }`}
              id="phoneNumber"
              {...getFieldProps("phoneNumber")}
              placeholder="Enter your Phone Number"
            />
            {touched.phoneNumber && errors.phoneNumber ? (
              <div className="invalid-feedback">{errors.phoneNumber}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label text-light">
              Subject
            </label>
            <select
              className={`form-select bg-dark text-secondary ${
                touched.subject && errors.subject
                  ? "is-invalid border-danger"
                  : "border-secondary"
              }`}
              id="subject"
              {...getFieldProps("subject")}
            >
              <option value="">Select Your Subject</option>
              <option value="Subject 1">Subject 1</option>
              <option value="Subject 2">Subject 2</option>
              <option value="other">Other</option>
            </select>
            {touched.subject && errors.subject ? (
              <div className="invalid-feedback">{errors.subject}</div>
            ) : null}
            {values.subject === "other" && (
              <input
                type="text"
                className={`form-control mt-3 bg-dark text-secondary ${
                  touched.otherSubject && errors.otherSubject
                    ? "is-invalid border-danger"
                    : "border-secondary"
                }`}
                id="otherSubject"
                {...getFieldProps("otherSubject")}
                placeholder="Enter Other Subject"
              />
            )}
            {touched.otherSubject && errors.otherSubject ? (
              <div className="invalid-feedback">{errors.otherSubject}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-light">
              Message
            </label>
            <textarea
              className={`form-control bg-dark text-secondary ${
                touched.message && errors.message
                  ? "is-invalid border-danger"
                  : "border-secondary"
              }`}
              id="message"
              {...getFieldProps("message")}
              placeholder="Enter your message"
            ></textarea>
            {touched.message && errors.message ? (
              <div className="invalid-feedback">{errors.message}</div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-warning w-100 mb-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
