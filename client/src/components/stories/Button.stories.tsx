import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonAppearance } from "components";
import { CheckIcon, EyeClosedIcon, GearIcon, ImageIcon, PlusIcon } from "@radix-ui/react-icons";
import { action } from "@storybook/addon-actions";

const meta = {
    title: "Button",
    component: Button,
    argTypes: {
        appearance: {
            control: "select",
            options: Object.values(ButtonAppearance),
        },
        icon: {
            control: "select",
            options: ["check", "plus", "image", "eyeClosed"],
            mapping: {
                check: <CheckIcon />,
                plus: <PlusIcon />,
                image: <ImageIcon />,
                eyeClosed: <EyeClosedIcon />,
            },
        },
    },
    args: {
        onClick: action("onClick"),
        icon: <GearIcon />,
    },
} as Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
    args: {
        appearance: ButtonAppearance.Primary,
    },
};
export const Success: Story = {
    args: {
        appearance: ButtonAppearance.Success,
    },
};
export const Danger: Story = {
    args: {
        appearance: ButtonAppearance.Danger,
    },
};
