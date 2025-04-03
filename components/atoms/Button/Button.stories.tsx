import { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import Artboard from "$/atoms/Artboard";

const meta = {
  title: "Component/Atoms/Button",
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  args: {
    size: "md",
    variant: "primary",
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h3>Primary</h3>
        <small>Size - 2xl</small>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2">
            <div>Normal</div>
            <div>
              <Button size="2xl" variant="primary">
                Add Cart
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Hover</div>
            <div>
              <Button size="2xl" variant="primaryHover">
                Add Cart
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Focus</div>
            <div>
              <Button size="2xl" variant="primaryFocus" autoFocus={true}>
                Add Cart
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Disabled</div>
            <div>
              <Button size="2xl" variant="primary" disabled={true}>
                Add Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <small>Size - Xl</small>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2">
            <div>Normal</div>
            <div>
              <Button size="xl" variant="primary">
                Add Cart
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Hover</div>
            <div>
              <Button size="xl" variant="primaryHover">
                Add Cart
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Focus</div>
            <div>
              <Button size="xl" variant="primaryFocus" autoFocus={true}>
                Add Cart
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Disabled</div>
            <div>
              <Button size="xl" variant="primary" disabled={true}>
                Add Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3>Secondary</h3>
        <small>Size - Xl</small>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2">
            <div>Normal</div>
            <div>
              <Button size="xl" variant="secondary">
                Add Cart
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Hover</div>
            <div>
              <Button size="xl" variant="secondaryHover">
                Add Cart
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Focus</div>
            <div>
              <Button size="xl" variant="secondaryFocus" autoFocus={true}>
                Add Cart
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Disabled</div>
            <div>
              <Button size="xl" disabled={true}>
                Add Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3>Link color</h3>
        <small>Size - Xl</small>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2">
            <div>Normal</div>
            <div>
              <Button size="link" variant="link">
                See all 62 reviews
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Hover</div>
            <div>
              <Button size="link" variant="linkHover">
                See all 62 reviews
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Focus</div>
            <div>
              <Button size="link" variant="linkFocus" autoFocus={true}>
                See all 62 reviews
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Disabled</div>
            <div>
              <Button size="link" variant="link" disabled={true}>
                See all 62 reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
