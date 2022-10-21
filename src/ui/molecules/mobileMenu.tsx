import React, { useState } from "react";
import { Box, Flex, Icon, Text } from "ui/atoms";
import { Button, AlarmNotifier } from "ui/molecules";
import Icons from "assets/icons";
import { COLORS } from "config/colors";
import { Z_INDEX_LEVELS, WINDOW_SIZES } from "config/dimensions";
import { connect } from "react-redux";
import { changeTheme } from "redux/actions/theme";
import { changeAuditModalOpened } from "redux/actions/requestAuditModal";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <>
      <Box zIndex={Z_INDEX_LEVELS.MAXIMUM} cursor>
        <Icon
          icon={
            type === "menu" ? Icons.menu : !collapsed ? Icons.close : Icons.bell
          }
          size="MEDIUM"
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        />
        {hasDeals && type === "news" && collapsed && (
          <Box position="absolute" top={0} right={-1}>
            <AlarmNotifier />
          </Box>
        )}
        {!collapsed && type === "news" && (
          <>
            <Box position="absolute" right={-75} top={25}>
              <Icon icon={Icons.up} size="SUPER_LARGE" />
            </Box>
            <Box
              width={deviceWidth > WINDOW_SIZES.SIZE_464 ? "400px" : "300px"}
              position="absolute"
              top={60}
              right={deviceWidth > WINDOW_SIZES.SIZE_464 ? -100 : -55}
              borderRadius={10}
              backgroundColor={COLORS.DARK_THEME_GREY_BACKGROUND}
              paddingVertical={20}
            >
              <Box paddingHorizontal={30}>
                <Text type="undersubtitle" fontWeight={600}>
                  What's New
                </Text>
              </Box>
              <Box padding={10} />
              <Box
                borderColor={COLORS.DARK_THEME_BORDER}
                borderTopWidth={1}
                paddingVertical={10}
                paddingHorizontal={30}
              >
                <Box padding={10} />
                <Text type="undersubtitle" fontWeight={600}>
                  Twitter Feeds in the Token Project Watchlist - 14/10/2022
                </Text>
                <Box paddingVertical={15}>
                  <Text type="plain">6 days ago</Text>
                </Box>
                <Text type="paragraph">
                  The enhanced Token Project Watchlist allows Account Holders to
                  view project’s twitter feeds within their watchlist. Stay up
                  to date on project developments with the latest tweets.
                </Text>
                <Box cursor>
                  <Box padding={10} />
                  <Flex justifyContent="flex-end">
                    <Text underline type="plain" fontWeight={600}>
                      View it here
                    </Text>
                  </Flex>
                </Box>
              </Box>
              <Box
                borderColor={COLORS.DARK_THEME_BORDER}
                borderTopWidth={1}
                paddingVertical={10}
                paddingHorizontal={30}
              >
                <Box padding={10} />
                <Text type="undersubtitle" fontWeight={600}>
                  Twitter Feeds in the Token Project Watchlist - 14/10/2022
                </Text>
                <Box paddingVertical={15}>
                  <Text type="plain">6 days ago</Text>
                </Box>
                <Text type="paragraph">
                  The enhanced Token Project Watchlist allows Account Holders to
                  view project’s twitter feeds within their watchlist. Stay up
                  to date on project developments with the latest tweets.
                </Text>
                <Box cursor>
                  <Box padding={10} />
                  <Flex justifyContent="flex-end">
                    <Text underline type="plain" fontWeight={600}>
                      View it here
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </>
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
              top={40}
              right={40}
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
                    {
                      subTitle: "Smart Contract Audit",
                      link: "security-audit"
                    },
                    { subTitle: "DApp Audit", link: "dapp-audit" },
                    { subTitle: "NFT Audit", link: "nft-audit" }
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
                    { subTitle: "Ethereum", link: "ethereum" },
                    { subTitle: "BNB Chain", link: "bnb" },
                    { subTitle: "Avalanche", link: "avalanche" },
                    { subTitle: "Polygon", link: "polygon" },
                    { subTitle: "Tron", link: "tron" }
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
                  setCollapsed(true);
                  setSubMenuCollapsed(true);
                  navigate("/company/");
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
                    { subTitle: "Telegram", link: "https://t.me/proofaudit" },
                    {
                      subTitle: "Twitter",
                      link: "https://twitter.com/proofaudit"
                    },
                    {
                      subTitle: "Medium",
                      link: "https://medium.com/proofaudit"
                    },
                    {
                      subTitle: "LinkedIn",
                      link: "https://www.linkedin.com/company/proofaudit/"
                    },
                    {
                      subTitle: "Instagram",
                      link: "https://www.instagram.com/proof.audit/"
                    },
                    {
                      subTitle: "Github",
                      link: "https://github.com/proofaudit"
                    }
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
              {/* <Box
                width="30%"
                backgroundColor={COLORS.DARK_THEME_BLACK_TRANSPARENT}
                height="100%"
                onClick={() => {
                  setSubMenuCollapsed(true);
                }}
              ></Box> */}
              <Box
                width="100%"
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
                        <Text type="undersubtitle" fontWeight={600} center>
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
                      <Box
                        width="100%"
                        padding={20}
                        key={index}
                        onClick={() => {
                          setCollapsed(true);
                          setSubMenuCollapsed(true);
                          navigate(subMenuItem.link);
                        }}
                      >
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
