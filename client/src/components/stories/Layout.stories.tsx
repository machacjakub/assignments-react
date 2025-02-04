import { Meta, StoryObj } from "@storybook/react";

import { Layout } from "components";

const meta = {
    title: "Layout",
    component: Layout,
} as Meta<typeof Layout>;
export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
    args: {
        children: [<div>Top element</div>, <div>Middle element</div>, <div>Bottom element</div>],
    },
};
