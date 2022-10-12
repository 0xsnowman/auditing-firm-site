import React from "react";
import { Box, Container, Flex, Text, Icon } from "ui/atoms";
import { NavItem } from "ui/molecules";
import useWindowDimensions from "hooks/useWindowDimensions";
import Icons from "assets/icons";
import { COLORS } from "config/colors";
import { WINDOW_SIZES } from "config/dimensions";

const Footer = () => {
  const { deviceWidth } = useWindowDimensions();
  return (
    <Box
      className="organism-footer"
      paddingHorizontal={30}
      paddingVertical={60}
      backgroundColor={COLORS.LIGHT_BLUE}
    >
      <Container>
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="space-between"
          gap={30}
        >
          <Flex
            justifyContent="space-between"
            width="100%"
            className="organism-footer__connection-list"
          >
            <Flex flex={2}>
              {deviceWidth > WINDOW_SIZES.SIZE_375 ? (
                <Icon icon={Icons.proofLogoWhite} size="EXTRA_SUPER_LARGE" />
              ) : (
                <Icon icon={Icons.proofLogoWhite} size="SUPER_LARGE" />
              )}
            </Flex>
            <Flex
              flex={3}
              gap={30}
              className="organism-footer__connection-list__details"
            >
              <Flex flex={1} flexDirection="column" gap={15}>
                <Box paddingVertical={30}>
                  <Text type="paragraph" color="white">
                    Products
                  </Text>
                </Box>
                <NavItem>Smart Contract Audit</NavItem>
                <NavItem>dApp Audit</NavItem>
                <NavItem>NFT Audit</NavItem>
              </Flex>
              <Flex flex={1} flexDirection="column" gap={15}>
                <Box paddingVertical={30}>
                  <Text type="paragraph" color="white">
                    Company
                  </Text>
                </Box>
                <NavItem>About</NavItem>
                <NavItem>Careers</NavItem>
                <NavItem>Disclaimer</NavItem>
                <NavItem>Privacy Policy</NavItem>
                <NavItem>Cookie Policy</NavItem>
                <NavItem>Terms and Conditions</NavItem>
              </Flex>
              <Flex flex={1} flexDirection="column" gap={17}>
                <Box paddingVertical={30}>
                  <Text type="paragraph" color="white">
                    Socials
                  </Text>
                </Box>
                <NavItem url={"https://t.me/proofaudit"}>
                  <Flex gap={10}>
                    <Icon icon={Icons.telegram} size="SMALL" />
                    <Text color="#DDD" type="plain">
                      Telegram
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem url={"https://twitter.com/proofaudit"}>
                  <Flex gap={10}>
                    <Icon icon={Icons.twitter} size="SMALL" />
                    <Text color="#DDD" type="plain">
                      Twitter
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem url={"https://medium.com/@proofaudit"}>
                  <Flex gap={10}>
                    <Icon icon={Icons.medium} size="SMALL" />
                    <Text color="#DDD" type="plain">
                      Medium
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem url={"https://www.linkedin.com/company/proofaudit/"}>
                  <Flex gap={10}>
                    <Icon icon={Icons.linkedin} size="SMALL" />
                    <Text color="#DDD" type="plain">
                      LinkedIn
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem url={"https://www.instagram.com/proof.audit/"}>
                  <Flex gap={10}>
                    <Icon icon={Icons.instagram} size="SMALL" />
                    <Text color="#DDD" type="plain">
                      Instagram
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem url={"https://github.com/proofaudit"}>
                  <Flex gap={10}>
                    <Icon icon={Icons.github} size="SMALL" />
                    <Text color="#DDD" type="plain">
                      Github
                    </Text>
                  </Flex>
                </NavItem>
              </Flex>
            </Flex>
          </Flex>
          <Text color="#DDD" type="plain">
            © 2022 by Proof Audit. All Rights Reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
