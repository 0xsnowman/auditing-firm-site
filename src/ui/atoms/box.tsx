import React from "react";

interface IBoxProps {
  children?: React.ReactNode;
  width?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  className?: string;
  backdropFilter?: boolean;
  display?: "block" | "inline-block";
  position?:
    | "static"
    | "absolute"
    | "relative"
    | "fixed"
    | "sticky"
    | "initial";
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
  padding?: number | string;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  backgroundColor?: string;
  backgroundHoverColor?: "transparent" | "grey" | "white" | "black";
  backgroundHoverBorderColor?: "transparent" | "blue";
  backgroundPrimary?: boolean;
  boxShadow?: string;
  overflowX?: "initial" | "hidden" | "scroll" | "auto";
  overflowY?: "initial" | "hidden" | "scroll" | "auto";
  marginTop?: string | number;
  marginLeft?: string | number;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  hover?: boolean;
  cursor?: boolean;
  zIndex?: number;
  backgroundImage?: string;
  backgroundSize?: string;
  transition?: number | string;
}

const Box: React.FC<IBoxProps> = ({
  children,
  className,
  height,
  width,
  maxHeight,
  maxWidth,
  minHeight,
  display = "block",
  position = "relative",
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
  backgroundHoverColor = "transparent",
  backgroundHoverBorderColor = "transparent",
  boxShadow,
  overflowX = "initial",
  overflowY = "initial",
  marginTop = 0,
  marginLeft = 0,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onScroll,
  cursor = false,
  zIndex = "initial",
  backgroundImage = "auto",
  backgroundSize = "initial",
  transition
}) => {
  const backdropFilterClassName = backdropFilter ? "atom-box-backdrop" : "none";
  const cursorClassName = cursor ? "atom-box-cursor" : "none";
  const backgroundHoverColorClassNames = {
    transparent: "atom-box-hoverColor-transparent",
    grey: "atom-box-hoverColor-grey",
    black: "atom-box-hoverColor-black",
    white: "atom-box-hoverColor-white"
  };
  const backgroundHoverBorderColorClassNames = {
    transparent: "atom-box-hoverBorderColor-transparent",
    blue: "atom-box-hoverBorderColor-blue",
  };

  const isBackgroundImageUrl = (url: string) => {
    if (url.includes(",") || !url.includes(".")) return false;
    return true;
  };

  return (
    <div
      className={[
        "atom-box",
        className,
        backdropFilterClassName,
        cursorClassName,
        backgroundHoverColorClassNames[backgroundHoverColor],
        backgroundHoverBorderColorClassNames[backgroundHoverBorderColor],
      ].join(" ")}
      onScroll={onScroll}
      style={{
        display: display,
        position: position,
        width: width ? width : "auto",
        height: height ? height : "auto",
        maxHeight: maxHeight ? maxHeight : "auto",
        maxWidth: maxWidth ? maxWidth : "auto",
        minHeight: minHeight ? minHeight : "auto",
        borderRadius: borderRadius,
        borderTopWidth: borderTopWidth ? borderTopWidth : borderWidth,
        borderRightWidth: borderRightWidth ? borderRightWidth : borderWidth,
        borderBottomWidth: borderBottomWidth ? borderBottomWidth : borderWidth,
        borderLeftWidth: borderLeftWidth ? borderLeftWidth : borderWidth,
        backgroundImage: isBackgroundImageUrl(backgroundImage)
          ? `url(${backgroundImage})`
          : backgroundImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: backgroundSize,
        borderStyle: borderStyle,
        borderColor: borderColor,
        marginTop: marginTop,
        marginLeft: marginLeft,
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
        transition: transition + "s"
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default Box;
