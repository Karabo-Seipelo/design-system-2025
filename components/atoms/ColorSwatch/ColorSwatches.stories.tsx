import { Meta, StoryObj } from "@storybook/react";
import ColorSwatch from ".";
import Artboard from "$/atoms/Artboard";

const meta = {
  title: "Component/Atoms/ColorSwatch",
  component: ColorSwatch,
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
} satisfies Meta<typeof ColorSwatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  args: {
    name: "color",
    color: "orange",
    variant: "default",
    active: false,
    isOutOfStock: false,
  },
  render: (args) => (
    <div className="flex flex-row gap-10">
      <div className="flex flex-col gap-2">
        <div>Normal</div>
        <div>
          <ColorSwatch
            name={args.name}
            color={args.color}
            variant={args.variant}
            active={args.active}
            isOutOfStock={args.isOutOfStock}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Hover</div>
        <div>
          <ColorSwatch
            name={args.name}
            color={args.color}
            variant="hover"
            active={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Focus</div>
        <div>
          <ColorSwatch
            name={args.name}
            color={args.color}
            variant="focus"
            active={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Selected</div>
        <div>
          <ColorSwatch
            name={args.name}
            color={args.color}
            variant="selected"
            active={true}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Out-of-stock</div>
        <div>
          <ColorSwatch
            name={args.name}
            color={args.color}
            active={false}
            isOutOfStock={true}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>Selected: Out-of-stock</div>
        <div>
          <ColorSwatch
            name={args.name}
            color={args.color}
            active={true}
            isOutOfStock={true}
          />
        </div>
      </div>
    </div>
  ),
};
