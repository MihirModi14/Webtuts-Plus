import { Button, ButtonProps } from "@mui/material";
import { styled } from "styled-components";
import { ButtonPropTypes } from "./Button.component";

export const StyledButton = styled(Button)<ButtonPropTypes & ButtonProps>`
  &.MuiButtonBase-root {
    font-size: ${({ size, width }) =>
      width !== "stretch" && size === "small"
        ? "12px"
        : width !== "stretch" && size === "medium"
        ? "14px"
        : "20px"};
    font-weight: 500;
    line-height: 1;
    color: ${({ theme }) => theme.colors.whiteColor};
    cursor: pointer;
    display: inline-block;
    background-color: ${({ disabled, $primary, theme }) =>
      disabled
        ? theme.colors.grayColor2
        : $primary
        ? theme.colors.primaryColor
        : theme.colors.secondaryColor};

    box-shadow: ${({ $primary }) =>
      $primary ? "none" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"};
    padding: ${({ size }) =>
      size === "small"
        ? "5px 10px"
        : size == "medium"
        ? "7px 15px"
        : "9px 20px"};

    min-width: 7rem;
    border: 0;
    text-transform: none;
    width: ${({ width }) => (width === "normal" ? "auto" : "100%")};
    height: ${({ width, size }) =>
      width === "normal" ? "auto" : size === "large" ? "40px" : "35px"};
    &:hover {
      background-color: ${({ disabled, $primary, theme }) =>
        disabled
          ? theme.colors.grayColor2
          : $primary
          ? theme.colors.primaryColor
          : theme.colors.secondaryColor};
    }

    &.Mui-disabled {
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }
`;
