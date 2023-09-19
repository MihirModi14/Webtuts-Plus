import { Field, Form } from "react-final-form";

import { Button, Checkbox } from "../../../../stories";

import TermsStyle from "./TermsConditions.module.scss";

export const TermsConditions = ({ onSubmit }: { onSubmit: Function }) => {
  // Page Events
  const handleSubmit = (values: any) => {
    let errors: any = {};
    if (!values.first) errors["first"] = true;
    if (!values.second) errors["second"] = true;
    if (!values.third) errors["third"] = true;
    if (Object.keys(errors).length !== 0) return errors;

    onSubmit();
  };

  return (
    <div className={TermsStyle.terms}>
      <h1>Terms and conditions</h1>
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit }: any) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className={TermsStyle.formFields}>
                <Field
                  name="first"
                  type="checkbox"
                  render={({ input, meta }) => {
                    return (
                      <div>
                        <Checkbox
                          {...input}
                          error={meta.submitError}
                        ></Checkbox>
                        <span>
                          I have read and agree to the Terms and Conditions.
                        </span>
                      </div>
                    );
                  }}
                ></Field>
                <Field
                  name="second"
                  type="checkbox"
                  render={({ input, meta }) => {
                    return (
                      <div>
                        <Checkbox
                          {...input}
                          error={meta.submitError}
                        ></Checkbox>
                        <span>
                          I consent to receive promotional emails and updates.
                        </span>
                      </div>
                    );
                  }}
                ></Field>
                <Field
                  name="third"
                  type="checkbox"
                  render={({ input, meta }) => {
                    return (
                      <div>
                        <Checkbox
                          {...input}
                          error={meta.submitError}
                        ></Checkbox>
                        <span>I confirm that I am at least 18 years old. </span>
                      </div>
                    );
                  }}
                ></Field>
              </div>
              <Button
                $primary={true}
                size="large"
                label="Finish"
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
