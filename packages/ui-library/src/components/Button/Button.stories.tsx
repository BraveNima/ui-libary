import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Secondary Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "medium",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "medium",
    children: "Ghost Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    variant: "primary",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    variant: "primary",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    variant: "primary",
    children: "Large Button",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Disabled Button",
    disabled: true,
  },
};
