import type { StoryObj, Meta } from "@storybook/react";
import TextHero from "./TextHero";

const meta: Meta<typeof TextHero> = {
  component: TextHero,
};

export default meta;
type Story = StoryObj<typeof TextHero>;

export const Default: Story = {
  args: {
    title: "Title",
    subTitle: "SubTitle",
  },
};
