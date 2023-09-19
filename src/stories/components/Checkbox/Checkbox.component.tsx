import { StyledCheckbox } from "./Checkbox.styled";
import { CheckboxProps } from "@mui/material";

interface CheckBoxProps extends CheckboxProps {
  error?: boolean;
}

const CheckboxComponent = ({ error, ...props }: CheckBoxProps): JSX.Element => {
  return <StyledCheckbox {...props} $error={error}></StyledCheckbox>;
};

CheckboxComponent.defaultProps = {
  error: false,
};

export default CheckboxComponent;
