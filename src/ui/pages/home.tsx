import React, { useState } from "react";

import {
  Flex,
  Text,
  Container,
  Box,
  Icon,
  Input,
  Grid,
  GridItem,
  ProgressBar
} from "ui/atoms";
import { Page, ProgressSpinner, Switch } from "ui/molecules";
import { Carousel, CarouselCard } from "ui/organisms";

import { COLORS } from "config/colors";

import Icons from "assets/icons";
import Images from "assets/images";

// import contractData from "assets/json/contracts.json";

const Home = () => {
  const [searchText, setSearchText] = useState<string>("");
  const onClickSearchButton = () => {
    alert(["[Search] [Input] -", searchText].join(" "));
  };
  const [progress] = useState<number>(75);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const totalItemCount = 100;
  const itemCountPerPage = 10;

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
          <Flex gap={30}>
            <Box width="40%">
              <Flex flexDirection="column" gap={40}>
                <Box
                  paddingHorizontal={15}
                  paddingVertical={25}
                  borderColor={COLORS.GRAY}
                  borderWidth={1}
                  borderRadius={20}
                  backgroundColor="white"
                >
                  <Flex>
                    <Box
                      borderRightWidth={2}
                      borderColor={COLORS.GREY}
                      padding={20}
                    >
                      <Flex flexDirection="column" gap={20}>
                        <Icon icon={Icons.rocket} size="MEDIUM" />
                        <Flex>
                          <Flex flexDirection="column" gap={5}>
                            <Text color={COLORS.GRAY_DARK}>
                              Projects audited
                            </Text>
                            <Text type="title">1206</Text>
                            <Text
                              fontWeight={500}
                              color={COLORS.GRAY_DARK}
                              type="plain"
                            >
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
                            <Text color={COLORS.GRAY_DARK}>
                              Different Blockchains
                            </Text>
                            <Text type="title">18</Text>
                            <Text
                              fontWeight={500}
                              color={COLORS.GRAY_DARK}
                              type="plain"
                            >
                              Supported by Caduceus
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Box position="relative">
                  <Box
                    position="absolute"
                    paddingVertical={16}
                    paddingHorizontal={30}
                  >
                    <Icon icon={Icons.search} size="MEDIUM" />
                  </Box>
                  <Input
                    value={searchText}
                    onChange={evt => {
                      setSearchText(evt.target.value);
                    }}
                    placeholder="Search project by name or token"
                    onPressEnter={() => {
                      onClickSearchButton();
                    }}
                  />
                </Box>
              </Flex>
            </Box>
            <Box
              backgroundColor="white"
              width="60%"
              borderRadius={20}
              padding={20}
              borderColor={COLORS.GRAY}
              borderWidth={2}
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
          <Flex flexDirection="column">
            <Box
              backgroundColor="white"
              borderColor={COLORS.GREY}
              borderWidth={1}
              padding={20}
              borderRadius={20}
            >
              <Box backgroundColor={COLORS.GRAY}>
                <Flex flexDirection="column">
                  <Box backgroundColor="white" paddingHorizontal={10}>
                    <Flex
                      alignItems="center"
                      gap={10}
                      justifyContent="space-between"
                    >
                      <Text>Proof Audit</Text>
                      <Switch />
                    </Flex>
                  </Box>
                  <Box backgroundColor="white" padding={5} />
                  <Box backgroundColor="white">
                    <Box backgroundColor="white" paddingVertical={5}>
                      <Grid alignCenter gap={0}>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text color={COLORS.GRAY_DARK}>Rank</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" height="100%">
                            <Text color={COLORS.GRAY_DARK}>Name</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white">
                            <Text color={COLORS.GRAY_DARK}>Score</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text color={COLORS.GRAY_DARK}>Blockchain</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text color={COLORS.GRAY_DARK}>Category</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text color={COLORS.GRAY_DARK}>Contract</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text color={COLORS.GRAY_DARK}>Audit</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text color={COLORS.GRAY_DARK}>Links</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text color={COLORS.GRAY_DARK}>Date</Text>
                          </Box>
                        </GridItem>
                      </Grid>
                    </Box>
                  </Box>
                  <Flex flexDirection="column" gap={3}>
                    <Box backgroundColor="white" paddingVertical={5}>
                      <Grid alignCenter gap={0}>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>1</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" height="100%">
                            <Flex alignItems="center" gap={10}>
                              <Icon icon={Icons.rocket} />
                              <Text>Sweeptoken</Text>
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white">
                            <ProgressSpinner
                              progress={progress}
                              indicatorColor={COLORS.GREEN}
                            />
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>BSC</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>DeFi</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.blockchain} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.rocket} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Flex gap={5}>
                              <Icon icon={Icons.blockchain} />
                              <Icon icon={Icons.rocket} />
                              <Icon icon={Icons.search} />
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>10/3/2022</Text>
                          </Box>
                        </GridItem>
                      </Grid>
                    </Box>
                    <Box backgroundColor="white" paddingVertical={5}>
                      <Grid alignCenter gap={0}>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>2</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" height="100%">
                            <Flex alignItems="center" gap={10}>
                              <Icon icon={Icons.search} />
                              <Text>Zootopia</Text>
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white">
                            <ProgressSpinner
                              progress={progress}
                              indicatorColor={COLORS.BLUE}
                            />
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>Ethereum</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>Gaming</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.blockchain} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.rocket} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Flex gap={5}>
                              <Icon icon={Icons.blockchain} />
                              <Icon icon={Icons.rocket} />
                              <Icon icon={Icons.search} />
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>10/3/2022</Text>
                          </Box>
                        </GridItem>
                      </Grid>
                    </Box>
                    <Box backgroundColor="white" paddingVertical={5}>
                      <Grid alignCenter gap={0}>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>3</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" height="100%">
                            <Flex alignItems="center" gap={10}>
                              <Icon icon={Icons.blockchain} />
                              <Text>Cloudia</Text>
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white">
                            <ProgressSpinner
                              progress={progress}
                              indicatorColor={COLORS.DANGER}
                            />
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>BSC</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>DeFi</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.blockchain} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.rocket} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Flex gap={5}>
                              <Icon icon={Icons.blockchain} />
                              <Icon icon={Icons.rocket} />
                              <Icon icon={Icons.search} />
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>10/3/2022</Text>
                          </Box>
                        </GridItem>
                      </Grid>
                    </Box>
                    <Box backgroundColor="white" paddingVertical={5}>
                      <Grid alignCenter gap={0}>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>4</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" height="100%">
                            <Flex alignItems="center" gap={10}>
                              <Icon icon={Icons.rocket} />
                              <Text>Sweeptoken</Text>
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white">
                            <ProgressSpinner
                              progress={progress}
                              indicatorColor={COLORS.GREEN}
                            />
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>BSC</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>DeFi</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.blockchain} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.rocket} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Flex gap={5}>
                              <Icon icon={Icons.blockchain} />
                              <Icon icon={Icons.rocket} />
                              <Icon icon={Icons.search} />
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>10/3/2022</Text>
                          </Box>
                        </GridItem>
                      </Grid>
                    </Box>
                    <Box backgroundColor="white" paddingVertical={5}>
                      <Grid alignCenter gap={0}>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>5</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" height="100%">
                            <Flex alignItems="center" gap={10}>
                              <Icon icon={Icons.search} />
                              <Text>Zootopia</Text>
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white">
                            <ProgressSpinner
                              progress={progress}
                              indicatorColor={COLORS.BLUE}
                            />
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>Ethereum</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>Gaming</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.blockchain} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.rocket} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Flex gap={5}>
                              <Icon icon={Icons.blockchain} />
                              <Icon icon={Icons.rocket} />
                              <Icon icon={Icons.search} />
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>10/3/2022</Text>
                          </Box>
                        </GridItem>
                      </Grid>
                    </Box>
                    <Box backgroundColor="white" paddingVertical={5}>
                      <Grid alignCenter gap={0}>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>6</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" height="100%">
                            <Flex alignItems="center" gap={10}>
                              <Icon icon={Icons.blockchain} />
                              <Text>Cloudia</Text>
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white">
                            <ProgressSpinner
                              progress={progress}
                              indicatorColor={COLORS.DANGER}
                            />
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>BSC</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>DeFi</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.blockchain} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.rocket} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Flex gap={5}>
                              <Icon icon={Icons.blockchain} />
                              <Icon icon={Icons.rocket} />
                              <Icon icon={Icons.search} />
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>10/3/2022</Text>
                          </Box>
                        </GridItem>
                      </Grid>
                    </Box>
                    <Box backgroundColor="white" paddingVertical={5}>
                      <Grid alignCenter gap={0}>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>7</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" height="100%">
                            <Flex alignItems="center" gap={10}>
                              <Icon icon={Icons.rocket} />
                              <Text>Sweeptoken</Text>
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white">
                            <ProgressSpinner
                              progress={progress}
                              indicatorColor={COLORS.GREEN}
                            />
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>BSC</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>DeFi</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.blockchain} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.rocket} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Flex gap={5}>
                              <Icon icon={Icons.blockchain} />
                              <Icon icon={Icons.rocket} />
                              <Icon icon={Icons.search} />
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>10/3/2022</Text>
                          </Box>
                        </GridItem>
                      </Grid>
                    </Box>
                    <Box backgroundColor="white" paddingVertical={5}>
                      <Grid alignCenter gap={0}>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>8</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" height="100%">
                            <Flex alignItems="center" gap={10}>
                              <Icon icon={Icons.search} />
                              <Text>Zootopia</Text>
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white">
                            <ProgressSpinner
                              progress={progress}
                              indicatorColor={COLORS.BLUE}
                            />
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>Ethereum</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>Gaming</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.blockchain} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.rocket} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Flex gap={5}>
                              <Icon icon={Icons.blockchain} />
                              <Icon icon={Icons.rocket} />
                              <Icon icon={Icons.search} />
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>10/3/2022</Text>
                          </Box>
                        </GridItem>
                      </Grid>
                    </Box>
                    <Box backgroundColor="white" paddingVertical={5}>
                      <Grid alignCenter gap={0}>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>9</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" height="100%">
                            <Flex alignItems="center" gap={10}>
                              <Icon icon={Icons.blockchain} />
                              <Text>Cloudia</Text>
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white">
                            <ProgressSpinner
                              progress={progress}
                              indicatorColor={COLORS.DANGER}
                            />
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>BSC</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={2}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>DeFi</Text>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.blockchain} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Icon icon={Icons.rocket} />
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Flex gap={5}>
                              <Icon icon={Icons.blockchain} />
                              <Icon icon={Icons.rocket} />
                              <Icon icon={Icons.search} />
                            </Flex>
                          </Box>
                        </GridItem>
                        <GridItem columns={1}>
                          <Box backgroundColor="white" padding={10}>
                            <Text>10/3/2022</Text>
                          </Box>
                        </GridItem>
                      </Grid>
                    </Box>
                    <Box backgroundColor="white" padding={10} />
                  </Flex>
                  <Box backgroundColor="white">
                    <Flex
                      alignItems="center"
                      gap={40}
                      justifyContent="center"
                    >
                      <Box
                        backgroundColor="white"
                        borderColor="black"
                        borderWidth={1}
                        padding={10}
                        borderRadius={30}
                        onClick={() => {
                          if (currentPageIndex > 0) {
                            setCurrentPageIndex(currentPageIndex - 1);
                          }
                        }}
                      >
                        <Icon icon={Icons.left} />                        
                      </Box>
                      <Flex gap={7} alignItems="center">
                        <Text type="plain">01</Text>
                        <Box width="200px">
                          <ProgressBar range={totalItemCount / itemCountPerPage} value={currentPageIndex + 1} />
                        </Box>
                        <Text type="plain">10</Text>
                      </Flex>
                      <Box
                        backgroundColor="white"
                        borderColor="black"
                        borderWidth={1}
                        padding={10}
                        borderRadius={30}
                        onClick={() => {
                          if (
                            (currentPageIndex + 1) * itemCountPerPage <
                            totalItemCount
                          ) {
                            setCurrentPageIndex(currentPageIndex + 1);
                          }
                        }}
                      >
                        <Icon icon={Icons.right} />
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Page>
  );
};

export default Home;
