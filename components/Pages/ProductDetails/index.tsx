import { ProductDetailsPageProps } from "../index";
import Page from "$/organisms/Page";
import Section from "$/atoms/Section";
import Nav from "$/organisms/Nav";
import ProductDetails from "$/organisms/ProductDetails";
import ProductSpecifications from "$/organisms/ProductSpecifications";
import ProductGrid from "$/organisms/ProductGrid";
import FooterMultiColumn from "$/organisms/FooterMultiColumn";

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({
  nav,
  productDetails,
  productSpecification,
  collection,
  footer,
}) => {
  return (
    <Page>
      <Nav {...nav} />
      <Section classes="flex flex-col bg-white p-4 lg:p-[96px] gap-12">
        <ProductDetails {...productDetails} />
        <ProductSpecifications {...productSpecification} />
        <ProductGrid {...collection} />
        <FooterMultiColumn {...footer} />
      </Section>
    </Page>
  );
};

export default ProductDetailsPage;
