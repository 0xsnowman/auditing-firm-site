import Modal from "react-modal";

import { COLORS } from "./colors";
import { BORDER_RADIUS } from "./dimensions";

export const customStyles: Modal.Styles = {
  content: {
    top: "20%",
    left: "35%",
    right: "35%",
    bottom: "20%",
    transition: "1s",
    backgroundColor: COLORS.DARK,
    boxSizing: "border-box",
    border: "none",
    borderRadius: BORDER_RADIUS.LARGE,
    zIndex: 200
  },
  overlay: {
    position: "fixed",
    top: "0%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: "#000000cc"
  }
};
