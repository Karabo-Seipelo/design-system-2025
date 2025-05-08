import { Column, FooterColumnsProps } from "./interfaces";

const FooterColumns: React.FC<FooterColumnsProps> = ({
  className,
  columns,
}) => {
  return (
    <div className={`flex flex-col gap-8 md:flex-row ${className}`}>
      {columns.map(({ title, items, id }: Column) => {
        return (
          <div key={`links-${id}`} className={`flex flex-col gap-4 basis-1/2`}>
            <h3 className="font-normal text-sm text-neutral-500 uppercase">
              {title}
            </h3>
            <ul className="flex flex-col gap-3">
              {items.map(({ text, url, id }) => {
                return (
                  <li key={`${text}-${id}`}>
                    <a
                      href={url}
                      className="text-base text-neutral-600 hover:text-indigo-500 capitalize"
                    >
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FooterColumns;
