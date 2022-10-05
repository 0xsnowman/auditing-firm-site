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
                <Text type="plain" color="#999">
                  Security Audit
                </Text>
                <Text type="plain" color="#999">
                  Skynet
                </Text>
                <Text type="plain" color="#999">
                  SkyTrace
                </Text>
                <Text type="plain" color="#999">
                  Prenetration Testing
                </Text>
                <Text type="plain" color="#999">
                  KYC
                </Text>
              </Flex>
              <Flex flex={1} flexDirection="column" gap={10}>
                <Box paddingVertical={30}>
                  <Text type="paragraph" color="white">
                    Resources
                  </Text>
                </Box>
                <Text type="plain" color="#999">
                  Blog
                </Text>
              </Flex>
              <Flex flex={1} flexDirection="column" gap={10}>
                <Box paddingVertical={30}>
                  <Text type="paragraph" color="white">
                    Company
                  </Text>
                </Box>
                <Text type="plain" color="#999">
                  About
                </Text>
                <Text type="plain" color="#999">
                  Careers
                </Text>
                <Text type="plain" color="#999">
                  Disclaimer
                </Text>
                <Text type="plain" color="#999">
                  Privacy Policy
                </Text>
                <Text type="plain" color="#999">
                  Cookie Policy
                </Text>
                <Text type="plain" color="#999">
                  Terms and Conditions
                </Text>
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
