import React, { useState } from "react";
import { Flex, Box, Text, Grid, GridItem, Icon } from "ui/atoms";
import {
  ProgressSpinner,
  AddressLabel,
  SearchInput,
  Paginator,
} from "ui/molecules";
import { COLORS } from "config/colors";
import useWindowDimensions from "hooks/useWindowDimensions";
import { WINDOW_SIZES } from "config/dimensions";
import Icons from "assets/icons";
import Tokens from "assets/tokens";

const Table = () => {
  const { deviceWidth } = useWindowDimensions();
  const [progress] = useState<number>(75);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [pageIndexRange] = useState<number>(100);
  const [reduceMark, setReduceMark] = useState<string>("reduce");
  const totalItemCount = 100;
  const itemCountPerPage = 10;
  // const [entireRowChecked, setEntireRowChecked] = useState<boolean>(false);

  // const classifyRange = () => {
  //   if ()
  // }

  return (
    <Flex flexDirection="column">
      <Box paddingVertical={30}>
        <Text
          noWrap
          type="title"
          fontWeight={600}
          color={COLORS.DARK_THEME_WHITE}
          center
        >
          Audit Reports
        </Text>
      </Box>
      <Box>
        <SearchInput />
      </Box>
      <Box padding={10}></Box>
      <Box
        backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
        borderColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
        borderWidth={1}
        padding={20}
        borderRadius={20}
      >
        <Box backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
          <Flex flexDirection="column">
            <Flex
              gap={0}
              justifyContent={
                deviceWidth > WINDOW_SIZES.SIZE_768 ? "space-between" : "center"
              }
            >
              <Box
                width={
                  deviceWidth > WINDOW_SIZES.SIZE_464
                    ? deviceWidth > WINDOW_SIZES.SIZE_1024
                      ? "20%"
                      : "30%"
                    : "40%"
                }
              >
                <Box backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
                  <Box
                    backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                    paddingVertical={5}
                  >
                    <Grid alignCenter gap={0}>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                        minWidth={40}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text
                            noWrap
                            color={COLORS.DARK_THEME_WHITE}
                            type="plain"
                            fontWeight={600}
                          >
                            #
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          height="100%"
                          paddingHorizontal={20}
                        >
                          <Text
                            noWrap
                            color={COLORS.DARK_THEME_WHITE}
                            type="plain"
                            fontWeight={600}
                          >
                            Name
                          </Text>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box paddingVertical={1.5} />
                  <Box
                    paddingVertical={1}
                    backgroundColor={COLORS.DARK_THEME_BORDER}
                  />
                </Box>
                <Flex flexDirection="column" gap={3}>
                  {/* The first token name part data is here */}
                  <Box
                    backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                    paddingVertical={0}
                  >
                    <Grid alignCenter gap="0px 0px">
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                        minWidth={30}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                        >
                          <Flex justifyContent="flex-start">
                            <Text noWrap>1</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          height="100%"
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Tokens.avax} />
                            <Text noWrap>Avax</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                        >
                          <Flex justifyContent="flex-start">
                            <Text noWrap>2</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          height="100%"
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Tokens.bnb} />
                            <Text noWrap>Binance</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                        >
                          <Flex justifyContent="flex-start">
                            <Text noWrap>3</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                          height="100%"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Tokens.eth} />
                            <Text noWrap>Eth</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                        >
                          <Flex justifyContent="flex-start">
                            <Text noWrap>4</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                          height="100%"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Tokens.shinoInu} />
                            <Text noWrap>Shiba Inu</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                        >
                          <Flex justifyContent="flex-start">
                            <Text noWrap>5</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                          height="100%"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Tokens.avax} />
                            <Text noWrap>Avax</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                        >
                          <Flex justifyContent="flex-start">
                            <Text noWrap>6</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                          height="100%"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Tokens.shinoInu} />
                            <Text noWrap>Shiba Inu</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                        >
                          <Flex justifyContent="flex-start">
                            <Text noWrap>7</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                          height="100%"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Tokens.eth} />
                            <Text noWrap>Ethereum</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                        >
                          <Flex justifyContent="flex-start">
                            <Text noWrap>8</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        minWidth={30}
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          paddingVertical={23}
                          paddingHorizontal={10}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          borderBottomWidth={1}
                          height="100%"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Tokens.bnb} />
                            <Text noWrap>BNB</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND} />
                </Flex>
              </Box>
              <Box
                overflowX={
                  deviceWidth > WINDOW_SIZES.SIZE_1024 ? "hidden" : "scroll"
                }
                width={
                  deviceWidth > WINDOW_SIZES.SIZE_464
                    ? deviceWidth > WINDOW_SIZES.SIZE_1024
                      ? "80%"
                      : "70%"
                    : "50%"
                }
              >
                <Box backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
                  <Box
                    backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                    paddingVertical={0}
                  >
                    <Box height={0} />
                    <Grid alignCenter gap={0}>
                      <GridItem columns={2} minWidth={60}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={15}
                          borderBottomWidth={2}
                          borderColor={COLORS.DARK_THEME_BORDER}
                          minWidth={100}
                        >
                          <Text
                            noWrap
                            center
                            color={COLORS.DARK_THEME_WHITE}
                            type="plain"
                            fontWeight={600}
                          >
                            Trust Score
                          </Text>
                          <Box height={3} />
                        </Box>
                      </GridItem>
                      <GridItem columns={2} minWidth={60}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={15}
                          borderBottomWidth={2}
                          borderColor={COLORS.DARK_THEME_BORDER}
                        >
                          <Text
                            noWrap
                            center
                            color={COLORS.DARK_THEME_WHITE}
                            type="plain"
                            fontWeight={600}
                          >
                            Links
                          </Text>
                          <Box height={3} />
                        </Box>
                      </GridItem>
                      <GridItem columns={2} minWidth={60}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={15}
                          borderBottomWidth={2}
                          borderColor={COLORS.DARK_THEME_BORDER}
                        >
                          <Text
                            noWrap
                            center
                            color={COLORS.DARK_THEME_WHITE}
                            type="plain"
                            fontWeight={600}
                          >
                            Contract
                          </Text>
                          <Box height={3} />
                        </Box>
                      </GridItem>
                      <GridItem columns={2} minWidth={60}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={15}
                          borderBottomWidth={2}
                          borderColor={COLORS.DARK_THEME_BORDER}
                        >
                          <Text
                            noWrap
                            center
                            color={COLORS.DARK_THEME_WHITE}
                            type="plain"
                            fontWeight={600}
                          >
                            Chain
                          </Text>
                          <Box height={3} />
                        </Box>
                      </GridItem>
                      <GridItem columns={2} minWidth={60}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={15}
                          borderBottomWidth={2}
                          borderColor={COLORS.DARK_THEME_BORDER}
                        >
                          <Text
                            noWrap
                            center
                            color={COLORS.DARK_THEME_WHITE}
                            type="plain"
                            fontWeight={600}
                          >
                            Category
                          </Text>
                          <Box height={3} />
                        </Box>
                      </GridItem>
                      <GridItem columns={2} minWidth={60}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={15}
                          borderBottomWidth={2}
                          borderColor={COLORS.DARK_THEME_BORDER}
                        >
                          <Text
                            noWrap
                            center
                            color={COLORS.DARK_THEME_WHITE}
                            type="plain"
                            fontWeight={600}
                          >
                            Audit
                          </Text>
                          <Box height={3} />
                        </Box>
                      </GridItem>
                    </Grid>
                    {/* <Box paddingVertical={4} /> */}
                    {/* <Box
                      paddingVertical={1}
                      backgroundColor={COLORS.DARK_THEME_BORDER}
                    /> */}
                  </Box>
                </Box>
                <Flex flexDirection="column" gap={3}>
                  {/* The contract infor part is here */}
                  <Box
                    backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                    // paddingVertical={4}
                  >
                    <Grid alignCenter gap={"0px 0px"}>
                      {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                        return (
                          <>
                            <GridItem columns={2}>
                              <Box
                                backgroundColor={
                                  COLORS.DARK_THEME_GRAY_BACKGROUND
                                }
                                paddingVertical={11}
                                borderColor={COLORS.DARK_THEME_BORDER}
                                borderBottomWidth={1}
                              >
                                <Flex justifyContent="center">
                                  <ProgressSpinner
                                    progress={progress}
                                    indicatorColor={COLORS.GREEN}
                                  />
                                </Flex>
                              </Box>
                            </GridItem>
                            <GridItem columns={2}>
                              <Box
                                backgroundColor={
                                  COLORS.DARK_THEME_GRAY_BACKGROUND
                                }
                                paddingVertical={23}
                                borderColor={COLORS.DARK_THEME_BORDER}
                                borderBottomWidth={1}
                              >
                                <Flex gap={5} justifyContent="center">
                                  <Icon icon={Icons.blockchain} />
                                  <Icon icon={Icons.rocket} />
                                  <Icon icon={Icons.search} />
                                </Flex>
                              </Box>
                            </GridItem>
                            <GridItem columns={2}>
                              <Box
                                backgroundColor={
                                  COLORS.DARK_THEME_GRAY_BACKGROUND
                                }
                                paddingVertical={23}
                                borderColor={COLORS.DARK_THEME_BORDER}
                                borderBottomWidth={1}
                              >
                                <Text noWrap center>
                                  <AddressLabel
                                    address="0x24A4502BCD803D84C93D84C9"
                                    shortened={
                                      deviceWidth < WINDOW_SIZES.SIZE_1024
                                    }
                                  />
                                </Text>
                              </Box>
                            </GridItem>
                            <GridItem columns={2}>
                              <Box
                                backgroundColor={
                                  COLORS.DARK_THEME_GRAY_BACKGROUND
                                }
                                paddingVertical={23}
                                borderColor={COLORS.DARK_THEME_BORDER}
                                borderBottomWidth={1}
                              >
                                <Text noWrap center>
                                  BSC
                                </Text>
                              </Box>
                            </GridItem>
                            <GridItem columns={2}>
                              <Box
                                backgroundColor={
                                  COLORS.DARK_THEME_GRAY_BACKGROUND
                                }
                                paddingVertical={23}
                                borderColor={COLORS.DARK_THEME_BORDER}
                                borderBottomWidth={1}
                              >
                                <Text noWrap center>
                                  DeFi
                                </Text>
                              </Box>
                            </GridItem>
                            <GridItem columns={2}>
                              <Box
                                backgroundColor={
                                  COLORS.DARK_THEME_GRAY_BACKGROUND
                                }
                                paddingVertical={23}
                                borderColor={COLORS.DARK_THEME_BORDER}
                                borderBottomWidth={1}
                              >
                                <Flex justifyContent="center" gap={10}>
                                  <Icon icon={Icons.rocket} />
                                  <Text
                                    noWrap
                                    type="plain"
                                    color={COLORS.DARK_THEME_WHITE}
                                  >
                                    2
                                  </Text>
                                </Flex>
                              </Box>
                            </GridItem>
                          </>
                        );
                      })}
                    </Grid>
                  </Box>
                  <Box
                    backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                    padding={10}
                  />
                </Flex>
              </Box>
            </Flex>
            <Box padding={10} />
            <Flex justifyContent="center">
              <Paginator />
            </Flex>
            {/* <Paginator
              paramCurrentPageIndex={currentPageIndex}
              range={pageIndexRange}
              setPageIndex={setCurrentPageIndex}
              onLeftClick={() => {
                if (currentPageIndex > 0) {
                  setCurrentPageIndex(currentPageIndex - 1);
                }
              }}
              onRightClick={() => {
                if (currentPageIndex < pageIndexRange - 1) {
                  setCurrentPageIndex(currentPageIndex + 1);
                }
              }}
            /> */}
          </Flex>
        </Box>
      </Box>
      <Box padding={20}></Box>
    </Flex>
  );
};

export default Table;
