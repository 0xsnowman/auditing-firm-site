import React from "react";

import { Box } from "../atoms";

import { PADDING } from "../../config/dimensions";

const Footer = () => {
  return (
    <Box className="organism-footer" paddingVertical={PADDING.SUPER_LARGE}>
      <p>Footer</p>
    </Box>
  );
};

export default Footer;
