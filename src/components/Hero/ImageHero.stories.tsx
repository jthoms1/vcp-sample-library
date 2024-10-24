import type { StoryObj, Meta } from "@storybook/react";
import ImageHero from "./ImageHero";

const meta: Meta<typeof ImageHero> = {
  component: ImageHero,
};

export default meta;
type Story = StoryObj<typeof ImageHero>;

export const Default: Story = {
  args: {
    title: "Title",
    subTitle: "",
    buttonText: "button text",
    buttonLink: "https://example.com",
    backgroundImage: "https://via.placeholder.com/1920x1080",
    alignment: "left",
    makeFullBleed: false,
  },
};
