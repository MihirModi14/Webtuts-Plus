import React, { useState } from "react";
import { StyledMenu, StyledMenuItem, StyledAnchor } from "./Menu.styled";
import ExpandLess from "/assets/icons/expand_less.svg";
import ExpandMore from "/assets/icons/expand_more.svg";

export interface MenuItemProps {
  id: number;
  value: string;
}

export interface MenuPropTypes {
  label: string;
  menuItems: MenuItemProps[];
  handleClick: (selectedOption: MenuItemProps) => void;
}

export const MenuComponent = ({
  label,
  menuItems,
  handleClick,
}: MenuPropTypes) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (selectedOption: MenuItemProps) => {
    handleClick(selectedOption);
    handleClose();
  };

  return (
    <>
      <StyledAnchor onClick={handleOpen}>
        {label}
        <img src={open ? ExpandLess : ExpandMore} />
      </StyledAnchor>

      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((item: MenuItemProps) => (
          <StyledMenuItem key={item.id} onClick={() => handleSelect(item)}>
            {item.value}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  );
};
