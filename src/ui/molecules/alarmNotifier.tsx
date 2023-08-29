import React from "react";
import { Box } from "ui/atoms";

import { COLORS } from "config/colors";

const AlarmNotifier = () => {
  return (
    <Box position="relative">
      <Box
        borderRadius={30}
        width={10}
        height={10}
        backgroundColor={COLORS.ALARM}
        // boxShadow="5px 5px 20px white"
      />
    </Box>
  );
};

export default AlarmNotifier;
