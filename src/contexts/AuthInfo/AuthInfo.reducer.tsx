import { removeAuthToken, setAuthToken } from "../../utli/helper/authHelper";

export type AuthDataModel = {
  isUserLogin: boolean;
  token: string | null;
};

interface SetTokenModel {
  token: string;
}

export type Action =
  | { type: "SET_TOKEN"; payload: SetTokenModel }
  | { type: "REMOVE_TOKEN" };

export type Dispatch = (action: Action) => void;

export const AuthInfoReducer = (state: AuthDataModel, action: Action) => {
  switch (action.type) {
    case "SET_TOKEN":
      const authToken: string = action.payload.token;
      setAuthToken(authToken);

      return {
        ...state,
        isUserLogin: true,
        token: action.payload.token,
      };
    case "REMOVE_TOKEN":
      removeAuthToken();
      return {
        ...state,
        isUserLogin: false,
        token: null,
      };
    default:
      return state;
  }
};
