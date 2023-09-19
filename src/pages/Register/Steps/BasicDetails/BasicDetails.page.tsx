import { Form, Field } from "react-final-form";

import { BasicDetailsModel } from "../../../../models";
import { Button, Input } from "../../../../stories";

import UserDetailStyle from "./BasicDetails.module.scss";
import {
  ageValidation,
  contactValidation,
  firstNameValidate,
  lastNameValidate,
} from "../../../../utli/validations";

export const BasicDetails = ({ onSubmit }: { onSubmit: Function }) => {
  // Page Events
  const handleSubmit = (values: BasicDetailsModel) => {
    onSubmit(values);
  };

  // Helper Methods
  const validate = (values: BasicDetailsModel) => {
    const errors = {
      firstName: firstNameValidate(values.firstName),
      lastName: lastNameValidate(values.lastName),
      age: ageValidation(values.age),
      number: contactValidation(values.number || ""),
    };
    return errors;
  };

  return (
    <div className={UserDetailStyle.details}>
      <h1>Basic Details</h1>
      <Form
        onSubmit={handleSubmit}
        validate={validate}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} noValidate>
              <div className={UserDetailStyle.formFields}>
                <Field
                  name="firstName"
                  render={({ input, meta }) => {
                    return (
                      <Input
                        {...input}
                        type="text"
                        id="firstName"
                        labelType="First Name"
                        placeholder="Enter First Name"
                        error={(meta.error && meta.touched) || false}
                        helperText={meta.touched && meta.error}
                        required
                      ></Input>
                    );
                  }}
                ></Field>
                <Field
                  name="lastName"
                  render={({ input, meta }) => {
                    return (
                      <Input
                        {...input}
                        type="text"
                        id="lastName"
                        labelType="Last Name"
                        placeholder="Enter Last Name"
                        error={(meta.error && meta.touched) || false}
                        helperText={meta.touched && meta.error}
                        required
                      ></Input>
                    );
                  }}
                ></Field>

                <Field
                  name="age"
                  render={({ input, meta }) => {
                    return (
                      <Input
                        {...input}
                        type="number"
                        id="age"
                        labelType="Age"
                        placeholder="Enter Age"
                        error={(meta.error && meta.touched) || false}
                        helperText={meta.touched && meta.error}
                        required
                      ></Input>
                    );
                  }}
                ></Field>
                <Field
                  name="number"
                  render={({ input, meta }) => {
                    return (
                      <Input
                        {...input}
                        type="text"
                        id="number"
                        labelType="Contact Number"
                        placeholder="Enter Number"
                        error={(meta.error && meta.touched) || false}
                        helperText={meta.touched && meta.error}
                      ></Input>
                    );
                  }}
                ></Field>
              </div>
              <Button
                $primary={true}
                size="large"
                label="Complete Step"
                type="submit"
                width="stretch"
              ></Button>
            </form>
          );
        }}
      ></Form>
    </div>
  );
};
