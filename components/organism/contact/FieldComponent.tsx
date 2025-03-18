import TextareaField from "./TextareaField";
import InputField from "./InputField";
import ButtonField from "./ButtonField";
import { FieldProps } from "./interfaces";

const FieldComponent: React.FC<FieldProps> = (props) => {
  const { renderType } = props;
  switch (renderType) {
    case "text":
      return <InputField {...props} type="text" />;
    case "email":
      return <InputField {...props} type="email" />;
    case "textarea":
      return <TextareaField {...props} />;
    case "submit":
      return <ButtonField {...props} type="submit" />;
    default:
      return null;
  }
};

export default FieldComponent;
