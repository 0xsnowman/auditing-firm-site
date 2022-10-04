import React from "react";

import { Text, Icon } from "ui/atoms";
import { COLORS } from "config/colors";
import { Animations } from "assets";

interface IButtonProps {
  children: string;
  backgroundColor?: string;
  onClick?: Function;
  pending?: boolean;
  disabled?: boolean;
  fixedWidth?: boolean;
  oneTimeButton?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  backgroundColor = COLORS.DANGER,
  onClick = () => {},
  pending,
  disabled,
  fixedWidth
}) => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <div
      className={[
        "molecule-button",
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
        width: fixedWidth ? 100 : "initial",
        backgroundColor: !isHover ? backgroundColor : COLORS.DANGER_LIGHT
      }}
    >
      {pending ? (
        <Icon icon={Animations.loading} size="LARGE" />
      ) : (
        <Text center color={COLORS.WHITE} type="button">
          {children}
        </Text>
      )}
    </div>
  );
};

export default Button;
