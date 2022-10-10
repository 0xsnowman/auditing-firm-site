import React from "react";

import { Box, Text, Flex } from "ui/atoms";

import { COLORS } from "config/colors";

interface ITextBoxProps {
  title: string;
  content: string;
  titleColor?: string;
}

const TextBox: React.FC<ITextBoxProps> = ({
  title,
  content,
  titleColor = "black"
}) => {
  return (
    <Box
      borderWidth={1}
      borderColor={COLORS.GRAY_DARK}
      backgroundColor={COLORS.LIGHT_BLUE}
      borderRadius={10}
      width="100%"
    >
      <Flex flexDirection="column" height="100%">
        <Box
          backgroundColor="white"
          borderRadius={10}
          padding={20}
          borderColor={COLORS.GRAY_DARK}
          borderWidth={0}
          height="100%"
        >
          <Flex flexDirection="column" gap={30} alignItems="center">
            <Text type="paragraph" fontWeight={600} color={titleColor}>{title}</Text>
            <Text color="black">{content}</Text>
          </Flex>
        </Box>
        <Box height={3} backgroundColor="transparent"></Box>
      </Flex>
    </Box>
  );
};

export default TextBox;
