// While adding wishlist it doesn't need category Id and while fetching list we are getting id.
export interface WishlistModel {
  categoryId?: number;
  description: string;
  id: number;
  imageURL: string;
  name: string;
  price: string;
}
