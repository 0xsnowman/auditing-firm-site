import React from "react";
import { Box, Container, Flex, Text, Icon } from "ui/atoms";
import { NavItem } from "ui/molecules";
import useWindowDimensions from "hooks/useWindowDimensions";
import Icons from "assets/icons";
import { COLORS } from "config/colors";
import { WINDOW_SIZES, Z_INDEX_LEVELS } from "config/dimensions";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { deviceWidth } = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <Box
      className="organism-footer"
      paddingHorizontal={30}
      paddingVertical={60}
      backgroundColor={COLORS.DARK_THEME_BLACK}
      zIndex={Z_INDEX_LEVELS.LOW}
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
            <Flex flex={2} flexDirection="column">
              <Box
                onClick={() => {
                  navigate("/#");
                }}
              >
                {deviceWidth > WINDOW_SIZES.SIZE_375 ? (
                  <Icon icon={Icons.proofLogoWhite} size="SUPER_LARGE" />
                ) : (
                  <Icon icon={Icons.proofLogoWhite} size="UPPERLARGE" />
                )}
              </Box>
              <Box maxWidth="400px" paddingVertical={20}>
                <Text color={COLORS.DARK_THEME_WHITE} type="subtitle">
                  Industry-leading Smart Contract Authentication
                </Text>
              </Box>
            </Flex>
            <Flex
              flex={3}
              gap={30}
              className="organism-footer__connection-list__details"
            >
              <Flex flex={1} flexDirection="column" gap={15}>
                <Box paddingVertical={10}>
                  <Text type="paragraph" color={COLORS.WHITE} fontWeight={600}>
                    Solutions
                  </Text>
                </Box>
                <NavItem url={"/security-audit"}>Smart Contract Audit</NavItem>
                <NavItem url={"/dapp-audit"}>dApp Audit</NavItem>
                <NavItem url={"/nft-audit"}>NFT Audit</NavItem>
              </Flex>
              <Flex flex={1} flexDirection="column" gap={15}>
                <Box paddingVertical={10}>
                  <Text type="paragraph" color={COLORS.WHITE} fontWeight={600}>
                    Chains
                  </Text>
                </Box>
                <NavItem url={"/ethereum"}>Ethereum</NavItem>
                <NavItem url={"/bnb"}>BNB</NavItem>
                <NavItem url={"/avalanche"}>Avalanche</NavItem>
                <NavItem url={"/polygon"}>Polygon</NavItem>
                <NavItem url={"/tron"}>Tron</NavItem>
              </Flex>
              <Flex flex={1} flexDirection="column" gap={15}>
                <Box paddingVertical={10} onClick={() => {
                  window.location.replace("https://caduceuscap.com/company/");
                }}>
                  <Text type="paragraph" color={COLORS.WHITE} fontWeight={600}>
                    Company
                  </Text>
                </Box>
                <NavItem url={"https://caduceuscap.com/company/"}>About</NavItem>
                {/* <NavItem>Careers</NavItem> */}
                <NavItem url={"https://caduceuscap.com/disclaimer/"}>Disclaimer</NavItem>
                <NavItem url={"https://caduceuscap.com/privacy/"}>Privacy Policy</NavItem>
                {/* <NavItem>Cookie Policy</NavItem> */}
                <NavItem url={"https://caduceuscap.com/terms/"}>Terms</NavItem>
              </Flex>
              <Flex flex={1} flexDirection="column" gap={17}>
                <Box paddingVertical={10}>
                  <Text type="paragraph" color={COLORS.WHITE} fontWeight={600}>
                    Socials
                  </Text>
                </Box>
                <NavItem url={"https://t.me/proofaudit"}>
                  <Flex gap={10}>
                    <Icon icon={Icons.telegram} size="SMALL" />
                    <Text color={COLORS.GRAY} type="plain" fontWeight={600}>
                      Telegram
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem url={"https://twitter.com/proofaudit"}>
                  <Flex gap={10}>
                    <Icon icon={Icons.twitter} size="SMALL" />
                    <Text color={COLORS.GRAY} type="plain" fontWeight={600}>
                      Twitter
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem url={"https://medium.com/@proofaudit"}>
                  <Flex gap={10}>
                    <Icon icon={Icons.medium} size="SMALL" />
                    <Text color={COLORS.GRAY} type="plain" fontWeight={600}>
                      Medium
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem url={"https://www.linkedin.com/company/proofaudit/"}>
                  <Flex gap={10}>
                    <Icon icon={Icons.linkedin} size="SMALL" />
                    <Text color={COLORS.GRAY} type="plain" fontWeight={600}>
                      LinkedIn
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem url={"https://www.instagram.com/proof.audit/"}>
                  <Flex gap={10}>
                    <Icon icon={Icons.instagram} size="SMALL" />
                    <Text color={COLORS.GRAY} type="plain" fontWeight={600}>
                      Instagram
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem url={"https://github.com/proofaudit"}>
                  <Flex gap={10}>
                    <Icon icon={Icons.github} size="SMALL" />
                    <Text color={COLORS.GRAY} type="plain" fontWeight={600}>
                      Github
                    </Text>
                  </Flex>
                </NavItem>
              </Flex>
            </Flex>
          </Flex>
          <Text color={COLORS.GRAY} type="plain" fontWeight={600}>
            © 2022 by Proof Audit. All Rights Reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
