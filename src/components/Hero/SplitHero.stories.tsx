import type { StoryObj, Meta } from "@storybook/react";
import SplitHero from "./SplitHero";

const meta: Meta<typeof SplitHero> = {
  component: SplitHero,
};

export default meta;
type Story = StoryObj<typeof SplitHero>;

export const Default: Story = {
  args: {
    imageAlignment: "left",
    textAlignment: "left",
    splitWidth: "1/2",
    title: "Title",
    subTitle: "SubTitle",
    image: "https://somestring",
    altText: "",
    hasCTA: false,
    makeFullBleed: false,
  },
};
