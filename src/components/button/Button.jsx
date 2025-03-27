import "./Button.css";

const Button = ({
  label,
  variant = "primary",
  onClick,
  disabled = false,
  size = "medium",
  fullWidth = false,
}) => {
  return (
    <button
      className={`button ${variant} ${size} ${fullWidth ? "full-width" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
