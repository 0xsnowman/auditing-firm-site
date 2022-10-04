import React from "react";

interface IProgressBar {
  value: number;
  range: number;
  height?: number;
  borderRadius?: string;
  transition?: number;
}

const ProgressBar: React.FC<IProgressBar> = ({
  value,
  range = 10,
  height = 6,
  borderRadius = 10,
  transition = 0.4,
}) => {
  return (
    <div
      className="atom-progressbar"
      style={{
        borderRadius: borderRadius,
      }}
    >
        <div
          className="atom-progressbar__fill"
          style={{
            border: `1px solid black`,
            width: `${value * 100 / range}%`,
            height: height,
            borderRadius: borderRadius,
            transition: `${transition}s`,
          }}
        ></div>
      </div>
  );
};

export default ProgressBar;
