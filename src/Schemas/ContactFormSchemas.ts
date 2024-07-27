import * as Yup from 'yup';

export const ContactFormSchemas = Yup.object().shape({

    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    otherSubject: Yup.string().when("subject", {
      is: "other",
      then:(schema) => schema.required("Please specify the subject"),
    }),
    message: Yup.string().required("Message is required"),

});