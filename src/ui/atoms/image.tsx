import React from "react";

interface IImageProps {
  image: string;
  className?: string;
  width?: string;
  height?: string;
  objectFit?: "contain" | "cover" | "fill" | "revert" | "scaleDown";
}

const Image: React.FC<IImageProps> = ({
  image,
  className,
  width = "auto",
  height = "auto  ",
  objectFit = "contain"
}) => {
  const objectFitClassNames = {
    contain: "atom-image-contain",
    cover: "atom-image-cover",
    fill: "atom-image-fill",
    revert: "atom-image-revert",
    scaleDown: "atom-image-scaleDown"
  };
  return (
    <img
      className={["atom-image", className, objectFitClassNames[objectFit]].join(
        " "
      )}
      src={image}
      alt="atom-img"
      width={width}
      height={height}
    />
  );
};

export default Image;
