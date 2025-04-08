import React from "react";
import "remixicon/fonts/remixicon.css";
import ProductQuantity from "$/molecules/ProductQuantity";
import ProductSize from "$/molecules/ProductSize";
import ProductColors from "$/molecules/ProductColors";
import { ProductDetailsStore } from "$/organisms/ProductDetails/useProductStore";
import Button from "$/atoms/Button";
import { Inventory } from "$/organisms/ProductDetails/fetchProductDetailsAPI";
import { useMediaQuery } from "usehooks-ts";

interface ProductOptionsProps {
  colors: string[];
  sizes: number[];
  quantity: number;
  selected: (state: Partial<ProductDetailsStore>) => void;
  classes?: string;
  inventory: Inventory;
  outOfStock: (string | number)[];
  unavailableSizes: Record<string, (string | number)[]>;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
  colors,
  sizes,
  quantity,
  selected,
  classes = "",
  inventory,
  outOfStock,
  unavailableSizes,
}) => {
  const isMobileAndBelow = useMediaQuery("(max-width: 768px)");
  const disabled = outOfStock.includes(inventory.color);
  const handleAddCart = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Adding to cart:", { data });
    console.log("Selected inventory:", inventory);
  };

  return (
    <form className={classes} onSubmit={handleAddCart}>
      <ProductColors
        name="color"
        colors={colors}
        selected={selected}
        classes="flex flex-col gap-4"
        selectedColor={inventory.color}
        outOfStock={outOfStock}
      />
      <ProductSize
        name="size"
        sizes={sizes}
        selected={selected}
        classes="flex flex-col gap-4"
        inventory={inventory}
        outOfStock={outOfStock}
        unavailableSizes={unavailableSizes}
      />
      <ProductQuantity
        name="quantity"
        classes="flex flex-col gap-4"
        initialQuantity={quantity}
        stock={inventory.stock}
        outOfStock={disabled}
      />

      {disabled && (
        <div className="text-neutral-900 invisible md:visible">
          Sorry, this item is out of stock
        </div>
      )}
      <Button
        type="submit"
        disabled={disabled}
        variant="primary"
        size={isMobileAndBelow ? "xl" : "2xl"}
      >
        Add to cart
      </Button>
    </form>
  );
};

export default ProductOptions;
