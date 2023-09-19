import { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader.component";

const meta = {
  title: "Loader",
  component: Loader,
  argTypes: {
    type: {
      description: "Loader Type",
      options: ["linear", "circular"],
      control: {
        type: "radio",
      },
    },
    size: {
      description: "Loader Size",
      if: { arg: "type", eq: "circular" },
      control: {
        type: "text",
      },
    },
    color: {
      description: "Loader color",
      control: {
        type: "color",
      },
    },
  },

  parameters: {
    controls: {
      expanded: true,
    },
  },
} as Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const linearLoader: Story = {
  args: {
    type: "linear",
    color: "red",
  },
};

export const circularLoader: Story = {
  args: {
    type: "circular",
    color: "gray",
    size: "5rem",
  },
};
