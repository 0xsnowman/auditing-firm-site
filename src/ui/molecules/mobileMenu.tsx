import React, { useState } from "react";
import { Box, Flex, Icon, Text, Grid, GridItem } from "ui/atoms";
import { Button, AlarmNotifier } from "ui/molecules";
import Icons from "assets/icons";
import { COLORS } from "config/colors";
import useWindowDimensions from "hooks/useWindowDimensions";
import { WINDOW_SIZES, Z_INDEX_LEVELS } from "config/dimensions";

interface IMobileMenuProps {
  type?: "news" | "menu";
  hasDeals?: boolean;
}

const MobileMenu: React.FC<IMobileMenuProps> = ({
  type = "menu",
  hasDeals = true
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const { deviceWidth } = useWindowDimensions();

  const determineMenuIcon = () => {
    switch (type) {
      case "news":
        return Icons.alarm;
      case "menu":
        return Icons.menu;
      default:
        break;
    }
  };

  return (
    <Box
      zIndex={Z_INDEX_LEVELS.MAXIMUM}
      onMouseEnter={() => {
        setCollapsed(false);
      }}
      onMouseLeave={() => {
        setCollapsed(true);
      }}
    >
      <Icon
        icon={collapsed ? determineMenuIcon() : Icons.close}
        size="MEDIUM"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      />
      {hasDeals && (
        <Box
          position="absolute"
          top={deviceWidth > WINDOW_SIZES.SIZE_375 ? 13 : 5}
          right={-1}
        >
          <AlarmNotifier />
        </Box>
      )}
      {/* {!collapsed && (
        <Box
          width={deviceWidth * 2}
          height={deviceHeight * 5}
          backdropFilter
          position="absolute"
          top={45}
          right={-50}
          backgroundColor="#FFFFFF50"
        ></Box>
      )} */}
      {!collapsed && (
        <Box
          position="absolute"
          right={-5}
          top={50}
          width={300}
          backgroundColor="white"
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
                backgroundColor="#0085FF"
                backgroundHoverColor="#0066DD"
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
    </Box>
  );
};

export default MobileMenu;
