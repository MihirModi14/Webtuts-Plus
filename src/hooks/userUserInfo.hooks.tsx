import { useContext } from "react";
import { UserContext } from "../contexts";

const useUserInfo = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserInfo used outside userInfoContext");
  }
  return context;
};

export default useUserInfo;
