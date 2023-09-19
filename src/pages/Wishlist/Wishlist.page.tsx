import { useEffect, useState } from "react";

import { getWishlist } from "../../APIs";
import { WishlistModel } from "../../models";
import { CardComponent, Loader } from "../../stories";
import { ENDPOINT } from "../../utli/endpoints";

import WishlistStyle from "./Wishlist.module.scss";
import { Message } from "../../components";
import { useAuthInfo } from "../../hooks";

export const Wishlist = () => {
  // State Variables
  const [isLoading, setIsLoading] = useState(false);
  const [wishList, setWishList] = useState<WishlistModel[]>([]);

  // Custom Hooks
  const authInfo = useAuthInfo();

  // Hooks
  useEffect(() => {
    callWishlistAPI();
  }, []);

  // API Calls
  const callWishlistAPI = (): void => {
    setIsLoading(true);
    getWishlist(ENDPOINT.WISHLIST + authInfo.state.token)
      .then((response) => {
        const wishlist: WishlistModel[] = response.data;
        setWishList(wishlist);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={WishlistStyle.wishlist}>
      <div className="container">
        <h1>Your WishList</h1>
        <div className={WishlistStyle.products}>
          {wishList.map((wishListItem: WishlistModel, index: number) => {
            return (
              wishListItem.name && (
                <CardComponent
                  isProductCard={true}
                  categoryId={wishListItem.categoryId || 0}
                  productId={wishListItem.id}
                  key={index}
                  image={wishListItem.imageURL}
                  title={wishListItem.name}
                  price={wishListItem.price}
                  description={wishListItem.description}
                ></CardComponent>
              )
            );
          })}
        </div>

        {isLoading && <Loader type="linear"></Loader>}
        {!isLoading && wishList.length === 0 && (
          <Message type="NO_DATA" message="Wishlist is Empty !!"></Message>
        )}
      </div>
    </div>
  );
};
