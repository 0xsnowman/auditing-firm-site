import React from "react";

import { Box, Container, Text, Flex, Icon } from "ui/atoms";
import { Button, NavItem, MobileMenu } from "ui/molecules";

import useWindowDimensions from "hooks/useWindowDimensions";

import Icons from "assets/icons";
import { WINDOW_SIZES } from "config/dimensions";

const Header = () => {
  const { deviceWidth } = useWindowDimensions();

  return (
    <Box className="organism-header" paddingVertical={15}>
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Text color="white" type="title">
            Proof Audit
          </Text>
          {deviceWidth > WINDOW_SIZES.SIZE_1024 && (
            <Flex gap={40} alignItems="center">
              <Flex gap={10}>
                <NavItem>Products</NavItem>
                <NavItem>Blog</NavItem>
                <NavItem>About Us</NavItem>
                <NavItem>Contact</NavItem>
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
          {deviceWidth <= WINDOW_SIZES.SIZE_1024 && (
            <Flex gap={20}>
              <MobileMenu type="news" />
              <MobileMenu />
            </Flex>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
