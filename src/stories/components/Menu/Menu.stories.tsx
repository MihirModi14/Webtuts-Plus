import { Meta, StoryObj } from "@storybook/react";
import { MenuComponent } from "./Menu.component";

const meta = {
  title: "Menu",
  component: MenuComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderMenu: Story = {
  args: {
    label: "Browse",
    menuItems: [
      { id: 1, value: "Home" },
      { id: 2, value: "Product" },
      { id: 3, value: "Category" },
    ],
  },
};
