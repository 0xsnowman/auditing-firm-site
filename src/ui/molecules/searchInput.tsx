import React, { useState } from "react";
import { Box, Input, Icon } from "ui/atoms";
import Icons from "assets/icons";
import { Z_INDEX_LEVELS } from "config/dimensions";
import { COLORS } from "config/colors";
import useWindowDimensions from "hooks/useWindowDimensions";
import { WINDOW_SIZES } from "config/dimensions";

interface ISearchInputProps {
  placeholder?: string;
  size?: "small" | "medium";
  extend?: boolean;
  extendChangable?: boolean;
}

const SearchInput: React.FC<ISearchInputProps> = ({
  placeholder = "Input search text here",
  size = "medium",
  extend = true,
  extendChangable = false
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [extendState, setExtendState] = useState<boolean>(extend);
  const { deviceWidth } = useWindowDimensions();
  const onClickSearchButton = () => {
    alert(["[Search] [Input] -", searchText].join(" "));
  };
  return (
    <Box
      position="relative"
      zIndex={Z_INDEX_LEVELS.MAXIMUM}
      className="molecule-searchinput"
      borderColor={COLORS.DARK_THEME_GREY_BACKGROUND}
      borderWidth={1}
      borderRadius={10}
      width={deviceWidth > WINDOW_SIZES.SIZE_464 ? 360 : "100%"}
      onMouseEnter={() => {
        if (extendChangable) {
          setExtendState(true);
        }
      }}
      onMouseLeave={() => {
        if (extendChangable) {
          setExtendState(false);
        }
      }}
    >
      <Box
        position="absolute"
        paddingVertical={size === "small" ? 17 : 14}
        paddingHorizontal={size === "small" ? 20 : 30}
      >
        <Icon
          icon={Icons.search}
          size={size === "small" ? "SMALL" : "MEDIUM"}
        />
      </Box>
      <Input
        width={extendState ? "100%" : "0px"}
        padding={"15px 40px 15px 70px"}
        className={size}
        value={searchText}
        onChange={evt => {
          setSearchText(evt.target.value);
        }}
        placeholder={placeholder}
        onPressEnter={() => {
          onClickSearchButton();
        }}
      />
    </Box>
  );
};

export default SearchInput;
