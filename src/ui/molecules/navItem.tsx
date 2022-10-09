import React, { useState } from "react";

import { Text } from "../atoms";
import { COLORS } from "../../config/colors";

interface INavItem {
  children: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  active?: boolean;
}

const NavItem: React.FC<INavItem> = ({ children, onClick, active }) => {
  const [isHover, setIshover] = useState(false);

  return (
    <div
      className="molecule-navitem"
      onMouseEnter={() => {
        setIshover(true);
      }}
      onMouseLeave={() => {
        setIshover(false);
      }}
      onClick={onClick}
    >
      <Text
        color={
          active || isHover
            ? COLORS.TEXT_PRIMARY_DARK
            : "#DDD"
        }
        type="plain"
      >
        {children}
      </Text>
    </div>
  );
};

export default NavItem;
