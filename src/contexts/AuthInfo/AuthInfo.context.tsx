import { createContext, useReducer } from "react";
import { AuthDataModel, Dispatch } from "./AuthInfo.reducer";
import { getAuthToken, isUserLoggedIn } from "../../utli/helper/authHelper";
import { AuthInfoReducer } from "./AuthInfo.reducer";

const initialAuthData: AuthDataModel = {
  isUserLogin: isUserLoggedIn(),
  token: getAuthToken(),
};

export const AuthContext = createContext<
  { state: AuthDataModel; dispatch: Dispatch } | undefined
>(undefined);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(AuthInfoReducer, initialAuthData);
  const value = { state, dispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
