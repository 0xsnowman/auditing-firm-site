import React, { useEffect, useState } from "react";

import { Box, Flex, Icon, Text } from "ui/atoms";
import { COLORS } from "config/colors";
import Icons from "assets/icons";
import useWindowDimensions from "hooks/useWindowDimensions";
import { WINDOW_SIZES } from "config/dimensions";

interface IPaginatorProps {
  range: number;
}

const usePaginator: React.FC<IPaginatorProps> = ({ range }): any => {
  const { deviceWidth } = useWindowDimensions();
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const totalItemCount = 100;
  const itemCountPerPage = 10;
  
  useEffect(() => {
    return () => {
      range;
    };
  }, [range]);

  return (
    <Box backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
      <Flex
        alignItems="center"
        gap={deviceWidth > WINDOW_SIZES.SIZE_768 ? 40 : 10}
        justifyContent="center"
      >
        <Box
          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
          borderColor={COLORS.BLACK}
          // borderWidth={1}
          padding={10}
          borderRadius={30}
          onClick={() => {
            if (currentPageIndex > 0) {
              setCurrentPageIndex(currentPageIndex - 1);
            }
          }}
        >
          <Icon icon={Icons.left} />
        </Box>
        <Flex gap={7} alignItems="center">
          {[0, 1, 2, 3].map((item, index) => {
            return (
              <Box
                width={deviceWidth > WINDOW_SIZES.SIZE_768 ? 25 : 15}
                height={deviceWidth > WINDOW_SIZES.SIZE_768 ? 25 : 15}
                borderRadius={10}
                backgroundColor={
                  currentPageIndex === index
                    ? COLORS.DARK_THEME_BORDER
                    : COLORS.DARK_THEME_TRANSPARENT
                }
                onClick={() => {
                  setCurrentPageIndex(index);
                }}
              >
                <Flex justifyContent="center" height="100%" alignItems="center">
                  <Text noWrap>{index + 1}</Text>
                </Flex>
              </Box>
            );
          })}
          {
            <Box
              width={25}
              height={25}
              borderRadius={10}
              // backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND_DARK}
            >
              <Flex justifyContent="center" height="100%" alignItems="center">
                <Text noWrap>...</Text>
              </Flex>
            </Box>
          }
          {
            <Box
              width={25}
              height={25}
              borderRadius={10}
              backgroundColor={
                currentPageIndex === 99
                  ? COLORS.DARK_THEME_BORDER
                  : COLORS.DARK_THEME_TRANSPARENT
              }
              onClick={() => {
                setCurrentPageIndex(99);
              }}
            >
              <Flex justifyContent="center" height="100%" alignItems="center">
                <Text noWrap>100</Text>
              </Flex>
            </Box>
          }
        </Flex>
        <Box
          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
          borderColor={COLORS.BLACK}
          // borderWidth={1}
          padding={10}
          borderRadius={30}
          onClick={() => {
            if ((currentPageIndex + 1) * itemCountPerPage < totalItemCount) {
              setCurrentPageIndex(currentPageIndex + 1);
            }
          }}
        >
          <Icon icon={Icons.right} />
        </Box>
      </Flex>
    </Box>
  );
};

export default usePaginator;
