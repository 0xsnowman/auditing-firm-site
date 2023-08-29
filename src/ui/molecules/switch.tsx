import React, { useState } from "react";
import { Box, Flex, Text } from "ui/atoms";
import { COLORS } from "config/colors";

const Switch = () => {
  const [switchValue, setSwitchValue] = useState<"ETH" | "BSC">(
    "ETH"
  );

  return (
    <Box
      className="organism-switch"
      backgroundColor={COLORS.SWITCH_BLUE}
      borderRadius={30}
      onClick={() => {
        setSwitchValue(switchValue === "ETH" ? "BSC" : "ETH");
      }}
    >
      <Box
        borderRadius={30}
        borderColor={COLORS.BLACK}
        paddingVertical={10}
        paddingHorizontal={15}
        position="relative"
      >
        <Flex gap={10}>
          <Flex flex={1} justifyContent="center">
            <Text color={COLORS.WHITE}>ETH</Text>
          </Flex>
          <Flex flex={1} justifyContent="center">
            <Text color={COLORS.WHITE}>BSC</Text>
          </Flex>
        </Flex>
        <Box
          borderRadius={30}
          borderColor={COLORS.SWITCH_BLUE}
          borderWidth={2}
          backgroundColor={COLORS.SWITCH_WHITE}
          boxShadow="0px 0px 10px black"
          position="absolute"
          width="50%"
          height="100%"
          top="0px"
          left={switchValue === "ETH" ? "0px" : "50%"}
        ></Box>
      </Box>
    </Box>
  );
};

export default Switch;
