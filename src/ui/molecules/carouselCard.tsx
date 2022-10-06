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
      backgroundColor={COLORS.TRANSPARENT}
      width="100%"
    >
      <Box
        width="100%"
        height={300}
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
            height={300}
            borderRadius={BORDER_RADIUS.MEDIUM}
            overflowX="hidden"
            overflowY="hidden"
            position="relative"
          >
            <Image image={slide} width="100%" height="100%" objectFit="cover" />
          </Box>
          <Box position="absolute" left="100px" maxWidth="50%">
            <Flex flexDirection="column" alignItems="space-between" gap={20}>
              <Text type="title" color={COLORS.WHITE}>
                {title}
              </Text>
              <Text type="plain" color={COLORS.WHITE} lineHeight={2}>
                {`Identify and eliminate security vulnerabilities in blockchains, smart contracts, and Web3 apps using the most rigorous and thorough cybersecurity techniques.`}
              </Text>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                gap={5}
                flexDirection={
                  deviceWidth > WINDOW_SIZES.SIZE_320 ? "row" : "column"
                }
              >
                <Text type="plain" color={COLORS.WHITE}>
                  {date}
                </Text>
                <Flex justifyContent="space-around" gap={5}>
                  <Tip color="black">Security</Tip>
                  <Tip color="black">Bug</Tip>
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
