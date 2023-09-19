import { Form, Field } from "react-final-form";

import { Button, Input } from "../../../../stories";
import { PersonalDetailsModel, UserInfoModel } from "../../../../models";
import {
  confirmPasswordValidate,
  emailValidate,
  registerPasswordValidate,
} from "../../../../utli/validations";

import PersonalDetailStyle from "./PersonalDetails.module.scss";

export const PersonalData = ({
  onSubmit,
  userInfo,
}: {
  onSubmit: Function;
  userInfo?: UserInfoModel;
}) => {
  // Page Events
  const handleSubmit = (values: PersonalDetailsModel) => {
    onSubmit(values);
  };

  // Helper Methods
  const validate = (values: PersonalDetailsModel) => {
    let errors: any = {
      email: emailValidate(values.email),
      password: registerPasswordValidate(values.password),
      confirmPassword: confirmPasswordValidate(
        values.password,
        values.confirmPassword
      ),
    };
    return errors;
  };

  return (
    <div className={PersonalDetailStyle.details}>
      <h1>Personal Details</h1>
      <Form
        onSubmit={handleSubmit}
        validate={validate}
        initialValues={{
          email: userInfo?.email || "",
          password: userInfo?.password || "",
          confirmPassword: userInfo?.password || "",
        }}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} noValidate>
              <div className={PersonalDetailStyle.formFields}>
                <Field
                  name="email"
                  render={({ input, meta }) => {
                    return (
                      <Input
                        {...input}
                        type="email"
                        id="email"
                        labelType="Email"
                        placeholder="Enter Email"
                        error={(meta.error && meta.touched) || false}
                        helperText={meta.touched && meta.error}
                        required
                      ></Input>
                    );
                  }}
                ></Field>
                <Field
                  name="password"
                  render={({ input, meta }) => {
                    return (
                      <Input
                        {...input}
                        type="password"
                        id="password"
                        labelType="Password"
                        placeholder="Enter Password"
                        error={(meta.error && meta.touched) || false}
                        helperText={meta.touched && meta.error}
                        required
                      ></Input>
                    );
                  }}
                ></Field>
                <Field
                  name="confirmPassword"
                  render={({ input, meta }) => {
                    return (
                      <Input
                        {...input}
                        type="password"
                        id="confirmPassword"
                        labelType="Confirm Password"
                        placeholder="Enter Confirm Password"
                        error={(meta.error && meta.touched) || false}
                        helperText={meta.touched && meta.error}
                        required
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
