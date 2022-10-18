import React from "react";
import { Box, Flex, Icon } from "ui/atoms";
import { PostBox } from "ui/molecules";
import { COLORS } from "config/colors";
import { Z_INDEX_LEVELS } from "config/dimensions";
import Icons from "assets/icons";

interface IMileStoneProps {
  value: number;
  direction?: "horizontal" | "vertical";
  title?: string;
  subtitle?: string;
  content?: Array<string>;
  boundary?: "first" | "middle" | "last";
}

const MileStone: React.FC<IMileStoneProps> = ({
  value,
  title = "1 DAY",
  subtitle = "Time-Efficient Process",
  content = [
    "The length of the audit process is decided during the negotiation stage. As soon as the client has provided all the required documents the audit process can begin."
  ],
  direction = "horizontal",
  boundary = "middle"
}) => {
  return (
    <Box position="relative">
      <Flex
        flexDirection={direction === "horizontal" ? "column" : "row"}
        gap={20}
      >
        {boundary !== "middle" && (
          <Box
            position="absolute"
            top={boundary === "first" ? 0 : "50%"}
            left={20}
            padding={3}
            width={12}
            height="50%"
            zIndex={Z_INDEX_LEVELS.MEDIUM}
            backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
          />
        )}
        <Box
          backgroundColor={COLORS.DARK_THEME_GREY_BACKGROUND}
          padding={3}
          position="absolute"
          top={
            direction === "horizontal" ? 25 : boundary === "first" ? "50%" : 0
          }
          left={direction === "horizontal" ? 0 : 23}
          width={direction === "horizontal" ? "100%" : "auto"}
          height={
            direction === "horizontal"
              ? "auto"
              : boundary === "middle"
              ? "100%"
              : "50%"
          }
        />
        <Flex justifyContent="center" alignItems="center">
          <Box
            width={50}
            height={50}
            backgroundColor={COLORS.DARK_THEME_GREY_BACKGROUND}
            zIndex={Z_INDEX_LEVELS.VERY_HIGH}
            borderRadius={50}
            padding={0}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
            >
              <Icon icon={Icons.proofIconWhite} size="LARGE" />
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
