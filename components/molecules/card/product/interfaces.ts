export interface Collection {
  collectionId: string;
  image_url: string;
  name: string;
  description: string;
}
export interface ProductCardProps extends Collection {
  layout: "primary" | "secondary";
  className?: string;
}
