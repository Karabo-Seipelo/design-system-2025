import { ColumnTitleAndLinksProps } from "./interfaces";

const ColumnTitleAndLinks: React.FC<ColumnTitleAndLinksProps> = ({
  title,
  items,
}) => {
  return (
    <div className="flex flex-col gap-4">
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
};

export default ColumnTitleAndLinks;
