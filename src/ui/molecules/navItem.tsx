import React from "react";

interface INavItem {
  children: any;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  url?: string;
  fontSize?: string | number;
}

const NavItem: React.FC<INavItem> = ({
  children,
  onClick,
  url = "#",
  fontSize = "15px"
}) => {
  return (
    <div className="molecule-navitem" onClick={onClick}>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{
          fontWeight: 600,
          fontSize: fontSize
        }}
      >
        {children}
      </a>
    </div>
  );
};

export default NavItem;
