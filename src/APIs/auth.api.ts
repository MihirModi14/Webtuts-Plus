import { LoginModel, RegisterModel } from "../models";
import { post } from "../utli/apiManager";

const login = (
  endpoint: string,
  params: LoginModel,
  showAlert: boolean = false
) => post(endpoint, params, {}, showAlert);

const register = (
  endpoint: string,
  params: RegisterModel,
  showAlert: boolean = false
) => post(endpoint, params, {}, showAlert);

export { login, register };
