import React, { useState } from "react";

import { Box, Flex, Icon, Text, Grid, GridItem } from "ui/atoms";
import { Button, AlarmNotifier } from "ui/molecules";

import Icons from "assets/icons";

import { COLORS } from "config/colors";
import { Z_INDEX_LEVELS } from "config/dimensions";

interface IMobileMenuProps {
  type?: "news" | "menu";
  hasDeals?: boolean;
}

const MobileMenu: React.FC<IMobileMenuProps> = ({
  type = "menu",
  hasDeals = true
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

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
        <Box position="absolute" top={7} right={10}>
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
                  <Text type="plain">Security Audit</Text>
                </GridItem>
                <GridItem columns={6}>
                  <Text type="plain">Skynet</Text>
                </GridItem>
                <GridItem columns={6}>
                  <Text type="plain">KYC</Text>
                </GridItem>
                <GridItem columns={6}>
                  <Text type="plain">Penetration Testing</Text>
                </GridItem>
                <GridItem columns={6}>
                  <Text type="plain">BugBounty</Text>
                </GridItem>
                <GridItem columns={6}>
                  <Text type="plain">SkyTrace</Text>
                </GridItem>
              </Grid>
            </Box>
            <Box>
              <Box paddingVertical={20}>
                <Text color={COLORS.GRAY_DARK} type="paragraph">
                  Technology
                </Text>
              </Box>
              <Grid gap={15}>
                <GridItem columns={6}>
                  <Text type="plain">Formal Verification</Text>
                </GridItem>
              </Grid>
            </Box>
            <Box>
              <Box paddingVertical={20}>
                <Text color={COLORS.GRAY_DARK} type="paragraph">
                  Featured Ecosystems
                </Text>
              </Box>
              <Grid gap={15}>
                <GridItem columns={6}>
                  <Text type="plain">BNB Chain</Text>
                </GridItem>
                <GridItem columns={6}>
                  <Text type="plain">Ethereum</Text>
                </GridItem>
                <GridItem columns={6}>
                  <Text type="plain">Avalanche</Text>
                </GridItem>
                <GridItem columns={6}>
                  <Text type="plain">Solana</Text>
                </GridItem>
                <GridItem columns={6}>
                  <Text type="plain">Algorand</Text>
                </GridItem>
                <GridItem columns={6}>
                  <Text type="plain">NEAR</Text>
                </GridItem>
                <GridItem columns={6}>
                  <Text type="plain">Cosmos</Text>
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
                <GridItem columns={6}>Resources </GridItem>
                <GridItem columns={6}>
                  <Text type="plain">Disclaimer</Text>
                </GridItem>
              </Grid>
            </Box>
            <Box>
              <Button
                onClick={() => {
                  alert("[Button] [Get free audit] clicked");
                }}
              >
                Get free audit
              </Button>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default MobileMenu;
