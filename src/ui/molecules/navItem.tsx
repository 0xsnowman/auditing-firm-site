import React from "react";

interface INavItem {
  children: any;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  url?: string;
  fontSize?: string | number;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
}

const NavItem: React.FC<INavItem> = ({
  children,
  onClick,
  url = "#",
  fontSize = "15px",
  fontWeight = 600,
}) => {
  return (
    <div className="molecule-navitem" onClick={onClick}>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{
          fontWeight: fontWeight,
          fontSize: fontSize
        }}
      >
        {children}
      </a>
    </div>
  );
};

export default NavItem;
