import React from "react";

import { Box, Text } from "ui/atoms";

import { COLORS } from "config/colors";

interface ITipProps {
  children?: React.ReactNode;
}

const Tip: React.FC<ITipProps> = ({ children }) => {
  return (
    <Box backgroundColor={COLORS.TIP} paddingVertical={5} paddingHorizontal={10} borderRadius={10}>
      <Text color={COLORS.TIP_DARK} type="plain">{children}</Text>
    </Box>
  );
};

export default Tip;
