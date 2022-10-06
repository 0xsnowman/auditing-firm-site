import React from "react";

interface IGridItemProps {
  children: React.ReactNode;
  className?: string;
  columns: number;
  minWidth?: number;
}

const GridItem: React.FC<IGridItemProps> = ({
  children,
  className,
  columns,
  minWidth = "60px"
}) => {
  return (
    <div
      className={["atom-griditem", className].join(" ")}
      style={{ gridColumnStart: `span ${columns}`, minWidth: minWidth }}
    >
      {children}
    </div>
  );
};

export default GridItem;
