import React, { useState } from "react";
import { Flex, Box, Text, Grid, GridItem, Icon, ProgressBar } from "ui/atoms";
import { ProgressSpinner, AddressLabel, CheckBox } from "ui/molecules";
import { COLORS } from "config/colors";
import useWindowDimensions from "hooks/useWindowDimensions";
import { WINDOW_SIZES } from "config/dimensions";
import Icons from "assets/icons";

const Table = () => {
  const { deviceWidth } = useWindowDimensions();
  const [progress] = useState<number>(75);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const totalItemCount = 100;
  const itemCountPerPage = 10;
  const [entireRowChecked, setEntireRowChecked] = useState<boolean>(false);
  return (
    <Flex flexDirection="column">
      <Box paddingVertical={20}>
        <Box paddingVertical={10}>
          <Text type="title" fontWeight={600} color={COLORS.LIGHT_BLUE}>
            Audit Reports
          </Text>
        </Box>
        <Flex gap={15}>
          <Box padding={5} borderRadius={5} backgroundColor="#BBB">
            <CheckBox />
          </Box>
          <Box
            paddingHorizontal={10}
            paddingVertical={5}
            borderRadius={5}
            backgroundColor="#BBB"
          >
            <Text color={"#333"} type="plain" fontWeight={600}>
              Watchlists
            </Text>
          </Box>
          <Box
            paddingHorizontal={10}
            paddingVertical={5}
            borderRadius={5}
            backgroundColor="#BBB"
          >
            <Text color={"#333"} type="plain" fontWeight={600}>
              Chain
            </Text>
          </Box>
          <Box
            paddingHorizontal={10}
            paddingVertical={5}
            borderRadius={5}
            backgroundColor="#BBB"
          >
            <Text color={"#333"} type="plain" fontWeight={600}>
              Category
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box
        backgroundColor="white"
        borderColor={COLORS.GREY}
        borderWidth={1}
        padding={20}
        borderRadius={20}
      >
        <Box backgroundColor={COLORS.WHITE}>
          <Flex flexDirection="column">
            <Flex gap={0} justifyContent="space-between">
              <Box width={deviceWidth > WINDOW_SIZES.SIZE_464 ? "35%" : "70%"}>
                <Box backgroundColor="white">
                  <Box backgroundColor="white" paddingVertical={5}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={4}>
                        <Flex justifyContent="center">
                          <Box onClick={() => {
                            setEntireRowChecked(!entireRowChecked);
                          }}>
                            <CheckBox defaultCheckState={entireRowChecked} />
                          </Box>
                        </Flex>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" padding={10}>
                          <Text
                            center
                            color={COLORS.GRAY_DARK}
                            type="plain"
                            fontWeight={600}
                          >
                            #
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" height="100%">
                          <Text
                            center
                            color={COLORS.GRAY_DARK}
                            type="plain"
                            fontWeight={600}
                          >
                            Name
                          </Text>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                </Box>
                <Flex flexDirection="column" gap={3}>
                  {/* The first token name part data is here */}
                  <Box backgroundColor="white" paddingVertical={7}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={4}>
                        <Flex justifyContent="center">
                          <CheckBox
                            stateChangable={false}
                            defaultCheckState={entireRowChecked}
                          />
                        </Flex>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" padding={10}>
                          <Flex justifyContent="center">
                            <Text>4</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" height="100%">
                          <Flex
                            alignItems="center"
                            justifyContent="center"
                            gap={10}
                          >
                            <Icon icon={Icons.rocket} />
                            <Text>Shiba Inu</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box backgroundColor="white" paddingVertical={7}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={4}>
                        <Flex justifyContent="center">
                          <CheckBox
                            stateChangable={false}
                            defaultCheckState={entireRowChecked}
                          />
                        </Flex>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" padding={10}>
                          <Flex justifyContent="center">
                            <Text>4</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" height="100%">
                          <Flex
                            alignItems="center"
                            justifyContent="center"
                            gap={10}
                          >
                            <Icon icon={Icons.rocket} />
                            <Text>Shiba Inu</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box backgroundColor="white" paddingVertical={7}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={4}>
                        <Flex justifyContent="center">
                          <CheckBox
                            stateChangable={false}
                            defaultCheckState={entireRowChecked}
                          />
                        </Flex>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" padding={10}>
                          <Flex justifyContent="center">
                            <Text>4</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" height="100%">
                          <Flex
                            alignItems="center"
                            justifyContent="center"
                            gap={10}
                          >
                            <Icon icon={Icons.rocket} />
                            <Text>Shiba Inu</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box backgroundColor="white" paddingVertical={7}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={4}>
                        <Flex justifyContent="center">
                          <CheckBox
                            stateChangable={false}
                            defaultCheckState={entireRowChecked}
                          />
                        </Flex>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" padding={10}>
                          <Flex justifyContent="center">
                            <Text>4</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" height="100%">
                          <Flex
                            alignItems="center"
                            justifyContent="center"
                            gap={10}
                          >
                            <Icon icon={Icons.rocket} />
                            <Text>Shiba Inu</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box backgroundColor="white" padding={10} />
                </Flex>
              </Box>
              <Box
                overflowX="scroll"
                width={deviceWidth > WINDOW_SIZES.SIZE_464 ? "60%" : "25%"}
              >
                <Box backgroundColor="white">
                  <Box backgroundColor="white" paddingVertical={5}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={2}>
                        <Box backgroundColor="white">
                          <Text
                            center
                            color={COLORS.GRAY_DARK}
                            type="plain"
                            fontWeight={600}
                          >
                            Trust Score
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text
                            center
                            color={COLORS.GRAY_DARK}
                            type="plain"
                            fontWeight={600}
                          >
                            Links
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text
                            center
                            color={COLORS.GRAY_DARK}
                            type="plain"
                            fontWeight={600}
                          >
                            Contract
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text
                            center
                            color={COLORS.GRAY_DARK}
                            type="plain"
                            fontWeight={600}
                          >
                            Chain
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text
                            center
                            color={COLORS.GRAY_DARK}
                            type="plain"
                            fontWeight={600}
                          >
                            Category
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text
                            center
                            color={COLORS.GRAY_DARK}
                            type="plain"
                            fontWeight={600}
                          >
                            Audit
                          </Text>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                </Box>
                <Flex flexDirection="column" gap={3}>
                  {/* The contract infor part is here */}
                  <Box backgroundColor="white" paddingVertical={5}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={2}>
                        <Box backgroundColor="white">
                          <Flex justifyContent="center">
                            <ProgressSpinner
                              progress={progress}
                              indicatorColor={COLORS.GREEN}
                            />
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Flex gap={5} justifyContent="center">
                            <Icon icon={Icons.blockchain} />
                            <Icon icon={Icons.rocket} />
                            <Icon icon={Icons.search} />
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text center>
                            <AddressLabel
                              address="0x24A4502BCD803D84C93D84C9"
                              shortened={deviceWidth < WINDOW_SIZES.SIZE_1024}
                            />
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text center>BSC</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text center>DeFi</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Flex justifyContent="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text type="plain" color={COLORS.BLACK}>
                              2
                            </Text>
                          </Flex>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box backgroundColor="white" paddingVertical={5}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={2}>
                        <Box backgroundColor="white">
                          <Flex justifyContent="center">
                            <ProgressSpinner
                              progress={progress}
                              indicatorColor={COLORS.GREEN}
                            />
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Flex gap={5} justifyContent="center">
                            <Icon icon={Icons.blockchain} />
                            <Icon icon={Icons.rocket} />
                            <Icon icon={Icons.search} />
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <AddressLabel
                            address="0x24A4502BCD803D84C93D84C9"
                            shortened={deviceWidth < WINDOW_SIZES.SIZE_1024}
                          />
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text center>BSC</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text center>Utiltiy</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Flex justifyContent="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text type="plain" color={COLORS.BLACK}>
                              2
                            </Text>
                          </Flex>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box backgroundColor="white" paddingVertical={5}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={2}>
                        <Box backgroundColor="white">
                          <Flex justifyContent="center">
                            <ProgressSpinner
                              progress={progress}
                              indicatorColor={COLORS.GREEN}
                            />
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Flex gap={5} justifyContent="center">
                            <Icon icon={Icons.blockchain} />
                            <Icon icon={Icons.rocket} />
                            <Icon icon={Icons.search} />
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <AddressLabel
                            address="0x24A4502BCD803D84C93D84C9"
                            shortened={deviceWidth < WINDOW_SIZES.SIZE_1024}
                          />
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text center>Ethereum</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text center>DeFi</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Flex justifyContent="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text type="plain" color={COLORS.BLACK}>
                              2
                            </Text>
                          </Flex>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box backgroundColor="white" paddingVertical={5}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={2}>
                        <Box backgroundColor="white">
                          <Flex justifyContent="center">
                            <ProgressSpinner
                              progress={progress}
                              indicatorColor={COLORS.GREEN}
                            />
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Flex gap={5} justifyContent="center">
                            <Icon icon={Icons.blockchain} />
                            <Icon icon={Icons.rocket} />
                            <Icon icon={Icons.search} />
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <AddressLabel
                            address="0x24A4502BCD803D84C93D84C9"
                            shortened={deviceWidth < WINDOW_SIZES.SIZE_1024}
                          />
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text center>BSC</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text center>DeFi</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Flex justifyContent="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text type="plain" color={COLORS.BLACK}>
                              2
                            </Text>
                          </Flex>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box backgroundColor="white" padding={10} />
                </Flex>
              </Box>
            </Flex>
            <Box padding={10} />
            <Box backgroundColor="white">
              <Flex alignItems="center" gap={40} justifyContent="center">
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
                  <Box
                    width={
                      deviceWidth > WINDOW_SIZES.SIZE_320 ? "100px" : "50px"
                    }
                  >
                    <ProgressBar
                      range={totalItemCount / itemCountPerPage}
                      value={currentPageIndex + 1}
                    />
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
  );
};

export default Table;
