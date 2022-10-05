import React, { useState } from "react";

import { Flex, Box, Text, Grid, GridItem, Icon, ProgressBar } from "ui/atoms";
import { Switch, ProgressSpinner } from "ui/molecules";

import { COLORS } from "config/colors";

import Icons from "assets/icons";

const Table = () => {
  const [progress] = useState<number>(75);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const totalItemCount = 100;
  const itemCountPerPage = 10;
  return (
    <Flex flexDirection="column">
      <Box
        backgroundColor="white"
        borderColor={COLORS.GREY}
        borderWidth={1}
        padding={20}
        borderRadius={20}
      >
        <Box backgroundColor={COLORS.WHITE}>
          <Flex flexDirection="column">
            <Box backgroundColor="white" paddingHorizontal={10}>
              <Flex alignItems="center" gap={10} justifyContent="space-between">
                <Text>Proof Audit</Text>
                <Switch />
              </Flex>
            </Box>
            <Box backgroundColor="white" padding={5} />
            <Flex gap={0} justifyContent="space-between">
              <Box>
                <Box backgroundColor="white">
                  <Box backgroundColor="white" paddingVertical={5}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" padding={10}>
                          <Text color={COLORS.GRAY_DARK}>Rank</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" height="100%">
                          <Text color={COLORS.GRAY_DARK}>Name</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>{}</GridItem>
                    </Grid>
                  </Box>
                </Box>
                <Flex flexDirection="column" gap={3}>
                  {/* The first token name part data is here */}
                  <Box backgroundColor="white" paddingVertical={5}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" padding={10}>
                          <Text>1</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" height="100%">
                          <Flex alignItems="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text>Sweeptoken</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>{}</GridItem>                      
                    </Grid>
                  </Box>
                  <Box backgroundColor="white" paddingVertical={5}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" padding={10}>
                          <Text>1</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" height="100%">
                          <Flex alignItems="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text>Sweeptoken</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>{}</GridItem>                      
                    </Grid>
                  </Box>
                  <Box backgroundColor="white" paddingVertical={5}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" padding={10}>
                          <Text>1</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" height="100%">
                          <Flex alignItems="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text>Sweeptoken</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>{}</GridItem>                      
                    </Grid>
                  </Box>
                  <Box backgroundColor="white" paddingVertical={5}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" padding={10}>
                          <Text>1</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>
                        <Box backgroundColor="white" height="100%">
                          <Flex alignItems="center" gap={10}>
                            <Icon icon={Icons.rocket} />
                            <Text>Sweeptoken</Text>
                          </Flex>
                        </Box>
                      </GridItem>
                      <GridItem columns={4}>{}</GridItem>                      
                    </Grid>
                  </Box>
                  <Box backgroundColor="white" padding={10} />
                </Flex>
              </Box>
              <Box overflowX="scroll">
                <Box backgroundColor="white">
                  <Box backgroundColor="white" paddingVertical={5}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={2}>
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
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Text color={COLORS.GRAY_DARK}>Audit</Text>
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
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
                  {/* The contract infor part is here */}
                  <Box backgroundColor="white" paddingVertical={5}>
                    <Grid alignCenter gap={0}>
                      <GridItem columns={2}>
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
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Icon icon={Icons.rocket} />
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
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
                      <GridItem columns={2}>
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
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Icon icon={Icons.rocket} />
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
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
                      <GridItem columns={2}>
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
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Icon icon={Icons.rocket} />
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
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
                      <GridItem columns={2}>
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
                      <GridItem columns={2}>
                        <Box backgroundColor="white" padding={10}>
                          <Icon icon={Icons.rocket} />
                        </Box>
                      </GridItem>
                      <GridItem columns={2}>
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
                  <Box width="100px">
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
