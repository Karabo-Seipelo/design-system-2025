import {
  ColumnTitleAndLinksProps,
  Column,
  FooterMultiColumnProps,
  FooterColumnsProps,
} from "./interfaces";
import { uniqueId } from "lodash";

const ColumnTitleAndLinks: React.FC<ColumnTitleAndLinksProps> = ({
  title,
  items,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold text-lg text-neutral-900">{title}</h3>
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={uniqueId("link-")}>
            <a
              href={item.link}
              className="text-sm text-neutral-600 hover:text-indigo-500"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColumnTitleAndLinks;
