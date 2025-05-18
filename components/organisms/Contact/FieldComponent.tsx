import TextareaField from "$/atoms/TextareaField";
import InputField from "./InputField";
import ButtonField, { ButtonFieldType } from "./ButtonField";
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
      return <ButtonField {...props} type={ButtonFieldType.SUBMIT} />;
    default:
      return null;
  }
};

export default FieldComponent;
