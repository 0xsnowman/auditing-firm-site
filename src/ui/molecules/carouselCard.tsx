import React from "react";
// import { Text, Box, Flex, Image, Icon } from "ui/atoms";
// import { Tip } from "ui/molecules";
// import { BORDER_RADIUS, WINDOW_SIZES } from "config/dimensions";
import { Box, Icon } from "ui/atoms";
import { COLORS } from "config/colors";
// import useWindowDimensions from "hooks/useWindowDimensions";

interface ICarouselCardProps {
  title?: string;
  date?: string;
  slide: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const CarouselCard: React.FC<ICarouselCardProps> = ({ /*title, date, */slide }) => {
  // const { deviceWidth } = useWindowDimensions();
  return (
    <Box
      className="molecule-carouselcard"
      backgroundColor={COLORS.DARK_THEME_TRANSPARENT}
      width="auto"
      height="auto"
    >
      <Icon icon={slide} size="SUPER_LARGE"></Icon>
    </Box>
  );
};

export default CarouselCard;
