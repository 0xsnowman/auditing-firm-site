import React from "react";
import { Box, Text, Flex, Icon } from "ui/atoms";
import { COLORS } from "config/colors";
import Icons from "assets/icons";

interface ITextBoxProps {
  title: string;
  content: string;
  titleColor?: string;
  backgroundColor?: string;
  icon?: boolean;
  minHeight?: string | number;
}

const TextBox: React.FC<ITextBoxProps> = ({
  title,
  content,
  titleColor = COLORS.DARK_THEME_BLACK,
  backgroundColor = COLORS.DARK_THEME_GREY_BACKGROUND,
  icon = false,
  minHeight = "auto"
}) => {
  return (
    <Box
      borderWidth={0}
      borderColor={COLORS.GREY}
      backgroundColor={COLORS.DARK_THEME_TRANSPARENT}
      borderRadius={12}
      width="100%"
    >
      <Flex flexDirection="column" height="100%">
        <Box
          backgroundColor={backgroundColor}
          borderRadius={10}
          padding={30}
          borderColor={COLORS.GREY}
          borderWidth={0}
          height="100%"
          minHeight={minHeight}
        >
          <Flex flexDirection="column" gap={30} alignItems="center">
            <Text type="subtitle" fontWeight={600} color={titleColor}>
              {title}
            </Text>
            <Text
              lineHeight={1.6}
              type="paragraph"
              color={COLORS.DARK_THEME_WHITE}
            >
              {content}
            </Text>
          </Flex>
          {icon && <Box padding={15} backgroundColor="transparent"></Box>}
          {icon && <Icon icon={Icons.next} size="LARGE"></Icon>}{" "}
        </Box>
      </Flex>
    </Box>
  );
};

export default TextBox;
