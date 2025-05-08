import ColumnLogoAndDescription from "./ColumnLogoAndDescription";
import ColumnTitleAndLinks from "./ColumnTitleAndLinks";
import { Column, FooterColumnsProps } from "./interfaces";
import DOMPurify from "dompurify";

const FooterColumns: React.FC<FooterColumnsProps> = ({ columns }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8">
        {columns.map((column: Column, index: number) => {
          if ("logo" in column && "description" in column) {
            const sanitizedDescription = DOMPurify.sanitize(
              column?.description ?? "",
            );
            return (
              <ColumnLogoAndDescription
                key={`logo-${column.id}`}
                logo={column.logo}
                description={sanitizedDescription}
              />
            );
          } else if ("title" in column && "items" in column) {
            return (
              <ColumnTitleAndLinks
                key={`links-${column.id}`}
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
