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
            const logoId = uniqueId("logo-");
            return (
              <ColumnLogoAndDescription
                key={logoId}
                logo={column.logo}
                description={sanitizedDescription}
              />
            );
          } else if ("title" in column && "items" in column) {
            const titleId = uniqueId("title-");
            return (
              <ColumnTitleAndLinks
                key={titleId}
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
