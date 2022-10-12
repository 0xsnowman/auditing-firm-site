import React from "react";
import { Box, Container, Icon, Flex } from "ui/atoms";
import { Button, MobileMenu, DropDown } from "ui/molecules";
import useWindowDimensions from "hooks/useWindowDimensions";
import Icons from "assets/icons";
import { WINDOW_SIZES, Z_INDEX_LEVELS } from "config/dimensions";

const Header = () => {
  const { deviceWidth } = useWindowDimensions();

  return (
    <Box
      className="organism-header"
      paddingVertical={30}
      backgroundColor="#FFFFFF50"
      zIndex={Z_INDEX_LEVELS.SUPER}
      width="100%"
      backdropFilter={true}
    >
      <Container>
        <Box position="relative">
          <Flex justifyContent="space-between" alignItems="center">
            <Flex gap={50}>
              {deviceWidth > WINDOW_SIZES.SIZE_375 ? (
                <Icon icon={Icons.proofLogoBlue} size="SUPER_LARGE" />
              ) : (
                <Icon icon={Icons.proofIconBlue} size="LARGE" />
              )}
              {deviceWidth > WINDOW_SIZES.SIZE_1024 && (
                <Flex gap={150} alignItems="center">
                  <Box position="relative">
                    <DropDown
                      title="Products"
                      data={[
                        { title: "Smart Contract", amount: 45 },
                        { title: "dApp", amount: 27 },
                        { title: "NFT", amount: 210 }
                      ]}
                      direction="left"
                      top={-18}
                    />
                  </Box>
                  <Box position="relative">
                    <DropDown
                      title="Chains"
                      data={[
                        { title: "Ethereum", amount: 25 },
                        { title: "Avalanche", amount: 63 },
                        { title: "Solana", amount: 82 }
                      ]}
                      direction="left"
                      top={-18}
                    />
                  </Box>
                  <Box position="relative">
                    <DropDown
                      title="Company"
                      data={[
                        { title: "About", amount: 25 },
                        { title: "Careers", amount: 63 },
                        { title: "Disclaimer", amount: 82 },
                        { title: "Privacy Policy", amount: 82 },
                        { title: "Cookie Policy", amount: 82 },
                        { title: "Terms and Conditions", amount: 82 },
                      ]}
                      direction="left"
                      top={-18}
                    />
                  </Box>
                  <Box position="relative">
                    <DropDown
                      title="Socials"
                      data={[
                        { title: "Discord", amount: 25 },
                        { title: "Telegram", amount: 63 },
                        { title: "Twitter", amount: 82 },
                        { title: "Facebook", amount: 82 },
                        { title: "Github", amount: 82 },
                        { title: "Gitbook", amount: 82 },
                        { title: "Email", amount: 82 },
                      ]}
                      direction="left"
                      top={-18}
                    />
                  </Box>
                </Flex>
              )}
            </Flex>
            {deviceWidth > WINDOW_SIZES.SIZE_1024 && (
              <Flex gap={30} alignItems="center">
                {/* <SearchInput size="small" /> */}
                <Button
                  backgroundColor="#0085FF"
                  backgroundHoverColor="#0066DD"
                  onClick={() => {
                    alert("[Button] [Request a Quote] clicked");
                  }}
                >
                  Request a Quote
                </Button>
              </Flex>
            )}
            {deviceWidth <= WINDOW_SIZES.SIZE_1024 && (
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
