import { Icon } from "ui/atoms";
import React, { useState } from "react";
import { Box, Flex, Text, Grid, GridItem } from "ui/atoms";
// import { Button } from "ui/molecules";
import { NavItem } from "ui/molecules";
import { COLORS } from "config/colors";
import Icons from "assets/icons";
import { Z_INDEX_LEVELS } from "config/dimensions";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "hooks/useWindowDimensions";

interface IDataProps {
  title: string;
  url: string;
}

interface IDropDownProps {
  data: Array<IDataProps>;
  direction?: "left" | "right";
  top?: number | "auto";
  border?: boolean;
  title?: string;
  menuWidth?: number;
  baseUrl?: string;
}

const DropDown: React.FC<IDropDownProps> = ({
  data = [],
  direction = "left",
  top = -12,
  border = false,
  title = "Category",
  menuWidth = 260,
  baseUrl = ""
}) => {
  const [selectedItems] = useState<Array<IDataProps>>(data);
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const { deviceWidth } = useWindowDimensions();
  const navigate = useNavigate();

  return (
    <Box
      position="absolute"
      left={direction === "left" ? 0 : "auto"}
      top={top}
      right={direction === "right" ? 0 : "auto"}
      zIndex={Z_INDEX_LEVELS.MAXIMUM}
      paddingVertical={1}
      cursor
      onMouseEnter={() => {
        setCollapsed(false);
      }}
      onMouseLeave={() => {
        setCollapsed(true);
      }}
    >
      <Box position="relative" width={menuWidth}>
        <Box
          paddingVertical={11}
          paddingHorizontal={5}
          borderColor={COLORS.WHITE}
          borderWidth={border ? 1 : 0}
          borderRadius={15}
          cursor
          width={100}
          onClick={() => {
            setCollapsed(!collapsed);

            if (data.length === 0) {
              if (baseUrl.length > 0) {
                window.location.replace(baseUrl);
              }
            }
          }}
        >
          <Flex gap={menuWidth >= 300 ? 15 : 5} justifyContent="flex-start">
            <Flex justifyContent="space-around" gap={10}>
              <Text
                type="header"
                fontWeight={600}
                color={COLORS.DARK_THEME_WHITE}
              >
                {title}
              </Text>
              {selectedItems.length > 0 && (
                // <Box
                //   width={18}
                //   height={18}
                //   paddingVertical={1}
                //   backgroundColor={COLORS.GRAY_DARK}
                //   borderRadius={5}
                // >
                //   <Flex justifyContent="center" alignItems="center">
                //     <Text color={COLORS.WHITE} type="plain" fontWeight={600}>
                //       {selectedItems.length < 9 ? selectedItems.length : "9+"}
                //     </Text>
                //   </Flex>
                // </Box>
                <></>
              )}
            </Flex>
            {data.length > 0 && <Icon icon={Icons.dropdown} />}
          </Flex>
        </Box>
        <Box paddingVertical={10} />
        {!collapsed && data.length > 0 && (
          <>
            <Box
              width="100px"
              height="400px"
              position="absolute"
              top={0}
              left={-10}
            ></Box>
            <Box marginLeft={-50} marginTop={-20}>
              <Icon icon={Icons.up} size="SUPER_LARGE"></Icon>
            </Box>
          </>
        )}
        {!collapsed && data.length > 0 && (
          <Box
            padding={40}
            marginTop={-25}
            // backgroundColor={COLORS.DARK_THEME_GREY_BACKGROUND}
            backgroundColor={"#24222B"}
            borderRadius={15}
            borderColor={"#24222B"}
            borderWidth={2}
            width={`calc(${deviceWidth}px - 200px)`}
            position="fixed"
            top={120}
            left={100}
            zIndex={Z_INDEX_LEVELS.MAXIMUM}
            onMouseEnter={() => {
              setCollapsed(false);
            }}
            onMouseLeave={() => {
              setCollapsed(true);
            }}
          >
            <Box width="100%">
              <Text
                type="title"
                fontWeight={600}
                color={COLORS.DARK_THEME_WHITE}
              >
                {title}
              </Text>
              <Box padding={30} />
              <Grid gap={30}>
                {data.map((item, index) => {
                  return (
                    <GridItem columns={6} key={index}>
                      <Box
                        backgroundColor={COLORS.DARK_THEME_TRANSPARENT}
                        backgroundHoverColor="grey"
                        cursor
                        width="100%"
                        onClick={() => {
                          if (item.url.startsWith("https")) {
                            window.location.replace(item.url);
                          } else {
                            navigate(item.url);
                          }
                        }}
                      >
                        {/**/}
                        <Flex
                          gap={30}
                          alignItems="center"
                          justifyContent="flex-start"
                        >
                          <Flex justifyContent="center" alignItems="center">
                            <Box
                              borderRadius={15}
                              padding={25}
                              backgroundImage="linear-gradient(to right top, #27252F, #353037, #3A393D)"
                              boxShadow="0px 0px 20px #111"
                              cursor
                            >
                              <Icon
                                icon={Icons.ethereumSvg}
                                size="UPPERMEDIUM"
                              ></Icon>
                            </Box>
                          </Flex>
                          <Flex flexDirection="column" gap={20}>
                            <NavItem url={item.url} key={index} fontSize={18}>
                              {item.title}
                            </NavItem>
                            <Text
                              fontWeight={600}
                              type="paragraph"
                              color={"#CCC"}
                            >
                              See exactly what ads generated by which sales in
                              your business
                            </Text>
                          </Flex>
                        </Flex>
                      </Box>
                    </GridItem>
                  );
                })}
              </Grid>
            </Box>
            {/* <SearchInput size="small" placeholder="Input category here" /> */}
            {/* <Box>
              <Box paddingVertical={5} />
              <Box paddingVertical={15}>
                <Text color={COLORS.GRAY_DARK} type="paragraph">
                  {title}
                </Text>
              </Box>{" "}
              <Box overflowY="scroll" maxHeight={500} paddingHorizontal={10}>
                <Grid gap={13}>
                  {data.map((dataItem, index) => {
                    return (
                      <GridItem columns={12} key={index}>
                        <Flex justifyContent="space-between">
                          <Text type="plain">{dataItem.title}</Text>
                          <Box
                            paddingHorizontal={6}
                            paddingVertical={2}
                            backgroundColor={COLORS.GREY}
                            borderRadius={5}
                          >
                            <Text type="plain" color={COLORS.DARK_THEME_BLACK}>{dataItem.amount}</Text>
                          </Box>
                        </Flex>
                      </GridItem>
                    );
                  })}
                </Grid>
              </Box>
              <Box>
                <Box
                  paddingVertical={5}
                  borderBottomWidth={1}
                  borderColor={COLORS.GRAY}
                />
                <Box paddingVertical={5} />
                <Button
                  backgroundColor={COLORS.TYPICAL_BLUE}
                  backgroundHoverColor={COLORS.DROPDOWN_HOVER}
                  onClick={() => {
                    setSelectedItems([]);
                  }}
                >
                  Clear Filters
                </Button>
              </Box>
            </Box> */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DropDown;
