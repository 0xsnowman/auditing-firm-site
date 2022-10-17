import React from "react";

interface ITextAreaProps {
  className?: string;
  value?: string;
  width?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  padding?: string;
  border?: string;
  requirement?: string;
  onPressEnter: Function;
}


const TextArea: React.FC<ITextAreaProps> = ({
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
      <textarea
        onChange={onChange}
        className={["atom-textarea", "atom-textarea-" + className].join(" ")}
        value={value}
        style={{
          width: width,
          padding: padding,
          border: border
        }}
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

export default TextArea;
