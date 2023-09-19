import { StoryObj, Meta } from "@storybook/react";
import Input from "./CustomInput.component";

const meta = {
  title: "Custom Input",
  component: Input,
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegularState: Story = {
  args: {
    id: "name",
    placeholder: "Enter name",
    type: "text",
    labelType: "name",
    fullWidth: true,
    error: false,
    disabled: false,
    autoFocus: true,
    required: true,
    variant: "outlined",
    helperText: "HelperText",
    minHeight: true,
  },
};
