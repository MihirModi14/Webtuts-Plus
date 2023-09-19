export interface UserDetailsModel {
  cartSize: number;
}

export type Action =
  | { type: "SET_CART"; payload: number }
  | { type: "INCREASE_CART" }
  | { type: "DECREASE_CART" };

export type Dispatch = (action: Action) => void;

export const UserInfoReducer = (state: UserDetailsModel, action: Action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        cartSize: action.payload,
      };
    case "INCREASE_CART":
      return {
        ...state,
        cartSize: state.cartSize + 1,
      };
    case "DECREASE_CART":
      return {
        ...state,
        cartSize: state.cartSize - 1,
      };
    default:
      return state;
  }
};
