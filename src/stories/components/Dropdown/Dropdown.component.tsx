import { FormHelperText, InputLabel, Select } from "@mui/material";
import {
  StyledFormControl,
  StyledInputContainer,
  StyledMenuItem,
} from "./Dropdown.styled";

interface OptionProps {
  label: string;
  value: string;
}

interface DropdownProps {
  labelType: string;
  options: OptionProps[];
  value: string;
  onChange: (newValue: unknown) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: "filled" | "outlined" | "standard";
  error?: boolean;
  helperText?: string;
  minHeight?: boolean;
}

const Dropdown = ({
  labelType,
  options = [],
  value,
  onChange,
  disabled = false,
  fullWidth = true,
  minHeight = true,
  variant = "filled",
  error = false,
  helperText = "",
  ...otherProps
}: DropdownProps) => {
  return (
    <StyledInputContainer $fullWidth={fullWidth} $minHeight={minHeight}>
      <StyledFormControl
        fullWidth={fullWidth}
        disabled={disabled}
        error={error}
      >
        <InputLabel>{labelType}</InputLabel>
        <Select
          label={labelType}
          variant={variant}
          disabled={disabled}
          onChange={onChange}
          value={value}
          {...otherProps}
        >
          {options.map((option: OptionProps) => {
            return (
              option.value && (
                <StyledMenuItem key={option.value} value={option.value}>
                  {option.label}
                </StyledMenuItem>
              )
            );
          })}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
      </StyledFormControl>
    </StyledInputContainer>
  );
};

export default Dropdown;
