import { ProductModel } from "./Product.model";

export interface CategoryModel {
  categoryName: string;
  description: string;
  id: number;
  imageUrl: string;
  products: ProductModel[];
}

export interface AddUpdateCategoryModel {
  categoryName: string;
  description: string;
  imageUrl: string;
}
