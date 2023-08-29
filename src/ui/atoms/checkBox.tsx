import React, { useState } from "react";

import { Icon, Box, Flex, Text } from "ui/atoms";

import Icons from "assets/icons";

interface ICheckBoxProps {
  checkTitle?: string;
}

const CheckBox: React.FC<ICheckBoxProps> = ({ checkTitle = "" }) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <Box
      onClick={() => {
        setChecked(!checked);
      }}
      paddingVertical={2}
    >
      <Flex alignItems="center" gap={10}>
        {checked ? (
          <Icon icon={Icons.checked} size="MEDIUM" />
        ) : (
          <Icon icon={Icons.unchecked} size="MEDIUM" />
        )}
        <Text>{checkTitle}</Text>
      </Flex>
    </Box>
  );
};

export default CheckBox;
