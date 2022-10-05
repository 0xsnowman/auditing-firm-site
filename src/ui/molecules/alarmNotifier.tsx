import React from "react";

import { Box } from "ui/atoms";

const AlarmNotifier = () => {
  return (
    <Box position="relative">
      <Box
        borderRadius={30}
        width={6}
        height={6}
        backgroundColor="red"
        boxShadow="5px 5px 20px red"
      />
    </Box>
  );
};

export default AlarmNotifier;
