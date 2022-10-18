import React from "react";

import { COLORS } from "config/colors";

interface ITextProps {
  children: React.ReactNode;
  className?: string;
  type?: "logo" | "sublogo" | "title" | "subtitle" | "undersubtitle" | "paragraph" | "button" | "plain" | "tiny" | "header";
  color?: string;
  colorPrimary?: boolean;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  lineHeight?: string | number;
  center?: boolean;
  right?: boolean;
}

const Text: React.FC<ITextProps> = ({
  children,
  className,
  type = "plain",
  color = COLORS.DARK_THEME_WHITE,
  fontWeight = 400,
  center,
  lineHeight = "auto",
  right
}) => {
  const classNames = {
    logo: "atom-text-logo",
    title: "atom-text-title",
    subtitle: "atom-text-subtitle",
    paragraph: "atom-text-paragraph",
    button: "atom-text-button",
    plain: "atom-text-plain",
    sublogo: "atom-text-sublogo",
    undersubtitle: "atom-text-undersubtitle",
    tiny: "atom-text-tiny",
    header: "atom-text-header",
  };
  return (
    <div
      className={["atom-text", className, classNames[type]].join(" ")}
      style={{
        color: color,
        lineHeight: lineHeight,
        fontWeight: fontWeight,
        textAlign: center ? "center" : right ? "right" : "left"
      }}
    >
      {children}
    </div>
  );
};

export default Text;
