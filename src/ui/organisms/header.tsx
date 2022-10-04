import React from "react";

import { Box, Container, Text, Flex } from "ui/atoms";
import { Button, NavItem } from "ui/molecules";

const Header = () => {
  return (
    <Box className="organism-header" paddingVertical={15}>
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Text color="white" type="title">
            Proof Audit
          </Text>
          <Flex gap={40} alignItems="center">
            <Flex gap={25}>
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
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
