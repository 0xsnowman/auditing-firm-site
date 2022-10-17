import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  ContentWrapper,
  Icon,
  Grid,
  GridItem
} from "ui/atoms";
import {
  Page,
  Button,
  TextBox,
  MileStone,
  PostBox,
  Accordian
} from "ui/molecules";
import Icons from "assets/icons";
import { COLORS } from "config/colors";
import { Z_INDEX_LEVELS } from "config/dimensions";
import useWindowDimensions from "hooks/useWindowDimensions";
import { WINDOW_SIZES } from "config/dimensions";
import { connect } from "react-redux";
import { changeTheme } from "redux/actions/theme";
import { changeAuditModalOpened } from "redux/actions/requestAuditModal";

const Polygon = (props: any) => {
  const { deviceWidth } = useWindowDimensions();
  const faqData = [
    {
      title: "What are smart contracts?",
      content: `A smart contract, like any contract, establishes the terms of an agreement. But unlike a traditional contract, a smart contract’s terms are executed as code running on a blockchain like Ethereum. Smart contracts allow developers to build apps that take advantage of blockchain security, reliability, and accessibility while offering sophisticated peer-to-peer functionality`,
      collapse: true
    },
    {
      title: "Why do web3 projects rely on smart contracts?",
      content: `Smart contracts allow developers to build a wide variety of decentralized apps and tokens. They’re used in everything from new financial tools to logistics and game experiences, and they’re stored on a blockchain like any other crypto transaction. Once a smart-contract app has been added to the blockchain, it generally can’t be reversed or changed (although there are some exceptions).`,
      collapse: true
    },
    {
      title: "What is a smart contract audit?",
      content: `A smart contract audit is a process whereby a third party or exchange analyzes a smart contract code behind a token or DeFi protocol. The audit confirms to the public that your contract contains no mechanisms and loopholes to steal investors’ funds.`,
      collapse: true
    },
    {
      title: "What benefits does a company get upon passing a contract audit?",
      content: `Smart contract auditing enables businesses to find and eliminate smart contract vulnerabilities to exploit attackers who can cause serious damage to the business and its customers. Passing an audit also serves as a confirmation of the company's credibility to potential partners and investors.`,
      collapse: true
    },
    {
      title:
        "Will I get recommendations on how to address detected issues after an audit?",
      content: `Yes, our expert auditors will provide you with a comprehensive list of suggested fixes for any vulnerabilities detected in your smart contract.`,
      collapse: true
    },
    {
      title: "What is the duration of a smart contract audit?",
      content: `A smart contract audit can take anywhere from 1 to 7 business days to complete depending on the complexity and length of the smart contract`,
      collapse: true
    }
  ];
  const fixedScrollBarLeftCalculate = () => {
    if (deviceWidth > 1800) {
      return `calc(${(deviceWidth - 1400) / 2}px + 32px)`;
    } else if (deviceWidth > 1200) {
      return `calc(${(deviceWidth - 1150) / 2}px + 32px)`;
    } else if (deviceWidth > 900) {
      return `calc(${(deviceWidth - 860) / 2}px + 32px)`;
    } else if (deviceWidth > 464) {
      return 34 + 20;
    } else if (deviceWidth > 342) {
      return 32 + 20;
    }
    return 32;
  };
  return (
    <Page backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
      <Flex flexDirection="column" gap={0} alignItems="center">
        <Box
          position="fixed"
          top={105}
          left={fixedScrollBarLeftCalculate()}
          width={6}
          height="250px"
          zIndex={Z_INDEX_LEVELS.VERY_LOW}
          backgroundColor={COLORS.DARK_THEME_BUTTON_BLUE}
        />
        <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
          <Container>
            <Box padding={90}></Box>
            <Box paddingHorizontal={20} paddingVertical={50}>
              <Flex flexDirection="column" alignItems="center" gap={20}>
                <Text center type="sublogo" fontWeight={600}>
                  Polygon Smart Contract Audit
                </Text>
                <Text center type="paragraph">
                  Fortify your Polygon projects against exploits and hold your
                  code to industry accepted standards.
                </Text>
                <Box padding={20}>
                  <Button
                    backgroundColor={COLORS.DARK_THEME_BUTTON_BLUE}
                    backgroundHoverColor={COLORS.DROPDOWN_HOVER}
                    onClick={() => {
                      props.changeAuditModalOpened(!props.requestAuditModal);
                    }}
                  >
                    Request An Audit
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Container>
        </ContentWrapper>
        <ContentWrapper backgroundColor={COLORS.DARK_THEME_GREY_BACKGROUND}>
          <Container>
            <Box paddingHorizontal={20} paddingVertical={30}>
              <Flex alignItems="center" gap={20} flexDirection="column">
                <Text
                  center
                  type={
                    deviceWidth > WINDOW_SIZES.SIZE_1280
                      ? "paragraph"
                      : "sublogo"
                  }
                  fontWeight={600}
                >
                  SUPPORTED CHAINS
                </Text>
                <Box padding={3}></Box>
                <Flex
                  gap={30}
                  justifyContent="center"
                  flexDirection={
                    deviceWidth > WINDOW_SIZES.SIZE_1280 ? "row" : "column"
                  }
                >
                  <Icon icon={Icons.ethereum} size="EXTRA_SUPER_LARGE"></Icon>
                  <Icon icon={Icons.bnb} size="EXTRA_SUPER_LARGE"></Icon>
                  <Icon icon={Icons.polygon} size="EXTRA_SUPER_LARGE"></Icon>
                  <Icon icon={Icons.tron} size="EXTRA_SUPER_LARGE"></Icon>
                  <Icon icon={Icons.avalanche} size="EXTRA_SUPER_LARGE"></Icon>
                </Flex>
              </Flex>
            </Box>
          </Container>
        </ContentWrapper>
        <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
          <Container>
            <Box padding={30}></Box>
            <Box paddingHorizontal={20} paddingVertical={50}>
              <Flex flexDirection="column" alignItems="center" gap={20}>
                <Text center type="sublogo" fontWeight={600}>
                  Protect your Polygon project from vulnerabilities
                </Text>
                <Box padding={10}></Box>
                <Flex
                  gap={30}
                  flexDirection={
                    deviceWidth > WINDOW_SIZES.SIZE_1280 ? "row" : "column"
                  }
                >
                  <TextBox
                    title="Avoid erros"
                    titleColor={COLORS.DARK_THEME_WHITE}
                    content="Critical vulnerabilities can jeopardize your project. The biggest hacks are usually caused by code errors and vulnerabilities."
                  />
                  <TextBox
                    title="Optimize code"
                    titleColor={COLORS.DARK_THEME_WHITE}
                    content="Get professional consultation from the best smart contract auditing firm to optimize your code."
                  />
                  <TextBox
                    title="Earn community trust"
                    titleColor={COLORS.DARK_THEME_WHITE}
                    content="Earn the trust of your community. Contracts audited by Proof have an incident rate of less than 1%."
                  />
                </Flex>
              </Flex>
            </Box>
          </Container>
        </ContentWrapper>
        <ContentWrapper
          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND_DARK}
        >
          <Container>
            <Box padding={30}></Box>
            <Box paddingHorizontal={20} paddingVertical={50}>
              <Flex flexDirection="column" alignItems="center" gap={20}>
                <Text center type="sublogo" fontWeight={600}>
                  Interested in a Proof security audit?
                </Text>
                <Box padding={20}>
                  <Button
                    backgroundColor={COLORS.DARK_THEME_BUTTON_BLUE}
                    backgroundHoverColor={COLORS.DROPDOWN_HOVER}
                    onClick={() => {
                      props.changeAuditModalOpened(!props.requestAuditModal);
                    }}
                  >
                    Request An Audit
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Container>
        </ContentWrapper>
        <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
          <Container>
            <Box padding={30}></Box>
            <Box paddingHorizontal={20} paddingVertical={50}>
              <Flex flexDirection="column" alignItems="center" gap={20}>
                <Text center type="sublogo" fontWeight={600}>
                  Benefits of Proof Smart Contract Audit
                </Text>
                <Grid gap={20}>
                  <GridItem
                    columns={
                      deviceWidth > WINDOW_SIZES.SIZE_1280
                        ? 4
                        : deviceWidth > WINDOW_SIZES.SIZE_768
                        ? 6
                        : 12
                    }
                  >
                    <TextBox
                      title="Time-Efficient Process"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      content="The length of the audit process is decided during the negotiation stage. As soon as the client has provided all the required documents the audit process can begin."
                      minHeight={260}
                    />
                  </GridItem>
                  <GridItem
                    columns={
                      deviceWidth > WINDOW_SIZES.SIZE_1280
                        ? 4
                        : deviceWidth > WINDOW_SIZES.SIZE_768
                        ? 6
                        : 12
                    }
                  >
                    <TextBox
                      title="Transparent Pricing"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      content="After the preliminary audit is completed, we can begin a full audit.The price of a full audit is based on the complexity and length of the smart contract."
                      minHeight={260}
                    />
                  </GridItem>
                  <GridItem
                    columns={
                      deviceWidth > WINDOW_SIZES.SIZE_1280
                        ? 4
                        : deviceWidth > WINDOW_SIZES.SIZE_768
                        ? 6
                        : 12
                    }
                  >
                    <TextBox
                      title="Expertise"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      content="Proof is an established European based Web3 auditor. We boast an impressive team of seasoned talent and have developed our own unique methodology."
                      minHeight={260}
                    />
                  </GridItem>
                  <GridItem
                    columns={
                      deviceWidth > WINDOW_SIZES.SIZE_1280
                        ? 4
                        : deviceWidth > WINDOW_SIZES.SIZE_768
                        ? 6
                        : 12
                    }
                  >
                    <TextBox
                      title="Responsive Team"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      content="Once you begin the auditing process with Proof, our team is at your full disposal. We are on hand to answer all of your questions and provide professional advice."
                      minHeight={260}
                    />
                  </GridItem>
                  <GridItem
                    columns={
                      deviceWidth > WINDOW_SIZES.SIZE_1280
                        ? 4
                        : deviceWidth > WINDOW_SIZES.SIZE_768
                        ? 6
                        : 12
                    }
                  >
                    <TextBox
                      title="Quality Assurance"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      content="When your community members ask the question, “Is this project a safe choice?” The best answer is a smart contract audit from a highly trusted and reputable auditor."
                      minHeight={260}
                    />
                  </GridItem>
                  <GridItem
                    columns={
                      deviceWidth > WINDOW_SIZES.SIZE_1280
                        ? 4
                        : deviceWidth > WINDOW_SIZES.SIZE_768
                        ? 6
                        : 12
                    }
                  >
                    <TextBox
                      title="Trusted Certification"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      content="When you get an audit from Proof you’re receiving a certification from an industry recognized authenticator. This helps to bolster trust in your brand."
                      minHeight={260}
                    />
                  </GridItem>
                </Grid>
              </Flex>
            </Box>
          </Container>
        </ContentWrapper>
        <ContentWrapper
          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND_DARK}
        >
          <Container>
            <Box padding={30}></Box>
            <Box paddingHorizontal={20} paddingVertical={50}>
              <Flex flexDirection="column" alignItems="center" gap={20}>
                <Text center type="sublogo" fontWeight={600}>
                  Interested in a Proof security audit?
                </Text>
                <Box padding={20}>
                  <Button
                    backgroundColor={COLORS.DARK_THEME_BUTTON_BLUE}
                    backgroundHoverColor={COLORS.DROPDOWN_HOVER}
                    onClick={() => {
                      props.changeAuditModalOpened(!props.requestAuditModal);
                    }}
                  >
                    Request An Audit
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Container>
        </ContentWrapper>
        <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
          <Container>
            <Box padding={30}></Box>
            <Text center type="sublogo" fontWeight={600}>
              How It Works
            </Text>
            <Box padding={30}></Box>
          </Container>
        </ContentWrapper>
        <Container>
          <Box paddingHorizontal={20} paddingVertical={0} overflowY="hidden">
            <Flex flexDirection="column" alignItems="center" gap={20}>
              <Box paddingVertical={0}>
                <Flex flexDirection="column">
                  <MileStone
                    value={1}
                    title="1 DAY"
                    subtitle="Preliminary Audit"
                    content={[
                      "You submit the required documentation and get a free preliminary audit, including an estimation of the full audit scope, timeline, and price."
                    ]}
                    direction="vertical"
                  />
                  <MileStone
                    value={2}
                    title="1-3 DAYS"
                    subtitle="Audit Report"
                    content={[
                      "After the end of initial testing, our specialists will provide you with a report specifying detected vulnerabilities with recommendations on their fixing"
                    ]}
                    direction="vertical"
                  />
                  <MileStone
                    value={3}
                    title="1-2 DAYS"
                    subtitle="Remediation check"
                    content={[
                      "After you introduce fixes, our team will perform a remediation check (1 check is included in the smart contract audit price) to ensure that all changes are correct"
                    ]}
                    direction="vertical"
                  />
                  <MileStone
                    value={4}
                    title="1 DAY"
                    subtitle="Certification and promotion"
                    content={[
                      "Integrate Proof audit into your website. Your audit will be mentioned on the Proof-owned and partner media"
                    ]}
                    direction="vertical"
                  />
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Container>
        <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
          <Box padding={30}></Box>
        </ContentWrapper>
        <ContentWrapper
          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND_DARK}
        >
          <Container>
            <Box padding={30}></Box>
            <Box paddingHorizontal={20} paddingVertical={50}>
              <Flex flexDirection="column" alignItems="center" gap={20}>
                <Text center type="sublogo" fontWeight={600}>
                  Interested in a Proof security audit?
                </Text>
                <Box padding={20}>
                  <Button
                    backgroundColor={COLORS.DARK_THEME_BUTTON_BLUE}
                    backgroundHoverColor={COLORS.DROPDOWN_HOVER}
                    onClick={() => {
                      props.changeAuditModalOpened(!props.requestAuditModal);
                    }}
                  >
                    Request An Audit
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Container>
        </ContentWrapper>
        <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
          <Box padding={30}></Box>
          <Box paddingHorizontal={20} paddingVertical={50}>
            <Flex flexDirection="column" alignItems="center" gap={20}>
              <Text center type="sublogo" fontWeight={600}>
                Why does an Audit Report include?
              </Text>
              <Flex
                gap={20}
                flexDirection={
                  deviceWidth > WINDOW_SIZES.SIZE_1280 ? "row" : "column"
                }
                width="100%"
              >
                <PostBox
                  content={[
                    "Breakdown of vulnerabilities with corresponding severity ratings"
                  ]}
                  textColor={COLORS.DARK_THEME_WHITE}
                  image={false}
                  leftTextCount="all"
                  icon={Icons.checkedRound}
                  minHeight={150}
                />
                <PostBox
                  content={[
                    "Detailed suggestions on how to fix identified issues"
                  ]}
                  textColor={COLORS.DARK_THEME_WHITE}
                  image={false}
                  leftTextCount="all"
                  icon={Icons.checkedRound}
                  minHeight={150}
                />
                <PostBox
                  content={[
                    "Detailed suggestions on how to fix identified issues"
                  ]}
                  textColor={COLORS.DARK_THEME_WHITE}
                  image={false}
                  leftTextCount="all"
                  icon={Icons.checkedRound}
                  minHeight={150}
                />
              </Flex>
              <Box padding={20} />
              <Text center type="sublogo" fontWeight={600}>
                What do you get after an audit?
              </Text>
              <Grid gap={20}>
                <GridItem
                  columns={deviceWidth > WINDOW_SIZES.SIZE_1024 ? 6 : 12}
                >
                  <TextBox
                    title="Comprehensive Report"
                    titleColor={COLORS.DARK_THEME_WHITE}
                    content="Once we complete your audit, we will provide you with a comprehensive audit report in pdf format."
                  />
                </GridItem>
                <GridItem
                  columns={deviceWidth > WINDOW_SIZES.SIZE_1024 ? 6 : 12}
                >
                  <TextBox
                    title="Authentication Badge"
                    titleColor={COLORS.DARK_THEME_WHITE}
                    content="After you are audited with proof, you will be able to integrate the badge “audited by Proof” into your website."
                  />
                </GridItem>
                <GridItem
                  columns={deviceWidth > WINDOW_SIZES.SIZE_1024 ? 6 : 12}
                >
                  <TextBox
                    title="Website Feature"
                    titleColor={COLORS.DARK_THEME_WHITE}
                    content="We will feature your project and audit on our website and in our Github as irrefutable Proof that you were audited by us."
                  />
                </GridItem>
                <GridItem
                  columns={deviceWidth > WINDOW_SIZES.SIZE_1024 ? 6 : 12}
                >
                  <TextBox
                    title="Marketing Partnership"
                    titleColor={COLORS.DARK_THEME_WHITE}
                    content="As soon as you receive a smart contract audit, we will provide you with an extended social media/email marketing package."
                  />
                </GridItem>
              </Grid>
            </Flex>
          </Box>
        </ContentWrapper>
        <ContentWrapper
          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND_DARK}
        >
          <Container>
            <Box padding={30}></Box>
            <Box paddingHorizontal={20} paddingVertical={50}>
              <Flex flexDirection="column" alignItems="center" gap={20}>
                <Text center type="sublogo" fontWeight={600}>
                  Interested in a Proof security audit?
                </Text>
                <Box padding={20}>
                  <Button
                    backgroundColor={COLORS.DARK_THEME_BUTTON_BLUE}
                    backgroundHoverColor={COLORS.DROPDOWN_HOVER}
                    onClick={() => {
                      props.changeAuditModalOpened(!props.requestAuditModal);
                    }}
                  >
                    Request An Audit
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Container>
        </ContentWrapper>
        <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
          <Container>
            <Box padding={30}></Box>
            <Box paddingHorizontal={20} paddingVertical={50}>
              <Flex flexDirection="column" alignItems="center" gap={20}>
                <Box padding={5}>
                  <Text type="sublogo" fontWeight={600} center>
                    FAQ
                  </Text>
                </Box>
                <Accordian contents={faqData} />
              </Flex>
            </Box>
          </Container>
        </ContentWrapper>
        <ContentWrapper
          backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND_DARK}
        >
          <Container>
            <Box padding={30}></Box>
            <Box paddingHorizontal={20} paddingVertical={50}>
              <Flex flexDirection="column" alignItems="center" gap={20}>
                <Text center type="sublogo" fontWeight={600}>
                  Interested in a Proof security audit?
                </Text>
                <Box padding={20}>
                  <Button
                    backgroundColor={COLORS.DARK_THEME_BUTTON_BLUE}
                    backgroundHoverColor={COLORS.DROPDOWN_HOVER}
                    onClick={() => {
                      props.changeAuditModalOpened(!props.requestAuditModal);
                    }}
                  >
                    Request An Audit
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Container>
        </ContentWrapper>
      </Flex>
    </Page>
  );
};

const mapStateToProps = (state: any) => {
  return {
    theme: state.ThemeReducer.theme,
    requestAuditModal: state.RequestAuditModalReducer.auditModalOpened
  };
};

export default connect(
  mapStateToProps,
  { changeTheme: changeTheme, changeAuditModalOpened: changeAuditModalOpened }
)(Polygon);
