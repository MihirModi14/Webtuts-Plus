export interface ProductModel {
  description: string;
  categoryId: number;
  id: number;
  imageURL: string;
  name: string;
  price: string;
}

export interface AddUpdateProductModel {
  id?: number;
  description: string;
  categoryId: number;
  imageURL: string;
  name: string;
  price: string;
}
