import React, { useState, useEffect } from "react";
import { Icon } from "ui/atoms";
import Icons from "assets/icons";

interface ICheckBoxProps {
  unCheckedIcon?: string;
  checkedIcon?: string;
  defaultCheckState?: boolean;
  stateChangable?: boolean;
}

const CheckBox: React.FC<ICheckBoxProps> = ({
  unCheckedIcon = Icons.star,
  checkedIcon = Icons.starBlack,
  defaultCheckState = false,
  stateChangable = true
}) => {
  const [checked, setChecked] = useState<boolean>(defaultCheckState);
  useEffect(() => {
      setChecked(defaultCheckState);
  }, [defaultCheckState]);
  return (
    <Icon
      icon={checked ? checkedIcon : unCheckedIcon}
      onClick={() => {
        if (stateChangable) {
          setChecked(!checked);
        }
      }}
    />
  );
};

export default CheckBox;
