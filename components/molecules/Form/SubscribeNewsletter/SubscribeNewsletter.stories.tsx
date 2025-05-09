import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Artboard from "$/atoms/Artboard";
import SubscribeNewsletter from ".";

const meta = {
  title: "Component/molecules/Form/SubscribeNewsletter",
  component: SubscribeNewsletter,
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
} satisfies Meta<typeof SubscribeNewsletter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Join our newsletter",
    description:
      "Subscribe to our newsletter and get the latest updates, news, and special offers delivered directly to your inbox.",
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
