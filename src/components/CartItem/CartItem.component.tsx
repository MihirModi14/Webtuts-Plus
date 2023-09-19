import { useState } from "react";

import { removeFromCart, updateToCart } from "../../APIs";
import { useAuthInfo, useUserInfo } from "../../hooks";
import { ENDPOINT } from "../../utli/endpoints";

import CartStyle from "./CartItem.module.scss";

export const CartItem = ({ cartItem, setIsLoading, callCartAPI }: any) => {
  // State Variables
  const [quantity, setQuantity] = useState<number>(cartItem.quantity);

  // Custom Hooks
  const authInfo = useAuthInfo();
  const userInfo = useUserInfo();

  // Page Events
  const onUpdateQuantity = (
    id: number,
    productId: number,
    quantity: number
  ): void => {
    const params = {
      id: id,
      productId: productId,
      quantity: quantity,
    };

    const updateURL: string =
      ENDPOINT.UPDATE_TO_CART +
      `/${productId}` +
      `?token=${authInfo.state.token}`;
    updateToCart(updateURL, params, true).then(() => {
      callCartAPI();
    });
  };

  const onClickRemoveFromCart = (productId: number): void => {
    setIsLoading(true);
    const removeURL: string =
      ENDPOINT.REMOVE_FROM_CART +
      `/${productId}` +
      `?token=${authInfo.state.token}`;
    removeFromCart(removeURL, true)
      .then(() => {
        userInfo.dispatch({ type: "DECREASE_CART" });
      })
      .finally(() => {
        setIsLoading(false);
        callCartAPI();
      });
  };

  return (
    <div key={cartItem.id}>
      <div className={CartStyle.product}>
        <img src={cartItem.product.imageURL} alt={cartItem.product.name} />
        <div className={CartStyle.product__details}>
          <h3>{cartItem.product.name}</h3>
          <div className={CartStyle.product__price}>
            <span>${cartItem.product.price} per unit</span>
            <p>
              Total Price:
              <span> ${cartItem.product.price * cartItem.quantity}</span>
            </p>
          </div>
          <p className={CartStyle.product__quantity}>
            <span>Quantity: </span>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              onBlur={(e) =>
                onUpdateQuantity(
                  cartItem.id,
                  cartItem.product.id,
                  Number(e.target.value)
                )
              }
            />
          </p>
          <a onClick={() => onClickRemoveFromCart(cartItem.id)}>
            Remove From Cart
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};
