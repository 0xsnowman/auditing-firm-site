import React from "react";

interface IBoxProps {
  children?: React.ReactNode;
  width?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  maxWidth?: string | number;
  className?: string;
  backdropFilter?: boolean;
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
  marginTop?: string | number;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  hover?: boolean;
  cursor?: boolean;
  zIndex?: number;
}

const Box: React.FC<IBoxProps> = ({
  children,
  className,
  height,
  width,
  maxHeight,
  maxWidth,
  display = "block",
  position = "static",
  backdropFilter = false,
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
  marginTop = 0,
  onClick,
  cursor = false,
  zIndex = "initial",
}) => {
  const backdropFilterClassName = backdropFilter ? "atom-box-backdrop" : "none";
  const cursorClassName = cursor ? "atom-box-cursor" : "none";
  return (
    <div
      className={["atom-box", className, backdropFilterClassName, cursorClassName].join(" ")}
      style={{
        display: display,
        position: position,
        width: width ? width : "auto",
        height: height ? height : "auto",
        maxHeight: maxHeight ? maxHeight : "auto",
        maxWidth: maxWidth ? maxWidth : "auto",
        borderRadius: borderRadius,
        borderTopWidth: borderTopWidth ? borderTopWidth : borderWidth,
        borderRightWidth: borderRightWidth ? borderRightWidth : borderWidth,
        borderBottomWidth: borderBottomWidth ? borderBottomWidth : borderWidth,
        borderLeftWidth: borderLeftWidth ? borderLeftWidth : borderWidth,
        borderStyle: borderStyle,
        borderColor: borderColor,
        marginTop: marginTop,
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
        boxShadow: boxShadow,
        backdropFilter: backdropFilter ? "blur(10px)" : "none",
        zIndex: zIndex,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Box;
