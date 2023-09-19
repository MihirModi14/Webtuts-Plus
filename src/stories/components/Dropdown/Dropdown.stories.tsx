import { StoryObj, Meta } from "@storybook/react";
import Dropdown from "./Dropdown.component";

const meta = {
  title: "Dropdown",
  component: Dropdown,
} as Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleDropdown: Story = {
  args: {
    labelType: "label",
    options: [
      { label: "label 1", value: "value 1" },
      { label: "label 2", value: "value 2" },
      { label: "label 3", value: "value 3" },
    ],
    fullWidth: true,
    disabled: false,
    variant: "filled",
  },
};
