import React from "react";
import { Box, Text } from "ui/atoms";
import { COLORS } from "config/colors";

interface ITipProps {
  children?: React.ReactNode;
  color?: string;
}

const Tip: React.FC<ITipProps> = ({ children, color = COLORS.WHITE }) => {
  return (
    <Box backgroundColor={COLORS.TIP} paddingVertical={5} paddingHorizontal={10} borderRadius={10}>
      <Text color={color} type="plain">{children}</Text>
    </Box>
  );
};

export default Tip;
