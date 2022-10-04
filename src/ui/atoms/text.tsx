import React from "react";

interface ITextProps {
  children: React.ReactNode;
  className?: string;
  type?: "logo" | "title" | "subtitle" | "paragraph" | "button" | "plain";
  color?: string;
  colorPrimary?: boolean;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  center?: boolean;
  right?: boolean;
}

const Text: React.FC<ITextProps> = ({
  children,
  className,
  type = "paragraph",
  color,
  fontWeight = 600,
  center,
  right
}) => {
  const classNames = {
    logo: "atom-text-logo",
    title: "atom-text-title",
    subtitle: "atom-text-subtitle",
    paragraph: "atom-text-paragraph",
    button: "atom-text-button",
    plain: "atom-text-plain"
  };
  return (
    <div
      className={["atom-text", className, classNames[type]].join(" ")}
      style={{
        color: color,
        fontWeight: fontWeight,
        textAlign: center ? "center" : right ? "right" : "left"
      }}
    >
      {children}
    </div>
  );
};

export default Text;
