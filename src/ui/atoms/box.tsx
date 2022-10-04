import React from "react";

interface IBoxProps {
  children?: React.ReactNode;
  width?: string | number;
  height?: string | number;
  className?: string;
  display?: "block" | "inline-block";
  position?: "static" | "absolute" | "relative" | "fixed" | "sticky" | "initial";
  borderRadius?: number;
  borderWidth?: number;
  borderStyle?: "solid" | "dashed";
  borderColor?: string;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  padding?: number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  backgroundColor?: string;
  backgroundPrimary?: boolean;
  boxShadow?: string;
  overflowX?: "initial" | "hidden" | "scroll" | "auto";
  overflowY?: "initial" | "hidden" | "scroll" | "auto";
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  hover?: boolean;
}

const Box: React.FC<IBoxProps> = ({
  children,
  className,
  height,
  width,
  display = "block",
  position = "static",
  borderRadius = 0,
  borderWidth = 0,
  borderTopWidth = 0,
  borderRightWidth = 0,
  borderBottomWidth = 0,
  borderLeftWidth = 0,
  borderColor = "#000",
  borderStyle = "solid",
  paddingVertical = 0,
  paddingHorizontal = 0,
  padding = 0,
  top = "auto",
  right = "auto",
  bottom = "auto",
  left = "auto",
  backgroundColor,
  boxShadow,
  overflowX = "initial",
  overflowY = "initial",
  onClick,
}) => {
  return (
    <div
      className={["atom-box", className].join(" ")}
      style={{
        display: display,
        position: position,
        width: width ? width : "auto",
        height: height ? height : "auto",
        borderRadius: borderRadius,
        borderTopWidth: borderTopWidth ? borderTopWidth : borderWidth,
        borderRightWidth: borderRightWidth ? borderRightWidth : borderWidth,
        borderBottomWidth: borderBottomWidth ? borderBottomWidth : borderWidth,
        borderLeftWidth: borderLeftWidth ? borderLeftWidth : borderWidth,
        borderStyle: borderStyle,
        borderColor: borderColor,
        padding: padding
          ? `${padding}px`
          : `${paddingVertical}px ${paddingHorizontal}px`,
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        backgroundColor: backgroundColor,
        cursor: onClick ? "pointer" : "default",
        overflowX: overflowX,
        overflowY: overflowY,
        boxSizing: "border-box",
        boxShadow: boxShadow
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Box;
