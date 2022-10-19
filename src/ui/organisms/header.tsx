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
      height: "fit-content",
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
                <Box onClick={() => {
                  navigate("/#");
                }}>
                  {deviceWidth > WINDOW_SIZES.SIZE_375 ? (
                    <Icon icon={Icons.proofLogoWhite} size="SUPER_LARGE" />
                  ) : (
                    <Icon icon={Icons.proofIconWhite} size="LARGE" />
                  )}
                </Box>
                {deviceWidth > WINDOW_SIZES.SIZE_1280 && (
                  <Flex
                    gap={140}
                    alignItems="center"
                    justifyContent="space-around"
                  >
                    <Box position="relative">
                      <DropDown
                        title="Solutions"
                        data={[
                          {
                            title: "Smart Contract Audit",
                            url: "security-audit"
                          },
                          { title: "DApp Audit", url: "dapp-audit" },
                          { title: "NFT Audit", url: "nft-audit" }
                        ]}
                        direction="left"
                        top={-20}
                      />
                    </Box>
                    <Box position="relative">
                      <DropDown
                        title="Chains"
                        data={[
                          { title: "Ethereum", url: "ethereum" },
                          { title: "BNB", url: "bnb" },
                          { title: "Avalanche", url: "avalanche" },
                          { title: "Polygon", url: "polygon" },
                          { title: "Tron", url: "tron" }
                        ]}
                        direction="left"
                        top={-20}
                      />
                    </Box>
                    <Box position="relative">
                      <DropDown
                        title="Company"
                        data={[]}
                        baseUrl="/company"
                        direction="left"
                        top={-20}
                      />
                    </Box>
                    <Box position="relative">
                      <DropDown
                        title="Socials"
                        data={[
                          { title: "Telegram", url: "https://t.me/proofaudit" },
                          {
                            title: "Twitter",
                            url: "https://twitter.com/proofaudit"
                          },
                          {
                            title: "Medium",
                            url: "https://medium.com/proofaudit"
                          },
                          {
                            title: "LinkedIn",
                            url: "https://www.linkedin.com/company/proofaudit/"
                          },
                          {
                            title: "Instagram",
                            url: "https://www.instagram.com/proof.audit/"
                          },
                          {
                            title: "Github",
                            url: "https://github.com/proofaudit"
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
                <Flex gap={15}>
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
