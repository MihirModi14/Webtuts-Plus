// @ts-nocheck
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { Theme } from "../src/theme/default";
import "../src/styles/main.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story: any) => (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Story />
      </ThemeProvider>
    </BrowserRouter>
  ),
];

export default preview;
