import React, { useState } from "react";

import { Box, Input, Icon } from "ui/atoms";

import Icons from "assets/icons";

interface ISearchInputProps {
  placeholder?: string;
  size?: "small" | "medium";
}

const SearchInput: React.FC<ISearchInputProps> = ({
  placeholder = "Input search text here",
  size = "medium"
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const onClickSearchButton = () => {
    alert(["[Search] [Input] -", searchText].join(" "));
  };
  return (
    <Box position="relative">
      <Box
        position="absolute"
        paddingVertical={size === "small" ? 16 : 14}
        paddingHorizontal={size === "small" ? 20 : 30}
      >
        <Icon
          icon={Icons.search}
          size={size === "small" ? "SMALL" : "MEDIUM"}
        />
      </Box>
      <Input
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
