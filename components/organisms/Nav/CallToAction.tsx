import { Button } from "@headlessui/react";

export interface CallToAction {
  name: string;
  mobileName: string;
  href: string;
  primary: boolean;
}

interface CallToActionButtonsProps {
  buttons: CallToAction[];
  classes?: string;
}

const CallToActionButtons: React.FC<CallToActionButtonsProps> = ({
  buttons,
  classes,
}) => {
  return (
    <div className={`${classes}`}>
      {buttons?.map((button) => {
        const { name, mobileName, primary } = button;
        const buttonClasses = primary
          ? "bg-indigo-700 text-white"
          : "border-[0.5px] border-solid border-neutral-200 bg-white";
        return (
          <Button
            key={name}
            className={`flex justify-center items-center gap-1.5 px-4 py-2.5 rounded ${buttonClasses}`}
          >
            <span className="hidden md:flex">{name}</span>
            <span className="flex md:hidden">{mobileName}</span>
          </Button>
        );
      })}
    </div>
  );
};

export default CallToActionButtons;
