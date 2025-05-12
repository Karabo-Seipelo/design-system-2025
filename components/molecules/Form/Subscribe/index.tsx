import InputField, { InputFieldProps } from "$/atoms/InputField";
import { ButtonProps } from "$/atoms/Button/interfaces";
import Button from "$/atoms/Button";

export interface SubscribeButtonProps extends ButtonProps {
  label: string;
}

/**
 * Subscribe component props
 * @typedef {object} SubscribeProps
 * @property {function} onSubmit - Function to handle form submission
 * @property {InputFieldProps} input - Input field properties
 * @property {object} button - Button properties
 * @property {string} button.label - Button label
 * @property {string} button.variant - Button variant
 * @property {string} button.type - Button type
 */
export interface SubscribeProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  input: InputFieldProps;
  button: SubscribeButtonProps;
}

/**
 * Subscribe component
 * @param {function} onSubmit - Function to handle form submission
 * @param {InputFieldProps} input - Input field properties
 * @param {object} button - Button properties
 * @returns {JSX.Element}
 */
const Subscribe = ({ onSubmit, button, input }: SubscribeProps) => {
  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
      <div className="flex flex-col md:flex-row gap-4 md:gap-[2%] md:flex-wrap">
        <InputField {...input} className="basis-full md:basis-[80%]" />
        <Button
          variant={button.variant}
          className="basis-full md:basis-[18%]"
          type={button.type}
        >
          {button.label}
        </Button>
      </div>
    </form>
  );
};

export default Subscribe;
