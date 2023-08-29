import React from "react";
import { Box, Text, Flex, Icon } from "ui/atoms";
import { COLORS } from "config/colors";
import Icons from "assets/icons";
import { useNavigate } from "react-router-dom";

interface ITextBoxProps {
  title: string;
  content: string;
  titleColor?: string;
  backgroundColor?: string;
  icon?: boolean;
  link?: string;
  minHeight?: string | number;
  hoverBorder?: boolean;
}

const TextBox: React.FC<ITextBoxProps> = ({
  title,
  content,
  titleColor = COLORS.DARK_THEME_BLACK,
  backgroundColor = COLORS.DARK_THEME_GREY_BACKGROUND,
  icon = false,
  link = "",
  minHeight = "auto",
  hoverBorder = false,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      borderWidth={0}
      borderColor={COLORS.GREY}
      backgroundColor={COLORS.DARK_THEME_TRANSPARENT}
      backgroundHoverBorderColor={hoverBorder ? "blue" : "transparent"}
      borderRadius={0}
      width="100%"
      cursor
      onClick={() => {
        if (icon) {
          navigate("/" + link);
        }
      }}
    >
      <Flex flexDirection="column" height="100%">
        <Box
          backgroundColor={backgroundColor}
          borderRadius={0}
          padding={30}
          borderColor={COLORS.GREY}
          borderWidth={0}
          height="100%"
          minHeight={minHeight}
        >
          <Text type="subtitle" fontWeight={600} color={titleColor}>
            {title}
          </Text>
          <Box padding={10}></Box>
          <Text
            lineHeight={1.6}
            type="undersubtitle"
            color={COLORS.DARK_THEME_WHITE}
            fontWeight={400}
          >
            {content}
          </Text>
          {icon && <Box padding={15} backgroundColor="transparent"></Box>}
          {icon && (
            <Box cursor>
              <Icon
                icon={Icons.next}
                size="LARGE"
                onClick={() => {
                  navigate("/" + link);
                }}
              />
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default TextBox;
