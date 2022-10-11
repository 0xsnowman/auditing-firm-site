import React from "react";
import { Box } from "../atoms";
import { COLORS } from "config/colors";

interface IPageProps {
  children:
    | boolean
    | JSX.Element
    | (boolean | JSX.Element)[]
    | (boolean | JSX.Element[])[];
  className?: string;
  paddingVertical?: number;
}

const Page: React.FC<IPageProps> = ({
  children,
  className,
  paddingVertical = 120
}) => {
  return (
    <Box
      className={["molecule-page", className].join(" ")}
      paddingVertical={paddingVertical}
      backgroundColor={COLORS.WHITE}
    >
      {children}
    </Box>
  );
};

export default Page;
