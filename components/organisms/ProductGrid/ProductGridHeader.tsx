import Button from "$/atoms/Button";

interface ProductGridHeaderProps {
  title: string;
  label: string;
}

const ProductGridHeader: React.FC<ProductGridHeaderProps> = ({
  title,
  label,
}) => {
  return (
    <header className="flex justify-between items-center">
      <h2 className="font-semibold text-2xl text-neutral-900 md:text-3xl">
        {title}
      </h2>
      <Button>{label}</Button>
    </header>
  );
};

export default ProductGridHeader;
