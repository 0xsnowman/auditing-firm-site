import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeTheme } from "redux/actions/theme";
import { changeAuditModalOpened } from "redux/actions/requestAuditModal";
import { Box, Container, Icon, Flex, Text, Input, TextArea } from "ui/atoms";
import { Button, MobileMenu, DropDown, Bell } from "ui/molecules";
import useWindowDimensions from "hooks/useWindowDimensions";
import Icons from "assets/icons";
import { WINDOW_SIZES, Z_INDEX_LEVELS } from "config/dimensions";
import { COLORS } from "config/colors";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const Header = (props: any) => {
  const { deviceWidth } = useWindowDimensions();
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (props.requestAuditModal) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [props.requestAuditModal]);

  const openModal = () => {
    setIsOpen(true);
    props.changeAuditModalOpened(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    props.changeAuditModalOpened(false);
  };
  const customStyles: Modal.Styles = {
    content: {
      top: "7%",
      left: deviceWidth > WINDOW_SIZES.SIZE_768 ? "35%" : "5%",
      right: deviceWidth > WINDOW_SIZES.SIZE_768 ? "35%" : "5%",
      bottom: "0%",
      transition: "1s",
      minHeight: 800,
      backgroundColor: "white",
      boxSizing: "border-box",
      border: "none",
      borderRadius: 3,
      padding: 0,
      zIndex: 2000,
      height: "fit-content"
    },
    overlay: {
      position: "fixed",
      padding: 20,
      top: "0%",
      left: "0%",
      right: "0%",
      bottom: "0%",
      overflowY: "scroll",
      zIndex: 1999,
      backgroundColor: "#00000080"
    }
  };
  Modal.setAppElement("#root");

  return (
    <>
      <Box
        className="organism-header"
        paddingVertical={20}
        backgroundColor={COLORS.DARK_THEME_BLACK_TRANSPARENT}
        zIndex={Z_INDEX_LEVELS.MAXIMUM}
        width="100%"
        backdropFilter={true}
      >
        <Container>
          <Box position="relative">
            <Flex justifyContent="space-between" alignItems="center">
              <Flex gap={50}>
                <Box
                  onClick={() => {
                    navigate("/#");
                  }}
                >
                  {deviceWidth > WINDOW_SIZES.SIZE_375 ? (
                    <Icon icon={Icons.proofLogoWhite} size="SUPER_LARGE" />
                  ) : (
                    <Icon icon={Icons.proofIconWhite} size="LARGE" />
                  )}
                </Box>
                {deviceWidth > WINDOW_SIZES.SIZE_1280 && (
                  <Flex
                    gap={0}
                    alignItems="center"
                    justifyContent="space-around"
                  >
                    <Box position="relative">
                      <DropDown
                        title="Solutions"
                        data={[
                          {
                            title: "Smart Contract Audit",
                            content:
                              "Smart contract flaws can cost projects money, reputation and time.",
                            url: "security-audit",
                            icon: Icons.smartContractAudit
                          },
                          {
                            title: "DApp Audit",
                            content:
                              "Review and optimize off-chain components of your Decentralized Applications.",
                            url: "dapp-audit",
                            icon: Icons.dappAduit
                          },
                          {
                            title: "NFT Audit",
                            content:
                              "Ensure the quality and security of your Non Fungible Tokens prior to deploying.",
                            url: "nft-audit",
                            icon: Icons.nftAudit
                          }
                        ]}
                        direction="left"
                        top={-20}
                      />
                    </Box>
                    <Box position="relative" left={105}>
                      <DropDown
                        title="Chains"
                        data={[
                          {
                            title: "Ethereum",
                            content:
                              "Give your Ethereum smart contract absolute fortification against rising hacks and exploits.",
                            url: "ethereum",
                            icon: Icons.ethChain
                          },
                          {
                            title: "BNB",
                            content:
                              "Protect your users with a full analysis of each line of your BNB smart contract code.",
                            url: "bnb",
                            icon: Icons.bnbChain
                          },
                          {
                            title: "Avalanche",
                            content:
                              "Reinforce security and elevate the trust of your Avalanche project with an industry-class audit.",
                            url: "avalanche",
                            icon: Icons.avaxChain
                          },
                          {
                            title: "Polygon",
                            content:
                              "Fortify your Polygon projects against exploits and hold your code to industry standards.",
                            url: "polygon",
                            icon: Icons.polygonChain
                          },
                          {
                            title: "Tron",
                            content:
                              "Thorough code review and analysis to find and fix all weaknesses in your Tron project.",
                            url: "tron",
                            icon: Icons.tronChain
                          }
                        ]}
                        direction="left"
                        top={-20}
                      />
                    </Box>
                    <Box position="relative" left={190}>
                      <DropDown
                        title="Company"
                        data={[]}
                        baseUrl="/company"
                        direction="left"
                        top={-20}
                      />
                    </Box>
                    <Box position="relative" left={280}>
                      <DropDown
                        title="Socials"
                        data={[
                          {
                            title: "Telegram",
                            content: "Stay updated on Telegram.",
                            url: "https://t.me/proofaudit",
                            icon: Icons.telegramSocial
                          },
                          {
                            title: "Twitter",
                            content: "Join the conversation on Twitter.",
                            url: "https://twitter.com/proofaudit",
                            icon: Icons.twitterSocial
                          },
                          {
                            title: "Medium",
                            content: "Read our latest posts on Medium.",
                            url: "https://medium.com/proofaudit",
                            icon: Icons.mediumSocial
                          },
                          {
                            title: "LinkedIn",
                            content: "Connect with us on LinkedIn.",
                            url: "https://www.linkedin.com/company/proofaudit/",
                            icon: Icons.linkedinSocial
                          },
                          {
                            title: "Instagram",
                            content: "Follow us on Instagram.",
                            url: "https://www.instagram.com/proof.audit/",
                            icon: Icons.instagramSocial
                          },
                          {
                            title: "Github",
                            content: "Check out our Github.",
                            url: "https://github.com/proofaudit",
                            icon: Icons.githubSocial
                          }
                        ]}
                        direction="left"
                        top={-20}
                      />
                    </Box>
                    {/* <SearchInput
                      size="small"
                      placeholder="Input category here"
                      extend={false}
                      extendChangable={true}
                    /> */}
                  </Flex>
                )}
              </Flex>
              {deviceWidth > WINDOW_SIZES.SIZE_1280 && (
                <Flex gap={40} alignItems="center">
                  {/* <SearchInput size="small" /> */}
                  <Box
                    cursor
                    onClick={() => {
                      setDarkMode(!darkMode);

                      if (darkMode) props.changeTheme("dark");
                      else props.changeTheme("light");
                    }}
                  >
                    <Bell />
                  </Box>
                  <Button
                    backgroundColor={COLORS.DARK_THEME_BUTTON_BLUE}
                    backgroundHoverColor={COLORS.DROPDOWN_HOVER}
                    shadow={false}
                    onClick={openModal}
                  >
                    Request An Audit
                  </Button>
                </Flex>
              )}
              {deviceWidth <= WINDOW_SIZES.SIZE_1280 && (
                <Flex gap={15} alignItems="center">
                  <MobileMenu type="news" />
                  <MobileMenu />
                </Flex>
              )}
            </Flex>
          </Box>
        </Container>
      </Box>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
      >
        <Box>
          <Flex flexDirection="column" gap={5}>
            <Box borderBottomWidth={1} borderColor={COLORS.GREY} padding={20}>
              <Flex justifyContent="space-between">
                <Text type="paragraph" color={COLORS.DARK_THEME_BLACK}>
                  Proof Your Project
                </Text>
                <Box cursor>
                  <Icon
                    icon={Icons.closeBlack}
                    onClick={() => {
                      closeModal();
                    }}
                  />
                </Box>
              </Flex>
            </Box>
            <Box padding={10} />
            <Box paddingVertical={0} paddingHorizontal={20}>
              <Flex flexDirection="column" gap={5}>
                <Text color={COLORS.DARK_THEME_BLACK}>Project Name</Text>
                {/* <Text color={COLORS.GREY} type="tiny">
                  If this is for yourself, not a project, input "Self"
                </Text> */}
                <Input
                  onPressEnter={() => {}}
                  padding={"12px 5px 12px 5px"}
                  border={"1px solid grey"}
                  requirement="This is required field."
                />
              </Flex>
            </Box>
            <Box paddingVertical={0} paddingHorizontal={20}>
              <Flex flexDirection="column" gap={5}>
                <Text color={COLORS.DARK_THEME_BLACK}>Your Email</Text>
                <Input
                  onPressEnter={() => {}}
                  padding={"12px 5px 12px 5px"}
                  border={"1px solid grey"}
                  requirement="This is required field."
                />
              </Flex>
            </Box>
            <Box paddingVertical={0} paddingHorizontal={20}>
              <Flex flexDirection="column" gap={5}>
                <Text color={COLORS.DARK_THEME_BLACK}>
                  Personal Telegram/Discord
                </Text>
                {/* <Text color={COLORS.GREY} type="tiny">
                  Telegram, WeChat, WhatsApp, or any preferred method (please
                  specify). You can put multiple.
                </Text> */}
                <Input
                  onPressEnter={() => {}}
                  padding={"12px 5px 12px 5px"}
                  border={"1px solid grey"}
                  placeholder="Telegram:__"
                  requirement="This is required field."
                />
              </Flex>
            </Box>
            <Box paddingVertical={0} paddingHorizontal={20}>
              <Flex flexDirection="column" gap={5}>
                <Text color={COLORS.DARK_THEME_BLACK}>Contact Name</Text>
                {/* <Text color={COLORS.GREY} type="tiny">
                  Please provide us with a link to your source code
                </Text> */}
                <Input
                  onPressEnter={() => {}}
                  padding={"12px 5px 12px 5px"}
                  border={"1px solid grey"}
                  requirement=""
                />
              </Flex>
            </Box>
            <Box paddingVertical={0} paddingHorizontal={20}>
              <Flex flexDirection="column" gap={5}>
                <Text color={COLORS.DARK_THEME_BLACK}>Link to source code</Text>
                {/* <Text color={COLORS.GREY} type="tiny">
                  Please provide us with a link to your source code
                </Text> */}
                <Input
                  onPressEnter={() => {}}
                  padding={"12px 5px 12px 5px"}
                  border={"1px solid grey"}
                  requirement=""
                />
              </Flex>
            </Box>
            {/* <Box paddingHorizontal={20} paddingVertical={15}>
              <Text color={COLORS.DARK_THEME_BLACK}>
                Please select the services that you are interested in
              </Text>
              <Box padding={5} />
              <CheckBox checkTitle="Smart Contract Audit" />
              <CheckBox checkTitle="dApp Audit" />
              <CheckBox checkTitle="NFT Audit" />
            </Box> */}

            <Box paddingVertical={10} paddingHorizontal={20}>
              <Flex flexDirection="column" gap={5}>
                <Text color={COLORS.DARK_THEME_BLACK}>Message</Text>
                {/* <Text color={COLORS.GREY} type="tiny">
                  Any specific details? Have you been audited in the past? Are
                  there certain deadlines?
                </Text> */}
                <TextArea
                  onPressEnter={() => {}}
                  padding={"12px 5px 12px 5px"}
                  border={"1px solid grey"}
                  requirement=""
                />
              </Flex>
            </Box>
            <Box padding={20}>
              <Button
                backgroundColor={COLORS.DARK_THEME_BUTTON_BLUE}
                backgroundHoverColor={COLORS.DARK_THEME_BUTTON_BLUE}
                shadow={false}
              >
                Submit
              </Button>
            </Box>
          </Flex>
        </Box>
      </Modal>
    </>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    theme: state.ThemeReducer.theme,
    requestAuditModal: state.RequestAuditModalReducer.auditModalOpened
  };
};

export default connect(
  mapStateToProps,
  { changeTheme: changeTheme, changeAuditModalOpened: changeAuditModalOpened }
)(Header);
