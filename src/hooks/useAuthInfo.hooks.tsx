import { useContext } from "react";
import { AuthContext } from "../contexts";

const useAuthInfo = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthInfo used outside authInfoContext");
  }
  return context;
};

export default useAuthInfo;
