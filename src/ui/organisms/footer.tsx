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
      backgroundColor={COLORS.DARK_THEME_GREY_BACKGROUND}
      zIndex={Z_INDEX_LEVELS.LOW}
      width="100%"
      paddingVertical={90}
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
                <Text
                  color={COLORS.DARK_THEME_WHITE}
                  type="subtitle"
                  fontWeight={600}
                >
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
                <NavItem fontWeight={400} url={"/security-audit"}>
                  Smart Contract Audit
                </NavItem>
                <NavItem fontWeight={400} url={"/dapp-audit"}>
                  dApp Audit
                </NavItem>
                <NavItem fontWeight={400} url={"/nft-audit"}>
                  NFT Audit
                </NavItem>
              </Flex>
              <Flex flex={1} flexDirection="column" gap={15}>
                <Box paddingVertical={10}>
                  <Text type="paragraph" color={COLORS.WHITE} fontWeight={600}>
                    Chains
                  </Text>
                </Box>
                <NavItem fontWeight={400} url={"/ethereum"}>
                  Ethereum
                </NavItem>
                <NavItem fontWeight={400} url={"/bnb"}>
                  BNB
                </NavItem>
                <NavItem fontWeight={400} url={"/avalanche"}>
                  Avalanche
                </NavItem>
                <NavItem fontWeight={400} url={"/polygon"}>
                  Polygon
                </NavItem>
                <NavItem fontWeight={400} url={"/tron"}>
                  Tron
                </NavItem>
              </Flex>
              <Flex flex={1} flexDirection="column" gap={15}>
                <Box
                  paddingVertical={10}
                  onClick={() => {
                    window.location.replace("https://caduceuscap.com/company/");
                  }}
                >
                  <Text type="paragraph" color={COLORS.WHITE} fontWeight={600}>
                    Company
                  </Text>
                </Box>
                <NavItem fontWeight={400} url={"/company"}>
                  About
                </NavItem>
                {/* <NavItem>Careers</NavItem> */}
                <NavItem fontWeight={400} url={"/disclaimer/"}>
                  Disclaimer
                </NavItem>
                <NavItem fontWeight={400} url={"/privacy/"}>
                  Privacy Policy
                </NavItem>
                {/* <NavItem>Cookie Policy</NavItem> */}
                <NavItem fontWeight={400} url={"/terms/"}>
                  Terms
                </NavItem>
              </Flex>
              <Flex flex={1} flexDirection="column" gap={17}>
                <Box paddingVertical={10}>
                  <Text type="paragraph" color={COLORS.WHITE} fontWeight={600}>
                    Socials
                  </Text>
                </Box>
                <NavItem fontWeight={400} url={"https://t.me/proofaudit"}>
                  <Flex gap={10}>
                    <Icon icon={Icons.telegram} size="SMALL" />
                    <Text color={COLORS.GRAY} type="plain" fontWeight={400}>
                      Telegram
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem
                  fontWeight={400}
                  url={"https://twitter.com/proofaudit"}
                >
                  <Flex gap={10}>
                    <Icon icon={Icons.twitter} size="SMALL" />
                    <Text color={COLORS.GRAY} type="plain" fontWeight={400}>
                      Twitter
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem
                  fontWeight={400}
                  url={"https://medium.com/@proofaudit"}
                >
                  <Flex gap={10}>
                    <Icon icon={Icons.medium} size="SMALL" />
                    <Text color={COLORS.GRAY} type="plain" fontWeight={400}>
                      Medium
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem
                  fontWeight={400}
                  url={"https://www.linkedin.com/company/proofaudit/"}
                >
                  <Flex gap={10}>
                    <Icon icon={Icons.linkedin} size="SMALL" />
                    <Text color={COLORS.GRAY} type="plain" fontWeight={400}>
                      LinkedIn
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem
                  fontWeight={400}
                  url={"https://www.instagram.com/proof.audit/"}
                >
                  <Flex gap={10}>
                    <Icon icon={Icons.instagram} size="SMALL" />
                    <Text color={COLORS.GRAY} type="plain" fontWeight={400}>
                      Instagram
                    </Text>
                  </Flex>
                </NavItem>
                <NavItem fontWeight={400} url={"https://github.com/proofaudit"}>
                  <Flex gap={10}>
                    <Icon icon={Icons.github} size="SMALL" />
                    <Text color={COLORS.GRAY} type="plain" fontWeight={400}>
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
