import { FormControl, MenuItem } from "@mui/material";
import { styled } from "styled-components";

interface InputContainerProps {
  $minHeight: boolean;
  $fullWidth: boolean;
}

export const StyledFormControl = styled(FormControl)`
  .MuiInputBase-input {
    padding: 20px 8px 5px 12px;
    color: ${({ theme }) => theme.colors.blackColor};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fontFamily.normal};
    height: 2.5rem;

    &:hover {
      outline: none;
    }
  }

  .MuiInputBase-root {
    font-family: inherit;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    padding: 0;
    border-radius: 1rem;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
    outline: 1px solid transparent;
    background: ${({ theme }) => theme.colors.whiteColor};

    &:hover {
      background: ${({ theme }) => theme.colors.whiteColor};
    }

    &.Mui-focused {
      outline-color: ${({ theme }) => theme.colors.primaryColor};
      border-color: ${({ theme }) => theme.colors.primaryColor};
      background: ${({ theme }) => theme.colors.whiteColor};

      .MuiInputBase-input {
        background-color: ${({ theme }) => theme.colors.whiteColor};
      }
    }
  }

  .MuiFilledInput-underline:before,
  .MuiFilledInput-underline:after {
    border: 0;
    border-bottom: 1px solid transparent !important;
  }

  .MuiFilledInput-root.Mui-disabled {
    border: solid 1px ${({ theme }) => theme.colors.whiteColor} !important;
    background: ${({ theme }) => theme.colors.grayColor3};
    .MuiInputBase-input {
      opacity: 1;
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }

  .MuiFormLabel-root {
    font-size: 1.6rem;
    color: ${({ theme, error }) => {
      return error ? theme.colors.redColor : theme.colors.grayColor7;
    }};
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.colors.grayColor3 : theme.colors.whiteColor};

    &.Mui-focused {
      color: ${({ theme }) => theme.colors.grayColor7};
    }
  }

  .MuiFormHelperText-root {
    color: ${({ theme }) => theme.colors.blackColor};
    font-family: ${({ theme }) => theme.fontFamily.normal};
    padding-left: 1rem;
    margin: 0;
    margin-top: 3px;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.31;
    text-align: left;
    margin-left: 0 !important;

    &.Mui-error {
      color: ${({ theme }) => theme.colors.alertColors.error.primary};
      border: none;
      margin-left: 0px;
      font-size: 1.4rem;
      line-height: 1.31;
      text-align: left;
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: normal;
      svg {
        width: 2.2rem;
      }
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  font-size: 1.4rem !important;
`;

export const StyledInputContainer = styled.div<InputContainerProps>`
  .MuiFormControl-root {
    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
    min-height: ${({ $minHeight }) => ($minHeight ? "85px" : "0px")};

    @media (max-width: 767px) {
      min-height: 60px;
    }
  }
`;
