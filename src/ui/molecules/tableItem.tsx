import React from "react";

import { Box } from "ui/atoms";

interface ITableItemProps {
  children: JSX.Element | JSX.Element[];
}

const TableItem: React.FC<ITableItemProps> = ({ children }) => {
  return <Box padding={5}>{children}</Box>;
};

export default TableItem;
