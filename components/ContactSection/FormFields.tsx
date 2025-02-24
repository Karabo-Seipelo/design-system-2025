import FieldComponent from "./FieldComponent";
import { FormFieldsProps } from "./interfaces";

const FormFields: React.FC<FormFieldsProps> = ({ fields }) => {
    return (
        <>
            {fields.map((field, index) => {
                
                const nextField = fields[index + 1];
                const isGrouped = field.groupWithNext && nextField;

                if (isGrouped) {
                    return (<div key={index} className={`flex flex-col gap-10 ${isGrouped ? 'lg:flex-row' : ''}`}>
                        <FieldComponent {...field} classes={`${field.classes} lg:w-1/2`} />
                        {isGrouped && <FieldComponent {...nextField} classes={`${field.classes} lg:w-1/2`} />}
                    </div>)
                }

                if (index > 0 && fields[index -1].groupWithNext) {
                    return null
                }

                return (
                    <div key={index} className="flex flex-col gap-10">
                        <FieldComponent {...field} />
                    </div>
                );

            })}
        </>
    );
};

export default FormFields;