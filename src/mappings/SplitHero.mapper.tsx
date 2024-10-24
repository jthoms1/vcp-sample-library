import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import SplitHero from "../components/Hero/SplitHero";

interface FigmaSplitHeroProps extends BaseFigmaProps {
  ButtonText?: string;
  Subtitle: string;
  imageUrl?: string;
  Title: string;
}

figmaMapping({
  url: "https://www.figma.com/design/gk3fgi86UxOGgZQohLgSGK/VCP-demo?node-id=1-9&node-type=symbol&t=bb5uGJJOOVbwB0qa-0",
  componentKey: "e2e9c3632413b2742a31024471cc90ed692ef873",
  mapper(figma: FigmaSplitHeroProps) {
    return (
      <SplitHero
        title={figma.Title}
        subTitle={figma.Subtitle}
        buttonText={figma.ButtonText}
        image={figma.imageUrl ?? figma.$children[1]?.$imageUrl}
        imageAlignment="left"
        textAlignment="left"
        splitWidth="1/2"
        hasCTA={!!figma.ButtonText}
        altText="Hero image"
        makeFullBleed={false}
      />
    );
  },
});
