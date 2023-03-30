import { toast } from "react-toastify";

export const alertMsg = (msgType, message) => {
  if (msgType === "Danger") {
    toast.warning(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  } else if (msgType === "info") {
    toast.info(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
  } else if (msgType === "error") {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  } else {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  }
};
