import React from "react";

interface INavItem {
  children: any;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  url?: string;
}

const NavItem: React.FC<INavItem> = ({
  children,
  onClick,
  url = "#"
}) => {
  return (
    <div
      className="molecule-navitem"
      onClick={onClick}
    >
      <a href={url} target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  );
};

export default NavItem;
