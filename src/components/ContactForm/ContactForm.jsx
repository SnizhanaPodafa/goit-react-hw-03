import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    number: Yup.string()
      .matches(/^[0-9-]+$/, "Only digits and hyphens are allowed")
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    addContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <div>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <Field id="name" type="text" name="name" className={s.input} />
          <ErrorMessage name="name" component="div" className={s.error} />
        </div>

        <div>
          <label htmlFor="number" className={s.label}>
            Number
          </label>
          <Field id="number" type="text" name="number" className={s.input} />
          <ErrorMessage name="number" component="div" className={s.error} />
        </div>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
