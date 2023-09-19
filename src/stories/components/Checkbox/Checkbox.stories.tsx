import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox.component";

const meta = {
  title: "CheckBox",
  component: Checkbox,
} as Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const checkbox: Story = {
  args: {},
};
