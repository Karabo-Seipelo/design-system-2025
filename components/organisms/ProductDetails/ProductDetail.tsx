import Rating from "$/molecules/Rating";

export interface ProductDetailsProps {
  name: string;
  description: string;
}

const ProductDetail: React.FC<ProductDetailsProps> = ({
  name,
  description,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-semibold text-3xl text-neutral-600">{name}</h2>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <span className="font-medium text-3xl text-neutral-600">$76</span>
          <span className="font-medium text-lg text-neutral-400 line-through">
            $95
          </span>
        </div>
        <div className="">
          <div className="inline-block bg-amber-50 rounded-full border border-solid border-amber-200 px-2.5 py-1 text-sm text-center text-amber-700">
            20% off
          </div>
        </div>
        <Rating score={4.1} total={62} classes="flex flex-row gap-2" href="#" />
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default ProductDetail;
