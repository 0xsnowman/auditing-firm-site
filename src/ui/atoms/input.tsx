import React from "react";
import { COLORS } from "config/colors";

interface IInputProps {
  className?: string;
  value?: string;
  width?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  padding?: string;
  border?: string;
  requirement?: string;
  onPressEnter: Function;
}

const Input: React.FC<IInputProps> = ({
  className = "medium",
  value,
  width = "100%",
  onChange,
  placeholder,
  padding = "15px 40px 15px 70px",
  requirement = "",
  border = "1px solid transparent",
  onPressEnter
}) => {
  return (
    <div>
      <input
        className={["atom-input", "atom-input-" + className].join(" ")}
        value={value}
        style={{
          width: width,
          padding: padding,
          border: border,
          color: COLORS.DARK_THEME_WHITE
        }}
        onChange={onChange}
        placeholder={placeholder}
        onKeyPress={evt => {
          if (evt.key === "Enter") {
            onPressEnter();
          }
        }}
      />
      {requirement.length > 0 && (
        <p style={{ fontSize: 12, marginTop: 2, paddingLeft: 5, color: "red" }}>
          {requirement}
        </p>
      )}
    </div>
  );
};

export default Input;
