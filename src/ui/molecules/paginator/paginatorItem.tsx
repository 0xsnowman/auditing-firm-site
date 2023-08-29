import React, { Dispatch, SetStateAction } from "react";

import { Box, Flex, Text } from "ui/atoms";
import useWindowDimensions from "hooks/useWindowDimensions";
import { WINDOW_SIZES, PAGINATOR_ARROW } from "config/dimensions";
import { COLORS } from "config/colors";

interface IPaginatorItemProps {
  itemText: number;
  setCurrentPage: Function;
  currentPageIndex: number;
}

const PaginatorItem: React.FC<IPaginatorItemProps> = ({
  itemText,
  setCurrentPage,
  currentPageIndex,
}) => {
  const { deviceWidth } = useWindowDimensions();
  return (
    <Box
      width={deviceWidth > WINDOW_SIZES.SIZE_768 ? 25 : 15}
      height={deviceWidth > WINDOW_SIZES.SIZE_768 ? 25 : 15}
      borderRadius={10}
      backgroundColor={
        currentPageIndex === itemText
          ? COLORS.DARK_THEME_BORDER
          : COLORS.DARK_THEME_TRANSPARENT
      }
      onClick={() => {
        if (itemText === PAGINATOR_ARROW.left) {
          setCurrentPage(currentPageIndex - 1);
        } else if (itemText === PAGINATOR_ARROW.right) {
          setCurrentPage(currentPageIndex + 1);
        } else {
          setCurrentPage(itemText);
        }
      }}
    >
      <Flex justifyContent="center" height="100%" alignItems="center">
        <Text noWrap>
          {itemText === PAGINATOR_ARROW.left ||
          itemText === PAGINATOR_ARROW.right
            ? "..."
            : itemText}
        </Text>
      </Flex>
    </Box>
  );
};

export default PaginatorItem;
