import React from "react";

interface ITextProps {
  children: React.ReactNode;
  className?: string;
  type?: "logo" | "title" | "subtitle" | "paragraph" | "button";
  color?: string;
  colorPrimary?: boolean;
  center?: boolean;
  right?: boolean;
}

const Text: React.FC<ITextProps> = ({
  children,
  className,
  type = "paragraph",
  color,
  center,
  right
}) => {
  const classNames = {
    logo: "atom-text-logo",
    title: "atom-text-title",
    subtitle: "atom-text-subtitle",
    paragraph: "atom-text-paragraph",
    button: "atom-text-button"
  };
  return (
    <div
      className={["atom-text", className, classNames[type]].join(" ")}
      style={{
        color: color,
        textAlign: center ? "center" : right ? "right" : "left"
      }}
    >
      {children}
    </div>
  );
};

export default Text;
