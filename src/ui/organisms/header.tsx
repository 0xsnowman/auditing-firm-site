import React, { useState } from "react";
import { Box, Container, Icon, Flex, Text, Input, CheckBox } from "ui/atoms";
import { Button, MobileMenu, DropDown, SearchInput } from "ui/molecules";
import useWindowDimensions from "hooks/useWindowDimensions";
import Icons from "assets/icons";
import { WINDOW_SIZES, Z_INDEX_LEVELS } from "config/dimensions";
import Modal from "react-modal";

const Header = () => {
  const { deviceWidth } = useWindowDimensions();
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const customStyles: Modal.Styles = {
    content: {
      top: "15%",
      left: "30%",
      right: "30%",
      bottom: "0%",
      transition: "1s",
      minHeight: 1100,
      backgroundColor: "white",
      boxSizing: "border-box",
      border: "none",
      borderRadius: 3,
      padding: 0,
      zIndex: 200
    },
    overlay: {
      position: "fixed",
      padding: 20,
      top: "0%",
      left: "0%",
      right: "0%",
      bottom: "0%",
      overflowY: "scroll",
      zIndex: 199,
      backgroundColor: "#00000080"
    }
  };
  Modal.setAppElement("#root");

  return (
    <>
      <Box
        className="organism-header"
        paddingVertical={30}
        backgroundColor="#FFFFFF50"
        zIndex={Z_INDEX_LEVELS.MAXIMUM}
        width="100%"
        backdropFilter={true}
      >
        <Container>
          <Box position="relative">
            <Flex justifyContent="space-between" alignItems="center">
              <Flex gap={60}>
                {deviceWidth > WINDOW_SIZES.SIZE_375 ? (
                  <Icon icon={Icons.proofLogoBlue} size="SUPER_LARGE" />
                ) : (
                  <Icon icon={Icons.proofIconBlue} size="LARGE" />
                )}
                {deviceWidth > WINDOW_SIZES.SIZE_1280 && (
                  <Flex
                    gap={110}
                    alignItems="center"
                    justifyContent="space-around"
                  >
                    <Box position="relative">
                      <DropDown
                        title="Products"
                        data={[
                          { title: "Smart Contract", amount: 45 },
                          { title: "dApp", amount: 27 },
                          { title: "NFT", amount: 210 }
                        ]}
                        direction="left"
                        top={-20}
                      />
                    </Box>
                    <Box position="relative">
                      <DropDown
                        title="Chains"
                        data={[
                          { title: "Ethereum", amount: 25 },
                          { title: "Avalanche", amount: 63 },
                          { title: "Solana", amount: 82 }
                        ]}
                        direction="left"
                        top={-20}
                      />
                    </Box>
                    <Box position="relative">
                      <DropDown
                        title="Company"
                        data={[
                          { title: "About", amount: 25 },
                          { title: "Careers", amount: 63 },
                          { title: "Disclaimer", amount: 82 },
                          { title: "Privacy Policy", amount: 82 },
                          { title: "Cookie Policy", amount: 82 },
                          { title: "Terms and Conditions", amount: 82 }
                        ]}
                        direction="left"
                        top={-20}
                      />
                    </Box>
                    <Box position="relative">
                      <DropDown
                        title="Socials"
                        data={[
                          { title: "Telegram", amount: 25 },
                          { title: "Twitter", amount: 63 },
                          { title: "Medium", amount: 82 },
                          { title: "LinkedIn", amount: 82 },
                          { title: "Instagram", amount: 82 },
                          { title: "Github", amount: 82 }
                        ]}
                        direction="left"
                        top={-20}
                      />
                    </Box>
                    <SearchInput
                      size="small"
                      placeholder="Input category here"
                      extend={false}
                      extendChangable={true}
                    />
                  </Flex>
                )}
              </Flex>
              {deviceWidth > WINDOW_SIZES.SIZE_1280 && (
                <Flex gap={30} alignItems="center">
                  {/* <SearchInput size="small" /> */}
                  <Button
                    backgroundColor="#0085FF"
                    backgroundHoverColor="#0066DD"
                    onClick={openModal}
                  >
                    Request a Quote
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
            <Box borderBottomWidth={1} borderColor={"grey"} padding={20}>
              <Flex justifyContent="space-between">
                <Text type="paragraph">Protect Your Project Today</Text>
                <Box cursor>
                  <Icon
                    icon={Icons.close}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  />
                </Box>
              </Flex>
            </Box>
            <Box padding={10} />
            <Box paddingVertical={0} paddingHorizontal={20}>
              <Flex flexDirection="column" gap={5}>
                <Text>Project Name</Text>
                <Text color="grey" type="tiny">
                  If this is for yourself, not a project, input "Self"
                </Text>
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
                <Text>Your Email</Text>
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
                <Text>Your Chat / Direct contact</Text>
                <Text color="grey" type="tiny">
                  Telegram, WeChat, WhatsApp, or any preferred method (please
                  specify). You can put multiple.
                </Text>
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
                <Text>Share your source code</Text>
                <Text color="grey" type="tiny">
                  Please provide us with a link to your source code
                </Text>
                <Input
                  onPressEnter={() => {}}
                  padding={"12px 5px 12px 5px"}
                  border={"1px solid grey"}
                  requirement=""
                />
              </Flex>
            </Box>
            <Box paddingHorizontal={20} paddingVertical={15}>
              <Text>Please select the services that you are interested in</Text>
              <Box padding={5} />
              <CheckBox checkTitle="Smart Contract Audit" />
              <CheckBox checkTitle="dApp Audit" />
              <CheckBox checkTitle="NFT Audit" />
            </Box>
            <Box paddingVertical={0} paddingHorizontal={20}>
              <Flex flexDirection="column" gap={5}>
                <Text>Contact Name</Text>
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
                <Text>Which protocol is it?</Text>
                <Text color="grey" type="tiny">
                  ERC, BSC, etc.
                </Text>
                <Input
                  onPressEnter={() => {}}
                  padding={"12px 5px 12px 5px"}
                  border={"1px solid grey"}
                  requirement=""
                />
              </Flex>
            </Box>
            <Box paddingVertical={10} paddingHorizontal={20}>
              <Flex flexDirection="column" gap={5}>
                <Text>Message</Text>
                <Text color="grey" type="tiny">
                  Any specific details? Have you been audited in the past? Are
                  there certain deadlines?
                </Text>
                <Input
                  onPressEnter={() => {}}
                  padding={"12px 5px 12px 5px"}
                  border={"1px solid grey"}
                  requirement=""
                />
              </Flex>
            </Box>
            <Box padding={20}>
                    <Button backgroundColor="#FF5544">Submit</Button>
            </Box>
          </Flex>
        </Box>
      </Modal>
    </>
  );
};

export default Header;
