import SubscribeNewsletter from "$/molecules/Form/SubscribeNewsletter";
import FooterColumns from "./FooterColumns";
import { FooterMultiColumnProps } from "./interfaces";

const FooterMultiColumn: React.FC<FooterMultiColumnProps> = ({
  form,
  columns,
}) => {
  return (
    <div className="flex flex-col gap-12">
      <SubscribeNewsletter {...form} />
      <FooterColumns columns={columns} />
    </div>
  );
};

export default FooterMultiColumn;
