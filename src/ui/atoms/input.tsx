import React from "react";

interface IInputProps {
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onPressEnter: Function;
}

const Input: React.FC<IInputProps> = ({
  className = "medium",
  value,
  onChange,
  placeholder,
  onPressEnter
}) => {
  return (
    <input
      className={["atom-input", "atom-input-" + className].join(" ")}
      value={value}
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
