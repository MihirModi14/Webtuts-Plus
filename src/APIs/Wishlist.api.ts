import { WishlistModel } from "../models";
import { get, post } from "../utli/apiManager";

const getWishlist = (endpoint: string, showAlert: boolean = false) =>
  get(endpoint, {}, {}, showAlert);

const addToWishList = (
  endpoint: string,
  params: WishlistModel,
  showAlert: boolean = false
) => post(endpoint, params, {}, showAlert);

export { getWishlist, addToWishList };
