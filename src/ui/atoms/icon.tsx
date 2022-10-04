import React from "react";

interface IIconProps {
  icon: string;
  size?: "LARGE" | "MEDIUM" | "SMALL";
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Icon: React.FC<IIconProps> = ({
  icon,
  size = "SMALL",
  className,
  onClick
}) => {
  const classNames = {
    LARGE: "atom-icon-large",
    MEDIUM: "atom-icon-medium",
    SMALL: "atom-icon-small"
  };

  return (
    <img
      className={["atom-icon", classNames[size], className].join(" ")}
      src={icon}
      alt="icon"
      onClick={onClick}
    />
  );
};

export default Icon;
