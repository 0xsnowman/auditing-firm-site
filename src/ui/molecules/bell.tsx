import React, { useState } from "react";

import { Icon, Box, Text, Flex } from "ui/atoms";
import { AlarmNotifier } from "ui/molecules";

import Icons from "assets/icons";
import { COLORS } from "config/colors";

const Bell = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <Box
      position="relative"
      onMouseEnter={() => {
        setCollapsed(false);
      }}
      onMouseLeave={() => {
        setCollapsed(true);
      }}
    >
      <Icon icon={Icons.bell} size="UPPERMEDIUM" />
      <Box position="absolute" top={0} right={0}>
        <AlarmNotifier />
      </Box>
      {!collapsed && (
        <>
          <Box position="absolute" right={-70}>
            <Icon icon={Icons.up} size="SUPER_LARGE" />
          </Box>
          <Box
            width="400px"
            position="absolute"
            top={60}
            right={-100}
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
                view project’s twitter feeds within their watchlist. Stay up to
                date on project developments with the latest tweets.
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
                view project’s twitter feeds within their watchlist. Stay up to
                date on project developments with the latest tweets.
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
    </Box>
  );
};

export default Bell;
