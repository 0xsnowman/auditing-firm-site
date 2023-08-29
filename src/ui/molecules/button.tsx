import React from "react";
import { Text, Icon } from "ui/atoms";
import { COLORS } from "config/colors";
import { Animations } from "assets";

interface IButtonProps {
  children: string | React.ReactNode;
  backgroundColor?: string;
  backgroundHoverColor?: string;
  color?: string;
  onClick?: Function;
  pending?: boolean;
  disabled?: boolean;
  fixedWidth?: boolean;
  width?: string | number;
  oneTimeButton?: boolean;
  shadow?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  backgroundColor = COLORS.DANGER,
  backgroundHoverColor = COLORS.DANGER_LIGHT,
  color = COLORS.DARK_THEME_WHITE,
  onClick = () => {},
  pending,
  disabled,
  fixedWidth,
  width = 0,
  shadow = true,
}) => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <div
      className={[
        "molecule-button",
        shadow ? "molecule-button-shadow" : "molecule-button-nonshadow",
        (disabled) && "molecule-button-disabled"
      ].join(" ")}
      onClick={() => {
        if (disabled !== true) {
          onClick();
        }
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      style={{
        width: width ? width : (fixedWidth ? 120 : "fit-content"),
        padding: "23px 21px 23px 21px",
        backgroundColor: !isHover ? backgroundColor : backgroundHoverColor
      }}
    >
      {pending ? (
        <Icon icon={Animations.loading} size="LARGE" />
      ) : (
        <Text center color={color} type="button" fontWeight={600}>
          {children}
        </Text>
      )}
    </div>
  );
};

export default Button;
