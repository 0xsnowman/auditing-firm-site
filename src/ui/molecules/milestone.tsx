import React from "react";
import { Box, Flex, Text } from "ui/atoms";
import { PostBox } from "ui/molecules";
import { COLORS } from "config/colors";
import { Z_INDEX_LEVELS } from "config/dimensions";

interface IMileStoneProps {
  value: number;
  direction?: "horizontal" | "vertical";
}

const MileStone: React.FC<IMileStoneProps> = ({
  value,
  direction = "horizontal"
}) => {
  return (
    <Box position="relative">
      <Flex flexDirection={direction === "horizontal" ? "column" : "row"}>
        <Box
          backgroundColor={COLORS.GREY}
          padding={1}
          position="absolute"
          top={direction === "horizontal" ? 14 : 0}
          left={direction === "horizontal" ? 0 : 14}
          width={direction === "horizontal" ? "100%" : "auto"}
          height={direction === "horizontal" ? "auto" : "100%"}
        ></Box>
        <Flex justifyContent="center" alignItems="center">
          <Box
            width={30}
            height={30}
            backgroundColor={COLORS.LIGHT_BLUE}
            zIndex={Z_INDEX_LEVELS.VERY_HIGH}
            borderRadius={30}
            padding={0}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
            >
              <Text color="white">{value}</Text>
            </Flex>
          </Box>
        </Flex>
        <PostBox
          subtitle="Time-Efficient Process"
          content={[
            "The length of the audit process is decided during the negotiation stage. As soon as the client has provided all the required documents the audit process can begin."
          ]}
          border={false}
          background="white"
          image={false}
          subtitleColor={COLORS.LIGHT_BLUE}
          borderRadius={0}
          subtitleCenter={true}
          paddingVertical={0}
          leftTextCount={direction === "horizontal" ? 100 : 200}
        />
      </Flex>
    </Box>
  );
};

export default MileStone;
