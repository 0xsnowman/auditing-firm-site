import React from "react";

interface IIconProps {
  icon: string;
  size?: "SMALL" | "MEDIUM" | "UPPERMEDIUM" | "LARGE" | "UPPERLARGE" | "SUPER_LARGE" | "EXTRA_SUPER_LARGE";
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Icon: React.FC<IIconProps> = ({
  icon,
  size = "SMALL",
  className,
  onClick,
}) => {
  const classNames = {
    LARGE: "atom-icon-large",
    UPPERMEDIUM: "atom-icon-uppermedium",
    MEDIUM: "atom-icon-medium",
    SMALL: "atom-icon-small",
    SUPER_LARGE: "atom-icon-superlarge",
    UPPERLARGE: "atom-icon-upperlarge",
    EXTRA_SUPER_LARGE: "atom-icon-extrasuperlarge"
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
