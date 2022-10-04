import React from "react";

interface IFlexProps {
  children: React.ReactNode;
  className?: string;
  flexDirection?: "row" | "column";
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
    | "initial";
  height?: number | "100%";
}

const Flex: React.FC<IFlexProps> = ({
  children,
  className,
  flexDirection,
  alignItems = "initial",
  justifyContent = "initial",
  height
}) => {
  return (
    <div
      className={["atom-flex", className].join(" ")}
      style={{
        display: "flex",
        flexDirection: flexDirection,
        alignItems: alignItems,
        justifyContent: justifyContent,
        height: height ? height : "initial",
        boxSizing: "border-box"
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
