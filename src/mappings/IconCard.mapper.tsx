import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import IconCard from "../components/Card/IconCard";

interface FigmaIconCardProps extends BaseFigmaProps {
  Description: string;
  Collection?: string;
  Title: string;
  Icon: string;
  Alignment: "Center" | "Left" | "Right";
}

figmaMapping({
  url: "https://www.figma.com/design/gk3fgi86UxOGgZQohLgSGK/VCP-demo?node-id=1-16",
  componentKey: "ccbf1e0282711317826726121868c19206d8595b",
  mapper(figma: FigmaIconCardProps) {
    return (
      <IconCard
        title={figma.Title}
        altText={figma.Title}
        description={figma.Description}
        icon={figma.Icon}
        alignment={
          figma.Alignment?.toLowerCase() as "center" | "left" | "right"
        }
      />
    );
  },
});
