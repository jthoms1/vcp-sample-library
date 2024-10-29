import { Builder } from "@builder.io/react";
import IconCard from "./components/Card/IconCard";
import ImageHero from "./components/Hero/ImageHero";
import SplitHero from "./components/Hero/SplitHero";
import TextHero from "./components/Hero/TextHero";

Builder.registerComponent(IconCard, {
  name: "IconCard",
});

Builder.registerComponent(ImageHero, {
  name: "ImageHero",
});

Builder.registerComponent(SplitHero, {
  name: "SplitHero",
});

Builder.registerComponent(TextHero, {
  name: "TextHero",
});
