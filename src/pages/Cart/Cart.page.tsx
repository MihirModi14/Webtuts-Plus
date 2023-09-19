import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCart } from "../../APIs";
import { Message } from "../../components";
import { CartModel } from "../../models";
import { Button, Loader } from "../../stories";
import { ENDPOINT } from "../../utli/endpoints";
import { ROUTE } from "../../utli/constants/route.constant";

import { CartItem } from "../../components";
import CartStyle from "./Cart.module.scss";
import { useAuthInfo } from "../../hooks";

export const Cart = () => {
  // React Router Hooks
  const navigate = useNavigate();

  // State Variables
  const [cart, setCart] = useState<CartModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Custom Hooks
  const authInfo = useAuthInfo();
  /// Hooks
  useEffect(() => {
    callCartAPI();
  }, []);

  // API Calls
  const callCartAPI = (): void => {
    setIsLoading(true);
    getCart(ENDPOINT.CART + authInfo.state.token)
      .then((response) => {
        const cartItems: CartModel[] = response.data.cartItems;
        setCart(cartItems);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Page Events
  const onClickConfirmOrder = (): void => {
    navigate(ROUTE.ORDER);
  };

  // Helper Methods
  const getTotalPrice = (): number => {
    return cart.reduce(
      (totalPrice: number, cartItem: CartModel) =>
        totalPrice + Number(cartItem.product.price) * cartItem.quantity,
      0
    );
  };

  return (
    <div className={CartStyle.cart}>
      <div className="container">
        <h1>Shopping cart</h1>
        {cart.map((cartItem: CartModel) => {
          return (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              setIsLoading={setIsLoading}
              callCartAPI={callCartAPI}
            ></CartItem>
          );
        })}

        {cart.length !== 0 && (
          <div className={CartStyle.confirmOrder}>
            <h4>Total ${getTotalPrice()}</h4>
            <Button
              label=" Confirm Order"
              $primary={true}
              onClick={onClickConfirmOrder}
            ></Button>
          </div>
        )}

        {isLoading && <Loader type="linear" />}
        {!isLoading && cart.length === 0 && (
          <Message type="NO_DATA" message="Cart is Empty !!"></Message>
        )}
      </div>
    </div>
  );
};
