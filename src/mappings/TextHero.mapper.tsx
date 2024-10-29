import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import TextHero from "../components/Hero/TextHero";

interface FigmaTextHeroProps extends BaseFigmaProps {
  Title: string;
}

figmaMapping({
  url: "https://www.figma.com/design/gk3fgi86UxOGgZQohLgSGK/VCP-demo?node-id=1-80&node-type=symbol&t=bb5uGJJOOVbwB0qa-0",
  componentKey: "395a1b1e37870afe95b0b3063dc37e387424edfc",
  mapper(figma: FigmaTextHeroProps) {
    return <TextHero title={figma.Title} subTitle={figma.Title} />;
  },
});
