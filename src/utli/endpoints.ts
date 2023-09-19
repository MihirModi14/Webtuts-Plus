const API_BASE_URL = "https://limitless-lake-55070.herokuapp.com";

const ENDPOINT = {
  LOGIN: API_BASE_URL + "/user/signIn",
  REGISTER: API_BASE_URL + "/user/signup",

  PRODUCTS: API_BASE_URL + "/product/",
  CATEGORIES: API_BASE_URL + "/category/",

  CART: API_BASE_URL + `/cart/?token=`,
  ADD_TO_CART: API_BASE_URL + `/cart/add?token=`,
  UPDATE_TO_CART: API_BASE_URL + `/cart/update`,
  REMOVE_FROM_CART: API_BASE_URL + `/cart/delete`,

  WISHLIST: API_BASE_URL + `/wishlist/`,
  ADD_TO_WISHLIST: API_BASE_URL + `/wishlist/add?token=`,
  UPDATE_PRODUCT: API_BASE_URL + "/product/update",
  ADD_PRODUCT: API_BASE_URL + "/product/add",
  UPDATE_CATEGORY: API_BASE_URL + "/category/update",
  ADD_CATEGORY: API_BASE_URL + "/category/create",
};

export { ENDPOINT, API_BASE_URL };
