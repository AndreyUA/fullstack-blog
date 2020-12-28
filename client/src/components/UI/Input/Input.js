import React from "react";
import "./Input.css";

const Input = ({
  name,
  onChange,
  value,
  type,
  placeholder,
  required,
  label,
  labelTxt,
  className,
  disabled = false,
}) => {
  return (
    <div className="Input">
      {label ? <label htmlFor={label}>{labelTxt}</label> : null}

      <input
        className={className}
        id={label}
        name={name}
        onChange={onChange}
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
