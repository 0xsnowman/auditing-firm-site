import React from "react";

interface IContentWrapperProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const ContentWrapper: React.FC<IContentWrapperProps> = ({
  children,
  backgroundColor = "transparent"
}) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
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
