import type { Meta, StoryObj } from "@storybook/react";
import Artboard from "$/atoms/Artboard";
import CollectionGrid from ".";

const meta = {
  title: "E-commerce/CollectionGrid",
  component: CollectionGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Artboard classes="md:w-[100%] mx-auto p-4">
        <Story />
      </Artboard>
    ),
  ],
} satisfies Meta<typeof CollectionGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
