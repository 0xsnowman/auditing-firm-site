import React from "react";

import { COLORS } from "config/colors";
import useWindowDimensions from "hooks/useWindowDimensions";
import { WINDOW_SIZES } from "config/dimensions";

interface ITextProps {
  children: React.ReactNode;
  className?: string;
  type?:
    | "logo"
    | "sublogo"
    | "title"
    | "uppersubtitle"
    | "subtitle"
    | "undersubtitle"
    | "paragraph"
    | "button"
    | "plain"
    | "tiny"
    | "header";
  color?: string;
  colorPrimary?: boolean;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  lineHeight?: string | number;
  center?: boolean;
  right?: boolean;
  justify?: boolean;
  italic?: boolean;
  underline?: boolean;
  noWrap?: boolean;
  category?: "p" | "span";
}

const Text: React.FC<ITextProps> = ({
  children,
  className,
  type = "plain",
  color = COLORS.DARK_THEME_WHITE,
  fontWeight = 400,
  center,
  lineHeight = "auto",
  right,
  justify,
  italic = false,
  underline = false,
  noWrap = false,
  category = "p"
}) => {
  const { deviceWidth } = useWindowDimensions();
  const classNames = {
    logo: "atom-text-logo",
    title: "atom-text-title",
    uppersubtitle: "atom-text-uppersubtitle",
    subtitle: "atom-text-subtitle",
    paragraph: "atom-text-paragraph",
    button: "atom-text-button",
    plain: "atom-text-plain",
    sublogo: "atom-text-sublogo",
    undersubtitle: "atom-text-undersubtitle",
    tiny: "atom-text-tiny",
    header: "atom-text-header"
  };
  const mobileClassNames = {
    logo: "atom-text-mobilelogo",
    title: "atom-text-mobiletitle",
    uppersubtitle: "atom-text-mobileuppersubtitle",
    subtitle: "atom-text-mobilesubtitle",
    paragraph: "atom-text-mobileparagraph",
    button: "atom-text-mobilebutton",
    plain: "atom-text-mobileplain",
    sublogo: "atom-text-mobilesublogo",
    undersubtitle: "atom-text-mobileundersubtitle",
    tiny: "atom-text-mobiletiny",
    header: "atom-text-mobileheader"
  };

  return category === "p" ? (
    <div
      className={[
        "atom-text",
        className,
        deviceWidth > WINDOW_SIZES.SIZE_768
          ? classNames[type]
          : mobileClassNames[type]
      ].join(" ")}
      style={{
        color: color,
        lineHeight: lineHeight,
        fontWeight: fontWeight,
        textAlign: center
          ? "center"
          : right
          ? "right"
          : justify
          ? "justify"
          : "left",
        textDecoration: underline ? "underline" : "initial",
        fontStyle: italic ? "italic" : "initial",
        whiteSpace: noWrap ? "nowrap" : "initial"
      }}
    >
      {children}
    </div>
  ) : (
    <span
      className={[
        "atom-text",
        className,
        deviceWidth > WINDOW_SIZES.SIZE_768
          ? classNames[type]
          : mobileClassNames[type]
      ].join(" ")}
      style={{
        color: color,
        lineHeight: lineHeight,
        fontWeight: fontWeight,
        textAlign: center
          ? "center"
          : right
          ? "right"
          : justify
          ? "justify"
          : "left",
        textDecoration: underline ? "underline" : "initial",
        fontStyle: italic ? "italic" : "initial",
        whiteSpace: noWrap ? "nowrap" : "initial"
      }}
    >
      {children}
    </span>
  );
};

export default Text;
