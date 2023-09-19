import { Meta, StoryObj } from "@storybook/react";
import Stepper from "./Stepper.component";

const meta = {
  title: "Stepper",
  component: Stepper,
} as Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const stepper: Story = {
  args: {
    steps: ["First Step", "Second Step", "Third Step"],
    activeStep: 1,
    completed: {
      0: true,
    },
  },
};
