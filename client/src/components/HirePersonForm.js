import React from "react";
import { Formik } from "formik";
import personService from "../services/person";
import Button from "./Button";

const HirePersonForm = props => {
  const { hirePerson } = props;

  return (
    <Formik
      initialValues={{
        firstName: "Gaylord",
        lastName: "Lohiposki"
      }}
      onSubmit={values => {
        const newPerson = {
          ...personService.createPerson(),
          ...values
        };
        hirePerson(newPerson);
      }}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First name</label>
              <input
                id="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Last name</label>
              <input
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <Button type="submit">Palkkaa!</Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default HirePersonForm;
