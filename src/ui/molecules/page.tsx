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
  backgroundColor?: string;
}

const Page: React.FC<IPageProps> = ({
  children,
  className,
  paddingVertical = 0,
  backgroundColor = COLORS.DARK_THEME_TRANSPARENT
}) => {
  return (
    <Box
      className={["molecule-page", className].join(" ")}
      paddingVertical={paddingVertical}
      backgroundColor={backgroundColor}
      width="100%"
    >
      {children}
    </Box>
  );
};

export default Page;
