import React, { useState } from "react";
import { Flex, Box, Text, Grid, GridItem, Icon, ProgressBar } from "ui/atoms";
import {
  ProgressSpinner,
  AddressLabel,
  SearchInput
} from "ui/molecules";
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
  // const [entireRowChecked, setEntireRowChecked] = useState<boolean>(false);

  return (
    <Flex flexDirection="column">
      <Box paddingVertical={30}>
        <Text
          type="sublogo"
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
            <Flex gap={0} justifyContent="space-between">
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
                  <Box paddingVertical={5} />
                </Box>
                <Flex flexDirection="column" gap={3}>
                  {/* The first token name part data is here */}
                  <Box
                    backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                    paddingVertical={7}
                  >
                    <Grid alignCenter gap="19px 0px">
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                        minWidth={30}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="flex-start">
                            <Text>4</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          height="100%"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Icons.rocket} />
                            <Text>Shiba Inu</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="flex-start">
                            <Text>4</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          height="100%"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Icons.rocket} />
                            <Text>Shiba Inu</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="flex-start">
                            <Text>4</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          height="100%"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Icons.rocket} />
                            <Text>Shiba Inu</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="flex-start">
                            <Text>4</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          height="100%"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Icons.rocket} />
                            <Text>Shiba Inu</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="flex-start">
                            <Text>4</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          height="100%"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Icons.rocket} />
                            <Text>Shiba Inu</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="flex-start">
                            <Text>4</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          height="100%"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Icons.rocket} />
                            <Text>Shiba Inu</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="flex-start">
                            <Text>4</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          height="100%"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Icons.rocket} />
                            <Text>Shiba Inu</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 3 : 2}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="flex-start">
                            <Text>4</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem
                        columns={deviceWidth > WINDOW_SIZES.SIZE_768 ? 9 : 10}
                      >
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          height="100%"
                        >
                          <Flex
                            alignItems="center"
                            justifyContent="flex-start"
                            gap={10}
                          >
                            <Icon icon={Icons.rocket} />
                            <Text>Shiba Inu</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                  <Box
                    backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                    padding={10}
                  />
                </Flex>
              </Box>
              <Box
                overflowX="scroll"
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
                    paddingVertical={5}
                  >
                    <Grid alignCenter gap={0}>
                      <GridItem columns={2} minWidth={60}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                        >
                          <Text
                            center
                            color={COLORS.DARK_THEME_WHITE}
                            type="plain"
                            fontWeight={600}
                          >
                            Trust Score
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2} minWidth={60}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text
                            center
                            color={COLORS.DARK_THEME_WHITE}
                            type="plain"
                            fontWeight={600}
                          >
                            Links
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2} minWidth={60}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text
                            center
                            color={COLORS.DARK_THEME_WHITE}
                            type="plain"
                            fontWeight={600}
                          >
                            Contract
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2} minWidth={60}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text
                            center
                            color={COLORS.DARK_THEME_WHITE}
                            type="plain"
                            fontWeight={600}
                          >
                            Chain
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2} minWidth={60}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text
                            center
                            color={COLORS.DARK_THEME_WHITE}
                            type="plain"
                            fontWeight={600}
                          >
                            Category
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2} minWidth={60}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text
                            center
                            color={COLORS.DARK_THEME_WHITE}
                            type="plain"
                            fontWeight={600}
                          >
                            Audit
                          </Text>
                        </Box>
                      </GridItem>
                    </Grid>
                  <Box paddingVertical={5} />
                  </Box>
                </Box>
                <Flex flexDirection="column" gap={3}>
                  {/* The contract infor part is here */}
                  <Box
                    backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                    paddingVertical={5}
                  >
                    <Grid alignCenter gap={15}>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>
                            <AddressLabel
                              address="0x24A4502BCD803D84C93D84C9"
                              shortened={deviceWidth < WINDOW_SIZES.SIZE_1024}
                            />
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>BSC</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>DeFi</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text type="plain" color={COLORS.DARK_THEME_WHITE}>
                              2
                            </Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>
                            <AddressLabel
                              address="0x24A4502BCD803D84C93D84C9"
                              shortened={deviceWidth < WINDOW_SIZES.SIZE_1024}
                            />
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>BSC</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>DeFi</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text type="plain" color={COLORS.DARK_THEME_WHITE}>
                              2
                            </Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>
                            <AddressLabel
                              address="0x24A4502BCD803D84C93D84C9"
                              shortened={deviceWidth < WINDOW_SIZES.SIZE_1024}
                            />
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>BSC</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>DeFi</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text type="plain" color={COLORS.DARK_THEME_WHITE}>
                              2
                            </Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>
                            <AddressLabel
                              address="0x24A4502BCD803D84C93D84C9"
                              shortened={deviceWidth < WINDOW_SIZES.SIZE_1024}
                            />
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>BSC</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>DeFi</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text type="plain" color={COLORS.DARK_THEME_WHITE}>
                              2
                            </Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>
                            <AddressLabel
                              address="0x24A4502BCD803D84C93D84C9"
                              shortened={deviceWidth < WINDOW_SIZES.SIZE_1024}
                            />
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>BSC</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>DeFi</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text type="plain" color={COLORS.DARK_THEME_WHITE}>
                              2
                            </Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>
                            <AddressLabel
                              address="0x24A4502BCD803D84C93D84C9"
                              shortened={deviceWidth < WINDOW_SIZES.SIZE_1024}
                            />
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>BSC</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>DeFi</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text type="plain" color={COLORS.DARK_THEME_WHITE}>
                              2
                            </Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>
                            <AddressLabel
                              address="0x24A4502BCD803D84C93D84C9"
                              shortened={deviceWidth < WINDOW_SIZES.SIZE_1024}
                            />
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>BSC</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>DeFi</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text type="plain" color={COLORS.DARK_THEME_WHITE}>
                              2
                            </Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
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
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>
                            <AddressLabel
                              address="0x24A4502BCD803D84C93D84C9"
                              shortened={deviceWidth < WINDOW_SIZES.SIZE_1024}
                            />
                          </Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>BSC</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Text center>DeFi</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
                        <Box
                          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                          padding={10}
                        >
                          <Flex justifyContent="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text type="plain" color={COLORS.DARK_THEME_WHITE}>
                              2
                            </Text>
                          </Flex>
                        </Box>
                      </GridItem>
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
            <Box backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
              <Flex alignItems="center" gap={40} justifyContent="center">
                <Box
                  backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                  borderColor={COLORS.BLACK}
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
                  backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}
                  borderColor={COLORS.BLACK}
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
      <Box padding={20}></Box>
    </Flex>
  );
};

export default Table;
