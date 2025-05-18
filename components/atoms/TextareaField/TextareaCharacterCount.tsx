import classNames from "classnames";
import { TextareaCharacterCountProps } from "./interfaces";

const TextareaCharacterCount: React.FC<TextareaCharacterCountProps> = ({
  count,
  limit,
  className,
  exceedCharacterLimit,
}) => {
  const charClaesses = classNames(
    "font-normal text-sm text-right text-neutral-500",
    className,
    {
      "text-red-500": exceedCharacterLimit,
    },
  );
  console.log("exceedCharacterLimit", exceedCharacterLimit);
  return (
    <span data-testid="char-count" className={charClaesses}>
      {count}/{limit}
    </span>
  );
};

export default TextareaCharacterCount;
