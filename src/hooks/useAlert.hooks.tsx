import { toast, ToastPosition, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useAlert = (
  type: "info" | "error" | "success" | "warning" = "info",
  message: string | null = null,
  duration = 3000,
  position: ToastPosition = "top-right"
) => {
  if (message) {
    return toast(<div>{message}</div>, {
      type,
      autoClose: duration,
      position,
      transition: Slide,
      hideProgressBar: true,
    });
  }
};

export default useAlert;
