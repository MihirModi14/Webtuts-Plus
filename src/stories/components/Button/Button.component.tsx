import { StyledButton } from "./Button.styled";

export interface ButtonPropTypes {
  label?: string;
  $primary?: boolean;
  size?: "small" | "medium" | "large";
  width?: "normal" | "stretch";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonComponent = ({
  label,
  $primary = false,
  size = "medium",
  width = "normal",
  type = "button",
  disabled = false,
  onClick,
}: ButtonPropTypes) => {
  return (
    <StyledButton
      width={width}
      type={type}
      size={size}
      $primary={$primary}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};

export default ButtonComponent;
