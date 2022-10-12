import React, { useState } from "react";
import { Box, Input, Icon } from "ui/atoms";
import Icons from "assets/icons";
import { Z_INDEX_LEVELS } from "config/dimensions";

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
  const onClickSearchButton = () => {
    alert(["[Search] [Input] -", searchText].join(" "));
  };
  return (
    <Box
      position="relative"
      zIndex={Z_INDEX_LEVELS.MAXIMUM}
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
      className="molecule-searchinput"
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
