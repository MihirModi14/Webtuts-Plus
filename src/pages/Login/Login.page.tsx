import { useState } from "react";
import { Form, Field } from "react-final-form";
import { Link } from "react-router-dom";

import { login } from "../../APIs/auth.api";
import { useAuthInfo } from "../../hooks";
import { Button, Input } from "../../stories";
import { ROUTE } from "../../utli/constants/route.constant";
import { ENDPOINT } from "../../utli/endpoints";
import { emailValidate, loginPasswordValidate } from "../../utli/validations";

import LoginStyle from "./Login.module.scss";
import { LoginModel } from "../../models";

export const Login = () => {
  // State Variables
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Custom Hooks
  const authInfo = useAuthInfo();

  // Page Events
  const handleSubmit = (values: LoginModel) => {
    setIsLoading(true);
    login(ENDPOINT.LOGIN, values, true)
      .then((res) => {
        if (res && res.data && res.data.token) {
          authInfo.dispatch({
            type: "SET_TOKEN",
            payload: {
              token: res.data.token,
            },
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Helper Methods
  const validate = (values: LoginModel) => {
    const error = {
      email: emailValidate(values.email),
      password: loginPasswordValidate(values.password),
    };
    return error;
  };

  return (
    <div className={LoginStyle.login}>
      <div className={LoginStyle.authContainer}>
        <h1>LOGIN</h1>
        <Form
          onSubmit={handleSubmit}
          validate={validate}
          render={({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  render={({ input, meta }) => {
                    return (
                      <Input
                        {...input}
                        id="email"
                        labelType="Email"
                        placeholder="Enter Email"
                        type="email"
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
                        id="password"
                        labelType="Password"
                        placeholder="Enter Password"
                        type="password"
                        error={(meta.error && meta.touched) || false}
                        helperText={meta.touched && meta.error}
                        required
                      ></Input>
                    );
                  }}
                ></Field>
                <Button
                  $primary={true}
                  width="stretch"
                  label="Login"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                ></Button>
              </form>
            );
          }}
        ></Form>
        <div className={LoginStyle.toggleLink}>
          I don't have an account, <Link to={ROUTE.REGISTER}>Register</Link>
        </div>
      </div>
    </div>
  );
};
