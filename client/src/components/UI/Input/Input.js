import React from "react";
import "./Input.css";

const Input = ({
  name,
  onChange,
  onClick,
  value,
  type,
  placeholder,
  required,
  label,
  labelTxt,
  className,
  disabled = false,
  addClassName = null,
}) => {
  return (
    <div className={`Input ${addClassName}`}>
      {label ? <label htmlFor={label}>{labelTxt}</label> : null}

      <input
        className={
          type === "submit" ? `${className} cursor_pointer` : className
        }
        id={label}
        name={name}
        onChange={onChange}
        onClick={onClick}
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
