export enum HeaderOptionsEnum {
  HOME = "Home",
  PRODUCT = "Product",
  CATEGORY = "Category",
  WISHLIST = "Wishlist",
  ADMIN = "admin",
  SIGNOUT = "Sign Out",
}

export const BrowserMenuOptions = [
  { id: 1, value: HeaderOptionsEnum.HOME },
  { id: 2, value: HeaderOptionsEnum.PRODUCT },
  { id: 3, value: HeaderOptionsEnum.CATEGORY },
];

export const AccountsMenuOptions = [
  { id: 1, value: HeaderOptionsEnum.WISHLIST },
  { id: 2, value: HeaderOptionsEnum.ADMIN },
  { id: 3, value: HeaderOptionsEnum.SIGNOUT },
];
