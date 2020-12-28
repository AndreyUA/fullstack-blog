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
      />
    </div>
  );
};

export default Input;
