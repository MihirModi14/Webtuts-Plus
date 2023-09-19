import { get } from "../utli/apiManager";

const getProducts = (endpoint: string, showAlert: boolean = false) =>
  get(endpoint, {}, {}, showAlert);

export { getProducts };
