import React from "react";
import { Box, Text, Flex, Image } from "ui/atoms";
import Images from "assets/images";
import { COLORS } from "config/colors";
import { Z_INDEX_LEVELS } from "config/dimensions";
import useWindowDimensions from "hooks/useWindowDimensions";
import { WINDOW_SIZES } from "config/dimensions";

interface IPostBoxProps {
  title?: string;
  subtitle?: string;
  content?: string[];
  background?: "black" | "white";
  border?: boolean;
  image?: boolean;
  titleColor?: string;
  subtitleColor?: string;
  textColor?: string;
  imageColor?: string;
  borderRadius?: number;
  subtitleCenter?: boolean;
  paddingVertical?: number;
  minHeight?: number | string;
  direction?: "left-right" | "right-left" | "up-down" | "down-up";
  leftTextCount?: number;
}

const PostBox: React.FC<IPostBoxProps> = ({
  title = "",
  subtitle = "",
  content = [],
  background = "black",
  border = true,
  image = true,
  titleColor = "black",
  subtitleColor = "black",
  textColor = "black",
  imageColor = "gray",
  borderRadius = 20,
  subtitleCenter = false,
  paddingVertical = 10,
  minHeight = 250,
  direction = "left-right",
  leftTextCount = 100
}) => {
  const globalDirection = () => {
    if (direction === "left-right") return "row";
    if (direction === "right-left") return "row-reverse";
    if (direction === "up-down") return "column";
    if (direction === "down-up") return "column-reverse";
    return "row";
  };
  const { deviceWidth } = useWindowDimensions();

  return (
    <Box
      borderRadius={borderRadius}
      backgroundColor={background === "black" ? "#161922" : COLORS.GREY}
      position="relative"
      height="100%"
      overflowX="hidden"
      overflowY="hidden"
      paddingHorizontal={20}
      paddingVertical={paddingVertical}
      borderColor={COLORS.BORDER_DARK}
      borderWidth={border ? 1 : 0}
      minHeight={minHeight}
    >
      <Flex
        flexDirection={globalDirection()}
        width="100%"
        height="100%"
        justifyContent="space-between"
      >
        <Box
          width={
            image
              ? direction === "left-right" || direction === "right-left"
                ? "50%"
                : "100%"
              : "100%"
          }
          zIndex={Z_INDEX_LEVELS.HIGH}
          paddingHorizontal={content.length > 0 ? 20 : 0}
          paddingVertical={content.length > 0 ? 30 : 0}
        >
          <Flex flexDirection="column">
            {title.length > 0 && (
              <Text type={deviceWidth > WINDOW_SIZES.SIZE_1024 ? "logo" : "sublogo"} color={titleColor}>
                {title}
              </Text>
            )}
            {subtitle.length > 0 && (
              <Box paddingVertical={10}>
                <Text
                  type="subtitle"
                  color={subtitleColor}
                  center={subtitleCenter}
                >
                  {subtitle}
                </Text>
              </Box>
            )}
            {content.length > 0 &&
              content.map((contentItem, index) => {
                return (
                  <Box paddingVertical={10} key={index}>
                    <Text type="paragraph" color={textColor}>
                      {contentItem.substr(0, leftTextCount) + " ..."}
                    </Text>
                  </Box>
                );
              })}
          </Flex>
        </Box>
        {image && (
          <Box
            width="100%"
            height="100%"
            position="absolute"
            top={
              globalDirection() === "row-reverse" ||
              globalDirection() === "column-reverse"
                ? -200
                : -120
            }
            zIndex={Z_INDEX_LEVELS.MEDIUM}
          >
            <Flex
              justifyContent={
                globalDirection() === "row-reverse" ||
                globalDirection() === "column-reverse"
                  ? "flex-start"
                  : "flex-end"
              }
            >
              <Image
                width={
                  direction === "left-right" || direction === "right-left"
                    ? "50%"
                    : "100%"
                }
                height="80%"
                objectFit="contain"
                image={
                  imageColor === "gray"
                    ? Images.circuitGray
                    : imageColor === "blue"
                    ? Images.circuitBlue
                    : Images.circuit
                }
              ></Image>
            </Flex>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default PostBox;
