import { get } from "../utli/apiManager";

const getCategories = (endpoint: string, showAlert: boolean = false) =>
  get(endpoint, {}, {}, showAlert);

export { getCategories };
