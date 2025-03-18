import FieldComponent from "./FieldComponent";
import { FormFieldsProps } from "./interfaces";

const FormFields: React.FC<FormFieldsProps> = ({ fields }) => {
  return (
    <>
      {fields.map((field, index) => {
        const nextField = fields[index + 1];
        const isGrouped = field.groupWithNext && nextField;

        if (isGrouped) {
          return (
            <div
              key={`${index}-${field.id}`}
              className={`flex flex-col gap-3 ${isGrouped ? "lg:flex-row" : ""}`}
            >
              <FieldComponent
                {...field}
                classes={`${field.classes} lg:w-full`}
                data-testid={field.testId}
              />
              <FieldComponent
                {...nextField}
                classes={`${field.classes} lg:w-full`}
                data-testid={field.testId}
              />
            </div>
          );
        }

        if (index > 0 && fields[index - 1].groupWithNext) {
          return null;
        }

        return (
          <div key={`${index}-${field.id}`} className="flex flex-col gap-10">
            <FieldComponent {...field} data-testid={field.testId} />
          </div>
        );
      })}
    </>
  );
};

export default FormFields;
