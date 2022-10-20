import React from "react";
import {
  Flex,
  Text,
  Container,
  Box,
  ContentWrapper,
  Grid,
  GridItem
} from "ui/atoms";
import {
  Page,
  TextBox,
  PostBox,
  Button,
} from "ui/molecules";
import { COLORS } from "config/colors";
import Icons from "assets/icons";
import { connect } from "react-redux";
import { changeTheme } from "redux/actions/theme";
import { changeAuditModalOpened } from "redux/actions/requestAuditModal";
// import useWindowDimensions from "hooks/useWindowDimensions";
// import { WINDOW_SIZES } from "config/dimensions";
// import contractData from "assets/json/contracts.json";

const Company = (props: any) => {
  // const { deviceWidth } = useWindowDimensions();
  return (
    <Page>
      <Box padding={42} backgroundColor={COLORS.DARK_THEME_BLACK} />
      <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
        <Container>
          <Box padding={60}></Box>
          <Box paddingHorizontal={20} paddingVertical={15}>
            <Flex flexDirection="column" alignItems="center" gap={20}>
              <Text type="subtitle">THE PROOF MISSION</Text>
              <Text center type="sublogo" fontWeight={600}>
                Accelerating the security of Web3
              </Text>
              <Box maxWidth={960}>
                <Text center type="subtitle" lineHeight={1.5}>
                  Proof is a blockchain security auditor, using industry-leading
                  Authentication methods to secure EVM-compatible smart
                  contracts and dApps. We prioritize thorough line-by-line code
                  analysis to uncover hidden weaknesses in smart contracts.
                </Text>
              </Box>
              <Box padding={50} />
            </Flex>
          </Box>
        </Container>
      </ContentWrapper>
      <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND_DARK}>
        <Container>
          <Box padding={30}></Box>
          <Box paddingHorizontal={20} paddingVertical={50}>
            <Flex alignItems="center" gap={20} justifyContent="center">
              <Box borderColor={COLORS.DARK_THEME_BUTTON_BLUE} borderWidth={2}>
                <TextBox
                  title="The problem we solve"
                  titleColor={COLORS.DARK_THEME_WHITE}
                  content="Smart contracts are at risk of errors which cannot be corrected once deployed."
                />
              </Box>
              <Box borderColor={COLORS.DARK_THEME_BUTTON_BLUE} borderWidth={2}>
                <TextBox
                  title="Our mission"
                  titleColor={COLORS.DARK_THEME_WHITE}
                  content="Supporting Web3 adoption by ensuring the security of smart contract transactions."
                />
              </Box>
            </Flex>
          </Box>
        </Container>
      </ContentWrapper>
      <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
        <Container>
          <Box padding={40}></Box>
          <Box paddingHorizontal={20} paddingVertical={15}>
            <Flex flexDirection="column" alignItems="center" gap={20}>
              <Text center type="sublogo" fontWeight={600}>
                Our Values
              </Text>
              <Box width="100%">
                <Grid gap={30}>
                  <GridItem columns={6}>
                    <PostBox
                      title="We win by helping others win"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      titleType="subtitle"
                      content={[
                        "We help our partners win the trust of their users by ensuring the security of their products. We all win by making Web3 a safer place."
                      ]}
                      textColor={COLORS.DARK_THEME_WHITE}
                      image={false}
                      leftTextCount="all"
                      icon={Icons.companyShield}
                      iconPadding
                      minHeight={150}
                      iconPosition="upper"
                    />
                  </GridItem>
                  <GridItem columns={6}>
                    <PostBox
                      title="We take Pride in our work"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      titleType="subtitle"
                      content={[
                        "We are focused on quality and take pride in our work. Every audit is executed with the utmost attention to detail."
                      ]}
                      textColor={COLORS.DARK_THEME_WHITE}
                      image={false}
                      leftTextCount="all"
                      icon={Icons.companyArt}
                      minHeight={150}
                      iconPosition="upper"
                    />
                  </GridItem>
                  <GridItem columns={6}>
                    <PostBox
                      title="We believe Honesty is the best policy"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      titleType="subtitle"
                      content={[
                        "We believe honesty is the best policy. We exercise the utmost honesty in our audits to ensure the highest standard of security."
                      ]}
                      textColor={COLORS.DARK_THEME_WHITE}
                      image={false}
                      leftTextCount="all"
                      icon={Icons.companyStar}
                      minHeight={150}
                      iconPosition="upper"
                    />
                  </GridItem>
                  <GridItem columns={6}>
                    <PostBox
                      title="We're Purpose Driven"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      titleType="subtitle"
                      content={[
                        "Everything we do, we do with purpose. We execute every action with intent."
                      ]}
                      textColor={COLORS.DARK_THEME_WHITE}
                      image={false}
                      leftTextCount="all"
                      icon={Icons.companyTarget}
                      minHeight={150}
                      iconPosition="upper"
                    />
                  </GridItem>
                  <GridItem columns={6}>
                    <PostBox
                      title="We're Mission Focused"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      titleType="subtitle"
                      content={[
                        "We maintain 100% focus on our mission to support Web3 adoption by ensuring the security of smart contract transactions."
                      ]}
                      textColor={COLORS.DARK_THEME_WHITE}
                      image={false}
                      leftTextCount="all"
                      icon={Icons.companyEye}
                      minHeight={150}
                      iconPosition="upper"
                    />
                  </GridItem>
                  <GridItem columns={6}>
                    <PostBox
                      title="We strive to Stand Out"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      titleType="subtitle"
                      content={[
                        "At Proof we’re not looking to fit in, we take a unique approach in everything we do."
                      ]}
                      textColor={COLORS.DARK_THEME_WHITE}
                      image={false}
                      leftTextCount="all"
                      icon={Icons.companyDoubleCircle}
                      minHeight={150}
                      iconPosition="upper"
                    />
                  </GridItem>
                  <GridItem columns={6}>
                    <PostBox
                      title="We like to keep things simple"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      titleType="subtitle"
                      content={[
                        "We believe that anything that can be made simpler, should be made simpler. We minimise steps and simplify procedures."
                      ]}
                      textColor={COLORS.DARK_THEME_WHITE}
                      image={false}
                      leftTextCount="all"
                      icon={Icons.companyRound}
                      minHeight={150}
                      iconPosition="upper"
                    />
                  </GridItem>
                  <GridItem columns={6}>
                    <PostBox
                      title="We think ahead"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      titleType="subtitle"
                      content={[
                        "We’re always thinking multiple steps ahead to deliver the highest quality of security auditing possible."
                      ]}
                      textColor={COLORS.DARK_THEME_WHITE}
                      image={false}
                      leftTextCount="all"
                      icon={Icons.companyChess}
                      minHeight={150}
                      iconPosition="upper"
                    />
                  </GridItem>
                  <GridItem columns={6}>
                    <PostBox
                      title="We believe mindset is everything"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      titleType="subtitle"
                      content={[
                        "As a team, we maintain a problem solving mindset and take a can-do approach to every situation."
                      ]}
                      textColor={COLORS.DARK_THEME_WHITE}
                      image={false}
                      leftTextCount="all"
                      icon={Icons.companyZen}
                      minHeight={150}
                      iconPosition="upper"
                    />
                  </GridItem>
                  <GridItem columns={6}>
                    <PostBox
                      title="We always plan and prepare"
                      titleColor={COLORS.DARK_THEME_WHITE}
                      titleType="subtitle"
                      content={[
                        "We know success is inevitable when we have the proper planning and preparation in place."
                      ]}
                      textColor={COLORS.DARK_THEME_WHITE}
                      image={false}
                      leftTextCount="all"
                      icon={Icons.companyUp}
                      minHeight={150}
                      iconPosition="upper"
                    />
                  </GridItem>
                </Grid>
              </Box>
              <Box padding={50} />
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
                <Text center type="title" fontWeight={600}>
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
  )(Company);
  