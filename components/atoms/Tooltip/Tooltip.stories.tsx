import { Meta, StoryObj } from "@storybook/react";
import Tooltip from ".";
import Artboard from "$/atoms/Artboard";

const meta = {
  title: "Component/Feedback/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/*
export const Default: Story = {
    args: {
        text: "Tooltip",
        children: <button className="px-4 py-2 bg-indigo-700 text-white rounded">Hover me</button>,
    },
    decorators: [
        (Story) => (
            <Artboard classes="md:w-[50%] mx-auto p-4">
                <Story />
            </Artboard>
        ),
    ],
};
*/
