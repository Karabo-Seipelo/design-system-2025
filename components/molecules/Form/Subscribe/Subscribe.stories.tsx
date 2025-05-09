import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Artboard from "$/atoms/Artboard/index";
import Subscribe from ".";

const meta = {
  title: "Component/molecules/Form/Subscribe",
  component: Subscribe,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Artboard classes="py-[48px] px-[10px] md:py-[64px] lg:p-[96px]">
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof Subscribe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      action("onSubmit")();
    },
    input: {
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      required: true,
      "aria-label": "Email",
      className: "basis-full md:basis-[80%]",
    },
    button: {
      label: "Subscribe",
      variant: "primary",
      type: "submit",
    },
  },
};
