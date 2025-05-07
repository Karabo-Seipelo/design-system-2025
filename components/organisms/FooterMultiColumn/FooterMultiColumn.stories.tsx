import type { Meta, StoryObj } from "@storybook/react";
import Artboard from "$/atoms/Artboard/index";
import FooterMultiColumn from ".";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "E-commerce/FooterMultiColumn",
  component: FooterMultiColumn,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Artboard classes="py-[48px] md:py-[64px] lg:p-[96px]">
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof FooterMultiColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    form: {
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
    /*
    columns: [
      {
        title: "Column 1",
        items: [
          { text: "Item 1", link: "#" },
          { text: "Item 2", link: "#" },
          { text: "Item 3", link: "#" },
        ],
      },
      {
        title: "Column 2",
        items: [
          { text: "Item 4", link: "#" },
          { text: "Item 5", link: "#" },
          { text: "Item 6", link: "#" },
        ],
      },
    ],
    */
  },
};
