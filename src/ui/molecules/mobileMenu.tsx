import React, { useState } from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Grid,
  GridItem
} from "ui/atoms";
import { Button, AlarmNotifier } from "ui/molecules";
import Icons from "assets/icons";
import { COLORS } from "config/colors";
import { Z_INDEX_LEVELS } from "config/dimensions";
import { connect } from "react-redux";
import { changeTheme } from "redux/actions/theme";
import { changeAuditModalOpened } from "redux/actions/requestAuditModal";
import useWindowDimensions from "hooks/useWindowDimensions";

interface IMobileMenuProps {
  type?: "news" | "menu";
  hasDeals?: boolean;
  requestAuditModal: boolean;
  changeAuditModalOpenedRedux: Function;
}

interface ISubMenuItem {
  subTitle: string;
  link: string;
}

const MobileMenu: React.FC<IMobileMenuProps> = ({
  type = "menu",
  hasDeals = true,
  requestAuditModal,
  changeAuditModalOpenedRedux
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [subMenuCollapsed, setSubMenuCollapsed] = useState<boolean>(true);
  const { deviceWidth, deviceHeight } = useWindowDimensions();
  const [subMenuTitle, setSubMenuTitle] = useState<string>("");
  const [subMenuList, setSubMenuList] = useState<Array<ISubMenuItem>>([]);

  return (
    <>
      <Box zIndex={Z_INDEX_LEVELS.MAXIMUM} cursor>
        <Icon
          icon={
            type === "menu"
              ? Icons.menu
              : !collapsed
              ? Icons.close
              : Icons.alarm
          }
          size="MEDIUM"
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        />
        {hasDeals && (
          <Box position="absolute" top={0} right={-1}>
            <AlarmNotifier />
          </Box>
        )}
        {!collapsed && type === "news" && (
          <Box
            position="absolute"
            right={-5}
            top={50}
            width={300}
            backgroundColor={COLORS.WHITE}
            padding={30}
            borderRadius={15}
            borderColor={COLORS.GRAY}
            borderWidth={1}
          >
            <Flex flexDirection="column" gap={30}>
              <Box>
                <Box paddingVertical={20}>
                  <Text color={COLORS.GRAY_DARK} type="paragraph">
                    Products
                  </Text>
                </Box>
                <Grid gap={15}>
                  <GridItem columns={6}>
                    <Text type="plain">Smart Contract Audit</Text>
                  </GridItem>
                  <GridItem columns={6}>
                    <Text type="plain">dApp Audit</Text>
                  </GridItem>
                  <GridItem columns={6}>
                    <Text type="plain">NFT Audit</Text>
                  </GridItem>
                </Grid>
              </Box>
              <Box>
                <Box paddingVertical={20}>
                  <Text color={COLORS.GRAY_DARK} type="paragraph">
                    Chains
                  </Text>
                </Box>
                <Grid gap={15}>
                  <GridItem columns={6}>
                    <Text type="plain">Ethereum</Text>
                  </GridItem>
                  <GridItem columns={6}>
                    <Text type="plain">BSC</Text>
                  </GridItem>
                  <GridItem columns={6}>
                    <Text type="plain">Solana</Text>
                  </GridItem>
                </Grid>
              </Box>
              <Box>
                <Box paddingVertical={20}>
                  <Text color={COLORS.GRAY_DARK} type="paragraph">
                    Companies
                  </Text>
                </Box>
                <Grid gap={15}>
                  <GridItem columns={6}>
                    <Text type="plain">About</Text>
                  </GridItem>
                  <GridItem columns={6}>
                    <Text type="plain">Careers</Text>
                  </GridItem>
                  <GridItem columns={6}>
                    <Text type="plain">Disclaimer</Text>
                  </GridItem>
                  <GridItem columns={6}>
                    <Text type="plain">Cookie Policy</Text>
                  </GridItem>
                  <GridItem columns={6}>
                    <Text type="plain">Privacy Policy</Text>
                  </GridItem>
                  <GridItem columns={6}>
                    <Text type="plain">Terms and Conditions</Text>
                  </GridItem>
                </Grid>
              </Box>
              <Box>
                <Button
                  backgroundColor={COLORS.TYPICAL_BLUE}
                  backgroundHoverColor={COLORS.DROPDOWN_HOVER}
                  onClick={() => {
                    alert("[Button] [Request a Quote] clicked");
                  }}
                >
                  Request a Quote
                </Button>
              </Box>
            </Flex>
          </Box>
        )}
        {!collapsed && type === "menu" && (
          <Box
            position="fixed"
            width={deviceWidth}
            height={deviceHeight}
            backgroundColor={COLORS.DARK_THEME_BLACK}
            top={0}
            left={0}
            padding={20}
          >
            <Box
              position="absolute"
              top={20}
              right={20}
              cursor
              zIndex={Z_INDEX_LEVELS.MAXIMUM}
              onClick={() => {
                setCollapsed(true);
              }}
            >
              <Icon icon={Icons.close}></Icon>
            </Box>
            <Box padding={30} />
            <Flex flexDirection="column">
              <Box
                width="100%"
                padding={20}
                onClick={() => {
                  setSubMenuTitle("Solutions");
                  setSubMenuList([
                    { subTitle: "Smart Contract Audit", link: "audit" },
                    { subTitle: "DApp Audit", link: "audit" },
                    { subTitle: "NFT Audit", link: "audit" }
                  ]);
                  setSubMenuCollapsed(!subMenuCollapsed);
                }}
              >
                <Flex justifyContent="space-between">
                  <Text type="paragraph" fontWeight={600}>
                    Solutions
                  </Text>
                  <Icon icon={Icons.right}></Icon>
                </Flex>
              </Box>
              <Box
                width="100%"
                padding={20}
                onClick={() => {
                  setSubMenuTitle("Chains");
                  setSubMenuList([
                    { subTitle: "Ethereum", link: "audit" },
                    { subTitle: "BNB Chain", link: "audit" },
                    { subTitle: "Avalanche", link: "audit" },
                    { subTitle: "Polygon", link: "audit" },
                    { subTitle: "Tron", link: "audit" }
                  ]);
                  setSubMenuCollapsed(!subMenuCollapsed);
                }}
              >
                <Flex justifyContent="space-between">
                  <Text type="paragraph" fontWeight={600}>
                    Chains
                  </Text>
                  <Icon icon={Icons.right}></Icon>
                </Flex>
              </Box>
              <Box
                width="100%"
                padding={20}
                onClick={() => {
                  // Going to Company Link directly
                }}
              >
                <Flex justifyContent="space-between">
                  <Text type="paragraph" fontWeight={600}>
                    Company
                  </Text>
                </Flex>
              </Box>
              <Box
                width="100%"
                padding={20}
                onClick={() => {
                  setSubMenuTitle("Socials");
                  setSubMenuList([
                    { subTitle: "Telegram", link: "audit" },
                    { subTitle: "Twitter", link: "audit" },
                    { subTitle: "Medium", link: "audit" },
                    { subTitle: "LinkedIn", link: "audit" },
                    { subTitle: "Instagram", link: "audit" },
                    { subTitle: "Github", link: "audit" }
                  ]);
                  setSubMenuCollapsed(!subMenuCollapsed);
                }}
              >
                <Flex justifyContent="space-between">
                  <Text type="paragraph" fontWeight={600}>
                    Socials
                  </Text>
                  <Icon icon={Icons.right}></Icon>
                </Flex>
              </Box>
              <Box width="100%" padding={20}>
                <Flex justifyContent="center" width="100%">
                  <Button
                    backgroundColor={COLORS.DARK_THEME_BUTTON_BLUE}
                    backgroundHoverColor={COLORS.DROPDOWN_HOVER}
                    width={"100%"}
                    onClick={() => {
                      changeAuditModalOpenedRedux(!requestAuditModal);
                    }}
                  >
                    Request An Audit
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        )}
        {!subMenuCollapsed && type === "menu" && (
          <Box
            position="fixed"
            width={deviceWidth}
            height={deviceHeight}
            backgroundColor={COLORS.DARK_THEME_TRANSPARENT}
            top={0}
            right={0}
            padding={2}
          >
            <Flex width="100%" height="100%">
              <Box
                width="30%"
                backgroundColor={COLORS.DARK_THEME_BLACK_TRANSPARENT}
                height="100%"
                onClick={() => {
                  setSubMenuCollapsed(true);
                }}
              ></Box>
              <Box
                width="70%"
                backgroundColor={COLORS.DARK_THEME_GREY_BACKGROUND}
              >
                <Box padding={30} />
                <Flex flexDirection="column">
                  <Box
                    width="100%"
                    padding={30}
                    onClick={() => {
                      setSubMenuCollapsed(true);
                    }}
                  >
                    <Flex
                      justifyContent="center"
                      flexDirection="row"
                      alignItems="center"
                      width="100%"
                    >
                      <Flex flex={1}>
                        <Icon icon={Icons.left} />
                      </Flex>
                      <Flex flex={1} justifyContent="center">
                        <Text type="paragraph" fontWeight={600} center>
                          {subMenuTitle}
                        </Text>
                      </Flex>
                      <Flex flex={1}>
                        <Box>{}</Box>
                      </Flex>
                    </Flex>
                  </Box>
                  {subMenuList.map((subMenuItem, index) => {
                    return (
                      <Box width="100%" padding={20} key={index}>
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Text type="paragraph" fontWeight={600}>
                            {subMenuItem.subTitle}
                          </Text>
                          <Icon icon={Icons.right}></Icon>
                        </Flex>
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
    </>
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
  {
    changeTheme: changeTheme,
    changeAuditModalOpenedRedux: changeAuditModalOpened
  }
)(MobileMenu);
