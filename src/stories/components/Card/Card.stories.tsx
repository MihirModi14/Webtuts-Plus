import { Meta, StoryObj } from "@storybook/react";
import { CardComponent } from "./Card.component";

const meta = {
  title: "Card",
  component: CardComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Category: Story = {
  args: {
    categoryId: 0,
    title: "Logitech G213 test",
    image:
      "https://resource.logitechg.com/w_1600,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/g213-finch/g213-gallery-1-nb.png?v=1",
    description:
      "Keyboard ini menawarkan performa yang tahan lama dan cocok untuk ...",
  },
};

export const Product: Story = {
  args: {
    isProductCard: true,
    categoryId: 0,
    title: "Logitech G213 test",
    image:
      "https://resource.logitechg.com/w_1600,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/g213-finch/g213-gallery-1-nb.png?v=1",
    description:
      "Keyboard ini menawarkan performa yang tahan lama dan cocok untuk ...",
    price: "728",
  },
};
