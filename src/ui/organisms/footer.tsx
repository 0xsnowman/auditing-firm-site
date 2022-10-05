import React from "react";

import { Box, Container, Flex, Text, Icon } from "ui/atoms";
import { NavItem } from "ui/molecules";

import useWindowDimensions from "hooks/useWindowDimensions";

import Icons from "assets/icons";

import { PADDING } from "config/dimensions";
import { COLORS } from "config/colors";

const Footer = () => {
  const { deviceWidth } = useWindowDimensions();

  return (
    <Box className="organism-footer" paddingVertical={PADDING.SUPER_LARGE}>
      <Container>
        <Flex
          justifyContent={deviceWidth > 1024 ? "space-between" : "center"}
          alignItems={deviceWidth > 1024 ? "center" : "flex-start"}
          flexDirection={deviceWidth > 1024 ? "row" : "column"}
          gap={20}
        >
          <Flex flexDirection="column" gap={20}>
            <Text color="white" type="title">
              Proof Audit
            </Text>
            <Text color={COLORS.GRAY_DARK} type="plain">
              @ 2018 by Proof Audit. All Rights Reserved
            </Text>
          </Flex>
          <Flex gap={40} alignItems="center">
            <Flex gap={5}>
              <NavItem>Products</NavItem>
              <NavItem>Blog</NavItem>
              <NavItem>About Us</NavItem>
              <NavItem>Contact</NavItem>
            </Flex>
            <Flex gap={30}>
              <Icon icon={Icons.telegram} size="LARGE" />
              <Icon icon={Icons.discord} size="LARGE" />
              <Icon icon={Icons.github} size="LARGE" />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
