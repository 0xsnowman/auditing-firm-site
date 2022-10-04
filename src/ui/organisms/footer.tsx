import React from "react";

import { Box, Container, Flex, Text, Icon } from "ui/atoms";
import { NavItem } from "ui/molecules";

import Icons from "assets/icons";

import { PADDING } from "config/dimensions";
import { COLORS } from "config/colors";

const Footer = () => {
  return (
    <Box className="organism-footer" paddingVertical={PADDING.SUPER_LARGE}>
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex flexDirection="column" gap={40}>
            <Text color="white" type="title">
              Proof Audit
            </Text>
            <Text color={COLORS.GRAY_DARK} type="plain">@ 2018 by TechRate. All Rights Reserved</Text>
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
