import {
  BuilderContent,
  Content,
  fetchOneEntry,
  isPreviewing,
} from "@builder.io/sdk-react";
import { useEffect, useState } from "react";
import { CUSTOM_COMPONENTS } from "../builder-registry";

const BUILDER_PUBLIC_API_KEY = import.meta.env.VITE_PUBLIC_BUILDER_KEY!;

function App() {
  const [content, setContent] = useState<BuilderContent | null>(null);

  // get the page content from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = await fetchOneEntry({
        model: "figma-imports",
        apiKey: BUILDER_PUBLIC_API_KEY,
        userAttributes: {
          urlPath: window.location.pathname || "/",
        },
      });

      if (content) {
        setContent(content);
      }
    }
    fetchContent();
  }, []);

  const shouldRenderBuilderContent = content || isPreviewing();

  return shouldRenderBuilderContent ? (
    <Content
      content={content}
      model="figma-imports"
      customComponents={CUSTOM_COMPONENTS}
      apiKey={BUILDER_PUBLIC_API_KEY}
    />
  ) : (
    <div>Content Not Found</div>
  );
}

export default App;
