import useCollection from "./useCollection";
import ProductCard from "$/molecules/card/product";
import classNames from "classnames";
import { CollectionGridProps } from "./interfaces";

const CollectionGrid: React.FC<CollectionGridProps> = ({ title }) => {
  const { collection } = useCollection();
  const [primary, ...rest] = collection || [];
  const cardClasses = classNames(
    "px-4 py-12 md:py-[172px] lg:px-24 lg:py-[104px]",
    "flex flex-col gap-8"
  );
  const collectionClasses = classNames("flex flex-col gap-7 md:flex-row");
  const headerClasses = classNames("font-semibold text-3xl text-neutral-900");

  return (
    <div className={cardClasses}>
      <header className={headerClasses}>{title}</header>
      <div className={collectionClasses}>
        {primary && (
          <div className="flex-1">
            <ProductCard
              className="md:h-full"
              key={primary.collectionId}
              {...primary}
              layout={"primary"}
            />
          </div>
        )}
        {rest && (
          <div className="flex-1 flex flex-col gap-7">
            {rest?.map((item) => (
              <div className="flex-1" key={item.description}>
                <ProductCard {...item} layout={"secondary"} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionGrid;
