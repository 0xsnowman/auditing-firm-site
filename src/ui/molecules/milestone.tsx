import React from "react";

import { Box, Flex, Text } from "ui/atoms";
import { PostBox } from "ui/molecules";

import { COLORS } from "config/colors";
import { Z_INDEX_LEVELS } from "config/dimensions";

const MileStone = () => {
  return (
    <Box position="relative">
      <Box
        backgroundColor={COLORS.GRAY_DARK}
        padding={1}
        position="absolute"
        top={14}
        left={0}
        width="100%"
      ></Box>
      <Flex justifyContent="center">
        <Box
          width={30}
          height={30}
          backgroundColor={COLORS.LIGHT_BLUE}
          zIndex={Z_INDEX_LEVELS.SUPER}
          borderRadius={30}
          padding={0}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100%"
          >
            <Text color="white">1</Text>
          </Flex>
        </Box>
      </Flex>
      <PostBox
        subtitle="Time-Efficient Process"
        content={["The length of the audit process is decided during the negotiation stage. As soon as the client has provided all the required documents the audit process can begin."]}
        border={false}
        background="white"
        image={false}
        subtitleColor={COLORS.LIGHT_BLUE}
        borderRadius={0}
        subtitleCenter={true}
        paddingVertical={0}
      />
    </Box>
  );
};

export default MileStone;
