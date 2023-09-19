import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button.component";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    $primary: true,
    label: "Primary",
    width: "stretch",
  },
};

export const Secondary: Story = {
  args: {
    $primary: false,
    label: "Secondary",
    width: "stretch",
  },
};
