import React from "react";

interface IInputProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onPressEnter: Function;
}

const Input: React.FC<IInputProps> = ({
  value,
  onChange,
  placeholder,
  onPressEnter
}) => {
  return (
    <input
      className="atom-input"
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
