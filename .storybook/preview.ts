import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Usecase",
          "Tech-Stack",
          "Architecture",
          "Features",
          "Sequence",
          "User-Journey",
          "Configurations",
          "API-Documentation",
          "Future-Enhancements",
        ],
      },
    },
  },
};

export default preview;
