import React from "react";

import { Icon, Box } from "ui/atoms";
import { AlarmNotifier } from "ui/molecules";

import Icons from "assets/icons";

const Bell = () => {
  return (
    <Box position="relative">
      <Icon icon={Icons.bell} size="UPPERMEDIUM" />
      <Box position="absolute" top={0} right={0}>
        <AlarmNotifier />
      </Box>
    </Box>
  );
};

export default Bell;
