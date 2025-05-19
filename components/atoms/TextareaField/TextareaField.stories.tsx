import { Meta, StoryObj } from "@storybook/react";
import Artboard from "$/atoms/Artboard";
import TextareaField from ".";

const meta = {
  title: "Component/Atoms/TextareaField",
  component: TextareaField,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Artboard classes="p-4">
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof TextareaField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "message",
    label: "Message",
    placeholder: "Enter your message",
  },
};

export const FilledWithCharacterCount: Story = {
  args: {
    name: "message",
    label: "Message",
    placeholder: "Enter your message",
    defaultValue:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis leo vitae luctus.",
    maxLength: 500,
  },
};

export const Disabled: Story = {
  args: {
    name: "message",
    label: "Message",
    placeholder: "Enter your message",
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    name: "message",
    label: "Message",
    placeholder: "Enter your message",
    required: true,
    requiredMessage: "This is a required message",
  },
};

export const CharLimitExceed: Story = {
  args: {
    name: "message",
    label: "Message",
    placeholder: "Enter your message",
    defaultValue:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis leo vitae luctus.",
    maxLength: 10,
  },
};

export const Focus: Story = {
  args: {
    name: "message",
    label: "Message",
    placeholder: "Enter your message",
    autoFocus: true,
  },
};

export const Error: Story = {
  args: {
    name: "message",
    label: "Message",
    placeholder: "Enter your message",
    variant: "error",
    required: true,
    requiredMessage: "This is a required message",
    validationRule: [
      {
        pattern: "^[0-9]*$",
        message: "This is an error message",
      },
    ],
    defaultValue: "abc123",
  },
};
