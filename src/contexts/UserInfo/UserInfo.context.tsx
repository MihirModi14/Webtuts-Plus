import { createContext, useEffect, useReducer } from "react";
import {
  Dispatch,
  UserInfoReducer,
  UserDetailsModel,
} from "./UserInfo.reducer";
import { getCart } from "../../APIs";
import { ENDPOINT } from "../../utli/endpoints";
import { useAuthInfo } from "../../hooks";

const initialUserDetails: UserDetailsModel = {
  cartSize: 0,
};

export const UserContext = createContext<
  { state: UserDetailsModel; dispatch: Dispatch } | undefined
>(undefined);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // State Variables
  const [state, dispatch] = useReducer(UserInfoReducer, initialUserDetails);

  // Custom Hooks
  const authInfo = useAuthInfo();

  // Hooks
  useEffect(() => {
    if (authInfo.state.isUserLogin) {
      updateCart();
    }
  }, [authInfo.state.isUserLogin]);

  // Helper Methods
  const updateCart = () => {
    getCart(ENDPOINT.CART + authInfo.state.token, false).then((response) => {
      if (response && response.data && response.data.cartItems) {
        dispatch({
          type: "SET_CART",
          payload: response.data.cartItems.length,
        });
      }
    });
  };

  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
