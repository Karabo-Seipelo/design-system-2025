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
  render: (args) => (
    <div className="flex flex-col gap-10">
      <header className="w-full flex bg-neutral-100 p-6 rounded-lg">
        <h1 className="font-bold text-4xl text-neutral-700">Textarea field</h1>
      </header>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">Normal</h5>
          <TextareaField
            name={args.name}
            label={args.label}
            placeholder={args.placeholder}
            maxLength={500}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">Filled</h5>
          <TextareaField
            name={args.name}
            label={args.label}
            placeholder={args.placeholder}
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam iaculis leo vitae luctus."
            maxLength={500}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">Focused</h5>
          <TextareaField
            name={args.name}
            label={args.label}
            placeholder={args.placeholder}
            variant="focus"
            maxLength={500}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">Disabled</h5>
          <TextareaField
            name={args.name}
            label={args.label}
            placeholder={args.placeholder}
            variant="disabled"
            disabled
            maxLength={500}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">
            Char limit execeed
          </h5>
          <TextareaField
            name={args.name}
            label={args.label}
            placeholder={args.placeholder}
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lectus a massa suscipit, vel vehicula ante malesuada. Curabitur semper justo et felis semper vulputate. Maecenas gravida et lacus ut fermentum. Pellentesque molestie est a malesuada congue. Etiam eget sodales metus. Nulla leo sapien, efficitur lacinia dui vel, euismod ultricies velit. Suspendisse augue lorem, ornare semper lobortis in, ultricies a ligula. Aliquam semper nibh ut consectetur egestas. Ut vulputate vulputate pretium. Fusce a auctor ex. Nullam rhoncus odio sit amet diam aliquet feugiat. Nulla rhoncus, enim vel tristique fermentum, augue ex convallis ipsum, pellentesque sollicitudin ipsum risus nec risus. Sed dictum lectus eget magna pellentesque, non gravida eros porttitor. Nam id quam a magna maximus vestibulum. Aenean vitae sapien hendrerit, facilisis nisi eget, bibendum nisl. Cras hendrerit finibus fermentum. In hac habitasse platea dictumst. Proin eu velit lectus. Etiam ac elit sagittis, placerat risus quis, laoreet quam. Cras ullamcorper eros id ultrices feugiat. Fusce sit amet pretium arcu."
            maxLength={500}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">Error</h5>
          <TextareaField
            name={args.name}
            label={args.label}
            placeholder={args.placeholder}
            variant="error"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">Error filled</h5>
          <TextareaField
            name={args.name}
            label={args.label}
            placeholder={args.placeholder}
            variant="error"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">Error focused</h5>
          <TextareaField
            name={args.name}
            label={args.label}
            placeholder={args.placeholder}
            variant="error"
          />
        </div>
      </div>
    </div>
  ),
};
