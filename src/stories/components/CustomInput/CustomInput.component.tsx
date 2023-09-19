import { StyledInput, StyledInputContainer } from "./CustomInput.styled.tsx";

interface InputCompProps {
  value: string;
  id: string;
  type: "text" | "number" | "password" | "email";
  labelType: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string
  ) => void;
  variant?: "outlined" | "filled" | "standard";
  placeholder: string;
  fullWidth?: boolean;
  error?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  onBlur?: () => void;
  required?: boolean;
  helperText?: string;
  minHeight?: boolean;
}

const CustomInput = ({
  value,
  type,
  labelType,
  onChange,
  placeholder = "",
  error = false,
  disabled = false,
  autoFocus = false,
  onBlur,
  required = false,
  variant = "outlined",
  helperText = "",
  fullWidth = true,
  minHeight = true,
  ...otherProps
}: InputCompProps): React.ReactElement => {
  return (
    <StyledInputContainer $fullWidth={fullWidth} $minHeight={minHeight}>
      <StyledInput
        type={type}
        onChange={(e: any) => onChange(e.target.value)}
        value={value}
        error={error}
        label={labelType}
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onBlur={onBlur}
        variant={variant}
        helperText={helperText}
        {...otherProps}
      />
    </StyledInputContainer>
  );
};

CustomInput.defaultProps = {
  onChange: () => console.log("pressed"),
  type: "text",
  labelType: "name",
  error: false,
  disabled: false,
  variant: "filled",
  required: false,
};

export default CustomInput;
