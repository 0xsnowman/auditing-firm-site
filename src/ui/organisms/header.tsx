import React from "react";
import { Box, Container, Icon, Flex } from "ui/atoms";
import { Button, MobileMenu, DropDown, SearchInput } from "ui/molecules";
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
      zIndex={Z_INDEX_LEVELS.MAXIMUM}
      width="100%"
      backdropFilter={true}
    >
      <Container>
        <Box position="relative">
          <Flex justifyContent="space-between" alignItems="center">
            <Flex gap={60}>
              {deviceWidth > WINDOW_SIZES.SIZE_375 ? (
                <Icon icon={Icons.proofLogoBlue} size="SUPER_LARGE" />
              ) : (
                <Icon icon={Icons.proofIconBlue} size="LARGE" />
              )}
              {deviceWidth > WINDOW_SIZES.SIZE_1280 && (
                <Flex
                  gap={110}
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <Box position="relative">
                    <DropDown
                      title="Products"
                      data={[
                        { title: "Smart Contract", amount: 45 },
                        { title: "dApp", amount: 27 },
                        { title: "NFT", amount: 210 }
                      ]}
                      direction="left"
                      top={-20}
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
                      top={-20}
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
                        { title: "Terms and Conditions", amount: 82 }
                      ]}
                      direction="left"
                      top={-20}
                    />
                  </Box>
                  <Box position="relative">
                    <DropDown
                      title="Socials"
                      data={[
                        { title: "Telegram", amount: 25 },
                        { title: "Twitter", amount: 63 },
                        { title: "Medium", amount: 82 },
                        { title: "LinkedIn", amount: 82 },
                        { title: "Instagram", amount: 82 },
                        { title: "Github", amount: 82 },
                      ]}
                      direction="left"
                      top={-20}
                    />
                  </Box>
                  <SearchInput
                    size="small"
                    placeholder="Input category here"
                    extend={false}
                    extendChangable={true}
                  />
                </Flex>
              )}
            </Flex>
            {deviceWidth > WINDOW_SIZES.SIZE_1280 && (
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
            {deviceWidth <= WINDOW_SIZES.SIZE_1280 && (
              <Flex gap={15}>
                <MobileMenu type="news" />
                <MobileMenu />
              </Flex>
            )}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
