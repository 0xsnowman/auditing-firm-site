import React from "react";
import { Flex, Text, Container, Box, Icon } from "ui/atoms";
import { Page, CarouselCard, Carousel, Table, SearchInput } from "ui/molecules";
import { COLORS } from "config/colors";
import Icons from "assets/icons";
import Images from "assets/images";
import useWindowDimensions from "hooks/useWindowDimensions";
import { WINDOW_SIZES } from "config/dimensions";
// import contractData from "assets/json/contracts.json";

const Audit = () => {
  const { deviceWidth } = useWindowDimensions();
  return (
    <Page>
      <Container>
        <Flex flexDirection="column" gap={40}>
          <Flex flexDirection="column" gap={5}>
            <Text color="black" type="logo">
              Proof Audit
            </Text>
            <Text color={COLORS.GRAY_DARK} type="subtitle">
              Provable trust For All
            </Text>
          </Flex>
          <Flex
            gap={30}
            className="page-home__blogcarousel"
            justifyContent="space-between"
          >
            <Box width={deviceWidth > WINDOW_SIZES.SIZE_768 ? "38%" : "100%"}>
              <Flex flexDirection="column" gap={40}>
                <Box
                  paddingHorizontal={15}
                  paddingVertical={25}
                  borderColor={COLORS.GRAY}
                  borderWidth={1}
                  borderRadius={20}
                  backgroundColor="white"
                >
                  <Flex className="page-home__blogcarousel__dash">
                    <Box
                      borderRightWidth={
                        deviceWidth > WINDOW_SIZES.SIZE_464 ? 2 : 0
                      }
                      borderBottomWidth={
                        deviceWidth < WINDOW_SIZES.SIZE_464 ? 2 : 0
                      }
                      borderColor={COLORS.GREY}
                      padding={20}
                    >
                      <Flex flexDirection="column" gap={20}>
                        <Icon icon={Icons.rocket} size="MEDIUM" />
                        <Flex>
                          <Flex flexDirection="column" gap={5}>
                            <Text color={COLORS.GRAY_DARK} type="paragraph">
                              Projects audited
                            </Text>
                            <Text type="title">1206</Text>
                            <Text color={COLORS.GRAY_DARK} type="plain">
                              Since Jun 2021
                            </Text>
                          </Flex>
                          <Box padding={5} />
                        </Flex>
                      </Flex>
                    </Box>
                    <Box padding={20}>
                      <Flex>
                        <Box padding={5} />
                        <Flex flexDirection="column" gap={20}>
                          <Icon icon={Icons.blockchain} size="MEDIUM" />

                          <Flex flexDirection="column" gap={5}>
                            <Text color={COLORS.GRAY_DARK} type="paragraph">
                              Different Blockchains
                            </Text>
                            <Text type="title">18</Text>
                            <Text color={COLORS.GRAY_DARK} type="plain">
                              Supported by Caduceus
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <SearchInput placeholder="Input search text here" />
              </Flex>
            </Box>
            <Box
              width={deviceWidth > WINDOW_SIZES.SIZE_768 ? "58%" : "100%"}
              height="100%"
              borderRadius={20}
              borderColor={COLORS.GRAY}
              borderWidth={2}
              overflowX="hidden"
              overflowY="hidden"
            >
              <Carousel>
                <CarouselCard
                  title="Hal Finney and Blockchain Hacking"
                  date="Apr 2022"
                  slide={Images.slide1}
                />
                <CarouselCard
                  title="Proof Audit Mechanism"
                  date="Jun 2022"
                  slide={Images.slide2}
                />
                <CarouselCard
                  title="The future of blockchain"
                  date="Aug 2022"
                  slide={Images.slide2}
                />
              </Carousel>
            </Box>
          </Flex>
          <Table />
        </Flex>
      </Container>
    </Page>
  );
};

export default Audit;
