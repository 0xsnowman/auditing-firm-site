import React from "react";

import { Box, Container, Icon, Flex } from "ui/atoms";
import { Button, SearchInput, MobileMenu, DropDown } from "ui/molecules";

import useWindowDimensions from "hooks/useWindowDimensions";

import Icons from "assets/icons";

import { COLORS } from "config/colors";
import { WINDOW_SIZES, Z_INDEX_LEVELS } from "config/dimensions";

const Header = () => {
  const { deviceWidth } = useWindowDimensions();

  return (
    <Box
      className="organism-header"
      paddingVertical={40}
      backgroundColor={COLORS.GREY}
    >
      <Container>
        <Box position="relative">
          <Flex justifyContent="space-between" alignItems="center">
            <Flex gap={50}>
              {deviceWidth > WINDOW_SIZES.SIZE_375 ? (
                <Icon icon={Icons.proofLogoBlue} size="SUPER_LARGE" />
              ) : (
                <Icon icon={Icons.proofIconBlue} size="LARGE" />
              )}
              {deviceWidth > WINDOW_SIZES.SIZE_1024 && (
                <Flex gap={150} alignItems="center">
                  <Box position="relative">
                    <DropDown title="Products" direction="left" top={-18} />
                  </Box>
                  <Box position="relative">
                    <DropDown title="Chains" direction="left" top={-18} />
                  </Box>
                  <Box position="relative">
                    <DropDown title="Company" direction="left" top={-18} />
                  </Box>
                </Flex>
              )}
            </Flex>
            {deviceWidth > WINDOW_SIZES.SIZE_1024 && (
              <Flex gap={30} alignItems="center">
                <SearchInput size="small" />
                <Button
                  backgroundColor="#0085FF"
                  backgroundHoverColor="#0066DD"
                  onClick={() => {
                    alert("[Button] [Get free audit] clicked");
                  }}
                >
                  Request a Quote
                </Button>
              </Flex>
            )}
            {deviceWidth <= WINDOW_SIZES.SIZE_1024 && (
              <Flex gap={15}>
                <MobileMenu type="news" />
                <MobileMenu />
                <Box position="relative" zIndex={Z_INDEX_LEVELS.VERY_HIGH}>
                  <DropDown
                    title="Products"
                    direction="right"
                    menuWidth={210}
                    top={-8}
                  />
                </Box>
              </Flex>
            )}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
