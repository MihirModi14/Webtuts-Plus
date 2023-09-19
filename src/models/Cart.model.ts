import { ProductModel } from ".";

export interface CartModel {
  id: number;
  product: ProductModel;
  quantity: number;
}

export interface AddUpdateCartModel {
  id: number;
  productId: number;
  quantity: number;
}
