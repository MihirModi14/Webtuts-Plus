import { AddUpdateProductModel } from "../models";
import { post } from "../utli/apiManager";

const updateProduct = (
  endpoint: string,
  params: AddUpdateProductModel,
  showAlert: boolean = false
) => post(endpoint, params, {}, showAlert);

const addProduct = (
  endpoint: string,
  params: AddUpdateProductModel,
  showAlert: boolean = false
) => post(endpoint, params, {}, showAlert);

export { updateProduct, addProduct };
