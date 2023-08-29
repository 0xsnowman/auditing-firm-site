import React from "react";

interface IGridProps {
  children: React.ReactNode;
  className?: string;
  gap?: number | string;
  alignCenter?: boolean;
}

const Grid: React.FC<IGridProps> = ({
  children,
  className,
  gap,
  alignCenter
}) => {
  return (
    <div
      className={["atom-grid", className].join(" ")}
      style={{ gap: gap, alignItems: alignCenter ? "center" : "initial" }}
    >
      {children}
    </div>
  );
};

export default Grid;
