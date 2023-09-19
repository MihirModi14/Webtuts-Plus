import { AddUpdateCategoryModel } from "../models";
import { post } from "../utli/apiManager";

const updateCategory = (
  endpoint: string,
  params: AddUpdateCategoryModel,
  showAlert: boolean = false
) => post(endpoint, params, {}, showAlert);

const addCategory = (
  endpoint: string,
  params: AddUpdateCategoryModel,
  showAlert: boolean = false
) => post(endpoint, params, {}, showAlert);

export { updateCategory, addCategory };
