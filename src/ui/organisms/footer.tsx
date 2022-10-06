import React from "react";

import { Box, Container, Flex, Text, Icon } from "ui/atoms";
import { NavItem } from "ui/molecules";

import Icons from "assets/icons";

const Footer = () => {
  return (
    <Box
      className="organism-footer"
      paddingHorizontal={30}
      paddingVertical={60}
    >
      <Container>
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="space-between"
          gap={30}
        >
          <Flex justifyContent="space-between" width="100%" className="organism-footer__connection-list">
            <Flex flex={2}>
              <Text type="logo" color="#999">
                Proof Audit
              </Text>
            </Flex>
            <Flex flex={3} gap={30} className="organism-footer__connection-list__details">
              <Flex flex={1} flexDirection="column" gap={10}>
                <Box paddingVertical={30}>
                  <Text type="paragraph" color="white">
                    Products
                  </Text>
                </Box>
                <NavItem>
                  Security Audit
                </NavItem>
                <NavItem>
                  Skynet
                </NavItem>
                <NavItem>
                  SkyTrace
                </NavItem>
                <NavItem>
                  Prenetration Testing
                </NavItem>
                <NavItem>
                  KYC
                </NavItem>
              </Flex>
              <Flex flex={1} flexDirection="column" gap={10}>
                <Box paddingVertical={30}>
                  <Text type="paragraph" color="white">
                    Resources
                  </Text>
                </Box>
                <NavItem>
                  Blog
                </NavItem>
              </Flex>
              <Flex flex={1} flexDirection="column" gap={10}>
                <Box paddingVertical={30}>
                  <Text type="paragraph" color="white">
                    Company
                  </Text>
                </Box>
                <NavItem>
                  About
                </NavItem>
                <NavItem>
                  Careers
                </NavItem>
                <NavItem>
                  Disclaimer
                </NavItem>
                <NavItem>
                  Privacy Policy
                </NavItem>
                <NavItem>
                  Cookie Policy
                </NavItem>
                <NavItem>
                  Terms and Conditions
                </NavItem>
              </Flex>
              <Flex flex={1} flexDirection="column" gap={10}>
                <Box paddingVertical={30}>
                  <Text type="paragraph" color="white">
                    Socials
                  </Text>
                </Box>
                <Flex gap={10}>
                  <Icon icon={Icons.discord} size="SMALL" />
                  <Text color="#999" type="plain">
                    Discord
                  </Text>
                </Flex>
                <Flex gap={10}>
                  <Icon icon={Icons.discord} size="SMALL" />
                  <Text color="#999" type="plain">
                    Telegram
                  </Text>
                </Flex>
                <Flex gap={10}>
                  <Icon icon={Icons.discord} size="SMALL" />
                  <Text color="#999" type="plain">
                    Twitter
                  </Text>
                </Flex>
                <Flex gap={10}>
                  <Icon icon={Icons.discord} size="SMALL" />
                  <Text color="#999" type="plain">
                    Facebook
                  </Text>
                </Flex>
                <Flex gap={10}>
                  <Icon icon={Icons.discord} size="SMALL" />
                  <Text color="#999" type="plain">
                    Github
                  </Text>
                </Flex>
                <Flex gap={10}>
                  <Icon icon={Icons.discord} size="SMALL" />
                  <Text color="#999" type="plain">
                    Gitbook
                  </Text>
                </Flex>
                <Flex gap={10}>
                  <Icon icon={Icons.discord} size="SMALL" />
                  <Text color="#999" type="plain">
                    Email
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Text color="#999" type="plain">
            © 2022 by Proof Audit. All Rights Reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
