export interface SpecificationList {
  icon: string;
  text: string;
}

export interface Image {
  src: string;
  alt: string;
}

export interface Specifications {
  name: string;
  title: string;
  description: string;
  image: Image;
  list: SpecificationList[];
}

export interface ProductSpecificationsProps {
  title: string;
  description: string;
  specifications: Specifications[];
}
