import type { StoryObj, Meta } from "@storybook/react";
import IconCard from "./IconCard";

const meta: Meta<typeof IconCard> = {
  component: IconCard,
};

export default meta;
type Story = StoryObj<typeof IconCard>;

export const Default: Story = {
  args: {
    icon: "thing",
    title: "Title",
    description: "description",
    altText: "",
  },
};
