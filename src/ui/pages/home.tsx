import React from "react";

import { Flex, Text, Container, Box, Icon, Grid, GridItem } from "ui/atoms";
import {
  Page,
  CarouselCard,
  Carousel,
  Table,
  SearchInput,
  PostBox,
  TextBox,
  MileStone,
  Accordian
} from "ui/molecules";

import { COLORS } from "config/colors";

import Icons from "assets/icons";
import Images from "assets/images";

import useWindowDimensions from "hooks/useWindowDimensions";

import { WINDOW_SIZES } from "config/dimensions";

// import contractData from "assets/json/contracts.json";

const Home = () => {
  const { deviceWidth } = useWindowDimensions();
  const faqData = [
    {
      title: "What are smart contracts?",
      content: `A smart contract, like any contract, establishes the terms of an agreement. But unlike a traditional contract, a smart contract’s terms are executed as code running on a blockchain like Ethereum. Smart contracts allow developers to build apps that take advantage of blockchain security, reliability, and accessibility while offering sophisticated peer-to-peer functionality`,
      collapse: true,
    },
    {
      title: "Why do web3 projects rely on smart contracts?",
      content: `Smart contracts allow developers to build a wide variety of decentralized apps and tokens. They’re used in everything from new financial tools to logistics and game experiences, and they’re stored on a blockchain like any other crypto transaction. Once a smart-contract app has been added to the blockchain, it generally can’t be reversed or changed (although there are some exceptions).`,
      collapse: true,
    },
    {
      title: "What is a smart contract audit?",
      content: `A smart contract audit is a process whereby a third party or exchange analyzes a smart contract code behind a token or DeFi protocol. The audit confirms to the public that your contract contains no mechanisms and loopholes to steal investors’ funds.`,
      collapse: true,
    },
    {
      title: "What benefits does a company get upon passing a contract audit?",
      content: `Smart contract auditing enables businesses to find and eliminate smart contract vulnerabilities to exploit attackers who can cause serious damage to the business and its customers. Passing an audit also serves as a confirmation of the company's credibility to potential partners and investors.`,
      collapse: true,
    },
    {
      title: "Will I get recommendations on how to address detected issues after an audit?",
      content: `Yes, our expert auditors will provide you with a comprehensive list of suggested fixes for any vulnerabilities detected in your smart contract.`,
      collapse: true,
    },
    {
      title: "What is the duration of a smart contract audit?",
      content: `A smart contract audit can take anywhere from 1 to 7 business days to complete depending on the complexity and length of the smart contract`,
      collapse: true,
    },
  ];
  return (
    <Page>
      <Container>
        <Flex flexDirection="column" gap={40}>
          <PostBox
            title="Why Audit Smart Contracts?"
            subtitle="Protect your project from vulnerabilities and show users your focus on security"
            content={[
              `Smart contract flaws can cost projects money, reputation and
                time. Users often pay special attention to security when making
                investment decisions. A smart contract audit eliminates these
                flaws.`
            ]}
            titleColor="white"
            subtitleColor="#EEE"
            textColor="#EEE"
            paddingVertical={30}
            minHeight="auto"
            imageColor="blue"
          />
          <Box width="100%">
            <Flex justifyContent="space-between" gap={30}>
              <TextBox
                title="Avoid costly errors"
                content="Critical vulnerabilities can jeopardize your project. The biggest hacks are usually caused by code vulnerabilities."
              />
              <TextBox
                title="Optimize your code"
                content="Get professional consultation from the best smart contract auditing firm to optimize your code."
              />
              <TextBox
                title="Increase audience trust"
                content={`When your customers and community members ask the question, "Is this project a safe choice?" The best answer is a smart contract audit from a highly trusted and reputable auditor.Contracts audited by Proof have an incident rate of less than 1%.`}
              />
            </Flex>
          </Box>
          <PostBox
            title="Benefits of Proof Smart Contract Audit"
            background="white"
            paddingVertical={30}
            minHeight="auto"
            imageColor="gray"
          />
          <Box padding={20}>
            <Box backgroundColor={COLORS.GRAY_DARK}>
              <Grid gap={4}>
                <GridItem columns={4}>
                  <PostBox
                    subtitle="Time-Efficient Process"
                    content={[
                      "The length of the audit process is decided during the negotiation stage. As soon as the client has provided all the required documents the audit process can begin."
                    ]}
                    border={false}
                    background="white"
                    image={false}
                    subtitleColor={COLORS.LIGHT_BLUE}
                    borderRadius={0}
                    subtitleCenter={true}
                    minHeight={270}
                  />
                </GridItem>
                <GridItem columns={4}>
                  <PostBox
                    subtitle="Transparent Pricing"
                    content={[
                      "At Proof we care about blockchain security, that’s why we offer a free preliminary audit to assess your smart contract on a base level. After the preliminary audit is completed, we can begin a full audit. The price of a full audit is set during the negotiation stage and can vary based on the complexity and length of the smart contract."
                    ]}
                    border={false}
                    background="white"
                    image={false}
                    subtitleColor={COLORS.LIGHT_BLUE}
                    borderRadius={0}
                    subtitleCenter={true}
                    minHeight={270}
                  />
                </GridItem>
                <GridItem columns={4}>
                  <PostBox
                    subtitle="Expertise"
                    content={[
                      "Proof is an established European based Web3 auditor. We boast an impressive team of seasoned talent and have developed a unique methodology and the highest quality standards."
                    ]}
                    border={false}
                    background="white"
                    image={false}
                    subtitleColor={COLORS.LIGHT_BLUE}
                    borderRadius={0}
                    subtitleCenter={true}
                    minHeight={270}
                  />
                </GridItem>
                <GridItem columns={4}>
                  <PostBox
                    subtitle="Human face"
                    content={[
                      "We are real individuals. You can find our team members on LinkedIn/Twitter as well as meet us during industry events."
                    ]}
                    border={false}
                    background="white"
                    image={false}
                    subtitleColor={COLORS.LIGHT_BLUE}
                    borderRadius={0}
                    subtitleCenter={true}
                    minHeight={270}
                  />
                </GridItem>
                <GridItem columns={4}>
                  <PostBox
                    subtitle="Quality"
                    content={[
                      "Proof has a <1% incident rate among the audited projects."
                    ]}
                    border={false}
                    background="white"
                    image={false}
                    subtitleColor={COLORS.LIGHT_BLUE}
                    borderRadius={0}
                    subtitleCenter={true}
                    minHeight={270}
                  />
                </GridItem>
                <GridItem columns={4}>
                  <PostBox
                    subtitle="Expertise"
                    content={[
                      "Proof is an established European based Web3 auditor. We boast an impressive team of seasoned talent and have developed a unique methodology and the highest quality standards."
                    ]}
                    border={false}
                    background="white"
                    image={false}
                    subtitleColor={COLORS.LIGHT_BLUE}
                    borderRadius={0}
                    subtitleCenter={true}
                    minHeight={270}
                  />
                </GridItem>
              </Grid>
            </Box>
          </Box>
          <PostBox
            title="How Does It Work?"
            background="white"
            paddingVertical={30}
            minHeight="auto"
          />
          <Box paddingVertical={30}>
            <Flex>
              <MileStone />
              <MileStone />
              <MileStone />
              <MileStone />
            </Flex>
          </Box>
          <Box paddingVertical={20}>
            <Flex justifyContent="center">
              <Text type="title">{`What do you get after an audit?`}</Text>
            </Flex>
          </Box>
          <Flex gap={10} alignItems="center">
            <TextBox
              title="Authentication"
              content="After an audit, you will be able to integrate the badge “audited by Proof” into your website."
              titleColor={COLORS.LIGHT_BLUE}
            />
            <Text type="logo" color={COLORS.LIGHT_BLUE}>
              +
            </Text>
            <TextBox
              title="Marketing Partnership"
              content="As soon as you receive a smart contract audit, we will provide you with an extended service package including marketing."
              titleColor={COLORS.LIGHT_BLUE}
            />
          </Flex>
          <Box paddingVertical={20}>
            <Flex justifyContent="center">
              <Text type="title">{`What does an Audit Report Include?`}</Text>
            </Flex>
          </Box>
          <PostBox
            content={[
              "Breakdown of vulnerabilities with corresponding severity ratings",
              "Detailed suggestions on how to fix identified issues",
              "Smart contract rating according to documentation quality, code quality, architecture quality, and security."
            ]}
            textColor="#222"
            paddingVertical={0}
            leftTextCount={200}
            background="white"
            minHeight="auto"
            direction="right-left"
          />
          <Box padding={40}>
            <Flex justifyContent="center" flexDirection="column">
              <Box padding={5}><Text type="title" center>FAQs</Text></Box>
              <Accordian contents={faqData} />
            </Flex>
          </Box>
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

export default Home;
