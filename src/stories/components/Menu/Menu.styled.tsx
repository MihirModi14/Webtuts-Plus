import { styled } from "styled-components";
import { Menu, MenuItem, MenuItemProps, MenuProps } from "@mui/material";

export const StyledMenu = styled(Menu)<MenuProps>`
  margin-top: 0.5rem;
`;

export const StyledMenuItem = styled(MenuItem)<MenuItemProps>`
  font-size: 1.3rem !important;
`;

export const StyledAnchor = styled.a`
  img {
    vertical-align: middle;
    padding-left: 0.3rem;
    height: 24px;
    width: 24px;
  }
`;
