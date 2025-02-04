import type { Parameters, Preview, Decorator } from "@storybook/react";
import { ThemeProvider } from "../src/providers/ThemeProvider";

export const decorators: Decorator[] = [
    (Story) => (
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    ),
];

export const parameters: Parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
