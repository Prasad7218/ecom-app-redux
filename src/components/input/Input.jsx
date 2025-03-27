import React from "react";
import "./Input.css";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  placeholder = "Enter text",
  value,
  onChange,
  disabled = false,
  error,
  size = "medium",
  className = "",
  ...props
}) => {
  return (
    <div className={`input-wrapper ${size} ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`input-field ${error ? "error" : ""}`}
        {...props}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
};

export default Input;
