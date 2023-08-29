import React from "react";

interface IFlexProps {
  children: React.ReactNode;
  className?: string;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  alignItems?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "initial";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial";
  width?: number | "100%";
  height?: number | "100%";
  gap?: number;
  flex?: number;
  zIndex?: number;
}

const Flex: React.FC<IFlexProps> = ({
  children,
  className,
  flexDirection,
  alignItems = "initial",
  justifyContent = "initial",
  width,
  height,
  gap,
  flex,
  zIndex = "initial"
}) => {
  return (
    <div
      className={["atom-flex", className].join(" ")}
      style={{
        display: "flex",
        flexDirection: flexDirection,
        alignItems: alignItems,
        justifyContent: justifyContent,
        width: width ? width : "initial",
        height: height ? height : "initial",
        boxSizing: "border-box",
        gap: gap,
        flex: flex,
        zIndex: zIndex
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
