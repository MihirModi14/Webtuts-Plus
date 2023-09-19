import { AddUpdateCartModel } from "../models";
import { deleteAPI, get, post, put } from "../utli/apiManager";

const getCart = (endpoint: string, showAlert: boolean = false) =>
  get(endpoint, {}, {}, showAlert);

const addToCart = (
  endpoint: string,
  params: AddUpdateCartModel,
  showAlert: boolean = false
) => post(endpoint, params, {}, showAlert);

const removeFromCart = (endpoint: string, showAlert: boolean = false) =>
  deleteAPI(endpoint, {}, {}, showAlert);

const updateToCart = (
  endpoint: string,
  params: AddUpdateCartModel,
  showAlert: boolean = false
) => put(endpoint, params, {}, showAlert);

export { getCart, addToCart, removeFromCart, updateToCart };
