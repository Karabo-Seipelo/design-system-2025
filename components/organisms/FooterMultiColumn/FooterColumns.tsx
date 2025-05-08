import ColumnLogoAndDescription from "./ColumnLogoAndDescription";
import ColumnTitleAndLinks from "./ColumnTitleAndLinks";
import { Column, FooterColumnsProps } from "./interfaces";
import DOMPurify from "dompurify";
import { uniqueId } from "lodash";

const FooterColumns: React.FC<FooterColumnsProps> = ({ columns }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8">
        {columns.map((column: Column, index: number) => {
          if ("logo" in column && "description" in column) {
            const sanitizedDescription = DOMPurify.sanitize(
              column?.description ?? "",
            );
            const key = JSON.stringify(column);
            return (
              <ColumnLogoAndDescription
                key={key}
                logo={column.logo}
                description={sanitizedDescription}
              />
            );
          } else if ("title" in column && "items" in column) {
            const key = JSON.stringify(column);
            return (
              <ColumnTitleAndLinks
                key={key}
                title={column.title}
                items={column.items}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FooterColumns;
