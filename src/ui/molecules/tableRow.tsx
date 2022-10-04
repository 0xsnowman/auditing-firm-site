import React from "react";

import { Grid } from "ui/atoms";

interface ITableRowProps {
  children: JSX.Element | JSX.Element[];
}

const tableRow: React.FC<ITableRowProps> = ({ children }) => {
  return <Grid gap={5}>{children}</Grid>;
};

export default tableRow;
