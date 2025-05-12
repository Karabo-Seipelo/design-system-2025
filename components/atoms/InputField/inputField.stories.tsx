import { Meta, StoryObj } from "@storybook/react";
import InputField from ".";
import Artboard from "$/atoms/Artboard";

const meta = {
  title: "Component/Atoms/InputField",
  component: InputField,
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
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  args: {
    name: "email",
    label: "",
    hintMessage: "",
    type: "email",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
    placeholder: "Enter your email",
    disabled: false,
    required: false,
    error: false,
    errorMessage: "",
  },
  render: (args) => (
    <div className="flex flex-col gap-10">
      <header className="w-full flex bg-neutral-100 p-6 rounded-lg">
        <h1 className="font-bold text-4xl text-neutral-700">Input field</h1>
      </header>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">Normal</h5>
          <InputField
            name={args.name}
            type={args.type}
            pattern={args.pattern}
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">Focus</h5>
          <InputField
            name={args.name}
            type={args.type}
            value="test@gmail.com"
            pattern={args.pattern}
            placeholder="Enter your email"
            variant="focus"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">Filled</h5>
          <InputField
            name={args.name}
            value="test@gmail.com"
            type={args.type}
            pattern={args.pattern}
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">Disabled</h5>
          <InputField
            name={args.name}
            type={args.type}
            pattern={args.pattern}
            placeholder="Enter your email"
            variant="disabled"
            disabled={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">Hint</h5>
          <InputField
            name={args.name}
            type={args.type}
            pattern={args.pattern}
            placeholder="Enter your email"
            variant="disabled"
            disabled={true}
            hintMessage="This is a hint to help user."
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">
            Error - Required
          </h5>
          <InputField
            name={args.name}
            type={args.type}
            placeholder="Enter your email"
            errorMessage="Email address is required"
            pattern={args.pattern}
            error={true}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">
            Error - Invalid Filled
          </h5>
          <InputField
            name={args.name}
            type={args.type}
            pattern={args.pattern}
            placeholder="Enter your email"
            error={true}
            errorMessage="Please enter a valid email address."
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">Error - Focused</h5>
          <InputField
            name={args.name}
            type={args.type}
            pattern={args.pattern}
            placeholder="Enter your email"
            variant="error"
            error={true}
            errorMessage="Email address is required"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-normal text-xl text-gray-950">Label</h5>
          <InputField
            name={args.name}
            label="Email"
            type={args.type}
            pattern={args.pattern}
            placeholder="Enter your email"
            variant="disabled"
            disabled={true}
          />
        </div>
      </div>
    </div>
  ),
};

export const Default: Story = {
  args: {
    name: "email",
    label: "",
    hintMessage: "",
    type: "email",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
    placeholder: "Enter your email",
    disabled: false,
    required: false,
    error: false,
    errorMessage: "",
  },
  argTypes: {
    variant: {
      options: ["normal", "focus", "disabled", "error"],
      control: { type: "radio" },
    },
  },
};

export const Disabled: Story = {
  args: {
    name: "email",
    label: "",
    hintMessage: "",
    type: "email",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
    placeholder: "Enter your email",
    disabled: true,
    required: false,
    errorMessage: "",
  },
};

export const InputError: Story = {
  args: {
    name: "email",
    label: "",
    hintMessage: "",
    type: "email",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
    placeholder: "Enter your email",
    disabled: false,
    required: false,
    error: true,
    errorMessage: "Email address is required",
  },
};

export const Required: Story = {
  args: {
    name: "email",
    label: "",
    hintMessage: "",
    type: "email",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
    placeholder: "Enter your email",
    disabled: false,
    required: true,
    error: false,
    errorMessage: "",
  },
};

export const WithHint: Story = {
  args: {
    name: "email",
    label: "",
    hintMessage: "This is a hint to help user.",
    type: "email",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
    placeholder: "Enter your email",
    disabled: false,
    required: false,
    error: false,
    errorMessage: "",
  },
};

export const WithNoErrorMessage: Story = {
  args: {
    name: "email",
    label: "",
    hintMessage: "",
    type: "email",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
    placeholder: "Enter your email",
    disabled: false,
    required: false,
    error: true,
  },
};

export const WithIdAndLabel: Story = {
  args: {
    name: "email",
    label: "Email",
    hintMessage: "",
    type: "email",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
    placeholder: "Enter your email",
    disabled: false,
    required: false,
    error: false,
    errorMessage: "",
    id: "test-id",
  },
};
