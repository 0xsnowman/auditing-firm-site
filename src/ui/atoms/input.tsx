import React from "react";

interface IInputProps {
  className?: string;
  value?: string;
  width?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onPressEnter: Function;
}

const Input: React.FC<IInputProps> = ({
  className = "medium",
  value,
  width = "100%",
  onChange,
  placeholder,
  onPressEnter
}) => {
  return (
    <input
      className={["atom-input", "atom-input-" + className].join(" ")}
      value={value}
      style={{
        width: width
      }}
      onChange={onChange}
      placeholder={placeholder}
      onKeyPress={evt => {
        if (evt.key === "Enter") {
          onPressEnter()
        }
      }}
    />
  );
};

export default Input;
