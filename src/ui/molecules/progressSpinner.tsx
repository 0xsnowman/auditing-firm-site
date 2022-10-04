import React from "react";

import { Box, Text } from "ui/atoms";

interface IProgressSpinnerProps {
  size?: number;
  progress: number;
  trackWidth?: number;
  trackColor?: string;
  indicatorWidth?: number;
  indicatorColor?: string;
  indicatorCap?: "round" | "inherit" | "butt" | "square";
  label?: string;
  labelColor?: string;
  spinnerMode?: boolean;
  spinnerSpeed?: number;
}

const ProgressSpinner: React.FC<IProgressSpinnerProps> = ({
  size = 40,
  progress = 0,
  trackWidth = 3,
  trackColor = `#DDDDDD`,
  indicatorWidth = 3,
  indicatorColor = `#0077CC`,
  indicatorCap = "round",
  label = `Loading...`,
  spinnerMode = false,
}) => {
  const center = size / 2,
    radius =
      center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - progress) / 100);

  let hideLabel = size < 100 || !label.length || spinnerMode ? true : false;

  return (
    <>
      <Box className="svg-pi-wrapper" width={size} height={size}>
        <svg className="svg-pi" width={size} height={size}>
          <circle
            className="svg-pi-track"
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={trackColor}
            strokeWidth={trackWidth}
          />
          <circle
            className={`svg-pi-indicator ${
              spinnerMode ? "svg-pi-indicator--spinner" : ""
            }`}
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={indicatorColor}
            strokeWidth={indicatorWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap={indicatorCap}
          />
        </svg>
        <Box position="absolute" paddingVertical={10}>
          <Text>{progress}</Text>
        </Box>

        {!hideLabel && (
          <Box className="svg-pi-label">
            <Text className="svg-pi-label__loading">{label}</Text>

            {!spinnerMode && (
              <Text className="svg-pi-label__progress">
                {`${progress > 100 ? 100 : progress}%`}
              </Text>
            )}
          </Box>
        )}
      </Box>
    </>
  );
};

export default ProgressSpinner;
