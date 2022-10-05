import React from "react";

import { Text, Box, Flex, Image } from "ui/atoms";
import { Tip } from "ui/molecules";
import { PADDING, BORDER_RADIUS, WINDOW_SIZES } from "config/dimensions";
import { COLORS } from "config/colors";

import useWindowDimensions from "hooks/useWindowDimensions";

interface ICarouselCardProps {
  title: string;
  date: string;
  slide: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const CarouselCard: React.FC<ICarouselCardProps> = ({ title, date, slide }) => {
  const { deviceWidth } = useWindowDimensions();
  return (
    <Box
      className="organism-carouselcard"
      paddingHorizontal={PADDING.MEDIUM}
      paddingVertical={PADDING.LARGE}
      backgroundColor={COLORS.TRANSPARENT}
      width="100%"
    >
      <Box
        width="100%"
        height="300px"
        borderRadius={BORDER_RADIUS.MEDIUM}
        borderWidth={1}
        borderColor={COLORS.BORDER_DARK}
      >
        <Flex
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
        >
          <Box
            width="100%"
            borderRadius={BORDER_RADIUS.MEDIUM}
            overflowX="hidden"
            overflowY="hidden"
            position="relative"
          >
            <Image
              image={slide}
              width="100%"
              height="160px"
              objectFit="cover"
            />
          </Box>
          <Box paddingHorizontal={15} paddingVertical={10} width="100%">
            <Flex flexDirection="column" alignItems="space-between" gap={20}>
              <Text>{title}</Text>
              <Flex justifyContent="space-between" alignItems="center" gap={5} flexDirection={deviceWidth > WINDOW_SIZES.SIZE_320 ? "row" : "column"}>
                <Text type="plain" color={COLORS.GRAY_DARK}>
                  {date}
                </Text>
                <Flex justifyContent="space-around" gap={5}>
                  <Tip>Security</Tip>
                  <Tip>Bug</Tip>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CarouselCard;
