import React from "react";

import { Box, Container, Icon, Flex } from "ui/atoms";
import { Button, NavItem, MobileMenu, DropDown } from "ui/molecules";

import useWindowDimensions from "hooks/useWindowDimensions";

import Icons from "assets/icons";

import { WINDOW_SIZES, Z_INDEX_LEVELS } from "config/dimensions";

const Header = () => {
  const { deviceWidth } = useWindowDimensions();

  return (
    <Box className="organism-header" paddingVertical={40}>
      <Container>
        <Box position="relative">
          <Flex justifyContent="space-between" alignItems="center">
          {deviceWidth > WINDOW_SIZES.SIZE_375 ? (
            <Icon icon={Icons.proofLogoWhite} size="SUPER_LARGE" />
          ) : (
            <Icon icon={Icons.proofIconWhite} size="LARGE" />
          )}
            {(deviceWidth > WINDOW_SIZES.SIZE_1024) && (
              <Flex gap={160} alignItems="center">
                <Flex gap={20}>
                  <NavItem>Blog</NavItem>
                  <NavItem>About Us</NavItem>
                  <NavItem>Contact</NavItem>
                  <Box position="relative">
                    <DropDown title="Products" direction="left" />
                  </Box>
                </Flex>
                <Button
                  onClick={() => {
                    alert("[Button] [Get free audit] clicked");
                  }}
                >
                  Get free audit
                </Button>
              </Flex>
            )}
            {(deviceWidth <= WINDOW_SIZES.SIZE_1024) && (
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
