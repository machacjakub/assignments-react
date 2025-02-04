import { Meta, StoryObj } from "@storybook/react";

import { Header } from "components";

const meta = {
    title: "Header",
    component: Header,
    argTypes: {
        onItemAdd: { action: "item added" },
    },
} as Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
        children: "Headline title",
    },
};
