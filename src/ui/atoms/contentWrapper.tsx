import React from "react";

interface IContentWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
  backgroundImage?: string;
}

const ContentWrapper: React.FC<IContentWrapperProps> = ({
  children,
  backgroundColor = "transparent",
  backgroundImage = "",
}) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage,
        width: "100%",
        zIndex: 2, // LOW
        position: "relative"
      }}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
