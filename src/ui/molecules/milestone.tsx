import React from "react";
import { Box, Flex, Text } from "ui/atoms";
import { PostBox } from "ui/molecules";
import { COLORS } from "config/colors";
import { Z_INDEX_LEVELS } from "config/dimensions";

interface IMileStoneProps {
  value: number;
  direction?: "horizontal" | "vertical";
  title?: string;
  subtitle?: string;
  content?: Array<string>;
}

const MileStone: React.FC<IMileStoneProps> = ({
  value,
  title = "1 DAY",
  subtitle = "Time-Efficient Process",
  content = [
    "The length of the audit process is decided during the negotiation stage. As soon as the client has provided all the required documents the audit process can begin."
  ],
  direction = "horizontal"
}) => {
  return (
    <Box position="relative">
      <Flex
        flexDirection={direction === "horizontal" ? "column" : "row"}
        gap={20}
      >
        <Box
          backgroundColor={COLORS.DARK_THEME_GREY_BACKGROUND}
          padding={3}
          position="absolute"
          top={direction === "horizontal" ? 14 : 0}
          left={direction === "horizontal" ? 0 : 14}
          width={direction === "horizontal" ? "100%" : "auto"}
          height={direction === "horizontal" ? "auto" : "100%"}
        />
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
              <Text color={COLORS.WHITE}>{value}</Text>
            </Flex>
          </Box>
        </Flex>
        <PostBox
          title={title}
          subtitle={subtitle}
          content={content}
          border={false}
          background="black"
          titleColor={COLORS.DARK_THEME_WHITE}
          image={false}
          subtitleColor={COLORS.DARK_THEME_WHITE}
          borderRadius={0}
          textColor={COLORS.DARK_THEME_WHITE}
          subtitleCenter={true}
          paddingVertical={0}
          leftTextCount={direction === "horizontal" ? 100 : "all"}
        />
      </Flex>
      <Box padding={10} />
    </Box>
  );
};

export default MileStone;
