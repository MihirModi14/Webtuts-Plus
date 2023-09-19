import { Checkbox } from "@mui/material";
import { styled } from "styled-components";

interface StyledCheckboxProps {
  $error?: boolean;
}

export const StyledCheckbox = styled(Checkbox)<StyledCheckboxProps>`
  svg {
    height: 2.2rem;
    width: 2.2rem;

    fill: ${({ $error }) => ($error ? "red" : "primary")};
  }
`;
