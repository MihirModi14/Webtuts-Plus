import REGEX from "./regex";

// Common Functions
const isEmpty = (value: string): boolean => {
  if (value === null || value === undefined) {
    return true;
  } else if (typeof value === "string" && value === "") {
    return true;
  }
  return false;
};

const isValidLength = (value: string, length: number): boolean => {
  return value.length >= length;
};

// Validations
export const emailValidate = (value: string) => {
  if (isEmpty(value)) return "Email is required";
  if (!value?.match(REGEX.EMAIL)) return "Email should be valid";
};

export const loginPasswordValidate = (value: string) => {
  if (isEmpty(value)) return "Password is required";
};

export const registerPasswordValidate = (value: string) => {
  if (isEmpty(value)) return "Password is required";

  const validLength = 4;
  if (!isValidLength(value, validLength))
    return `Password should be more than ${validLength - 1} character`;

  if (!value?.match(REGEX.SINGLE_NUMBER))
    return "Password should contain atleast 1 number";
};

export const firstNameValidate = (value: string) => {
  if (isEmpty(value)) return "First name is required";
};

export const lastNameValidate = (value: string) => {
  if (isEmpty(value)) return "Last name is required";
};

export const ageValidation = (value: string) => {
  if (isEmpty(value)) return "Age is required";
  if (Number(value) < 18) return "Age must be at least 18 years old";
};

export const contactValidation = (value: string) => {
  if (!isEmpty(value) && !value?.match(REGEX.MOBILE_NUMBER))
    return "Contact number is invalid";
};

export const confirmPasswordValidate = (
  password: string,
  confirmPassword: string
) => {
  if (isEmpty(confirmPassword)) return "Confirm Password is required";
  if (password !== confirmPassword) return "Passwords do not match";
};

export const categoryTypeValidate = (value: number) => {
  if (!value) return "Category Type is required";
};

export const nameValidate = (value: string) => {
  if (isEmpty(value)) return "Name is required";
};

export const descriptionValidate = (value: string) => {
  if (isEmpty(value)) return "Description is required";
};

export const imageValidate = (value: string) => {
  if (isEmpty(value)) return "Image url is required";
};

export const priceValidate = (value: string) => {
  if (isEmpty(value)) return "Price is required";
};
