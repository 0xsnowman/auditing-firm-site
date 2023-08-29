import React from "react";
import { Text, Icon, Box, Flex } from "ui/atoms";
import { PADDING, BORDER_RADIUS } from "config/dimensions";
import { COLORS } from "config/colors";

interface IIconButtonProps {
  children: string;
  className?: string;
  icon: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  isIconLeft?: boolean;
  backgroundColor?: string;
  fixedWidth?: boolean;
  disabled?: boolean;
}

const IconButton: React.FC<IIconButtonProps> = ({
  children,
  className,
  icon,
  onClick,
  isIconLeft = false,
  backgroundColor = "#000000",
  fixedWidth = false,
  disabled = false
}) => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Box
        className={[
          "molecule-iconbutton",
          className,
          disabled && "molecule-iconbutton-disabled"
        ].join(" ")}
        backgroundColor={backgroundColor}
        paddingHorizontal={PADDING.MEDIUM}
        borderRadius={BORDER_RADIUS.SMALL}
        onClick={disabled ? () => {} : onClick}
        width={fixedWidth ? 168 : undefined}
        boxShadow={
          !disabled && isHover
            ? `0px 0px 20px ${backgroundColor}`
            : "0px 0px 20px transparent"
        }
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          height={36}
        >
          {isIconLeft ? (
            <>
              <Icon icon={icon} size="MEDIUM" />
              <Text type="button" color={COLORS.WHITE}>
                {children ? children : ""}
              </Text>
            </>
          ) : (
            <>
              <Text type="button" color={COLORS.WHITE}>
                {children ? children : ""}
              </Text>
              <Icon icon={icon} size="MEDIUM" />
            </>
          )}
        </Flex>
      </Box>
    </div>
  );
};

export default IconButton;
