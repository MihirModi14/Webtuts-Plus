import { ACCESS_TOKEN_KEY } from "../constants/storage.constant";

// STORE DATA IN LOCAL STORAGE
const setToStore = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

//GETTER SETTER FOR THE AUTH TOKEN FROM LOCAL STORAGE
const getAuthToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

const setAuthToken = (token: string) => {
  setToStore(ACCESS_TOKEN_KEY, token);
};

const removeAuthToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

// CHECK FOR WHEATHER USER LOGGED IN OR NOT
const isUserLoggedIn = () => {
  return !!getAuthToken();
};

export { setAuthToken, getAuthToken, isUserLoggedIn, removeAuthToken };
