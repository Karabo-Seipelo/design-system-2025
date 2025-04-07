import { Meta, StoryObj } from "@storybook/react";
import Stars from ".";
import Artboard from "$/atoms/Artboard";

const meta = {
  title: "Component/Atoms/Stars",
  component: Stars,
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
} satisfies Meta<typeof Stars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    score: 3,
  },
};

export const AllStates: Story = {
  args: {
    score: 0,
  },
  render: (args) => (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col gap-2">
        <Stars {...args} score={1} />
        <Stars {...args} score={2} />
        <Stars {...args} score={3} />
        <Stars {...args} score={4} />
        <Stars {...args} score={5} />
      </div>
      <div className="flex flex-col gap-2">
        <Stars {...args} score={0.5} />
        <Stars {...args} score={1.5} />
        <Stars {...args} score={2.5} />
        <Stars {...args} score={3.5} />
        <Stars {...args} score={4.5} />
      </div>
    </div>
  ),
};
