import React from "react";

interface IGridItemProps {
  children: React.ReactNode;
  className?: string;
  columns: number;
}

const GridItem: React.FC<IGridItemProps> = ({
  children,
  className,
  columns
}) => {
  return (
    <div
      className={["atom-griditem", className].join(" ")}
      style={{ gridColumnStart: `span ${columns}`, minWidth: `70px` }}
    >
      {children}
    </div>
  );
};

export default GridItem;
