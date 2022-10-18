import React from "react";

import { Icon, Box } from "ui/atoms";
import { AlarmNotifier } from "ui/molecules";

import Icons from "assets/icons";

const Bell = () => {
  return (
    <Box position="relative">
      <Icon icon={Icons.notification} size="UPPERMEDIUM" />
      <Box position="absolute" top={-2} right={-2}>
        <AlarmNotifier />
      </Box>
    </Box>
  );
};

export default Bell;
