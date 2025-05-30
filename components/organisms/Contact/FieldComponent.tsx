import TextareaField from "$/atoms/TextareaField";
import InputField from "./InputField";
import Button from "$/atoms/Button";
import { ButtonTypeEnum, ButtonVariant } from "$/atoms/Button/interfaces";
import { FieldProps } from "./interfaces";

const FieldComponent: React.FC<FieldProps> = (props) => {
  const { renderType, ...rest } = props;
  switch (renderType) {
    case "text":
      return <InputField {...rest} type={renderType} />;
    case "email":
      return <InputField {...rest} type={renderType} />;
    case "textarea":
      return <TextareaField {...rest} />;
    case "submit":
      return (
        <Button variant={ButtonVariant.PRIMARY} type={ButtonTypeEnum.SUBMIT}>
          {props.label}
        </Button>
      );
    default:
      return null;
  }
};

export default FieldComponent;
